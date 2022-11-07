import { Box, Button, CssBaseline } from "@mui/material";
import React from "react";

import { Grid, Typography } from "@mui/material";
import "../Footer/Footer.css";
import { Link } from "react-scroll";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const headings = {
  color: "black",
  fontWeight: "bold",
  fontSize: "20px",
};

const paraAddress = {
  color: "#3C2317",
  fontWeight: "200",
};
const Footer = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <CssBaseline />
      <Box className="allfooter">
        <Box>
          <Box className="footer">
            <Grid container>
              <Grid md={3} xs={12} sx={{ p: "3%" }}>
                <Typography variant="text" sx={headings}>
                  RSL Soft Tech Pvt.Ltd.
                </Typography>

                <List component="nav" aria-label="primary mailbox folder">
                  <ListItemText sx={{ color: "black" }}>
                    <Typography variant="text">
                  
                      114,115 Milinda Manor RNT Marg Indore (MP), India
                    </Typography>
                  </ListItemText>
                  <ListItemText sx={{ color: "black" }}>
                    <Typography variant="text">Phone: +918878086055</Typography>
                  </ListItemText>
                  <ListItemText sx={{ color: "black" }}>
                    <Typography variant="text">
                     
                      Phone: +919754317322
                    </Typography>
                  </ListItemText>
                </List>
              </Grid>
              <Grid
                md={3}
                className="address"
                xs={12}
                sx={{ pt: "3%", pl: "5px" }}
              >
                <Box sx={{ width: "100%", maxWidth: 360, textAlign: "start" }}>
                  <Typography variant="text" sx={headings}>
                    Usefull Links
                  </Typography>
                  <List component="nav" aria-label="primary mailbox folder">
                    <ListItemText sx={{ color: "white" }}>
                      <Link
                        sx={{ color: "white" }}
                        className="afooter"
                        to="home"
                      >
                        > Home
                      </Link>
                    </ListItemText>
                    <ListItemText sx={{ color: "white" }}>
                      <Link
                        sx={{ color: "white" }}
                        className="afooter"
                        to="about"
                      >
                        > About us
                      </Link>
                    </ListItemText>
                    <ListItemText>
                      <Link className="afooter" to="services">
                        > Services
                      </Link>
                    </ListItemText>
                    <ListItemText>
                      <Link className="afooter" to="portfolio">
                        > Portfolio
                      </Link>
                    </ListItemText>

                    <ListItemText>
                      <Link className="afooter" to="contact">
                        > Contact
                      </Link>
                    </ListItemText>
                  </List>
                </Box>
              </Grid>
              <Grid md={2} xs={12} sx={{ pt: "3%", pl: "5px" }}>
                <Box sx={{ width: "100%", maxWidth: 360 }}>
                  <Typography variant="text" sx={headings}>
                    Our Services
                  </Typography>
                  <List component="nav" aria-label="secondary mailbox folder">
                    <ListItemText>
                      <Link className="afooter">Android Development</Link>
                    </ListItemText>
                    <ListItemText>
                      <Link className="afooter">IOS Development</Link>
                    </ListItemText>
                    <ListItemText>
                      <Link className="afooter">Web Design</Link>
                    </ListItemText>
                    <ListItemText>
                      <Link className="afooter">Web Development</Link>
                    </ListItemText>
                    <ListItemText>
                      <Link className="afooter">Graphic Design</Link>
                    </ListItemText>
                    <ListItemText>
                      <Link className="afooter">QA Solurion</Link>
                    </ListItemText>
                  </List>
                </Box>
              </Grid>

              <Grid md={4} xs={12} sx={{ p: "3%" }}>
                <Typography variant="text" sx={headings}>
                  Get in touch
                </Typography>

                <List component="nav" aria-label="primary mailbox folder">
                  <ListItemText sx={{ color: "black" }}>
                    <Typography variant="text">
                      Email : contact@rslsofttech.com
                    </Typography>
                  </ListItemText>
                  <ListItemText sx={{ color: "black" }}>
                    <Typography variant="text">
                      Email : hr@rslsofttech.com
                    </Typography>
                  </ListItemText>
                  <ListItemText sx={{ color: "black" }}>
                    
                     <FacebookIcon /> <WhatsAppIcon  /> <LinkedInIcon />
                    
                  </ListItemText>
                </List>
              </Grid>
            </Grid>
            <Box sx={{ pb: "2%", pt: "2%" }}>
              <Box className="afterfooter">
                <Grid container>
                  <Grid md={6} className="webkit-footer" xs={12}>
                    <Typography variant="text" sx={paraAddress}>
                      © Copyright 
                       <Link to="home" sx={{ cursor: "pointer" }}>
                        
                         RSL Soft Tech Pvt.Ltd.
                      </Link>
                      All Rights Reserved
                    </Typography>
                  </Grid>
                  <Grid md={6} className="webkit-footer" xs={12}>
                    <Typography variant="text" sx={paraAddress}>
                      Designed by RSL Soft Tech Pvt.Ltd.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
