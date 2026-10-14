import type { CollectionConfig } from 'payload';

export const TimeEntries: CollectionConfig = {
  slug: 'time-entries',
  admin: {
    useAsTitle: 'description',
    defaultColumns: ['date', 'hours', 'client', 'contractor', 'invoiced'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'yyyy-MM-dd',
        },
      },
    },
    {
      name: 'hours',
      type: 'number',
      required: true,
      min: 0.1,
      max: 24,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'project',
      type: 'text',
      admin: {
        description: 'Optional feature or project name (e.g. Backend API, Mobile App)',
      },
    },
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'clients',
      required: true,
    },
    {
      name: 'contractor',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'hourlyRate',
      type: 'number',
      required: true,
    },
    {
      name: 'billable',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'invoiced',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'invoice',
      type: 'relationship',
      relationTo: 'invoices',
    },
  ],
};
