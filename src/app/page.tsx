'use client'

import Image from 'next/image'

export default function CrachaMobile() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral-300">
      <div className="w-[360px] h-[720px] bg-white rounded-[32px] shadow-2xl overflow-hidden relative">
        <div className="h-[160px] bg-gradient-to-b from-blue-700 to-blue-500 flex flex-col items-center justify-center">
          <span className="text-white text-xs tracking-[0.4em] font-medium">
            CARTÃO DE
          </span>
          <span className="text-white text-2xl font-bold mt-1">
            IDENTIFICAÇÃO
          </span>
        </div>

        <div className="flex flex-col items-center px-6">
          <div className="-mt-20">
            <div className="w-36 h-36 rounded-full border-[6px] border-white overflow-hidden shadow-lg bg-neutral-200">
              <Image
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
                alt="Foto do usuário"
                width={144}
                height={144}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="mt-4 text-xl font-bold text-neutral-900 text-center">
            João da Silva
          </h1>

          <p className="text-xs uppercase tracking-widest text-neutral-700 mt-1">
            Analista de Sistemas
          </p>

          <div className="w-full mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wide">
                Matrícula
              </p>
              <p className="font-semibold text-neutral-900">
                MAT-001
              </p>
            </div>

            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wide">
                Setores
              </p>
              <p className="font-semibold text-neutral-900">
                TI, ADMIN
              </p>
            </div>
          </div>

          <div className="mt-6 text-neutral-900 font-medium tracking-wider">
            123.456.789-00
          </div>

          <div className="w-full mt-8">
            <div className="h-14 w-full bg-[repeating-linear-gradient(90deg,_#111_0px,_#111_3px,_transparent_3px,_transparent_7px)] rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}
