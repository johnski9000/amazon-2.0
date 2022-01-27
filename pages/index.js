import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Layout from '../components/Layout';
import data from '../utils/data';
import Image from 'next/image';
import { ClassNames } from '@emotion/react';
import NextLink from 'next/link';


export default function Home() {

  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
              <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia 
                  style={{height: 400}}
                  component="img" 
                  image={product.image} 
                  title={product.name}
                  
                  ></CardMedia>
                  <CardContent>
                    <Typography style={{fontWeight: 700}}>
                      {product.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography style={{paddingLeft: 8}}>
                    ${product.price}
                    <Button size="small" color="primary">Add to cart</Button>
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
            ))}
        </Grid>
      </div>
    </Layout>
  );
}
