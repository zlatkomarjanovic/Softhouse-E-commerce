import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({
	cart,
	handleUpdateCartQty,
	handleEmptyCart,
	handleRemoveFromCart,
}) => {
	const classes = useStyles();

	const EmptyCart = () => (
		<div style={{ justifyContent: 'center' }}>
			<img
				style={{ top: '50%', left: '50%' }}
				src='https://cdn.dribbble.com/users/844846/screenshots/2981974/empty_cart_800x600_dribbble.png'
			/>
			<Typography
				style={{ height: '100vh', textAlign: 'center' }}
				variant='subtitle1'
			>
				<Link to='/' className={classes.link}>
					Back to the store!
				</Link>
			</Typography>
		</div>
	);

	const FilledCart = () => (
		<>
			<Grid container spacing={3}>
				{cart.line_items.map((item) => (
					<Grid item xs={12} sm={4} key={item.id}>
						<CartItem
							item={item}
							handleUpdateCartQty={handleUpdateCartQty}
							handleRemoveFromCart={handleRemoveFromCart}
						/>
					</Grid>
				))}
			</Grid>
			<div className={classes.cardDetails}>
				<Typography variant='h4'>
					Subtotal: {cart.subtotal.formatted_with_symbol}
				</Typography>
				<div>
					<Button
						className={classes.emptyButton}
						size='large'
						type='button'
						variant='contained'
						color='secondary'
						onClick={handleEmptyCart}
					>
						Empty Cart
					</Button>
					<Button
						className={classes.checkoutButton}
						size='large'
						type='button'
						variant='contained'
						color='primary'
						component={Link}
						to='/checkout'
					>
						Checkout
					</Button>
				</div>
			</div>
		</>
	);

	if (!cart.line_items) return 'Loading...';

	return (
		<Container style={{ marginBottom: '2rem' }}>
			<div className={classes.toolbar} />
			<Typography className={classes.title} variant='h3' gutterBottom>
				Your Shopping Cart
			</Typography>
			{!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
		</Container>
	);
};

export default Cart;
