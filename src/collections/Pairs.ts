import type { CollectionConfig } from 'payload'
import { generatePrivateKey, privateKeyToAddress } from 'viem/accounts'

export const Pairs: CollectionConfig = {
  slug: 'pairs',
  dbName: 'pairs',
  typescript: {
    interface: 'Pairs',
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
      name: 'token1',
      type: 'relationship',
      relationTo: 'assets',
      hasMany: false,
      required: true,
    },
    {
      name: 'token2',
      type: 'relationship',
      relationTo: 'assets',
      hasMany: false,
      required: true,
    },
  ],
}
