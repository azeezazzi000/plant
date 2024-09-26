 import React from 'react'
 import './Footer.css'
 import img2 from '../../Assets/whatsapp_icon.png'
 import img3 from '../../Assets/logoplant.jpg'
 import img4 from '../../Assets/instagram_icon.png'
 
 export default function Footer() {
   return (
     <div className='footer'>
        <div className="footer-logo">
            <img src={img3} style={{display:{xs:'none', md:'flex'},marginRight:'8px',height:'48px'}}/>
            <p> Green Oasis</p>
            </div>
<ul className="footer-links"> 
<li> products</li>
<li> about</li>
<li> contact</li>
</ul>
<div className="footer-social-icons">
<div className="footer-icons-container">
    <img src={img4}/>

</div>
<div className="footer-icons-container">
    <img src={img2}/>
</div>
</div>
<div className="fdooter-copyright">
    <hr/>
    <p> Copyright @ 2024 All Right Reserved.</p>
</div>
     </div>
  )
 }
 