import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  dbName: 'users',
  typescript: {
    interface: 'Users',
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'wallets',
      collection: 'wallets',
      type: 'join',
      on: 'user',
    },
  ],
}
