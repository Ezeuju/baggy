import React from 'react'
import {Link} from "react-router-dom"
import logowhite from "../assets/logowhite.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"

const footer = () => {
  return (
    <>
	<div className='footer'>
    <div className="links" >
	<div className="white">
			<div class="whitelogo"><img src={logowhite} alt="logowhite"className='logowhite'/> </div>
 			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius voluptate hic. Odio similique vel, quam laboriosam accusamus accusantium consequatur fugit aut impedit quae cumque iste! Ullam porro esse reiciendis.</p>
 			<div class="socials">
				<div><img src={instagram} alt="instagram"/></div>
				<div><img src={facebook} alt="facebook"/></div>
				<div><img src={twitter} alt="twitter"/></div>
 			</div>
			
		</div>
 		<div class="money">
 			<h5>Make money</h5>
 			<li><Link to="/">Sell on Bagify </Link></li>
 			<li><a href="#">Shop with Bagify </a></li>
		<li><a href="#"> Become a logistic service Partner</a></li>

 		</div>
 		<div class="money">
 			<h5> Quick Access</h5>
 			<li><a href="#">Blog </a></li>
			<li><a href="#">About Us </a></li>
 			<li><a href="#"> Contact Us</a></li>
 			<li><a href="#"> Faq</a></li>

		</div>
 		<div class="money">
 			<h5>Payment</h5>
 			<li><a href="#"> Bank Transfer</a></li>
			<li><a href="#">Card </a></li>
			<li><a href="#"> USSD</a></li>

 		</div>
		</div>
		<div className='linett'></div>
 	
	<div class="line">
 	<p>@Bagify Limited &nbsp; 2023.&nbsp;All rights reserved.</p>
    </div>
    </div>
    </>
  )
}

export default footer
