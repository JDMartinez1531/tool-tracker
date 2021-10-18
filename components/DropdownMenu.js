import React from 'react';
import {
    MenuItem,
    Menu
} from "@mui/material";

const DropdownMenu = (anchorEL, setAnchorEL, label) => {

    const handleMenuClose = () => {
        setAnchorEL(null);
    };

    return (
        <Menu id='menu' onClose={handleMenuClose} anchorEl={anchorEL} open={Boolean(anchorEL)}>
            <MenuItem onClick={handleMenuClose}>Existing {(label === "My Job Sites") ? "Sites" : "Tools"}
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>Add New</MenuItem>
        </Menu>
    )
}

export default DropdownMenu;