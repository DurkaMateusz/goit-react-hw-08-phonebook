import useAuth from '../../hooks/useAuth'
import './Home.css'
export default function Home () {

    const { user } = useAuth();
    const { isLoggedIn } = useAuth(); 
    return (
        (isLoggedIn ? ( <h1>Hello, {user?.name}!</h1> ) : ( <h1>Hello, guest!</h1> ) )
    )
}