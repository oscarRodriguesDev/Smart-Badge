import { prisma } from "@/lib/prisma"


export async function blockUserForASO(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      asoVencimento: true,
    },
  })

  if (!user || !user.asoVencimento) return null

  const agora = new Date()
  const emAtraso = agora > user.asoVencimento

  if (emAtraso) {
    return await prisma.user.update({
      where: { id: userId },
      data: {
        asoStatus: "EM_ATRASO",
        situacaoGeral: "INATIVO",
        bloqueios: ["EM_ATRASO"],
      },
    })
  }

  return await prisma.user.update({
    where: { id: userId },
    data: {
      asoStatus: "EM_DIA",
      situacaoGeral: "ATIVO",
      bloqueios: ["EM_DIA"],
    },
  })
}

