import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Role } from '@/generated/prisma'

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
      asoVencimento: data.asoVencimento ? new Date(data.asoVencimento) : null,
      asoRestricoes: data.asoRestricoes,

      situacaoGeral: data.situacaoGeral,
      motivoDesligamento: data.motivoDesligamento,

      treinamentos: {
        create: data.treinamentos || []
      },

      certificacoes: {
        create: data.certificacoes || []
      },

      epis: {
        create: data.epis || []
      },

      acidentes: {
        create: data.acidentes || []
      },

      atestados: {
        create: data.atestados || []
      },

      ferias: data.ferias
        ? {
            create: data.ferias
          }
        : undefined
    }
  })

  return NextResponse.json(user)
}



export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const cpf = searchParams.get('cpf')
  const id = searchParams.get('id')

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
        itensViculados: true
      }
    })

    if (!user) {
      return NextResponse.json({ message: 'Usuário não encontrado' }, { status: 404 })
    }

    return NextResponse.json(user)
  }

  const users = await prisma.user.findMany({
    include: {
      treinamentos: true,
      certificacoes: true,
      epis: true,
      acidentes: true,
      atestados: true,
      ferias: true,
      itensViculados: true
    }
  })

  return NextResponse.json(users)
}
