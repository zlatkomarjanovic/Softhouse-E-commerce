import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	bannerContainer: {
		margin: '0',
		padding: '0',
		width: '100%',
		display: 'flex',
	},

	banner: {
		backgroundImage:
			"linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://pbs.twimg.com/media/Dy0yT1EWwAYhPfk.jpg')",
		backgroundSize: 'cover',
		width: '100%',
		height: '100vh',
		objectFit: 'cover',
	},
	bannerText: {
		position: 'absolute',
		top: 'calc(50% - 24px)',
		left: '0',
		textAlign: 'center',
		width: '100%',
		color: 'white',
		fontWeight: 'bold',
	},
}));
