import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { CssBaseline } from "@mui/material";
import { Link } from "react-scroll";
import rslLogo from "../img/rslLogo.png";
import "../Header/Header.css";


const pages = ["Home", "About", "Services", "Portfolio", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const navbarBg = {
    background:"linearGradient(to right, #ffffff 0%, #ab6b5542 100%)",
    backgroundColor: "linearGradient(to right, #ffffff 0%, #ab6b5542 100%)",
  }
const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <CssBaseline />
      <AppBar className="navbar-bg" position="fixed" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={rslLogo} className="logoo" height={60} />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{color: "#3A2A71"}}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none", },
                }}
              >
                {/* {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center"><Link to="" >{page}</Link></Typography>
                                    </MenuItem>
                                ))} */}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link className="a" to="home">
                      Home
                    </Link>
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link className="a" to="about">
                      About
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link className="a" to="services">
                      Services
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link className="a" to="portfolio">
                      Portfolio
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link className="a" to="contact">
                      Contact
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={rslLogo} height={60} />
            </Typography>
            <Box
              sx={{
                flexGrow: 2,
                justifyContent: "end",
                display: { xs: "none", md: "flex" },
              }}
            >
              {/* {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Link to="" >{page}</Link>
                                </Button>
                            ))} */}
              <Button
              variant="text"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link className="a" to="home">
                  Home
                </Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link className="a" to="about">
                  About
                </Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link className="a" to="services">
                  Services
                </Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link className="a" to="portfolio">
                  Portfolio
                </Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link className="a" to="contact">
                  Contact
                </Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Header;
