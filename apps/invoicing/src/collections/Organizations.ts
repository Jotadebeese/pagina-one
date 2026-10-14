import type { CollectionConfig } from 'payload';

export const Organizations: CollectionConfig = {
  slug: 'organizations',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'owner', 'createdAt'],
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'brandColor',
      type: 'text',
      defaultValue: '#0f172a',
      admin: {
        description: 'Hex color for invoice accents (e.g. #0066FF)',
      },
    },
    {
      name: 'abnOrTaxId',
      type: 'text',
      admin: {
        description: 'ABN, Tax ID, or VAT Number to show on invoices',
      },
    },
    {
      name: 'bankDetails',
      type: 'group',
      fields: [
        { name: 'bankName', type: 'text' },
        { name: 'accountName', type: 'text' },
        { name: 'bsbOrRouting', type: 'text' },
        { name: 'accountNumber', type: 'text' },
        { name: 'iban', type: 'text' },
        { name: 'swiftCode', type: 'text' },
        { name: 'additionalInstructions', type: 'textarea' },
      ],
    },
  ],
};
