import React from "react";
import styles from "../../assests/styles/contactme.module.css"
import { MdLocationOn } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { AiFillPhone, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Iframe from "react-iframe";


const ContactMe = () => {
  return (
    <>
      <section className={styles.contactMe} id="contact">
        <div className={styles.contactUs}>
          <h2 className={styles.title}>Contact Me</h2>
          <div className={styles.box}>
            {/* form  */}
            <div className={`${styles.contact} ${styles.form}`}>
              <h3>Send a Message</h3>
              <form action="">
                <div className={styles.formBox}>
                  <div className={styles.row50}>
                    <div className={styles.inputBox}>
                      <span>First Name</span>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>

                    <div className={styles.inputBox}>
                      <span>Last Name</span>
                      <input
                        type="text"
                        placeholder="Enter Your Last Name"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.row50}>
                    <div className={styles.inputBox}>
                      <span>Email</span>
                      <input
                        type="email"
                        placeholder="Enter your Email address"
                        required
                      />
                    </div>

                    <div className={styles.inputBox}>
                      <span>Mobile</span>
                      <input
                        type="number"
                        placeholder="Enter Your Mobile Number"
                      />
                    </div>
                  </div>

                  <div className={styles.row100}>
                    <div className={styles.inputBox}>
                      <span>Message</span>
                      <textarea
                        placeholder="Write your message here..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className={styles.row100}>
                    <div className={styles.inputBox}>
                      <input type="submit" value="SEND" />
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
                  <a href="tel:+917061901868">+91 60025 65574</a>
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
