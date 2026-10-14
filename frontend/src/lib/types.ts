export type Currency = 'USD' | 'AUD' | 'EUR' | 'GBP' | 'CAD';

export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'void';

export interface User {
  id: string;
  name: string;
  email: string;
  defaultHourlyRate: number;
  currency: Currency;
  businessName?: string;
  taxId?: string; // ABN / VAT / EIN
  bankDetails?: {
    bankName: string;
    accountName: string;
    accountNumber: string;
    routingNumber?: string;
    swiftBic?: string;
    iban?: string;
  };
}

export interface Client {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  address?: string;
  defaultHourlyRate: number;
  currency: Currency;
  createdAt: string;
}

export interface TimeEntry {
  id: string;
  clientId: string;
  clientName: string;
  date: string; // YYYY-MM-DD
  hours: number;
  hourlyRate: number;
  description: string;
  project?: string;
  billable: boolean;
  invoiced: boolean;
  invoiceId?: string;
  createdAt: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  date?: string;
  hours: number;
  rate: number;
  amount: number;
  timeEntryId?: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  clientEmail: string;
  clientAddress?: string;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  periodStart?: string;
  periodEnd?: string;
  currency: Currency;
  items: InvoiceItem[];
  subtotal: number;
  taxRate: number; // e.g. 10 for 10%
  taxAmount: number;
  totalAmount: number;
  notes?: string;
  pdfUrl?: string;
  createdAt: string;
}
