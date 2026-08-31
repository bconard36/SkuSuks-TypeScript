/**
Renders the contact page and handles form validation and submission.
*/
import { Link } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  /**
   * @type {[Boolean, Function]} - Controls visibility of the form submission success message
   */
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  /**
   * Handles successful form submission and resets the form
   * @param {Object} data - validated contact form data
   */

  const onSubmit = (data: ContactFormData) => {
    // Do something with the data
    // EmailJS?
    // Redirect somewhere other than contact form?
    console.log(data);
    setShowSuccess(true);
    reset();
  };

  // TODO: Style individual input error messages
  return (
    <div className="contact-container">
      {showSuccess && (
        <div
          className="header-container"
          style={{
            position: "absolute",
            top: "20%",
            left: "30%",
            fontSize: "2rem",
            height: "400px",
            width: "400px",
          }}
          onClick={() => setShowSuccess(false)}
        >
          <p
            className="page-header"
            style={{
              color: "#FFF",
              margin: "20px auto",
              textAlign: "center",
            }}
          >
            Thanks for reaching out!
          </p>
          <p
            className="page-header"
            style={{
              color: "#FFF",
              margin: "20px auto",
              textAlign: "center",
            }}
          >
            We will be in touch soon.
          </p>
          <Link
            to="/"
            style={{
              color: "#FFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
            }}
          >
            Return to Home
          </Link>
        </div>
      )}
      {!showSuccess && (
        <>
          <div className="header-container">
            <h3 className="page-header">CONTACT US</h3>
          </div>
          <div className="contact-form-container">
            <form
              action=""
              className="contact-form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <fieldset id="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="First and Last Name"
                    {...register("name", {
                      required: "Name is required.",
                      validate: (value) =>
                        value.trim() !== "" || "Name is required.",
                    })}
                  />
                  {errors.name && (
                    <p className="contact-error-message">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="(555)555-5555"
                    {...register("phone", {
                      required: "Phone number is required.",
                      validate: (value) =>
                        value.trim() !== "" || "Phone number is required.",
                      pattern: {
                        value: /^\+?[1-9]\d{1,14}$/, // Basic E.164 international format
                        message: "Invalid phone number format",
                      },
                      minLength: {
                        value: 7,
                        message: "Please enter a valid phone number.",
                      },
                      maxLength: {
                        value: 20,
                        message: "Phone number cannot exceed 20 characters",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="contact-error-message">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="JohnDoe@gmail.com"
                    {...register("email", {
                      required: "Email is required.",
                      validate: (value) =>
                        value.trim() !== "" || "Email is required.",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="contact-error-message">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    cols={30}
                    placeholder="Type your message here..."
                    {...register("message", {
                      required: "Contact message is required.",
                      validate: (value) =>
                        value.trim() !== "" || "Message is required.",
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className="contact-error-message">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button id="submit" type="submit">
                  Submit
                </button>
                <img
                  src="../../Images/alternate_skusucks_logo.png"
                  alt="A SkuSuks alternate logo"
                  id="form-graphic"
                ></img>
              </fieldset>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
