import type { CollectionConfig } from 'payload'
import { generatePrivateKey, privateKeyToAddress } from 'viem/accounts'

export const Wallets: CollectionConfig = {
  slug: 'wallets',
  dbName: 'wallets',
  typescript: {
    interface: 'Wallets',
  },
  admin: {
    useAsTitle: 'name',
  },
  hooks: {
    beforeOperation: [
      ({ args, operation }) => {
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
      name: 'agent',
      type: 'relationship',
      relationTo: 'agents',
      hasMany: false,
      required: true,
    },
  ],
}
