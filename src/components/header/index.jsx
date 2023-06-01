import styles from './header.module.css'
import { Link, useNavigate } from 'react-router-dom'

export function Header(){
  const navigate = useNavigate();
  const user = null;

  function handleLogin(){
    navigate("/")
  }

  function handleLogout(){
    dispatch(logoutUser())
    navigate("/")
  }

  return(
    <header>
      <div className={styles.content}>
        <Link to="/painel">
          <h1>Dev<span>Redux</span></h1>
        </Link>

        {user ? (
          <button className={styles.logout} onClick={handleLogout}>
            Sair
          </button>
        ) : (
          <button className={styles.login} onClick={handleLogin}>
            Fazer login
          </button>
        )}
      </div>
    </header>
  )
}