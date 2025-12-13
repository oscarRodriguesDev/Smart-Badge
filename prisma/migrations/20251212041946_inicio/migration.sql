-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT,
    "endereco" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "cep" TEXT,
    "pais" TEXT,
    "complemento" TEXT,
    "nome" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "setor" TEXT NOT NULL,
    "foto" TEXT,
    "turno" TEXT,
    "areasPermitidas" TEXT[],
    "niveisAcesso" TEXT[],
    "bloqueios" TEXT[],
    "asoStatus" TEXT NOT NULL,
    "asoUltimo" TIMESTAMP(3),
    "asoVencimento" TIMESTAMP(3),
    "asoRestricoes" TEXT,
    "situacaoGeral" TEXT NOT NULL,
    "motivoDesligamento" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Treinamento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "concluidoEm" TIMESTAMP(3),
    "venceEm" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Treinamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificacao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "emitidaEm" TIMESTAMP(3),
    "venceEm" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Certificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Epi" (
    "id" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "retiradoEm" TIMESTAMP(3),
    "devolvido" BOOLEAN NOT NULL DEFAULT false,
    "quantidade" INTEGER NOT NULL DEFAULT 1,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Epi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acidente" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT,
    "afastamento" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Acidente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atestado" (
    "id" TEXT NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "fim" TIMESTAMP(3) NOT NULL,
    "motivo" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Atestado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ferias" (
    "id" TEXT NOT NULL,
    "periodoAquisitivo" TEXT NOT NULL,
    "proximoPeriodo" TEXT,
    "status" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Ferias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_matricula_key" ON "User"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Ferias_userId_key" ON "Ferias"("userId");

-- AddForeignKey
ALTER TABLE "Treinamento" ADD CONSTRAINT "Treinamento_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificacao" ADD CONSTRAINT "Certificacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Epi" ADD CONSTRAINT "Epi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acidente" ADD CONSTRAINT "Acidente_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atestado" ADD CONSTRAINT "Atestado_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ferias" ADD CONSTRAINT "Ferias_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
