import React from 'react';
import { ShoppingCart } from '@material-ui/icons';
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	MenuItem,
	Menu,
	Typography,
} from '@material-ui/core';
import logo from '../../assets/commerce.png';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
	const classes = useStyles();
	const location = useLocation();

	return (
		<>
			<AppBar position='fixed' className={classes.appBar} color='inherit'>
				<Toolbar>
					<Typography
						component={Link}
						to='/store'
						cvariant='h6'
						className={classes.title}
						color='inherit'
					>
						<img
							src={logo}
							alt='Commerce.js'
							height='25px'
							className={classes.image}
						/>
						Online Store
					</Typography>
					<div className={classes.grow} />

					<div className={classes.grow} />
					<div>
						<Typography className={classes.navLink} component={Link} to='/'>
							Home
						</Typography>
					</div>
					<div>
						<Typography
							className={classes.navLink}
							component={Link}
							to='/store'
						>
							Store
						</Typography>
					</div>
					{(location.pathname === '/' || location.pathname === '/store') && (
						<div className={classes.button}>
							<IconButton
								component={Link}
								to='/cart'
								aria-label='Show cart items'
								color='inherit'
							>
								<Badge badgeContent={totalItems} color='secondary'>
									<ShoppingCart />
								</Badge>
							</IconButton>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
