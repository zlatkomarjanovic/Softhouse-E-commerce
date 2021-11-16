import React from 'react';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Banner = () => {
	const classes = useStyles();
	return (
		<>
			<Typography className={classes.bannerText} align='center' variant='h2'>
				Welcome to our Online Electronics Store
			</Typography>

			<Button
				component={Link}
				to='/store'
				className={classes.bannerButton}
				variant='contained'
			>
				Store
			</Button>

			<img className={classes.banner} />
		</>
	);
};

export default Banner;
