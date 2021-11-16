import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
	footerContainer: {
		width: '100%',
		height: '15rem',
		backgroundColor: 'whitesmoke',
		marginTop: '5rem',
	},
	footerTitle: {
		left: '50%',
		textAlign: 'center',
		padding: '1rem',
	},
	subtitle: {
		fontSize: '15px',
		padding: '1rem',
	},
	copyrightText: {
		textAlign: 'center',
		fontSize: '10px',
		marginTop: '4rem',
	},
}));
