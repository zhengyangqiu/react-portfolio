import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faUser} from '@fortawesome/free-solid-svg-icons';

const SideBar = ()=>(
    <div className="nav-bar">
      
        {/* //to home page */}
        <Link className="logo" to='/'>
            <img src={LogoS} alt="logo" />
            <img className = "sub-logo" src={LogoSubtitle} alt="slogan" />
        </Link>

        <nav>

            <NavLink exact="true" activeClassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>

            </NavLink>

            <NavLink exact="true" activeClassname="active" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />

            </NavLink>

            <NavLink exact="true" activeClassname="active" className="contact-link"to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />

            </NavLink>
        </nav>

    </div>
)



export default SideBar;

