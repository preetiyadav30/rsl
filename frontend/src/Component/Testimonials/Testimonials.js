import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box, CssBaseline } from "@mui/material";
import hr from "../img/hr.jpeg";
import lokeshsir from "../img/lokeshsir.png";
import "../Testimonials/Testimonials.css";
const Testimonials = () => {
  return (
    <>
      <Box>
        <Grid container className="testimonial-center">
          <Grid

            md={12}
            sx={{ p: "10%" }}
            xs={12}
          >
            <Box className="testimonial_slider_2 testi">
              <Box className="testi2">
                <input
                  type="radio"
                  name="slider_2"
                  id="slide_2_1"
                  defaultChecked
                />
                <input type="radio" name="slider_2" id="slide_2_2" />

                <Box className="boo_inner clearfix">
                  <Box className="slide_content">
                    <Box className="testimonial_2">
                      <Grid container>
                        <Grid md={3} xs={3}></Grid>
                        <Grid
                          sx={{ pt: "4%",pb:"2%" }}
                          md={4}
                          xs={6}
                        >
                          <Box

                          >
                            <img
                              className="testi-profile"
                              src={lokeshsir}

                            />
                          </Box>
                        </Grid>

                      </Grid>
                      <Box className="author_2">
                        <Typography  variant="text" className="heading-testi">
                          -- Lokesh Panchal --
                        </Typography><br/>
                        <span className="subheding">Ceo & Founder</span>
                      </Box>
                      <Box className="content_2 testimonial">
                        <Grid container>
                          <Grid md={3} xs={12}></Grid>
                          <Grid md={6} xs={12}>

                            <Box>
                              <Typography
                                variant="text"
                                className="para-testi testimonial"
                              >
                                “ Your work is going to fill a large part of
                                your life, and the only way to be truly
                                satisfied is to do what you believe is great
                                work. And the only way to do great work is to
                                love what you do. ”
                              </Typography>
                            </Box>
                            {/* <Box sx={{textAlign:"end"}}>   <span style={{fontSize:"20px",}}>”</span></Box> */}
                          </Grid>
                        </Grid>
                      </Box>

                   
                    </Box>
                  </Box>
                  <Box className="slide_content">
                    <Box className="testimonial_2">
                      <Grid container>
                        <Grid md={3} xs={3}></Grid>

                        <Grid
                          sx={{  pt: "4%", pb: "2%" }}
                          md={4}
                          xs={6}
                        >
                          <Box
                            sx={{

                            }}
                          >
                            <img
                              className="testi-profile"
                              src={hr}

                            />
                          </Box>
                        </Grid>

                      </Grid>
                      <Box className="author_2">
                        <Typography variant="text" className="heading-testi">
                          -- Shweta Panchal --
                        </Typography><br/>
                        <span className="subheding">HR Manager</span>
                      </Box>
                      <Box className="content_2">
                        <Grid container>
                          <Grid md={3} xs={12}></Grid>

                          <Grid md={6} xs={12}>

                            <Box>
                              <Typography
                                variant="text"
                                className="para-testi testimonial"
                              >
                                “ You don’t need to be a genius or a visionary,
                                or even a college graduate for that matter, to
                                be successful. You just need framework and a
                                dream. ”
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                      
                    </Box>
                  </Box>

                </Box>
                <Box id="controls" sx={{marginLeft:"34px"}}>
                  <label htmlFor="slide_2_1" />
                  <label htmlFor="slide_2_2" />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Testimonials;
