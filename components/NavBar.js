import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import NavLink from "../components/NavLink";
import DropdownMenu from "../components/DropdownMenu";

const NavBar = ({ headersData }) => {
	return (
		<Toolbar
			component="nav"
			sx={{
				display: { xs: "none", md: "flex" },
			}}>
			<Stack alignItems="baseline" direction="row" spacing={4}>
				{headersData.map(({ label, href, dropDown, menuLabel }) => (
					<div key={label}>
						{dropDown ? (
							<DropdownMenu
								label={label}
								href={href}
								menuLabel={menuLabel}
							/>
						) : (
							<NavLink
								href={href}
								variant="button"
								sx={{ color: "white" }}>
								{" "}
								{label}
							</NavLink>
						)}
					</div>
				))}
			</Stack>
		</Toolbar>
	);
};

export default NavBar;
