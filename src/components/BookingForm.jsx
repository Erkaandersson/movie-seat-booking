import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import "../App.css";


const BookingForm = () => {

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleFormVisibility = () => {
        setIsFormVisible((prev) => !prev);
        setSuccessMessage("");

    };

    //validerings schema
    const validate = (values) => {
        const errors= {};

        if(!values.name){
            errors.name = "Name is required";
        }
        
        if (!values.phone) {
            errors.phone = "Phone number is required";
          } else if (!/^\d{10,}$/.test(values.phone)) {
            errors.phone = "Must be at least 10 digits and numbers";
          }
          return errors;
        };
//rendering av formulär om isFormVisible är true
        return (
            <div className="booking-container">
                <button className="booking-btn" onClick={handleFormVisibility}>
                    {isFormVisible ? "Close Booking" : "Book Now"}
                </button>
            
            {isFormVisible && (
            <Formik
            initialValues={{ name: "", phone: "" }}
            validate={validate}
            onSubmit={(values) => {
                console.log("Booking Information:", values);
                setSuccessMessage("Booking successful!");
                setIsFormVisible(false);
            }}       
            >
                <Form>
                    <label>
                    <Field type="text" name="name" placeholder="Name" />
                    <ErrorMessage name="name" component="div" style={{color:'red', fontSize:'16px'}} />
                    </label> 

                    <label>
                    <Field type="text" name="phone" placeholder="Phone" />
                    <ErrorMessage name="phone" component="div" style={{color:'red', fontSize:'16px'}} />
                    </label>

                    <button className="submit-btn" type="submit">Submit</button>
                </Form>
            </Formik>
            )}
                        {successMessage && (
                <div className="success-message" style={{ color: '#00A36C', marginTop: '10px' }}>
                    {successMessage}
                </div>
                        )}
        </div>
    );
};

export default BookingForm;