-- CreateEnum
CREATE TYPE "CoplaStatus" AS ENUM ('PUBLICADA', 'OCULTA', 'ELIMINADA', 'PENDIENTE');

-- CreateEnum
CREATE TYPE "ReportReason" AS ENUM ('SPAM', 'OFENSIVO', 'ACOSO', 'COPYRIGHT', 'OTRO');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT,
    "image" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'Perú',
    "region" TEXT NOT NULL,
    "province" TEXT,
    "district" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Copla" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT,
    "text" TEXT NOT NULL,
    "authorName" TEXT,
    "status" "CoplaStatus" NOT NULL DEFAULT 'PENDIENTE',
    "language" TEXT,
    "isSpicy" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "locationId" TEXT,

    CONSTRAINT "Copla_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoplaTag" (
    "coplaId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "CoplaTag_pkey" PRIMARY KEY ("coplaId","tagId")
);

-- CreateTable
CREATE TABLE "CoplaLike" (
    "coplaId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CoplaLike_pkey" PRIMARY KEY ("coplaId","userId")
);

-- CreateTable
CREATE TABLE "CoplaBookmark" (
    "coplaId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CoplaBookmark_pkey" PRIMARY KEY ("coplaId","userId")
);

-- CreateTable
CREATE TABLE "Coleccion" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Coleccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ColeccionItem" (
    "coleccionId" TEXT NOT NULL,
    "coplaId" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ColeccionItem_pkey" PRIMARY KEY ("coleccionId","coplaId")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "reason" "ReportReason" NOT NULL,
    "details" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "coplaId" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE INDEX "Location_region_idx" ON "Location"("region");

-- CreateIndex
CREATE INDEX "Location_region_province_district_idx" ON "Location"("region", "province", "district");

-- CreateIndex
CREATE UNIQUE INDEX "Copla_slug_key" ON "Copla"("slug");

-- CreateIndex
CREATE INDEX "Copla_status_createdAt_idx" ON "Copla"("status", "createdAt");

-- CreateIndex
CREATE INDEX "Copla_locationId_idx" ON "Copla"("locationId");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE INDEX "CoplaLike_userId_createdAt_idx" ON "CoplaLike"("userId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Coleccion_slug_key" ON "Coleccion"("slug");

-- CreateIndex
CREATE INDEX "Coleccion_userId_createdAt_idx" ON "Coleccion"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "ColeccionItem_coleccionId_order_idx" ON "ColeccionItem"("coleccionId", "order");

-- CreateIndex
CREATE INDEX "Report_coplaId_createdAt_idx" ON "Report"("coplaId", "createdAt");

-- AddForeignKey
ALTER TABLE "Copla" ADD CONSTRAINT "Copla_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Copla" ADD CONSTRAINT "Copla_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoplaTag" ADD CONSTRAINT "CoplaTag_coplaId_fkey" FOREIGN KEY ("coplaId") REFERENCES "Copla"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoplaTag" ADD CONSTRAINT "CoplaTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoplaLike" ADD CONSTRAINT "CoplaLike_coplaId_fkey" FOREIGN KEY ("coplaId") REFERENCES "Copla"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoplaLike" ADD CONSTRAINT "CoplaLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoplaBookmark" ADD CONSTRAINT "CoplaBookmark_coplaId_fkey" FOREIGN KEY ("coplaId") REFERENCES "Copla"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoplaBookmark" ADD CONSTRAINT "CoplaBookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coleccion" ADD CONSTRAINT "Coleccion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColeccionItem" ADD CONSTRAINT "ColeccionItem_coleccionId_fkey" FOREIGN KEY ("coleccionId") REFERENCES "Coleccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColeccionItem" ADD CONSTRAINT "ColeccionItem_coplaId_fkey" FOREIGN KEY ("coplaId") REFERENCES "Copla"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_coplaId_fkey" FOREIGN KEY ("coplaId") REFERENCES "Copla"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
