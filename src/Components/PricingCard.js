import React from 'react'
import './PricingCard.css'
import {Link} from 'react-router-dom'

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>Rs 10000</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'  >PURCHAES NOW</Link>

            </div>

            <div className='card'>
                <h3>- Premium -</h3>
                <span className='bar'></span>
                <p className='btc'>Rs 20000</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'  >PURCHAES NOW</Link>

            </div>

            <div className='card'>
                <h3>- Business -</h3>
                <span className='bar'></span>
                <p className='btc'>Rs 30000</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'  >PURCHAES NOW</Link>

            </div>

        </div>
      
    </div>
  )
}

export default PricingCard
