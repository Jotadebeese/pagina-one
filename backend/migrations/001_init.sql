-- 001_init.sql: PostgreSQL schema for Pagina Invoicing Ledger

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    default_hourly_rate NUMERIC(10, 2) DEFAULT 0.00,
    currency VARCHAR(3) DEFAULT 'USD',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS clients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    company_name TEXT NOT NULL,
    contact_name TEXT,
    email TEXT NOT NULL,
    address TEXT,
    default_hourly_rate NUMERIC(10, 2),
    currency VARCHAR(3) DEFAULT 'USD',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS time_entries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE RESTRICT,
    date DATE NOT NULL,
    hours NUMERIC(4, 2) NOT NULL CHECK (hours > 0 AND hours <= 24),
    hourly_rate NUMERIC(10, 2) NOT NULL,
    description TEXT NOT NULL,
    project TEXT,
    billable BOOLEAN DEFAULT TRUE,
    invoiced BOOLEAN DEFAULT FALSE,
    invoice_id UUID,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS invoices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE RESTRICT,
    invoice_number TEXT NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'draft',
    issue_date DATE NOT NULL,
    due_date DATE NOT NULL,
    period_start DATE,
    period_end DATE,
    currency VARCHAR(3) NOT NULL DEFAULT 'USD',
    subtotal NUMERIC(12, 2) NOT NULL,
    tax_rate NUMERIC(5, 2) DEFAULT 0.00,
    tax_amount NUMERIC(12, 2) DEFAULT 0.00,
    total_amount NUMERIC(12, 2) NOT NULL,
    notes TEXT,
    pdf_path TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(user_id, invoice_number)
);

CREATE TABLE IF NOT EXISTS invoice_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
    time_entry_id UUID REFERENCES time_entries(id) ON DELETE SET NULL,
    description TEXT NOT NULL,
    date DATE,
    hours NUMERIC(4, 2) NOT NULL,
    rate NUMERIC(10, 2) NOT NULL,
    amount NUMERIC(12, 2) NOT NULL
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_time_entries_user_invoiced ON time_entries(user_id, invoiced);
CREATE INDEX IF NOT EXISTS idx_invoices_user_status ON invoices(user_id, status);
