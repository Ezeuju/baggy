import React from 'react';
import Navbar from "./Navbar";
import Item from './Item'
import Footer from "./Footer"
import ItemReview from './ItemReview'
import cart from "../assets/cart.svg";
import starOne from "../assets/starOne.png";
import starTwo from "../assets/starTwo.png";
import starThree from "../assets/starThree.png";
import starFour from "../assets/starFour.png";
import starFive from "../assets/starFive.svg";
import { Link } from "react-router-dom";
import Morebagsone from "../screens/Morebagsone"


const Home = () => {
	return (
		<>
			<Navbar />
			<div class="bar-one">
				<div class="search"><input type="text" name="search" placeholder="Search" class="look" /> </div>
				<div class="cart"><img src={cart} alt="cart" class="basket" /></div>
				<div className="cir"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
					<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
				</svg>
				</div>

			</div>
			<div class="bar-two">
				<h2>Hottest Offer</h2>
				<h3>My budget</h3><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#D9D9D9" class="bi bi-chevron-down downarr" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
				</svg>
			</div>
			<div className="home">
				<p>Home</p> <span className='arr-right'><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-right arr-right" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
				</svg> </span>
				<p class="hot">Hottest offer</p>
			</div>
			<div className="overall">
				<div class="sidebar">
					<h4>CATEGORIES</h4>
					<ul>
						<li><a href="#">Men Bags </a></li>
						<li><a href="#">Kid Bags </a></li>
						<li><a href="#">Women Bags </a></li>
						<li><a href="#">BagPack </a></li>
						<li><a href="#">Lunch Bags </a></li>
						<li><a href="#">Purse&Wallet </a></li>
						<li><a href="#"> Laptop Bags</a></li>
						<li><a href="#">Cosmestic Bags </a></li>
						<li><a href="#">Ankara Bags </a></li>
						<li><a href="#"> Raffia Bags</a></li>
						<li><a href="#">Camera Bags </a></li>
						<li><a href="#"> Luggage</a></li>
						<li><a href="#"> Instrument Bags</a></li>
						<li><a href="#"> Jewelry Bags</a></li>
						<li><a href="#"> DrawString Bags</a></li>
						<li><a href="#">Shopping Bags </a></li>
						<li><a href="#">Multipurpose  </a></li>
						<li><a href="#">Special Occasion </a></li>
						<li><a href="#">Wholesale and discount </a></li>
					</ul>

					<div className="brand">
						<h6>BRAND</h6>
						<div class="search"><input type="text" name="search" value="Search" id="sech" /></div>
						<form action="/action_page.php" class="form-one">
							<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="check" />
							<label for="vehicle1"> Judith Leiber</label><br /><br />
							<input type="checkbox" id="vehicle2" name="vehicle2" value="Car" className='check' />
							<label for="vehicle2"> Mouawad</label><br /><br />
							<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" className='check' />
							<label for="vehicle3"> Chanel</label><br /><br />
							<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" className='check' />
							<label for="vehicle3"> Fendi</label><br /><br />
							<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" className='check' />
							<label for="vehicle3"> Gucci</label><br /><br />
						</form>
					</div>
					<div class="product">
						<h5>PRODUCT RATING</h5>
						<form action="/action_page.php" class="form-two">
							<input type="radio" id="vehicle1" name="vehicle1" value="Bike" className='stack' />
							<label for="vehicle1"><img src={starOne} alt="star-rating" class="star" /> </label><br /><br />
							<input type="radio" id="vehicle2" name="vehicle2" value="Car" className='stack' />
							<label for="vehicle2"> <img src={starTwo} alt="star-rating" class="star" /></label><br /><br />
							<input type="radio" id="vehicle3" name="vehicle3" value="Boat" className='stack' />
							<label for="vehicle3"><img src={starThree} alt="star-rating" class="star" /></label><br /><br />
							<input type="radio" id="vehicle3" name="vehicle3" value="Boat" className='stack' />
							<label for="vehicle3"> <img src={starFour} alt="star-rating" class="star" /></label><br /><br />
							<input type="radio" id="vehicle4" name="vehicle3" value="Boat" className='stack' />
							<label for="vehicle4"><img src={starFive} alt="star-rating" class="star" /></label><br /><br />
						</form>
					</div>
				</div>
				<div className="container">
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>

				<div className='num'>
			<div class="numbers">
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
	 				<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
				</svg>

				<Link to="/Morebagsone"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" class="bi bi-1-square" viewBox="0 0 16 16">
					<path d="M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
					<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
				</svg></Link>	
				<Link to="/Morebagstwo"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2b3991" class="bi bi-2-square" viewBox="0 0 16 16">
					<path d="M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
					<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
				</svg></Link>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2b3991" class="bi bi-3-square" viewBox="0 0 16 16">
					<path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
					<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
				</svg>

				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
				</svg>

			</div>
			</div>



			<div class="recent">
				<div className='see'>
				<h4>Recently Viewed</h4>
				<p>See all</p>
				</div>
				<div className='baggy'>
					<ItemReview />
					<ItemReview />
					<ItemReview />
					<ItemReview />
					
				</div>

			</div>
			
				<Footer />
			


		</>
	)
}

export default Home


