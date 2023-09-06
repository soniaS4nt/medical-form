'use client'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { toast } from 'sonner'

export const Form = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
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
    } = Object.fromEntries(formData.entries())

    // a llamar a nuestra querida API
    fetch('/api/kv-send-message', {
      method: 'POST',
      body: JSON.stringify({
        rut,
        names,
        lastNames,
        address,
        city,
        phoneNumber,
        email,
        birth,
        civilStatus
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      toast.success('Mensaje enviado con éxito')
      form.reset()

      // es un poco hack, pero funciona!
      const $view = document.querySelector('#count-views')
      if ($view != null) $view.innerHTML = `${Number($view.textContent) + 1}`
    }).catch(() => {
      toast.error('Hubo un error al enviar el mensaje')
    })
  }

  return (
    <form onSubmit={handleSubmit} className='text-left min-w-[400px] p-8 space-y-8 border rounded border-white/10'>

      <Input
        name='names'
        id='names'
        label='Tu Nombre:'
        type='text'
        placeholder=''
      />
      <Input
        name='lastNames'
        id='lastNames'
        label='Tu Nombre:'
        type='text'
        placeholder=''
      />
      <Input
        name='email'
        id='email'
        label='Tu Email:'
        type='email'
        placeholder='example@email.com'
      />
      <Input
        name='phoneNumber'
        id='phoneNumber'
        label='Tu telefono:'
        type='text'
        placeholder=''
      />
      <Input
        name='rut'
        id='rut'
        label='Rut:'
        type='text'
        placeholder=''
      />
      <Input
        name='address'
        id='address'
        label='Direccion:'
        type='text'
        placeholder=''
      />
      <Input
        name='city'
        id='city'
        label='ciudad:'
        type='text'
        placeholder=''
      />
      <Input
        name='birth'
        id='birth'
        label='fecha de naciemiento:'
        type='text'
        placeholder=''
      />
      <Input
        name='civilStatus'
        id='civilStatus'
        label='estado civil:'
        type='text'
        placeholder=''
      />
      <Button>Enviar mensaje</Button>
    </form>
  )
}
