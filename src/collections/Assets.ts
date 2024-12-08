import type { CollectionConfig } from 'payload'

export const Assets: CollectionConfig = {
  slug: 'assets',
  dbName: 'assets',
  typescript: {
    interface: 'Assets',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'symbol',
      type: 'text',
      required: true,
    },
    {
      name: 'decimals',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'native',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'address',
      type: 'relationship',
      relationTo: 'contracts',
      hasMany: true,
    },
  ],
}
