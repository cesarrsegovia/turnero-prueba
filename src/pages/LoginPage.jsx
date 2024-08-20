import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForms';
import logo from '../assets/logo.png';
import './style/login.css';


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
        <div className="wrapper-login">
            <img src={logo} className="login-img" alt="logo" />
            <form onSubmit={onLogin}>
                <h1 className="title-login">Iniciar sesion</h1>
                <div className="input-group-login">
                    <label className="label-login" htmlFor="name">Nombre de Usuario:</label>
                    <input className="input-login" type="text" name="name" id="name" value={name} onChange={onInputChange} required autoComplete='off' />
                </div>
                <div className="input-group-login">
                    <label className="label-login" htmlFor="password">Contraseña:</label>
                    <input className="input-login" type="password" name="password" id="password" value={password} onChange={onInputChange} required autoComplete='off' />
                </div>
                <button className="button-login">Entrar</button>
            </form>
        </div>
    )
}
