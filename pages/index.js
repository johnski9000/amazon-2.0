import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import db from '../utils/db';
import Product from '../models/Product';


export default function Home(props) {
  const { products } = props;
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {products.map((product) => (
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

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}