import React, { useState } from 'react';
import './TaxiForm.css'; // Create this file for additional custom styling
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import styles
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TaxiForm() {
  const [formData, setFormData] = useState({
    customerName: '',
    pickupLocation: '',
    dropPoint: '',
    date: '',
    time: '',
    vehicleType: '',
    numberOfPassengers: '',
    contactNumber: '',
    emailAddress: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, contactNumber: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Customer name is required';
    }
    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Pickup location is required';
    }
    if (!formData.dropPoint.trim()) {
      newErrors.dropPoint = 'Drop point is required';
    }
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    if (!formData.time) {
      newErrors.time = 'Time is required';
    }
    if (!formData.vehicleType) {
      newErrors.vehicleType = 'Vehicle type is required';
    }
    if (!formData.numberOfPassengers || formData.numberOfPassengers <= 0) {
      newErrors.numberOfPassengers = 'Please enter a valid number of passengers';
    }
    if (!formData.contactNumber) {
      newErrors.contactNumber = 'Contact number is required';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.info("Sending...");

      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => formDataToSend.append(key, formData[key]));
      formDataToSend.append("access_key", "3086c577-5b4f-41b1-a79e-0810fdc7a167");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataToSend,
        });

        const data = await response.json();

        if (data.success) {
          toast.success("Form Submitted Successfully");
          setFormData({
            customerName: '',
            pickupLocation: '',
            dropPoint: '',
            date: '',
            time: '',
            vehicleType: '',
            numberOfPassengers: '',
            contactNumber: '',
            emailAddress: '',
          });
        } else {
          toast.error(`Error: ${data.message}`);
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      }
    } else {
      toast.error("Please fix the errors in the form.");
    }
  };

  return (
    <div className="taxi-main">
      <ToastContainer />
      <div className="container form-size my-5">
        <h2 className="text-center mb-4">Quick Book Here</h2>
        <form className="p-4 shadow rounded form-container" onSubmit={handleSubmit}>
          <div className="form-row mb-3">
            <div className="col">
              <label htmlFor="customerName">Customer Name</label>
              <input
                type="text"
                className={`form-control ${errors.customerName ? 'is-invalid' : ''}`}
                id="customerName"
                placeholder="Enter your name"
                value={formData.customerName}
                onChange={handleChange}
              />
              {errors.customerName && <div className="invalid-feedback">{errors.customerName}</div>}
            </div>
          </div>
          <div className="form-row mb-3">
            <div className="col">
              <label htmlFor="pickupLocation">Pickup Location</label>
              <input
                type="text"
                className={`form-control ${errors.pickupLocation ? 'is-invalid' : ''}`}
                id="pickupLocation"
                placeholder="Enter pickup location"
                value={formData.pickupLocation}
                onChange={handleChange}
              />
              {errors.pickupLocation && <div className="invalid-feedback">{errors.pickupLocation}</div>}
            </div>
            <div className="col">
              <label htmlFor="dropPoint">Drop Point</label>
              <input
                type="text"
                className={`form-control ${errors.dropPoint ? 'is-invalid' : ''}`}
                id="dropPoint"
                placeholder="Enter drop point"
                value={formData.dropPoint}
                onChange={handleChange}
              />
              {errors.dropPoint && <div className="invalid-feedback">{errors.dropPoint}</div>}
            </div>
          </div>
          <div className="form-row mb-3">
            <div className="col">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                id="date"
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && <div className="invalid-feedback">{errors.date}</div>}
            </div>
            <div className="col">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                className={`form-control ${errors.time ? 'is-invalid' : ''}`}
                id="time"
                value={formData.time}
                onChange={handleChange}
              />
              {errors.time && <div className="invalid-feedback">{errors.time}</div>}
            </div>
          </div>
          <div className="form-row mb-3">
            <div className="col">
              <label htmlFor="vehicleType">Vehicle Type</label>
              <select
                className={`form-control ${errors.vehicleType ? 'is-invalid' : ''}`}
                id="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
              >
                <option value="" disabled>Select vehicle type</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Minivan">Minivan</option>
              </select>
              {errors.vehicleType && <div className="invalid-feedback">{errors.vehicleType}</div>}
            </div>
            <div className="col">
              <label htmlFor="numberOfPassengers">Number of Passengers</label>
              <input
                type="number"
                className={`form-control ${errors.numberOfPassengers ? 'is-invalid' : ''}`}
                id="numberOfPassengers"
                placeholder="Enter number of passengers"
                value={formData.numberOfPassengers}
                onChange={handleChange}
              />
              {errors.numberOfPassengers && <div className="invalid-feedback">{errors.numberOfPassengers}</div>}
            </div>
          </div>
          <div className="form-row mb-3">
            <div className="col">
              <label htmlFor="contactNumber">Contact Number</label>
              <PhoneInput
                international
                defaultCountry="US"
                className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                id="contactNumber"
                value={formData.contactNumber}
                onChange={handlePhoneChange}
              />
              {errors.contactNumber && <div className="invalid-feedback">{errors.contactNumber}</div>}
            </div>
            <div className="col">
              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="email"
                className={`form-control ${errors.emailAddress ? 'is-invalid' : ''}`}
                id="emailAddress"
                placeholder="Enter email address"
                value={formData.emailAddress}
                onChange={handleChange}
              />
              {errors.emailAddress && <div className="invalid-feedback">{errors.emailAddress}</div>}
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary mt-3">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaxiForm;
