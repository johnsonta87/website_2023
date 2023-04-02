// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const servicesCollection = defineCollection({
  schema: z.object({
    description: z.string(),
    title: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

const workCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    category: z.string(),
    description: z.string(),
    title: z.string(),
    url: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'services': servicesCollection,
  'work': workCollection,
};
