import kv from '@vercel/kv'

export const revalidate = 1

export const KVViewContacts = async () => {
  const keys = await kv.keys('pacientes-*')
  return (
    <small>
      <span id='count-views'>{keys.length}</span> formularios de pacientes
    </small>
  )
}
