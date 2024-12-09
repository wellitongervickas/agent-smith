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
    {
      name: 'agents',
      collection: 'agents',
      type: 'join',
      on: 'user',
    },
  ],
}
