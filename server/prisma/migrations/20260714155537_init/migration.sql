-- CreateTable
CREATE TABLE "ShowreelProject" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "href" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imagePublicId" TEXT NOT NULL,
    "subKey" VARCHAR(255) NOT NULL,
    "delay" VARCHAR(50) NOT NULL DEFAULT 'delay-100',
    "order" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShowreelProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255) NOT NULL,
    "meta" VARCHAR(255) NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GalleryShot" (
    "id" SERIAL NOT NULL,
    "src" TEXT NOT NULL,
    "publicId" TEXT NOT NULL,
    "alt" VARCHAR(255) NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GalleryShot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillSection" (
    "id" SERIAL NOT NULL,
    "section" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "items" JSONB NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SkillSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactInfo" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone1" VARCHAR(50),
    "phone2" VARCHAR(50),
    "availability" TEXT,
    "location" TEXT,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hero" (
    "id" SERIAL NOT NULL,
    "status" VARCHAR(100) NOT NULL,
    "badge" VARCHAR(100) NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "tags" JSONB NOT NULL,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cta" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "engageHref" VARCHAR(500) NOT NULL,
    "cvHref" VARCHAR(500) NOT NULL,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Footer" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "copyright" TEXT NOT NULL,
    "email" VARCHAR(255),
    "phone" VARCHAR(50),
    "vimeoUrl" VARCHAR(500),
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Footer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Translation" (
    "id" SERIAL NOT NULL,
    "key" VARCHAR(255) NOT NULL,
    "language" VARCHAR(10) NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Translation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(10) NOT NULL,
    "label" VARCHAR(100) NOT NULL,
    "flag" VARCHAR(10) NOT NULL,
    "langCode" VARCHAR(10),
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ShowreelProject_order_idx" ON "ShowreelProject"("order");

-- CreateIndex
CREATE INDEX "Experience_category_idx" ON "Experience"("category");

-- CreateIndex
CREATE INDEX "Experience_order_idx" ON "Experience"("order");

-- CreateIndex
CREATE INDEX "GalleryShot_order_idx" ON "GalleryShot"("order");

-- CreateIndex
CREATE INDEX "SkillSection_order_idx" ON "SkillSection"("order");

-- CreateIndex
CREATE INDEX "Translation_key_language_idx" ON "Translation"("key", "language");

-- CreateIndex
CREATE UNIQUE INDEX "Translation_key_language_key" ON "Translation"("key", "language");
