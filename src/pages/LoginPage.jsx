import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForms';

export const LoginPage = () => {
    const navigate = useNavigate()

    const { name, password, onInputChange, onResetForm } = useForm({
        name: '',
        password: ''
    })

    const onLogin = (e) => {
        e.preventDefault()

        if(name === 'admin' && password === 'barbero'){
            navigate('/user', {
                replace: true,
                state: {
                    logged: true,
                    name
                }
            })
        } else{
            alert('Usuario incorrecto')
        }

        

        onResetForm();
}

    return(
        <div className="wrapper">
            <form onSubmit={onLogin}>
                <h1>Iniciar sesion</h1>
                <div className="input-group">
                    <input type="text" name="name" id="name" value={name} onChange={onInputChange} required autoComplete='off' />
                    <label htmlFor="name">Nombre de Usuario:</label>
                </div>
                <div className="input-group">
                    <input type="password" name="password" id="password" value={password} onChange={onInputChange} required autoComplete='off' />
                    <label htmlFor="password">Contraseña:</label>
                </div>
                <button>Entrar</button>
            </form>
        </div>
    )
}
