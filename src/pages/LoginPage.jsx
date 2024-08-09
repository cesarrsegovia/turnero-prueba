import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if(username === 'admin' && password === 'turnero'){
            navigate('/user');
        }else{
            alert('Datos incorrectos');
        }
    }
    return (
        <div>
            <h1>Acceder</h1>
            <form onSubmit={handleSubmit}>
                <label>Usuario: </label>
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
