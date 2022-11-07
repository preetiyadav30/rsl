


import React, { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../Contact/Contact.css";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Contact = (props) => {
  // api part

  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setMessage] = useState("");
  const [candidates_resume, setcandidates_resume] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    formData.append("candidates_resume", candidates_resume);
    axios
      .post("http://localhost:6700/get_data", formData)
      .then((res) => {
        alert("File Upload success");
      })
      // .catch((err) => alert("message sent successfully"));
      .catch((err) => console.log("message sent successfully"));
  };

  // end api part
  return (
    <>
      <Box id="contact" sx={{ mb: "1%" }}>
        <Grid container>
          <Grid md={12} sx={{ marginTop: "1%", textAlign: "center" }} xs={12}>
            <Typography
              className="heading-contact"
              variant="text"
              sx={{ color: "black", textAlign: "center" }}
            >
              Contact Us
            </Typography>
          </Grid>
          <Grid md={3} xs={12}></Grid>
          <Grid md={6} xs={12}>
            <Typography variant="text" sx={{ color: "black" }}>
              <Box className="paragraph-all" sx={{ textAlign: "center" }}>
                You are always welcome to contact us if you have questions or
                need help or guidance.
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <div className="container mb-5">
        <div className="row ">
          <div className="col-md-1 col-xs-10"> </div>
          <div className="col-md-10 col-xs-10 card-contact ">
            <div className="row">
              <div className="col-md-8 col-xs-12">
                <div
                  id="map-container-google-10"
                  className="z-depth-1-half map-container-7"
                  style={{ textAlign: "center" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2644254629445!2d75.87022971418972!3d22.718411033329783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdafbd9cfb87%3A0x850ef5f2eda7b441!2sRSL%20SOFT%20TECH%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1666768502013!5m2!1sen!2sin"
                    // className="map"
                    height={400}
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="row pt-4">
                  <div className="col-md-4  col-xs-12 address-contact ">
                    <div classname="card-contact p-5  card-address">
                      <i class="bi bi-geo-alt ico-contact"></i>
                      <h4 style={{ paddingTop: "8%" }}>Our Address</h4>
                      <p>114,115 Milinda Manor RNT Marg Indore (MP), India</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-xs-12 address-contact ">
                    <div classname="card-contact p-3  card-address">
                      <i class="bi bi-envelope ico-contact"></i>
                      <h4 style={{ paddingTop: "8%" }}>Email Us</h4>
                      <p>contact@rslsofttech.com</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-xs-12 address-contact ">
                    <div classname="card-contact p-3 card-address ">
                      <i class="bi bi-telephone-fill ico-contact"></i>
                      <h4 style={{ paddingTop: "8%" }}>Call Us</h4>
                      <p>+918878086055</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-contact col-md-4 col-xs-12"
                style={{ textAlign: "center" }}
              >
                <div className=" p-2">
                  <form onSubmit={handleSubmit} id="contact-form">
                    <div className="messages" />
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-12">
                          <div
                            style={{ marginTop: "37px" }}
                            className="form-group icon-right-form-contact"
                          >
                            <i class="fas fa-user prefix grey-text iconf-contact"></i>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className=" input-form-contact"
                              value={name}
                              placeholder="Name"
                              onChange={(e) => setName(e.target.value)}
                              required="required"
                              data-error="Fullname is required."
                            />
                            <div className="help-block with-errors" />
                          </div>

                          <div className="form-group  icon-right-form-contact">
                            <i class="fas fa-envelope prefix grey-text iconf-contact"></i>{" "}
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className=" input-form-contact"
                              value={email}
                              placeholder="Email"
                              onChange={(e) => setEmail(e.target.value)}
                              required="required"
                              data-error="Valid email is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group  icon-right-form-contact">
                            <i class="bi bi-file-earmark-person-fill iconf-contact"></i>
                            <input
                              id="candidates_resume"
                              type="file"
                              name="candidates_resume"
                              className=" input-form-contact"
                              required="required"
                              data-error="Lastname is required."
                              onChange={(e) =>
                                setcandidates_resume(e.target.files[0])
                              }
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group  icon-right-form-contact">
                            <i class="bi bi-telephone-fill iconf-contact"></i>
                            <input
                              id="phone"
                              type="tel"
                              // pattern="[9-0]{3}-[0-9]{2}-[0-9]{3}"
                              maxLength={10}
                              minLength={10}
                              name="phone"
                              className="input-form-contact js-input-mobile"
                              value={phone}
                              placeholder="Mobile Number"
                              onChange={(e) => setphone(e.target.value)}
                              required="required"
                            />
                            <div className="help-block with-errors" />
                          </div>

                          <div className="form-group  icon-right-form-contact">
                            <i class="fas fa-pencil-alt prefix grey-text iconf-contact"></i>
                            <textarea
                              id="message"
                              name="message"
                              className=" input-form-contact"
                              value={message}
                              placeholder="message "
                              onChange={(e) => setMessage(e.target.value)}
                              rows={4}
                              required="required"
                              data-error="Please,leave us a message."
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div
                            className="col-md-12 mt-5"
                            style={{ textAlign: "center" }}
                          >
                            <Button
                              type="submit"
                              className="btn-contact "
                              defaultValue="Send message"
                            >
                              Submit
                            </Button>
                          </div>
                          <Box
                            md={12}
                            // className="col-md-12 mt-5"
                            style={{ textAlign: "center" }}
                          >
                            <Dialog
                              open={open}
                              TransitionComponent={Transition}
                              keepMounted
                              onClose={handleClose}
                              aria-describedby="alert-dialog-slide-description"
                            >
                              <DialogContent
                                onClose={handleClose}
                                severity="success"
                                sx={{
                                  width: "100%",
                                  backgroundColor: "#2E7D32",
                                  color: "white",
                                }}
                              >
                                <CheckCircleOutlinedIcon
                                  sx={{ mb: "5px", mr: "5px" }}
                                />
                                Message Send Successfully
                              </DialogContent>
                            </Dialog>
                          </Box>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;