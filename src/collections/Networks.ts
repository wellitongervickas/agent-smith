import type { CollectionConfig } from 'payload'

export const Networks: CollectionConfig = {
  slug: 'networks',
  dbName: 'networks',
  typescript: {
    interface: 'Networks',
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
      name: 'chainId',
      type: 'number',
      required: true,
    },
    {
      name: 'testnet',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'contracts',
      collection: 'contracts',
      type: 'join',
      on: 'networks',
    },
    {
      name: 'rpcs',
      collection: 'rpcs',
      type: 'join',
      on: 'networks',
    },
  ],
}
