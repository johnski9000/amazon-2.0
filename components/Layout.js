import { AppBar, Container, Link, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/styles';
import { makeStyles } from '@material-ui/styles';
import NextLink from 'next/link';

export default function Layout({ title, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title? `${title} - Amazon 2.0` : "Amazon 2.0"}</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link style={{ textDecoration: 'none', }}>
              <Typography className={classes.brand}>Amazon 2.0</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link className={classes.href} style={{textDecoration: 'none'}}>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link className={classes.href} style={{textDecoration: 'none'}}>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Amazon.</Typography>
      </footer>
    </div>
  );
}
