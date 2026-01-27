import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { Role } from "@/generated/prisma"
import { blockUserForASO } from "@/hooks/bloqueio_Aso"



/**
 * @swagger
 * /api/users/profile:
 *   post:
 *     summary: Cria um novo usuário
 *     tags:
 *       - Usuários
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cpf
 *               - email
 *               - senha
 *               - nome
 *               - matricula
 *               - role
 *             properties:
 *               cpf:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               nome:
 *                 type: string
 *               matricula:
 *                 type: string
 *               cargo:
 *                 type: string
 *               setor:
 *                 type: string
 *               telefone:
 *                 type: string
 *                 nullable: true
 *               endereco:
 *                 type: string
 *                 nullable: true
 *               cidade:
 *                 type: string
 *                 nullable: true
 *               estado:
 *                 type: string
 *                 nullable: true
 *               cep:
 *                 type: string
 *                 nullable: true
 *               pais:
 *                 type: string
 *                 nullable: true
 *               complemento:
 *                 type: string
 *                 nullable: true
 *               turno:
 *                 type: string
 *                 nullable: true
 *               urlPhoto:
 *                 type: string
 *                 nullable: true
 *               role:
 *                 type: string
 *               areasPermitidas:
 *                 type: array
 *                 items:
 *                   type: string
 *               niveisAcesso:
 *                 type: array
 *                 items:
 *                   type: string
 *               bloqueios:
 *                 type: array
 *                 items:
 *                   type: string
 *               asoStatus:
 *                 type: string
 *               asoUltimo:
 *                 type: string
 *                 format: date-time
 *                 nullable: true
 *               asoVencimento:
 *                 type: string
 *                 format: date-time
 *                 nullable: true
 *               asoRestricoes:
 *                 type: string
 *                 nullable: true
 *               situacaoGeral:
 *                 type: string
 *               motivoDesligamento:
 *                 type: string
 *                 nullable: true
 *               treinamentos:
 *                 type: array
 *                 items:
 *                   type: object
 *               certificacoes:
 *                 type: array
 *                 items:
 *                   type: object
 *               epis:
 *                 type: array
 *                 items:
 *                   type: object
 *               acidentes:
 *                 type: array
 *                 items:
 *                   type: object
 *               atestados:
 *                 type: array
 *                 items:
 *                   type: object
 *               ferias:
 *                 type: object
 *                 nullable: true
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso
 *
 *   get:
 *     summary: Lista usuários ou busca por id ou cpf
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: cpf
 *         schema:
 *           type: string
 *         required: false
 *     responses:
 *       200:
 *         description: Lista de usuários ou usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 */


export async function POST(req: Request) {
  const data = await req.json()

  const user = await prisma.user.create({
    data: {
      cpf: data.cpf,
      urlPhoto: data.urlPhoto || null,
      email: data.email,
      senha: data.senha,
      telefone: data.telefone,
      endereco: data.endereco,
      cidade: data.cidade,
      estado: data.estado,
      cep: data.cep,
      pais: data.pais,
      complemento: data.complemento,
      nome: data.nome,
      matricula: data.matricula,
      cargo: data.cargo,
      setor: data.setor,
      foto: data.foto,
      turno: data.turno,

      role: data.role as Role,

      areasPermitidas: data.areasPermitidas || [],
      niveisAcesso: data.niveisAcesso || [],
      bloqueios: data.bloqueios || [],

      asoStatus: data.asoStatus,
      asoUltimo: data.asoUltimo ? new Date(data.asoUltimo) : null,
      asoVencimento: data.asoVencimento
        ? new Date(data.asoVencimento)
        : null,
      asoRestricoes: data.asoRestricoes,

      situacaoGeral: data.situacaoGeral,
      motivoDesligamento: data.motivoDesligamento,

      treinamentos: {
        create: data.treinamentos || [],
      },

      certificacoes: {
        create: data.certificacoes || [],
      },

      epis: {
        create: data.epis || [],
      },

      acidentes: {
        create: data.acidentes || [],
      },

      atestados: {
        create: data.atestados || [],
      },

      ferias: data.ferias
        ? {
            create: data.ferias,
          }
        : undefined,
    },
  })

  return NextResponse.json(user)
}




/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Busca usuários ou um usuário específico
 *     description: |
 *       Retorna todos os usuários cadastrados ou um usuário específico
 *       quando informado o id ou cpf.  
 *       Ao buscar um usuário específico, o sistema valida automaticamente
 *       o vencimento do ASO e pode alterar a situação geral do colaborador.
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: false
 *         description: ID do usuário
 *       - in: query
 *         name: cpf
 *         schema:
 *           type: string
 *         required: false
 *         description: CPF do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado ou lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - type: object
 *                 - type: array
 *                   items:
 *                     type: object
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno no servidor
 */

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const cpf = searchParams.get("cpf")
  const id = searchParams.get("id")

  if (id || cpf) {
    const user = await prisma.user.findUnique({
      where: id ? { id } : { cpf: cpf! },
      include: {
        treinamentos: true,
        certificacoes: true,
        epis: true,
        acidentes: true,
        atestados: true,
        ferias: true,
        itensViculados: true,
      },
    })

    if (!user) {
      return NextResponse.json(
        { message: "Usuário não encontrado" },
        { status: 404 }
      )
    }

    await blockUserForASO(user.id)

    const updatedUser = await prisma.user.findUnique({
      where: { id: user.id },
      include: {
        treinamentos: true,
        certificacoes: true,
        epis: true,
        acidentes: true,
        atestados: true,
        ferias: true,
        itensViculados: true,
      },
    })

    return NextResponse.json(updatedUser)
  }

  const users = await prisma.user.findMany({
    include: {
      treinamentos: true,
      certificacoes: true,
      epis: true,
      acidentes: true,
      atestados: true,
      ferias: true,
      itensViculados: true,
    },
  })

  return NextResponse.json(users)
}
