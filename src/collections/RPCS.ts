import type { CollectionConfig } from 'payload'

export const RPCS: CollectionConfig = {
  slug: 'rpcs',
  dbName: 'rpcs',
  typescript: {
    interface: 'RPCS',
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
      name: 'URL',
      label: 'URL',
      type: 'text',
      required: true,
    },
    {
      name: 'networks',
      type: 'relationship',
      relationTo: 'networks',
      hasMany: true,
      required: true,
    },
  ],
}
