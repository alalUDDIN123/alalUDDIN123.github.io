import React, { useState } from "react";
import styles from "../../assests/styles/contactme.module.css";
import { MdLocationOn } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { AiFillPhone, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Iframe from "react-iframe";
import Modal from "../ui/Modal";

// ✅ initial state
const initialState = {
  form: {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  },
  loading: false,
  error: "",
  success: "",
  modal: {
    open: false,
    type: "", // "loading" | "success" | "error"
    message: "",
  }

};

const ContactMe = () => {
  const [state, setState] = useState(initialState);

  const { form } = state;

  // ✅ handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({
      ...prev,
      form: {
        ...prev.form,
        [name]: value,
      },
      error: "",
      success: "",
    }));
  };

  // ✅ submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setState((prev) => ({
      ...prev,
      loading: true,
      modal: {
        open: true,
        type: "loading",
        message: "Processing your message. Please wait...",
      },
    }));


    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: form.firstName,
            lastname: form.lastName,
            email: form.email,
            phone: form.mobile,
            message: form.message,
          }),
        }
      );


      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }
      setState({
        ...initialState,
        modal: {
          open: true,
          type: "success",
          message: "🎉 Your message has been sent successfully. I’ll get back to you soon.",
        },
      });


      setTimeout(() => {
        setState(initialState);
      }, 5000);
    } catch (err) {
      setState((prev) => ({
        ...prev,
        loading: false,
        modal: {
          open: true,
          type: "error",
          message: err.message || "Unable to send message. Please try again.",
        },
      }));

    }
  };

  return (
    <>
      {/* modal */}

      <Modal
        open={state.modal.open}
        type={state.modal.type}
        message={state.modal.message}
        onClose={() =>
          setState((prev) => ({
            ...prev,
            modal: { open: false, type: "", message: "" },
          }))
        }
      />


      <section className={styles.contactMe} id="contact">
        <div className={styles.contactUs}>
          <h2 className={styles.title}>Contact Me</h2>
          <div className={styles.box}>
            {/* form  */}
            <div className={`${styles.contact} ${styles.form}`}>
              <h3>Send a Message</h3>
              {/* {error && (
                <div style={{ color: "red", marginBottom: "15px", padding: "10px", backgroundColor: "#ffe6e6", borderRadius: "4px" }}>
                  {error}
                </div>
              )}
              {success && (
                <div style={{ color: "green", marginBottom: "15px", padding: "10px", backgroundColor: "#e6ffe6", borderRadius: "4px" }}>
                  {success}
                </div>
              )} */}
              <form onSubmit={handleSubmit}>
                <div className={styles.formBox}>
                  <div className={styles.row50}>
                    <div className={styles.inputBox}>
                      <span>First Name *</span>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>

                    <div className={styles.inputBox}>
                      <span>Last Name</span>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Enter Your Last Name"
                      />
                    </div>
                  </div>

                  <div className={styles.row50}>
                    <div className={styles.inputBox}>
                      <span>Email *</span>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your Email address"
                        required
                      />
                    </div>

                    <div className={styles.inputBox}>
                      <span>Mobile</span>
                      <input
                        type="number"
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                        placeholder="Enter Your Mobile Number"
                      />
                    </div>
                  </div>

                  <div className={styles.row100}>
                    <div className={styles.inputBox}>
                      <span>Message *</span>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className={styles.row100}>
                    <div className={styles.inputBox}>
                      <input
                        type="submit"
                        value={"SEND"}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* info */}
            <div className={`${styles.contact} ${styles.info}`}>
              <h3>Contact Info</h3>
              <div className={styles.infoBox}>
                <div>
                  <span>
                    <MdLocationOn />
                  </span>
                  <p>
                    Morigaon, Assam <span className={styles.saffron}>IN</span>
                    <span className={styles.white}>D</span>
                    <span className={styles.green}>IA</span>
                  </p>
                </div>
                <div>
                  <span>
                    <HiMail />
                  </span>
                  <a href="mailto:alalu75666@gmail.com" target="_blank" rel="noreferrer">alalu75666@gmail.com</a>
                </div>


                <div>
                  <span>
                    <AiFillPhone />
                  </span>
                  <a href="tel:+917061901868">+91 88223 68403</a>
                </div>

                <div>
                  <span>
                    <AiFillLinkedin />
                  </span>

                  <a href="https://www.linkedin.com/in/alal-uddin-066444206/" target="_blank" rel="noreferrer"> LinkedIn</a>

                </div>
                <div>
                  <span>
                    <AiFillGithub />
                  </span>
                  <a href="https://github.com/alalUDDIN123" target="_blank" rel="noreferrer"> Github</a>

                </div>

              </div>
            </div>

            {/* map  */}
            <div className={`${styles.contact} ${styles.map}`}>
              <Iframe
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=morigaon , kacharibori&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></Iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
