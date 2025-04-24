import { defineCollection, z } from 'astro:content';

const deepseekCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		slug: z.string().optional(),
	}),
});


const llamaCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		slug: z.string().optional(),
	}),
});

const qwenCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		slug: z.string().optional(),
	}),
});

const generalCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		slug: z.string().optional(),
	}),
});


const mathstralCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		slug: z.string().optional(),
	}),
});

export const collections = {
	'deepseek': deepseekCollection,
	'llama': llamaCollection,
	'qwen': qwenCollection,
	'general': generalCollection,
	'mathstral': mathstralCollection,
} as const;
