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
  hooks: {
    beforeOperation: [
      ({ args, operation }) => {
        console.log('args', args)
        if (operation === 'create') {
          const privateKey = generatePrivateKey()
          const address = privateKeyToAddress(privateKey)

          args.data = {
            ...args.data,
            privateKey,
            address,
          }
        }

        return args
      },
    ],
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
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'privateKey',
      type: 'text',
      admin: {
        readOnly: true,
      },
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
