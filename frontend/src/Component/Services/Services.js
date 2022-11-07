import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../Services/Services.css";

const Services = () => {
  return (
    <>
      <Box id="services" sx={{ mt: "10%", mb: "4%" }}>
        <Grid container>
          <Grid md={12} sx={{ marginTop: "1%", textAlign: "center"  }} xs={12}>
            <Typography
              variant="text"
              className="heading-service"
              sx={{ color: "black", textAlign: "center" }}
            >
              Check our Services
            </Typography>
          </Grid>
          <Grid md={3} xs={12}></Grid>
          <Grid md={6} xs={12}>
            <Typography variant="text" sx={{ color: "black", margintop: "1%" }}>
              <Box className="paragraph-all" sx={{ textAlign: "center" }}>
                Our Aim is to serve the best services to our costomers, customer
                satisfaction is our top priority, and You are going to love our
                services.
              </Box>
            </Typography>
          </Grid>
        </Grid>

       
      </Box>
     

      <main className="page-content-service">
        <div id="Android" className="card-service">
          <div  className=" content-service">
            <h2 className="title-service">Android Development</h2>
            <p className="copy-service">
              Advancing technology has resulted in an even more advancing
              competition. As you want your business to succeed, we work on
              assisting you by making well heeled mobile apps. We craft native
              as well as hybrid apps for a variety of platforms such Google
              Android and Microsoft Windows.
            </p>
          </div>
        </div>
        <div className="card-service">
          <div className=" content-service">
            <h2 className="title-service">IOS Development</h2>
            <p className="copy-service">
              Advancing technology has resulted in an even more advancing
              competition. As you want your business to succeed, we work on
              assisting you by making well heeled mobile apps. We craft native
              as well as hybrid apps for a variety of platforms such as Apple
              iOS.
            </p>
          </div>
        </div>
        <div className="card-service">
          <div className=" content-service">
            <h2 className="title-service">Web Design</h2>
            <p className="copy-service">
              We Designing is simple, elegant and worthy all at the same time
              because it’s not only about the look or feel of a website or an
              application but about how it all works.
            </p>
          </div>
        </div>
   
        <div className="card-service">
          <div className=" content-service ">
            <h2 className="title-service">Web Development</h2>
            <p className="copy-service">
              A website acts as the mirror to the soul of a business. And we bet
              no one knows that better than us. With the advent of booming
              internet, we have made ourselves well equipped with the growing
              online needs too. We are driven forward by creating websites that
              make you work more quickly and efficiently.
            </p>
          </div>
        </div>
        <div className="card-service">
        <div className=" content-service">
                <h2 className="title-service">Graphic Design</h2>
                <p className="copy-service">
                  Designing is simple, elegant and worthy all at the same time
                  because it’s not only about the look or feel of a website or
                  an application but about how it all works.
                </p>
              </div>
        </div>
        <div className="card-service">
        <div className=" content-service">
                <h2 className="title-service">QA Solution</h2>
                <p className="copy-service">
                  Full cycle testing embedded with the promise of quality
                  assurance for web and mobile apps is what we have our hands
                  tied on. Testing is not only about finding bugs or cleaning
                  code but it is about looking into every possible detail of a
                  system and ensure that it meets the most extreme quality
                  standards.
                </p>
              </div>
        </div>
      </main>
    </>
  );
};

export default Services;
{
  /* <button className="btn-service">Book Now</button> */
}
