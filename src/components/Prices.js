import React,{useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'

function Prices() {
	const { hash } = useLocation();

	useEffect(() => {
		if (hash) {
		  const element = document.getElementById(hash.replace('#', ''));
		  if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		  }
		}
	  }, [hash]);

  return (
    <>
    {/* <!-- Info block 2 --> */}

    <section id="price" className="info-section sec-bg-03 bg-overlay">
	<div className="container text-white">
		<div className="head-box text-center mb-5">
			<h2 className="font-abril">Services We Offer</h2>
		</div>
		<div className="three-panel-block my-4">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-6 pl-md-5 mb-4">
					<div className="service-block-bg text-center p-3">
						<div className="price-count font-abril"><span></span>Haircut</div>
						{/* <h3>Ksh 500</h3> */}
						{/* <p className="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p> */}
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-6 pr-md-5 mb-4">
					<div className="service-block-bg text-center p-3">
						<div className="price-count font-abril"><span></span> Massage</div>
						{/* <h3>Ksh 2000</h3> */}
						{/* <p className="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p> */}
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-6 pl-md-5 mb-4">
					<div className="service-block-bg text-center p-3">
						<div className="price-count font-abril"><span></span>Waxing</div>
						{/* <h3>Ksh 1000 </h3> */}
						{/* <p className="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p> */}
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-6 pr-md-5">
					<div className="service-block-bg text-center p-3">
						<div className="price-count font-abril"><span></span>Pedicure</div>
						{/* <h3>Ksh 1000</h3> */}
						{/* <p className="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p> */}
					</div>
				</div>
			</div>
		</div>
        <Link className="btn btn-primary text-white mr-3" to='/moreservices'>View All Services</Link>
	</div>
</section>

    </>
  )
}

export default Prices