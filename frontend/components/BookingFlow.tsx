import { useState } from 'react';
import axios from 'axios';

const BookingFlow = () => {
  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    package: '',
    travelerDetails: {
      name: '',
      email: '',
      phone: ''
    },
    paymentDetails: {
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    }
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({
      ...bookingDetails,
      [name]: value
    });
  };

  const handleTravelerDetailsChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({
      ...bookingDetails,
      travelerDetails: {
        ...bookingDetails.travelerDetails,
        [name]: value
      }
    });
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({
      ...bookingDetails,
      paymentDetails: {
        ...bookingDetails.paymentDetails,
        [name]: value
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/bookings', bookingDetails);
      console.log('Booking successful:', response.data);
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <div className="booking-flow">
      {step === 1 && (
        <div className="step">
          <h2>Select Package</h2>
          <input
            type="text"
            name="package"
            value={bookingDetails.package}
            onChange={handleInputChange}
          />
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div className="step">
          <h2>Traveler Details</h2>
          <input
            type="text"
            name="name"
            value={bookingDetails.travelerDetails.name}
            onChange={handleTravelerDetailsChange}
          />
          <input
            type="email"
            name="email"
            value={bookingDetails.travelerDetails.email}
            onChange={handleTravelerDetailsChange}
          />
          <input
            type="tel"
            name="phone"
            value={bookingDetails.travelerDetails.phone}
            onChange={handleTravelerDetailsChange}
          />
          <button onClick={handlePrevStep}>Back</button>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div className="step">
          <h2>Payment Details</h2>
          <input
            type="text"
            name="cardNumber"
            value={bookingDetails.paymentDetails.cardNumber}
            onChange={handlePaymentDetailsChange}
          />
          <input
            type="text"
            name="expiryDate"
            value={bookingDetails.paymentDetails.expiryDate}
            onChange={handlePaymentDetailsChange}
          />
          <input
            type="text"
            name="cvv"
            value={bookingDetails.paymentDetails.cvv}
            onChange={handlePaymentDetailsChange}
          />
          <button onClick={handlePrevStep}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {step === 4 && (
        <div className="step">
          <h2>Booking Confirmation</h2>
          <p>Your booking has been confirmed!</p>
        </div>
      )}
    </div>
  );
};

export default BookingFlow;
