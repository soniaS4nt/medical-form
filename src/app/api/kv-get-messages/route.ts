import kv from '@vercel/kv'

export async function GET (request: Request) {
  try {
    const keys = await kv.keys('paciente-*')
    const messages = await kv.mget(...keys)

    const mess = JSON.stringify(messages)

    return new Response(mess, { status: 200 })
  } catch (error) {
    console.error(error) // capturar el console y enviarlo a un dashboard
    return new Response('Internal error', { status: 500 })
  }
}
