'use-client'
import { Buscador } from '@/components/Buscador'
import { Form } from '@/components/Form'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className={`${inter.className} flex flex-col min-h-screen p-24`}>
      <h2 className='mb-12 text-4xl font-bold tracking-tight text-center'>Formulario de Ingreso</h2>
      <div className='flex flex-col max-w-3xl mx-auto text-center'>
        <Buscador />
        <Form />
      </div>

    </main>
  )
}
