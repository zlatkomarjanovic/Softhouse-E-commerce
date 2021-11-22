import React from 'react';
import {
	Typography,
	Card,
	CardContent,
	Grid,
	TextField,
	Button,
} from '@material-ui/core';
import './styles.js';
import useStyles from './styles';

const Contact = () => {
	const classes = useStyles();
	return (
		<div>
			<Card style={{ maxWidth: '550px', margin: '10rem auto' }}>
				<CardContent gutterBottom>
					<Typography variant='h4'>Don't hesitate to contact us</Typography>
					<Typography
						gutterBottom
						color='textSecondary'
						variant='body2'
						component='p'
					>
						Send us a message and our team will get back with the answer as soon
						as possible!
					</Typography>
					<form>
						<Grid container spacing={1}>
							<Grid xs={12} sm={6} item>
								<TextField
									placeholder='First Name'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} sm={6} item>
								<TextField
									placeholder='Last Name'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									type='email'
									placeholder='Email'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									type='number'
									placeholder='Phone Number'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									multiline
									rows={4}
									placeholder='Enter your message...'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid xs={12} item>
								<Button
									type='submit'
									variant='contained'
									color='primary'
									fullWidth
								>
									Submit
								</Button>
							</Grid>
						</Grid>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default Contact;
