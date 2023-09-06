import { createPool } from '@vercel/postgres'

// `sql` is already set up and ready to go; no further action needed

// Need to customize your config?:
const pool = createPool({
  /* config */
  connectionString: process.env.POSTGRES_URL

})

export async function POST (request: Request) {
  let client
  try {
    client = await pool.connect()
  } catch (error) {
    console.error(error)
    return new Response('Internal error', { status: 500 })
  }

  const {
    rut,
    names,
    lastNames,
    address,
    city,
    phoneNumber,
    email,
    birth,
    civilStatus
  } = await request.json()

  /* if (
    names == null ||
    lastNames == null ||
    email == null ||
    rut == null ||
    address == null
  ) {
    return new Response('Please provide all fields.', { status: 400 })
  } */

  try {
    const { rows, fields } =
      await client.sql`INSERT INTO pacientes (rut, nombres, apellidos, direccion, ciudad, telefono, email, fecha_nacimiento, estado_civil) 
    VALUES (${rut}, ${names}, ${lastNames}, ${address}, ${city}, ${phoneNumber}, ${email}, ${birth}, ${civilStatus})`

    console.log(rows, fields)

    return new Response('Contact saved!', { status: 200 })
  } catch (error) {
    console.error(error) // capturar el console y enviarlo a un dashboard
    return new Response('Internal error', { status: 500 })
  }
}
