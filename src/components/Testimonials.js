import React from 'react'

function Testimonials() {
  return (
    <>
    {/* <!-- Testimonial Block 01--> */}
<section id="testimonial" className="testimonial-section sec-bg-04 py-5 h-100">
	<div className="container">
		<div className="row">
			<div className="head-box text-center mb-3 col-md-12 mt-5">
				<h2 className="font-abril">What Our Clients Says About Us</h2>
			</div>
		</div>
		<div className="single-testimonial">
		  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
		    <div className="carousel-inner pt-5" role="listbox">
		      <div className="carousel-item active">
		        <div className="testimonial-box text-center">
					<div className="testimonial-content w-100 bg-faded">
						<p className="mb-0"><i className="fa fa-quote-left fa-3x" aria-hidden="true"></i></p>
						<p className="lead font-abril">Great customer service, professional barbers, well kept and good relaxing massage. Can highly recommend 👌 </p>
						<div className="testimonial-footer">
							<h4 className="mt-2 mb-0 text-primary">Daphyn Moh</h4>
							<p>Kenya</p>
						</div>
					</div>
				</div>
		      </div>
		      <div className="carousel-item">
		        <div className="testimonial-box text-center">
					<div className="testimonial-content w-100 bg-faded">
						<p className="mb-0"><i className="fa fa-quote-left fa-3x" aria-hidden="true"></i></p>
						<p className="lead font-abril">Great trim. Highly recommend</p>
						<div className="testimonial-footer">
							<h4 className="mt-2 mb-0 text-primary">Aaz S</h4>
							<p>Kenya</p>
						</div>
					</div>
				</div>
		      </div>
		      <div className="carousel-item">
		        <div className="testimonial-box text-center">
					<div className="testimonial-content w-100 bg-faded">
						<p className="mb-0"><i className="fa fa-quote-left fa-3x" aria-hidden="true"></i></p>
						<p className="lead font-abril">The barber can do all kinds of hairstyles to perfection
10/10 would recommend 100%
From fades to just a trip to a line up</p>
						<div className="testimonial-footer">
							<h4 className="mt-2 mb-0 text-primary">Talk Chelsea With Dev</h4>
							<p>Kenya</p>
						</div>
					</div>
				</div>
		      </div>
		      <div className="carousel-item">
		        <div className="testimonial-box text-center">
					<div className="testimonial-content w-100 bg-faded">
						<p className="mb-0"><i className="fa fa-quote-left fa-3x" aria-hidden="true"></i></p>
						<p className="lead font-abril">Really great service and so polite</p>
						<div className="testimonial-footer">
							<h4 className="mt-2 mb-0 text-primary">Amitpatani Patani</h4>
							<p>Kenya</p>
						</div>
					</div>
				</div>
		      </div>
		    </div>
		    <div className="navigator-box">
		    	<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
			      <span className="fa fa-angle-left" aria-hidden="true"></span>
			      <span className="sr-only">Previous</span>
			    </a>
			    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
			      <span className="fa fa-angle-right" aria-hidden="true"></span>
			      <span className="sr-only">Next</span>
			    </a>
		    </div>
		  </div>
		</div>
	</div>
</section>
    </>
  )
}

export default Testimonials