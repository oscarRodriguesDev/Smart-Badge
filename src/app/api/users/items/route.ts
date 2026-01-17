import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


//listar itens vinculados a um usuario
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
 
    const id = searchParams.get('userId')
    const user = await prisma.user.findUnique({
        where: { id: id! },
        include: {
            itensViculados: true
        }
    })
    if (!user) {
        return NextResponse.json({ message: 'Usuário nao encontrado' }, { status: 404 })
    }
    return NextResponse.json(user.itensViculados)
}
   


//criar item vinculado a um usuario
export async function POST(req: Request) {
  const body = await req.json()

  const {
    userId,
    nome,
    tipo,
    Equipamento,
    Marca,
    Modelo,
    numeroSerie,
    descricao
  } = body

  if (!userId || !nome) {
    return NextResponse.json(
      { message: "Parâmetros obrigatórios ausentes (userId, nome)" },
      { status: 400 }
    )
  }

  const userExists = await prisma.user.findUnique({
    where: { id: userId }
  })

  if (!userExists) {
    return NextResponse.json(
      { message: "Usuário nao encontrado" },
      { status: 404 }
    )
  }

  const item = await prisma.itens.create({
    data: {
      nome,
      tipo: tipo ?? "PADRAO",
      Equipamento: Equipamento ?? "NAO_INFORMADO",
      Marca: Marca ?? "NAO_INFORMADO",
      Modelo: Modelo ?? "NAO_INFORMADO",
      numeroSerie: numeroSerie ?? "SEM_SERIE",
      descricao: descricao ?? null,
      status: "ATIVO",
      dataEntrada: new Date(),
      dataSaida: null,
      userId
    }
  })

  return NextResponse.json(item, { status: 201 })
}


//deletar itens por id
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url)
  const itemId = searchParams.get("itemId")

  if (!itemId) {
    return NextResponse.json(
      { error: "Parâmetro id é obrigatório" },
      { status: 400 }
    )
  }

  const itemExists = await prisma.itens.findUnique({
    where: { id: itemId }
  })

  if (!itemExists) {
    return NextResponse.json(
      { error: "Item não encontrado" },
      { status: 404 }
    )
  }

  await prisma.itens.delete({
    where: { id: itemId }
  })

  return NextResponse.json({ removido: true })
}
