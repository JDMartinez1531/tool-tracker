import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import NavLink from "../components/NavLink";

const NavBar = ({ headersData }) => {
	return (
		<Toolbar
			component="nav"
			sx={{
				display: { xs: "none", md: "flex" },
			}}>
			<Stack direction="row" spacing={4}>
				{headersData.map(({ label, href, dropDown }) => (
					<NavLink
						key={label}
						href={href}
						variant="button"
						sx={{ color: "white" }}>
						{" "}
						{label}
					</NavLink>
          // (dropDown && <Menu />)
				))}
			</Stack>
		</Toolbar>
	);
};

export default NavBar;