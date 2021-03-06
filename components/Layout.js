import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  Badge,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import Head from 'next/head';
import React, { useContext } from 'react';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import { Store } from '../utils/Store';
// import Cookies from 'js-cookie';

export default function Layout({ title, children, description }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.9rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      // mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();
  // const darkModeChangeHandler = () => {
  //   dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
  //   const newDarkMode = !darkMode;
  //   Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  // };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Amazon 2.0` : 'Amazon 2.0'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link style={{ textDecoration: 'none' }}>
                <Typography className={classes.brand}>Amazon 2.0</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              {/* <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch> */}
              <NextLink href="/cart" passHref>
                <Link style={{ textDecoration: 'none' }}>
                  {cart.cartItems.length > 0 ? (
                    <Badge 
                    color="secondary"
                    badgeContent={cart.cartItems.length}
                    >Cart</Badge>
                  ) : (
                    'Cart'
                  )}
                </Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link style={{ textDecoration: 'none' }}>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Amazon.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
