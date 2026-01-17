-- CreateTable
CREATE TABLE "Itens" (
    "id" TEXT NOT NULL,
    "dataEntrada" TIMESTAMP(3) NOT NULL,
    "tipo" TEXT NOT NULL,
    "Equipamento" TEXT NOT NULL,
    "Marca" TEXT NOT NULL,
    "Modelo" TEXT NOT NULL,
    "numeroSerie" TEXT NOT NULL,
    "descricao" TEXT,
    "userId" TEXT NOT NULL,
    "dataSaida" TIMESTAMP(3),

    CONSTRAINT "Itens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Itens" ADD CONSTRAINT "Itens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
