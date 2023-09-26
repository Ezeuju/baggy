import React from 'react'
import bagone from '../assets/bagone.png'

const Item = () => {
  return (
    <>
      <div class="item">
			<div class="bag-one"><img src={bagone} alt="bag2"/> </div>
			<p className='hand'>Handbag made with solid leather for women and ladies</p>
		<div class="prices">
 				<h4>NGN 8500.44</h4>
 				<p>NGN 15,047.51</p>
				</div>
			<p className='free'>Free Shipping</p>
			<button className='shop'>SHOP NOW</button>
 			<div class="add">
				<div className='zero'><p>0</p> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="black" class="shopbtn" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg> </div>
				<div><p className='addcart'>ADD TO CART</p></div>

		</div>
	</div> 
    </>
  )
}

export default Item
