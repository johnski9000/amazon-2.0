import { Button, Card, Grid, Link, List, ListItem, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import NextLink from 'next/link';
import useStyles from '../../utils/styles';
import Image from 'next/image';



export default function ProductScreen() {
    
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <Layout title={product.name} description={product.description} >
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link style={{ color: 'black', textDecoration: 'none', }} >
            <Typography style={{marginTop: 40}}><svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" style={{width:20, height: 20, marginRight: 10}}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
</svg>back to products</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1} style={{marginTop: 40}}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1" >{product.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Brand: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating: {product.rating} stars ({product.numReviews} reviews)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
            <Card>
                <List>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={6}><Typography>Price</Typography></Grid>
                            <Grid item xs={6}><Typography>${product.price}</Typography></Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={6}><Typography>Status</Typography></Grid>
                            <Grid item xs={6}><Typography>{product.countInStock>0?'In Stock':'Unavailable'}</Typography></Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Button fullWidth variant='contained' color='primary'>
                            Add to cart
                        </Button>
                    </ListItem>
                </List>
            </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
