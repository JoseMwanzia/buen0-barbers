import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <>
    {/* <!-- footer Block --> */}
    <div className="copy-footer bg-primary py-2 ">
	<div className="container text-center">
		{/* <a href="http://adjetech.com" rel="noreferrer" target="_blank">adjetech.ke</a> */}
        All rights reserved. <span>{currentYear}</span> 

	</div>
    <div className='d-flex justify-content-center align-items-center'>
    <a href="https://www.instagram.com/buenobarberske/" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-2x text-dark mx-2 mt-2"></i></a>
    <a href="https://www.tiktok.com/@bueno_barbers?lang=en" target="_blank" rel="noreferrer"><i className="fab fa-tiktok fa-2x text-dark mx-2 mt-2"></i></a>
        {/* <i className="fab fa-facebook fa-2x mx-2 mt-2"></i>
        <i className="fab fa-whatsapp fa-2x mx-2 mt-2"></i>
        <i className="fab fa-twitter fa-2x mx-2 mt-2"></i> */}
    </div>
    <div className='d-flex justify-content-center align-items-center'>
        <p>Call Us at <span className='number'>0768 660 446</span></p>
    </div>
</div>
    </>
  )
}

export default Footer