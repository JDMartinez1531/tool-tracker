import { useState } from "react";
import { MenuItem, Menu, Button } from "@mui/material";

const DropdownMenu = ({ label, href, menuLabel }) => {
	const [anchorEl, setAnchorEL] = useState(null);
	// const isBrowser = typeof window !== "undefined";
	const open = Boolean(anchorEl);

	const onClose = () => {
		setAnchorEL(null);
	};

	const handleClick = (e) => {
		setAnchorEL(e.currentTarget);
	};

	return (
		<>
			<Button sx={{ color: "white" }} onClick={handleClick}>
				{label}
			</Button>
			<Menu id="menu" onClose={onClose} anchorEl={anchorEl} open={open}>
				<MenuItem onClick={onClose}>Existing {menuLabel}</MenuItem>
				<MenuItem onClick={onClose}>Add New {menuLabel}</MenuItem>
			</Menu>
		</>)
	
};

export default DropdownMenu;
