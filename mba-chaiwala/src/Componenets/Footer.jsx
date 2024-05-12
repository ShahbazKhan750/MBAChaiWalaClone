import React from 'react';
const Footer = () => {

  const footerLinks=(elements)=>{
    const allfooterlinks = document.querySelectorAll('.footerLinks');

      switch(elements){
        case 0:
          allfooterlinks.forEach((item,index)=>
           index===0?(item.style.opacity=1):(item.style.opacity=0.2)
        );
        break;
        case 1:
          allfooterlinks.forEach((item,index)=>
           index===1?(item.style.opacity=1):(item.style.opacity=0.2)
        );
        break;
        case 2:
          allfooterlinks.forEach((item,index)=>
           index===2?(item.style.opacity=1):(item.style.opacity=0.2)
        );
        break;
        case 3:
          allfooterlinks.forEach((item,index)=>
           index===3?(item.style.opacity=1):(item.style.opacity=0.2)
        );
        break;
        case 4:
          allfooterlinks.forEach((item,index)=>
           index===4?(item.style.opacity=1):(item.style.opacity=0.2)
        );
        break;

        case 5:
          allfooterlinks.forEach((item,index)=>
           index===5?(item.style.opacity=1):(item.style.opacity=0.2)
        );
        break;

        default:
          allfooterlinks.forEach((item)=>
           (item.style.opacity=1)
        );
          break;
      }
  }

  const LinkBackToNormal=()=>{
    const allfooterlinks = document.querySelectorAll('.footerLinks');

    allfooterlinks.forEach((item)=>
    (item.style.opacity=1)
 );
  }

  return (
    <>
      <footer>
        <h1>
          let's 
          <br />
          #ConnectsOnCutting
        </h1>
         <aside onMouseLeave={LinkBackToNormal}>
         <a href="/" className='footerLinks' onMouseOver={()=>footerLinks(0)}>Home</a>
         <a href="/story" className='footerLinks' onMouseOver={()=>footerLinks(1)}>Story</a>
         <a href="/media" className='footerLinks' onMouseOver={()=>footerLinks(2)}>Media</a>
         <a href="/franchise" className='footerLinks' onMouseOver={()=>footerLinks(3)}>Franchise</a>
         <a href="/events" className='footerLinks' onMouseOver={()=>footerLinks(4)}>Events</a>
         <a href="/chaiwalacares" className='footerLinks' onMouseOver={()=>footerLinks(5)}>Chai Wala Cares</a>
         </aside>

         <div>
            <h5>Email</h5>
            <a href="mailto:kmdshahbaz121@gmail.com">kmdshahbaz121@gmail.com</a>
            <a href="mailto:franchise@mbachaiwala.com">Franchise@mbachaiwala.com</a>
          </div>

          <div>
            <h5>Phone</h5>
            <a href="tel:+917503499553">+917503499553</a>
          </div>
              <p>© COPYRIGHT 2023 MBA CHAIWALA, MADE BY</p>
      </footer>
      <div className='footer'></div>
    </>
  )
}

export default Footer