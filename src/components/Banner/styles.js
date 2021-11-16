import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
	bannerButton: {
		position: 'absolute',
		top: 'calc(55%)',
		left: '50%',
		textAlign: 'center',
		color: 'black',
		textDecoration: 'none',
		marginTop: '2rem',
	},
}));
