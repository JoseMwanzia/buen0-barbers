import React, { useEffect} from 'react'
import { useLocation } from 'react-router-dom'


function Services() {
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
    {/* <!-- Info block 1 --> */}
        <section id="services" className="info-section text-white bg-right bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="head-box">
                            <h2 className="font-abril ">Services We offer!</h2>
                        </div>
                        <div className="three-panel-block mt-5">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="service-block mb-5">
                                        {/* <i className="icon-box mb-3 float-left w-100"><img src="img/icons/scissors.png" className="img-fluid" alt='icon'/></i> */}
                                        <i className="fa fa-scissors"></i>
                                        <h3 className="text-primary">Haircut</h3>
                                        <p>Our expert barbers combine classic techniques with contemporary trends to craft hairstyles that reflect your unique personality.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="service-block mb-5">
                                    {/* <i className="icon-box mb-3 float-left w-100"><img src="img/icons/razor-1.png" className="img-fluid" alt='icon'/></i> */}
                                    <i className="fa fa-spa"></i>
                                        <h3 className="text-primary">Massage</h3>
                                        <p>Relieve tension and promote deep relaxation with our invigorating Deep Tissue Massage. Discover true relief and rejuvenation in just one session.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="service-block mb-5">
                                        {/* <i className="icon-box mb-3 float-left w-100"><img src="img/icons/brush.png" className="img-fluid" alt='icon'/></i> */}
                                        <i className="fa fa-oil-can"></i>
                                        <h3 className="text-primary">Waxing</h3>
                                        <p>Stay smooth and confident with Underarm Waxing. Quick and effective hair removal for a clean and fresh feeling.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="service-block">
                                        {/* <i className="icon-box mb-3 float-left w-100"><img src="img/icons/hair-clip.png" className="img-fluid" alt='icon'/></i> */}
                                        <i className="fa fa-water"></i>
                                        <h3 className="text-primary">Sauna (new)</h3>
                                        <p>Step into our serene environment, where the soothing heat melts away tension, and the aromatic steam envelops you in a sense of calm. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Services