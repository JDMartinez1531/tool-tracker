import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import ExploreIcon from '@mui/icons-material/Explore';
import NavLink from "../components/NavLink";
import NavBar from "../components/NavBar";


const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const headersData = [
  {
    label: "Home",
    href: "/",
    showLink: true,
    dropDown: false,
  },
  {
    label: "Sign In",
    href: "/signin",
    showLink: true,
  },
  {
    label: "My Job Sites",
    href: "/myjobs",
    showLink: true,
    dropDown: true,
  },
  {
    label: "My Tools",
    href: "/mytools",
    showLink: true,
  },
  {
    label: "Log Out",
    href: "/api/signout",
    showLink: true,
  },
];

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: `flex`, justifyContent: `space-between` }}
          >
            <IconButton edge="start" aria-label="home">
              <NavLink activeClassName="active" href="/">
                <ExploreIcon
                  sx={{
                    color: (theme) => theme.palette.common.white,
                  }}
                  fontSize="large"
                />
              </NavLink>
            </IconButton>

            <NavBar headersData={headersData} />
          </Container>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default Header;