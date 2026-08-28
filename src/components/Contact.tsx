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
  /**
   * react-hook-form controls for the Contact form
   * @property {Function} register - Registers an input field for validation/tracking
   * @property {Function} handleSubmit - Wraps onSubmit with validation
   * @property {Object} formState - Contains errors for invalid inputs
   * @property {Function} reset - Resets the form to defaultValues
   */
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
   * @type {[Boolean, Function]} - Controls whether the success message is showing
   */
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  /**
   * Handles form submission
   * @param {Object} data - form data collected by react hook form
   */

  const onSubmit = (data: ContactFormData) => {
    // Do something with the data
    // EmailJS?
    // Redirect somewhere other than contact form?
    console.log(data);
    setShowSuccess(true);
    reset();
  };

  /**
   * STILL NEED TO STYLE INPUT SPECIFIC ERROR MESSAGES
   */
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
                  {errors.name && <p>{errors.name.message}</p>}
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
                    })}
                  />
                  {errors.phone && <p>{errors.phone.message}</p>}
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
                    })}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
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
                  {errors.message && <p>{errors.message.message}</p>}
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
