import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {

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
<section id="home" className="intro intro-bg bg-overlay parallax lazyload">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 col-md-12 caption-two-panel ml-auto pt-5">
				<div className="intro-caption mt-5">
				<h1 className="text-white mb-2">It's not really hard to stand out in a crowd</h1>
				<p className="text-white mb-4"> This is Bueno Barbers. We are a team of haircut profesionals dedicated to the craft of hair cutting</p>
				<Link className="btn btn-primary text-white mr-3" to='/#contact'>Book Appointment</Link>
			</div>
		</div>
	</div>
    </div>
</section>
</>
  )
}

export default Home