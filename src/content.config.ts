import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    year: z.number(),
    status: z.string(),
    featured: z.boolean().default(false),
    thumbnail: z.string().optional(),
    liveUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    outcomes: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
