import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import './LoginForm.css'; 

function LoginForm() {
    const dispatch = useDispatch();
    useEffect(() => {
        
    }, [dispatch]);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            login({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit} className="loginForm">
            <div>
                <label>Email:</label>
                <input type="text" name="email" />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}

export default LoginForm;
