-- CreateTable
CREATE TABLE "books" (
    "bookId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "publishedYear" INTEGER NOT NULL,
    "totalCopies" INTEGER NOT NULL,
    "availableCopies" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("bookId")
);

-- CreateTable
CREATE TABLE "members" (
    "memberId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "memberShipDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "members_pkey" PRIMARY KEY ("memberId")
);

-- CreateTable
CREATE TABLE "BorrowRecord" (
    "borrowId" TEXT NOT NULL,
    "borrowDate" TIMESTAMP(3) NOT NULL,
    "returnDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BorrowRecord_pkey" PRIMARY KEY ("borrowId")
);

-- CreateIndex
CREATE UNIQUE INDEX "members_email_key" ON "members"("email");

-- AddForeignKey
ALTER TABLE "BorrowRecord" ADD CONSTRAINT "BorrowRecord_borrowId_fkey" FOREIGN KEY ("borrowId") REFERENCES "books"("bookId") ON DELETE RESTRICT ON UPDATE CASCADE;
