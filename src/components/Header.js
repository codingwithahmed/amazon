import React from 'react';
import './Header.css'
import SeacrhIcon from '@material-ui/icons/Search'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import {Link} from 'react-router-dom'
import { useStatevalue} from '../StateProvider'
import {auth} from '../firebase'
function Header() {
       const [{ basket, user }, dispatch] = useStatevalue();
       const handleAuthenticaton = () => {
              if (user) {
                auth.signOut();
              }
            }

    return(
        <div className="header">
 <Link to="/">
                 <img 
                 className="header_logo"
                 src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                 alt = 'amazon-logo'
                 />                
</Link>
                 <div className="header_search">
                     <input className="header_input" type="text" />
                     <SeacrhIcon className="header_searchIcon" />
                 </div>

                 <div className="header_nav">

                        <Link to = {!user && '/login'} >

                      <div  onClick={handleAuthenticaton} className="header_option">
                             <span className="header_optionLineOne"> Hello {!user ? 'Guest' : user.email}</span>
                             <span className="header_optionLineTwo"> {user ? 'Sign Out' : 'Sign In'} </span>
                      </div>
                      </Link>
                      
                      <Link to = '/checkout'>
                      <div className="header_option">
                             <span className="header_optionLineOne"> Returns</span>
                             <span className="header_optionLineTwo"> & Orders </span>
                      </div>
                      </Link>

                      <div className="header_option">
                             <span className="header_optionLineOne"> Your</span>
                             <span className="header_optionLineTwo"> Prime</span>
                      </div>
                   <Link to="/checkout" >
                      <div className="header_optionSoppingBasket">
                             <ShoppingBasket />
                             <span className="header_optionLineTwo header_BasketCount">    {basket?.length}
</span>
                      </div>
                      </Link>
                      

                 </div>

        </div>
    )

}

export default Header