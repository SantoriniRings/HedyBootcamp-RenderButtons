import logo from "../img/evalogoo.png"
import "../styles/Nav.css"

const Nav = () => {

  return (
    <nav>
        <div className='container-logo'>
          <img className="imgLogo" src={logo} alt="Logo" />
        </div>
    </nav>
  )
}

export default Nav