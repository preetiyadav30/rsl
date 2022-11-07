import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import "../Home/Home.css";
import LanguageIcon from "@mui/icons-material/Language";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DescriptionIcon from "@mui/icons-material/Description";
import PublicIcon from "@mui/icons-material/Public";
import SourceIcon from "@mui/icons-material/Source";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";


const cardCount = [
  {
    id: "1",
    icon: <SentimentSatisfiedAltIcon className="icon-count1" />,
    title: " 150",
    textt: "Happy Clients",
  },
  {
    id: "1",
    icon: <SourceIcon className="icon-count1" />,
    title: " 250",
    textt: "Projects",
  },
  {
    id: "1",
    icon: <HeadsetMicIcon className="icon-count1" />,
    title: " 1463",
    textt: "Hours Of Support",
  },
  {
    id: "1",
    icon: <AccessibilityNewIcon className="icon-count1" />,
    title: " 25",
    textt: "Hard Workers",
  },
];

const cardContent = [
  {
    id: "1",
    icon: <LanguageIcon className="icon" />,
    title: " We believe in customer satisfaction",
    textt:
      "We believe in great service to our customers at an affordable price and customer experiences and customer satisfaction.",
  },
  {
    id: "1",
    icon: <DescriptionIcon className="icon" />,
    title: "A team that makes a difference",
    textt:
      "The zealous and passionate team is what drives us ahead and strengthens our rootsYour success, Our priority. Tell us what you need! We love to talk! Contact-",
  },
  {
    id: "1",
    icon: <LanguageIcon className="icon" />,
    title: " We believe in customer satisfaction",
    textt:
      "We believe in great service to our customers at an affordable price and customer experiences and customer satisfaction.",
  },
  {
    id: "1",
    icon: <PublicIcon className="icon" />,
    title: " We deliver Value",
    textt:
      "We aim at complete Customer Satisfaction and are committed to deliver what we promise to and ensure optimum value by delivering Quality practice and Flourishing results.",
  },
];

const Home = () => {
  return (
    <>
      <Box id="home"></Box>
      <Box container className="firefly">
        <Box className="overlay">
          <Grid container sx={{ paddingTop: "10%" }}>
            <Grid md={1} xs={12}></Grid>
            <Grid md={7} xs={12} className="wellcome-to">
              <Typography className=" heading-all" variant="h5">
                Welcome to RSL Soft Tech Pvt.Ltd.
              </Typography>

              <Typography
                sx={{
                  fontSize: "20px",
                  background: "#dedee0ad",
                }}
                variant="text"
              >
                To evolve hand-in-hand with technology, you need to take it up
                to the top-gear. blend your rough thoughts with our solutions
                and discover innovation.
              </Typography>
            </Grid>
            <Grid md={4} xs={12}></Grid>

            <Grid md={1}></Grid>
            <Grid
              md={7}
              xs={12}
              className="wellcome-to-para"
              sx={{
                fontSize: "20px",
                background: "#dedee0ad",
              }}
            ></Grid>
            <Grid md={4}></Grid>

            <Grid md={1}></Grid>
            <Grid md={7} xs={12} className="wellcome-to-btn">
              <Button href="#web" variant="outline" className="btn-get-started">
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box>
        <Box>
          <Grid
            container
            sx={{ marginLeft: "5%", marginBottom: "1%", width: "90%" }}
          >
            {cardCount.map((item, index) => (
              <Grid
                key={index}
                id="homes"
                md={3}
                xs={12}
                sx={{ padding: "10px" }}
              >
                <Box className="count-iconn">
                  <span> {item.icon}</span>
                </Box>
                <Card className="card1" sx={{ maxWidth: 300 }}>
                  <Grid container>
                    <Grid md={12} xs={12}>
                      <CardContent>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography
                            className="title"
                            sx={{ paddingBottom: "12px", fontSize: "30px" }}
                            variant="text"
                          >
                            {item.title}
                          </Typography>
                          <br />
                          <Typography
                            id="web"
                            className="textt"
                            variant="text"
                            color="text.secondary"
                          >
                            {item.textt}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <div>
        <div className="row1-container">
          <div className="box box-down cyan">
            <h2 className="home-heading">
              We believe in customer satisfaction
            </h2>
            <p className="home-para">
              We believe in great service to our customers at an affordable
              price and customer experiences and customer satisfaction.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-supervisor.svg"
              alt
            />
          </div>
          <div className="box red">
            <h2 className="home-heading">A team that makes a difference</h2>
            <p className="home-para">
              The zealous and passionate team is what drives us ahead and
              strengthens our rootsYour success, Our priority. Tell us what you
              need! We love to talk! Contact-
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-team-builder.svg"
              alt
            />
          </div>
          <div className="box box-down blue">
            <h2 className="home-heading">
              We believe in customer satisfaction
            </h2>
            <p className="home-para">
              We believe in great service to our customers at an affordable
              price and customer experiences and customer satisfaction.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-calculator.svg"
              alt
            />
          </div>
        </div>
        <div className="row2-container">
          <div className="box orange">
            <h2 className="home-heading">We deliver Value</h2>
            <p className="home-para">
              We aim at complete Customer Satisfaction and are committed to
              deliver what we promise to and ensure optimum value by delivering
              Quality practice and Flourishing results.
            </p>
            <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
