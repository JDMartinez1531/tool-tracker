import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Drawer,
	MenuItem,
	Menu
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: "#333333",
		paddingRight: "50px",
		"@media (max-width: 960px)": {
			paddingLeft: 0,
		},
	},
	logo: {
		// textAlign: "left",
	},
	menuButton: {
		fontFamily: "Open Sans, sans-serif",
		fontWeight: 700,
		color: "white",
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
	drawerContainer: {
		padding: "20px 30px",
	},
	drawerPaper: {
		background: "black",
		color: "aliceblue",
	},
}));

export default function Header() {
	const { header, logo, menuButton, toolbar, drawerContainer, drawerPaper } =
		useStyles();

	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});

	const [anchorEL, setAnchorEL] = useState(null);

	const handleOpenMenu = e => {
		setAnchorEL(e.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEL(null);
	};

	const { mobileView, drawerOpen } = state;

	const headersData = [
		{
			label: "Home",
			href: "/",
			showLink: true,
		},
		// {
		// 	label: "Home",
		// 	href: "/dashboard",
		// 	showLink: true,
		// },
		{
			label: "Sign In",
			href: "/signin",
			showLink: true,
		},
		{
			label: "My Job Sites",
			href: "/myjobs",
			showLink: true,
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

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 960
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({
					...prevState,
					mobileView: false,
				}));
		};

		setResponsiveness();

		window.addEventListener("resize", () => setResponsiveness());
	}, []);

	const displayDesktop = () => {
		return (
			<Toolbar className={toolbar}>

				<div>{getMenuButtons()}</div>
			</Toolbar>
		);
	};

	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }));
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }));

		return (
			<Toolbar>
				<IconButton
					{...{
						edge: "start",
						color: "inherit",
						"aria-label": "menu",
						"aria-haspopup": "true",
						onClick: handleDrawerOpen,
					}}
					size="large">
					<MenuIcon />
				</IconButton>

				<Drawer
					{...{
						anchor: "left",
						open: drawerOpen,
						onClose: handleDrawerClose,
						classes: { paper: drawerPaper },
					}}>
					<div className={drawerContainer}>{getDrawerChoices()}</div>
				</Drawer>

				{/* <div>{memloklogo}</div> */}
			</Toolbar>
		);
	};

	const getDrawerChoices = () => {
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }));
		return headersData.map(({ label, href, showLink, decorator }) => {
			return (
				showLink && (
					<Link
						{...{
							href: href,
							key: label,
							as: decorator,
						}}>
						<MenuItem onClick={handleDrawerClose}>{label}</MenuItem>
					</Link>
				)
			);
		});
	};

	// const memloklogo = (
	// 	<Image
	// 		className={logo}
	// 		src="/img/memlok4-main.png"
	// 		alt="Logo"
	// 		width={160}
	// 		height={70}
	// 	/>
	// );

	const getMenuButtons = () => {
		return headersData.map(({ label, href, showLink, decorator }) => {
			return (
				showLink && (
					<Link
						{...{
							key: label,
							href: href,
							as: decorator,
						}}>
						<>
							<Button
								className={menuButton}
								onClick={handleOpenMenu}
								aria-controls='menu'
							>
								{label}
							</Button>

							<Menu id='menu' onClose={handleMenuClose} anchorEl={anchorEL} open={Boolean(anchorEL)}>
								<MenuItem onClick={handleMenuClose}>Existing {(label === "My Job Sites") ? "Sites" : "Tools"}
								</MenuItem>
								<MenuItem onClick={handleMenuClose}>Add New</MenuItem>
							</Menu>

							{/* This below is the code that we're trying to implement but it's not working properly */}
							{/* {
								((label === "My Job Sites") || (label === "My Tools")) ?
									<Menu id='menu' onClose={handleMenuClose} anchorEl={anchorEL} open={Boolean(anchorEL)}>
										<MenuItem onClick={handleMenuClose}>Existing {(label === "My Job Sites") ? "Sites" : "Tools"}
										</MenuItem>
										<MenuItem onClick={handleMenuClose}>Add New</MenuItem>
									</Menu>
									:
									null
							} */}
						</>
					</Link>
				)
			);
		});
	};

	return (
		<header>
			<AppBar position="static" className={header}>
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
		</header>
	);
}
