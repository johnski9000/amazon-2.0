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
        textAlign: "center",
        borderTopStyle: "solid",
        borderTopWidth: 1,
        borderTopColor: "#D8D8D8",
        marginTop: 50,
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: "#F5F5F5"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop:'30'
      },
    brand: {
        fontWeight: "bold",
        fontSize: "1.5rem",
        color: "white",
        fontFamily: "raleway"
    },
    grow: {
        flexGrow: 1
    },
    href: {
        color: "white",
        fontSize: "Large"
    },
    section: {
        marginTop: 10,
        marginBottom: 10,
    }
});

export default useStyles