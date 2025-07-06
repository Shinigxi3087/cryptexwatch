import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)
  const currencyHandler = ( event )=> {
    switch (event.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"})
        break;
      }
      case "cad": {
        setCurrency({name: "cad", symbol: "$"})
        break;
      }
      default : {
        setCurrency({name: "usd", symbol: "$"})
        break;
      }
    }
  }

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={logo} alt='logo' className='logo' />
      </Link>
        <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/features'}><li>Features</li></Link>
            <Link to={'/pricing'}><li>Pricing</li></Link>
            <Link to={'/blogs'}><li>Blog</li></Link>
        </ul>
        <div className='nav-right'>
            <select onChange={currencyHandler}>
                <option value='usd'>USD</option>
                <option value='cad'>CAD</option>
            </select>
            <button>Sign Up<img src={arrow} alt="arrow" /></button>
        </div>
    </div>
  )
}

export default Navbar
