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
		</div> 
    </>
  )
}

export default Item
