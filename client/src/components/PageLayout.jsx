import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import AppBar from '@material-ui/core/AppBar';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Toolbar from '@material-ui/core/Toolbar';

// function MadeWithLove() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Built with love by the '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Material-UI
//       </Link>
//       {' team.'}
//     </Typography>
//   );
// }
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const foods = [
  {
  type: 'cheeseburger', 
  name: 'Campfire Burger',
  location: 'Plow Burger',
  image: '',
  description: 'Beyond Burger patty, cheese, pickles, mayo, crispy fried shoestring onions, barbecue sauce'
  },
  {
    type: 'pizza', 
    name: 'Meat Out',
    location: "Li'l Nonna's",
    image: '',
    description: 'Beeteroni, Italian Seitan Sausage, Smokey Tempeh (organic tomato sauce and housemade vegan mozzarella)'
  },
  {
    type: 'chicken sandwich', 
    name: 'Spicy Boi',
    location: 'Sundaze',
    image: '',
    description: 'Curry, habanero no-frickin chicken sandwich on a Hawaiian roll'
  },
]

export default function PageLayout({ auth }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {auth && (
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Find Me Vegan
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Find your favorite vegan food in ATX
                <TextField
                  id="filled-full-width"
                  label="SEARCH"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  variant="filled"
                  type='search'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Let's Go!
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {foods.map(food => (
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={food.image}
                      title="Image title"
                      />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {food.name} |
                      </Typography>
                      <Typography>
                        {food.location}
                        <hr />
                        {food.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      )}
    </React.Fragment>
  );
}