import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import NavLink from "../components/NavLink";
import DropdownMenu from "../components/DropdownMenu";

const NavBar = ({ headersData, setAnchorEL, anchorEL }) => {

	const handleOpenMenu = e => {
		setAnchorEL(e.currentTarget);
	};

	return (
		<Toolbar
			component="nav"
			sx={{
				display: { xs: "none", md: "flex" },
			}}>
			<Stack direction="row" spacing={4}>
				{headersData.map(({ label, href, dropDown }) => (
					<>
						<NavLink
							key={label}
							href={href}
							onClick={handleOpenMenu}
							variant="button"
							sx={{ color: "white" }}>
							{" "}
							{label}
						</NavLink>

						{dropDown && <DropdownMenu setAnchorEL={setAnchorEL} label={label} anchorEL={anchorEL} />}
					</>
				))}
			</Stack>
		</Toolbar>
	);
};

export default NavBar;