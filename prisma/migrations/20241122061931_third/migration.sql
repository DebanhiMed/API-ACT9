/*
  Warnings:

  - You are about to drop the `Places` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Places`;

-- CreateTable
CREATE TABLE `Lugar` (
    `lugarid` INTEGER NOT NULL AUTO_INCREMENT,
    `pais` VARCHAR(191) NOT NULL,
    `continente` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`lugarid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
