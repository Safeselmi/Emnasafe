import React from 'react'
import { BsCart4 } from 'react-icons/bs';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from "../assests/logo.png";
import Accueil from '../Pages/Accueil';
import Apropos from '../Pages/Apropos';
import Contact  from '../Pages/Conatct';
import "./css/footerheader.css"
function Header() {
  return (
    <div className='header'>

  <div className='flex flex-row   w-screen'>{/*ligne header*/}

      <div className='flex flex-col w-1/12 m-auto '>{/* colonne logo*/}
           <img src={logo} className='flex justify-center rounded-full w-28' />
        </div>
      
      
      <div className='flex flex-col w-3/6 m-auto'>{/*colonne navbar*/ }
      <div className="flex justify-center justify-around mt-32 font-font_fremid text-white text-2xl">{/* navbar*/}
          
              <Link to="/Accueil">Accueil</Link>
        
              <Link to="/Apropos">A propos</Link>
         
              <Link to="/Conatct">Conatct</Link>
          
          </div>
        </div>



      <div className='flex flex-col w-1/6 m-auto justify-between'>{/*colonne les boutons et les icons */}

          <div className='flex flex-row  ml-16 justify-around w-1/2'>{/*ligne les icons*/}
              <boutton className="text-4xl ">
              <BsCart4/>
               </boutton>

               <boutton className="text-4xl" >
               <MdOutlineFavoriteBorder />
               </boutton>
              </div>


          <div className='flex flex-row justify-center justify-between mt-20 '>{/*ligne les boutons*/}

              <button className="rounded  text-[black] bg-marron-100 font-font_fremid px-2 p-1">
                S'INSCRIRE
              </button>

              <button className="rounded text-[black] bg-marron-100 font-font_fremid px-2 p-1">
                SE CONNECTER
              </button>

              </div>
          
          </div>
      
</div>



    </div>
  )
}

export default Header