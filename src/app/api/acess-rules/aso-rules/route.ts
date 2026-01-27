import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { blockUserForASO } from "@/hooks/bloqueio_Aso"

export async function PUT(req: Request) {
  try {
    const params = await req.json()
    console.log("entrando no put")

    const user = await prisma.user.findUnique({
      where: { id: params.id },
      select: { id: true },
    })

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 }
      )
    }

    const result = await blockUserForASO(user.id)

    if (result) {
      return NextResponse.json(result, { status: 200 })
    }

    return NextResponse.json(
      { message: "ASO não está vencido. Nenhuma alteração realizada." },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: "Erro ao atualizar situação geral" },
      { status: 500 }
    )
  }
}
