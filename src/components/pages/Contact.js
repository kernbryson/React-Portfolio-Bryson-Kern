import React from "react";

const styles = {
  containerStyles: {
    width: "1000px",
    height:"60vh",
    color:"white"
  },
  divStyles: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "	#416a59",
  },

};

export default function Contact() {
  return (
    <div style={styles.divStyles} class="contactcontainer">
      <section class="mb-4 w-500 " style={styles.containerStyles}>
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          Contact Me
        </h2>

        <p class="text-center w-responsive mx-auto mb-5 h3 ">
          Do you have any questions? Please do not hesitate to contact me
          directly. I will come back to you within a matter of hours for your
          inquiry.
        </p>

        <div class="row test">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="https://formsubmit.co/1710c7e7c3d3c27a730533f295e38925 "
              method="POST"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                    />
                    <label for="name" class="">
                      Your name
                    </label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                    />
                    <label for="email" class="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                    />
                    <label for="subject" class="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
              <div class="text-center text-md-left">
                <button class="btn btn-dark" type="submit">
                  Send
                </button>
              </div>
              <div class="status"></div>
            </form>
          </div>

          <div class="col-md-3 text-center extrainfo">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Loganville, GA 30052, USA</p>
              </li>

              <li>
                <i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
              </li>

              <li>
                <i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>Kernbryson@yahoo.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
