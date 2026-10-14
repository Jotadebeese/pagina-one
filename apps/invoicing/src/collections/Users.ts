import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'role', 'createdAt'],
  },
  auth: true,
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
      name: 'role',
      type: 'select',
      defaultValue: 'contractor',
      required: true,
      options: [
        { label: 'Super Admin', value: 'admin' },
        { label: 'Contractor / Freelancer', value: 'contractor' },
        { label: 'Client / Business', value: 'client' },
      ],
    },
    {
      name: 'defaultHourlyRate',
      type: 'number',
      admin: {
        description: 'Default hourly rate in preferred currency (e.g. 100)',
      },
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
  ],
};
