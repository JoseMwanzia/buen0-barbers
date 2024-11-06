import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';

function Contact() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [selection, setSelection] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = "/api/form.php"
    const formData = new FormData();
    formData.append('name', username)
    formData.append('email', email)
    formData.append('selection', selection)
    formData.append('phone', phone)
    formData.append('date', date)
    formData.append('time', time)

    fetch(url, {
      method: "POST",
      body: formData
    })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        setSuccessMessage("Form submitted successfully!");
        setErrorMessage("");
      } else {
        setErrorMessage("Error submitting the form. Please try again.");
        setSuccessMessage("");
      }
        setUsername('')
        setEmail('')
        setSelection('')
        setPhone('')
        setDate('')
        setTime('')
    })
    .catch((error) => {
      console.log("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
      setSuccessMessage("");
    });
  };

  

  function formatDate(dateString) {
    // Assuming dateString is in the format YYYY-MM-DD
    return dateString; // Return the same format as it's already in 'yyyy-mm-dd'
}


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
<section id="contact" className="contact-section book_section layout_padding py-5">
    <div className="container">
      <div className="heading_container">
        <h2 className='text-white'>
          Book An Appointment
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <form onSubmit={handleSubmit}>
              <div>
                <input className="form-control" autoComplete="true" required value={username} onChange={(e) => setUsername(e.target.value)} type="text" name='name' placeholder="Your Name" />
              </div>
              <div>
                <input className="form-control" required autoComplete="true" value={phone} onChange={(e) => setPhone(e.target.value)} type="integer" name='phone' placeholder="Phone Number" />
              </div>
              <div>
                <input className="form-control" required autoComplete="true" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="Your Email" />
              </div>
              <div>
                <select className="form-control nice-select wide" name='selection' required value={selection} onChange={(e) => setSelection(e.target.value)} type="dropdown">
                  <option value="" disabled defaultValue>
                    Appointment for?
                  </option>
                  <option value="Haircut">
                    Haircut
                  </option>
                  <option value="Massage">
                    Massage
                  </option>
                  <option value="Waxing">
                    Waxing
                  </option>
                  <option value="Pedicure">
                    Pedicure
                  </option>
                  <option value="Sauna">
                    Sauna
                  </option>
                </select>
              </div>
              <div>
                <input className="form-control" required value={formatDate(date)} onChange={(e) => setDate(e.target.value)} type="date" name='date' placeholder="Date" />
              </div>
              
              <div>
                <input className="form-control" required value={time} onChange={(e) => setTime(e.target.value)} type="time" name='time' placeholder="Time"/>
              </div>
              <div className="btn_box form-group">
                <button type='submit' className='text-dark'>
                  Book Now
                </button>
              </div>
            </form>
            {successMessage && <div className="text-success success-message mb-3">{successMessage}</div>}
            {errorMessage && <div className="text-danger error-message mb-3">{errorMessage}</div>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="map_container ">
          <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8553588771847!2d36.81983501022286!3d-1.2588507987238622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1751da32d6b7%3A0xaab7d7747c57e75f!2sBueno%20Barbers!5e0!3m2!1sen!2ske!4v1709809562197!5m2!1sen!2ske" width="600" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='maps'></iframe>
            <div id="googleMap"></div>
          </div>
        </div>
      </div>
    </div>

  </section>

    
    </>
  )
}

export default Contact