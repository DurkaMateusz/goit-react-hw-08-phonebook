
import LogoutButton from '../LogoutButton/LogoutButton'
import useAuth  from '../../hooks/useAuth'; 
import './UserMenu.css'; 


export default function UserMenu() {
  const { user } = useAuth(); 

  return (
    <div className="userMenuContainer">
    <div className="thumb-lg member-thumb mx-auto">
      <img src="https://img.freepik.com/darmowe-wektory/niebieski-krag-z-bialym-uzytkownikiem_78370-4707.jpg?w=826&t=st=1710409551~exp=1710410151~hmac=b7fee600879f9fff3d53222092939fdcb0966b60fb658491fd2be4814b84acc7" alt="avatar" className='avatar' />
    </div>
    <p className="userEmail">Email: {user?.email}</p>
    <LogoutButton />
  </div>
  );
};



