import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      tags: z.array(
        z.enum(['Embedded', 'PCB', 'Automation', 'Robotics', 'Manufacturing', 'Aerospace'])
      ),
      tools: z.array(z.string()),
      status: z.enum(['in-progress', 'complete']).default('complete'),
      order: z.number(),
      draft: z.boolean().default(false),
      role: z.string(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
          })
        )
        .optional(),
    }),
});

export const collections = { projects };
