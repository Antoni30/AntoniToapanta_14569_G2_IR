import { useState } from 'react'
import './ContactForm.css'

export function ContactForm() {
  const [messageClassName, setMessageClassName] = useState('hidden')

  const formStates = {
    'success': 'Mensaje enviado correctamente',
    'fail': 'No se pudo enviar el mensaje'
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    const emptyFields = Object.values(data).some(field => !field.length) ? 1 : 0
    setMessageClassName(Object.keys(formStates)[emptyFields])

    setTimeout(() => {
      setMessageClassName('hidden')
    }, 1500);

  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__input">
        <label htmlFor="firstname">Nombre</label>
        <input type="text" id="firstname" name="firstname" placeholder='john' required />
      </div>
      <div className="form__input">
        <label htmlFor="lastname">Apellido</label>
        <input type="text" id="lastname" name="lastname" placeholder='doe' required />
      </div>
      <div className="form__input">
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" name="email" placeholder='johndoe@email.com' required />
      </div>
      <div className="form__input">
        <label htmlFor="telephone">Teléfono</label>
        <input type="tel" minLength={10} maxLength={10} id="telephone" name="telephone" placeholder='0912345678' pattern='[0-9]{10,10}' required />
      </div>
      <div className='form__submit'>
        <button className="button" type='submit'>Enviar</button>
        <p className={`form__message form__message--${messageClassName}`}>
          {

            formStates[messageClassName]
          }
        </p>
      </div>
    </form>
  )
}