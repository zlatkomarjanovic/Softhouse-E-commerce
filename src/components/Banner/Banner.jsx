import React from 'react';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import { Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Banner = () => {
	const classes = useStyles();
	return (
		<>
			<Container className={classes.bannerContainer} maxWidth='lg'>
				<Typography className={classes.bannerText} align='center' variant='h2'>
					Welcome to our Electronics Store
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
			</Container>
		</>
	);
};

export default Banner;
