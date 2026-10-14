import type { CollectionConfig } from 'payload';

export const Invoices: CollectionConfig = {
  slug: 'invoices',
  admin: {
    useAsTitle: 'invoiceNumber',
    defaultColumns: ['invoiceNumber', 'client', 'totalAmount', 'status', 'issueDate'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'invoiceNumber',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'e.g. INV-2026-001',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      required: true,
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Sent', value: 'sent' },
        { label: 'Paid', value: 'paid' },
        { label: 'Void', value: 'void' },
      ],
    },
    {
      name: 'contractor',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'clients',
      required: true,
    },
    {
      name: 'organization',
      type: 'relationship',
      relationTo: 'organizations',
    },
    {
      name: 'issueDate',
      type: 'date',
      required: true,
    },
    {
      name: 'dueDate',
      type: 'date',
      required: true,
    },
    {
      name: 'periodStart',
      type: 'date',
    },
    {
      name: 'periodEnd',
      type: 'date',
    },
    {
      name: 'currency',
      type: 'select',
      defaultValue: 'USD',
      options: [
        { label: 'USD ($)', value: 'USD' },
        { label: 'AUD ($)', value: 'AUD' },
        { label: 'EUR (€)', value: 'EUR' },
        { label: 'GBP (£)', value: 'GBP' },
        { label: 'CAD ($)', value: 'CAD' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        { name: 'description', type: 'text', required: true },
        { name: 'date', type: 'date' },
        { name: 'hours', type: 'number', required: true },
        { name: 'rate', type: 'number', required: true },
        { name: 'amount', type: 'number', required: true },
      ],
    },
    {
      name: 'subtotal',
      type: 'number',
      required: true,
    },
    {
      name: 'taxRate',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Tax percentage (e.g. 10 for 10% GST/VAT)',
      },
    },
    {
      name: 'taxAmount',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'totalAmount',
      type: 'number',
      required: true,
    },
    {
      name: 'notes',
      type: 'textarea',
    },
    {
      name: 'pdfUrl',
      type: 'text',
      admin: {
        description: 'Hosted link to generated immutable invoice PDF',
      },
    },
  ],
};
