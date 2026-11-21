import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        image: z.string().optional()
      })
    }),
    screens: defineCollection({
      type: 'data',
      source: 'screens.yml',
      schema: z.object({
        flows: z.array(z.object({
          id: z.string(),
          title: z.string(),
          intro: z.string().optional(),
          screens: z.array(z.object({
            id: z.string(),
            source: z.string(),
            state: z.enum(['default', 'empty', 'filled', 'loading', 'success', 'error', 'warning']),
            network: z.enum(['mainnet', 'signet']),
            ark: z.boolean(),
            caption: z.string()
          }))
        }))
      })
    })
  }
})
