import type { CollectionConfig } from 'payload'

export const Contracts: CollectionConfig = {
  slug: 'contracts',
  dbName: 'contracts',
  typescript: {
    interface: 'Contracts',
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
      name: 'address',
      type: 'text',
      required: true,
    },
    {
      name: 'networks',
      type: 'relationship',
      relationTo: 'networks',
      required: true,
      hasMany: true,
    },
  ],
}
