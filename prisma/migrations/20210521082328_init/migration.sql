-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "price" TEXT,
    "ingredients" TEXT,
    "active" TEXT,
    "description" TEXT,

    PRIMARY KEY ("id")
);
