import type { CollectionConfig } from 'payload'
import { generatePrivateKey, privateKeyToAddress } from 'viem/accounts'

export const Agents: CollectionConfig = {
  slug: 'agents',
  dbName: 'agents',
  typescript: {
    interface: 'Agents',
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
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
      required: true,
    },
    {
      name: 'wallet',
      collection: 'wallets',
      type: 'join',
      on: 'agent',
    },
  ],
}
