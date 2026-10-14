import type { CollectionConfig } from 'payload';

export const Clients: CollectionConfig = {
  slug: 'clients',
  admin: {
    useAsTitle: 'companyName',
    defaultColumns: ['companyName', 'contactName', 'email', 'createdAt'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      required: true,
    },
    {
      name: 'contactName',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'address',
      type: 'textarea',
    },
    {
      name: 'defaultHourlyRate',
      type: 'number',
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
      name: 'contractor',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
  ],
};
