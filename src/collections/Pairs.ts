import type { CollectionConfig, FilterOptionsProps } from 'payload'
import { Pairs as IPairs } from '@/payload-types'

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
      async filterOptions({ siblingData }: FilterOptionsProps<IPairs>) {
        return (siblingData as IPairs)?.token2
          ? {
              id: {
                not_equals: (siblingData as IPairs)?.token2,
              },
            }
          : true
      },
    },
    {
      name: 'token2',
      type: 'relationship',
      relationTo: 'assets',
      hasMany: false,
      required: true,
      async filterOptions({ siblingData }: FilterOptionsProps<IPairs>) {
        return (siblingData as IPairs)?.token1
          ? {
              id: {
                not_equals: (siblingData as IPairs)?.token1,
              },
            }
          : true
      },
    },
  ],
}
