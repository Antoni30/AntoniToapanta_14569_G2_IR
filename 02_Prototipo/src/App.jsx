import { useState } from 'react'
import './App.css'
import { ButtonForm } from './components/ButtonForm'
import { Form } from './components/Form'
import { InputText } from './components/InputText'

function App() {
    const formMessage = {
        'failure': 'Formulario incompleto',
        'success': 'Datos enviados correctamente'
    }
    const [formMessageClassName, setFormMessageClassName] = useState('')
    
    const handleSubmit = (data) => {
        const hasIncompleteFields = Object.values(data).some(value => !value.trim().length)
        setFormMessageClassName(Object.keys(formMessage)[hasIncompleteFields ? 0 : 1])

        setTimeout(() => {
            setFormMessageClassName('hidden')
        }, 4000);
    }

    const handleName = (name) => /^[a-zA-Z]{0,10}$/.test(name)
    const handleTelephone = (telephone) => /^[0-9]{0,10}$/.test(telephone)
    const handleEmail = (email) => /[a-z@.]{0,}/.test(email)

    return (
        <>
            <Form title='formulario de contacto' getData={handleSubmit}>
                <InputText inputName={'firstname'} handleInput={handleName} autofocus> nombre </InputText>
                <InputText inputName={'lastname'} handleInput={handleName}> apellido </InputText>
                <InputText inputName={'email'} handleInput={handleEmail}> correo </InputText>
                <InputText inputName={'telephone'} handleInput={handleTelephone}> teléfono </InputText>
                <ButtonForm> Enviar </ButtonForm>
                <p className={`form__message ${formMessageClassName}`}>
                    {formMessage[formMessageClassName]}
                </p>
            </Form>
        </>
    )
}

export default App
