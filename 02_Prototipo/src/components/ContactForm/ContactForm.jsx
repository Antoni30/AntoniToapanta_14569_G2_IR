import { useState } from 'react'
import './ContactForm.css'

export function ContactForm() {
  const [messageClassName, setMessageClassName] = useState('hidden')

  const formStates = {
    'success': 'Mensaje enviado correctamente',
    'fail': 'Formulario incompleto'
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
        <input type="text" id="firstname" name="firstname" placeholder='john'/>
      </div>
      <div className="form__input">
        <label htmlFor="lastname">Apellido</label>
        <input type="text" id="lastname" name="lastname" placeholder='doe' />
      </div>
      <div className="form__input">
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" name="email" placeholder='johndoe@email.com' />
      </div>
      <div className="form__input">
        <label htmlFor="telephone">Teléfono</label>
        <input type="tel" minLength={10} maxLength={10} id="telephone" name="telephone" placeholder='0912345678' />
      </div>
      <div className='form__submit'>
        <button className="button"  id='contact_form_submit_button' type='submit'>Enviar</button>
        <p id='contact_form_message' className={`form__message form__message--${messageClassName}`}>
          {
            formStates[messageClassName]
          }
        </p>
      </div>
    </form>
  )
}