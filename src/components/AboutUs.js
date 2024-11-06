import React from 'react'

function AboutUs() {
  return (
    <>
        {/* <!-- Content block 1 --> */}
<section id="about" className="copy-content-sec sec-bg-02 h-100" loading="lazy">
	<div className="container">
		<div className="row">
			<div className="col-lg-5 col-md-12 copy-container ml-auto">
				<div className="copy-content pr-4">
					<h2 className="font-abril text-primary">
						Who We Are
					</h2>
					<p className="lead ml-2">
                    We are a team of haircut profesionals dedicated to the craft of hair cutting
					</p>
					<p className="ml-2">
                    At our barbershop, we're more than just a place to get a haircut – we're a destination where style meets craftsmanship. With a passion for precision and an eye for detail, our skilled barbers bring years of experience to every chair. Our welcoming atmosphere and commitment to excellence create a space where clients become part of our community. At our barbershop, it's not just about the hair – it's about the experience.
					</p>
					<p className="mt-4 ml-2">
						{/* <a href="default" className="text-primary">Read More</a> */}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
    </>
  )
}

export default AboutUs