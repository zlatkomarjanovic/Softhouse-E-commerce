import React from 'react';
import useStyles from './styles';
import { Container, Typography } from '@material-ui/core';

const Footer = () => {
	const classes = useStyles();
	return (
		<footer>
			<div className={classes.footerContainer}>
				<Typography variant='h5' className={classes.footerTitle}>
					Thank you for using our page
				</Typography>
				<Typography variant='h6' className={classes.subtitle}>
					Made using: React.js, Stripe.js, Commerce.js <br />
					Made by: Zlatko Marjanović
					<br />
				</Typography>
				<Typography className={classes.copyrightText}>
					© Copyright - All rights reserved
				</Typography>
			</div>
		</footer>
	);
};

export default Footer;
