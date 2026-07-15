import { z } from "zod";

export const createShowreelSchema = z.object({
  title: z.string().min(1).max(255),
  href: z.string().min(1).max(500),
  imageUrl: z.string().min(1).max(500),
  imagePublicId: z.string().min(1).max(500),
  subKey: z.string().min(1).max(255),
  delay: z.string().default("delay-100"),
  order: z.number().int().nonnegative().default(0),
  active: z.boolean().default(true),
});

export const updateShowreelSchema = createShowreelSchema.partial();

export const createExperienceSchema = z.object({
  title: z.string().min(1).max(255),
  role: z.string().min(1).max(255),
  meta: z.string().min(1).max(255),
  category: z.enum(["cinema", "theatre"]),
  order: z.number().int().nonnegative().default(0),
  active: z.boolean().default(true),
});

export const updateExperienceSchema = createExperienceSchema.partial();

export const createGallerySchema = z.object({
  src: z.string().min(1).max(500),
  publicId: z.string().min(1).max(500),
  alt: z.string().min(1).max(255),
  order: z.number().int().nonnegative().default(0),
  active: z.boolean().default(true),
});

export const updateGallerySchema = createGallerySchema.partial();

export const createSkillSchema = z.object({
  section: z.string().min(1).max(255),
  title: z.string().min(1).max(255),
  items: z.array(z.string()),
  order: z.number().int().nonnegative().default(0),
  active: z.boolean().default(true),
});

export const updateSkillSchema = createSkillSchema.partial();

export const createHeroSchema = z.object({
  status: z.string().min(1).max(100),
  badge: z.string().min(1).max(100),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  tags: z.array(z.any()),
});

export const updateHeroSchema = createHeroSchema.partial();

export const createCtaSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  engageHref: z.string().min(1).max(500),
  cvHref: z.string().min(1).max(500),
});

export const updateCtaSchema = createCtaSchema.partial();

export const createFooterSchema = z.object({
  name: z.string().min(1).max(255),
  copyright: z.string().min(1),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  vimeoUrl: z.string().max(500).optional().or(z.literal("")),
});

export const updateFooterSchema = createFooterSchema.partial();

export const createContactSchema = z.object({
  email: z.string().email(),
  phone1: z.string().optional().or(z.literal("")),
  phone2: z.string().optional().or(z.literal("")),
  availability: z.string().optional().or(z.literal("")),
  location: z.string().optional().or(z.literal("")),
});

export const updateContactSchema = createContactSchema.partial();

export const createTranslationSchema = z.object({
  key: z.string().min(1).max(255),
  language: z.string().min(2).max(10),
  value: z.string().min(1),
});

export const updateTranslationSchema = createTranslationSchema.partial();

export const createLanguageSchema = z.object({
  code: z.string().min(2).max(10),
  label: z.string().min(1).max(100),
  flag: z.string().min(1).max(10),
  langCode: z.string().min(2).max(10).optional(),
  order: z.number().int().nonnegative().default(0),
});

export const updateLanguageSchema = createLanguageSchema.partial();
