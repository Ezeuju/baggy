import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import MaterialIcon from 'react-google-material-icons'

const Navbar = () => {
  return (
  <>
    <header>
 		<nav>
 		<div className="logo"><Link to="/"><img src={logo} alt="logo" className="log"/></Link></div>
		<ul>
 		    <li><Link to="/"><span className="orange">Home</span></Link></li>
		    <li><Link to="/">Own a shop</Link></li>
			<li><Link to="/">Request</Link></li>
			<li><Link to="/">Account</Link></li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>
 			<li><Link to="/">Help</Link></li>
        </ul>
      </nav>
	</header> 
    </>
    
  );
}

export default Navbar
