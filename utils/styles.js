import { makeStyles } from '@material-ui/styles';
import { tableBodyClasses } from '@mui/material';

const useStyles = makeStyles({
    navbar : {
        backgroundColor: '#2E3B55',
        '& a' : {
            color:'ffffff',
            marginLeft: 10,
        },
    },
    main: {
        minHeight: "80vh",

    },
    footer: {
        textAlign: "center"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop:'30'
      },
    brand: {
        fontWeight: "bold",
        fontSize: "1.5rem",
        color: "white"
    }
});

export default useStyles