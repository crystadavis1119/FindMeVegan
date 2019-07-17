import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
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
const styles = theme => ({
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
  chip: {
    marginRight: 4,
    marginBottom: 4
  }
});

class PageLayout extends Component {
  state = {
    restaurants: [],
    search: ''
  }

  BASE_RESTAURANTS_URL = '/api/restaurants/';

  async getRestaurants() {
    const res = await fetch(this.BASE_RESTAURANTS_URL);
    const restaurants = await res.json() 
    return restaurants
  }

  async componentDidMount() {
    const restaurants = await this.getRestaurants()
    this.setState({ restaurants })
  }

  updateSearch = (e) => this.setState({
    search: e.target.value
  });

  async getResults() {
    const { search } = this.state;
    const res = await fetch(`${this.BASE_RESTAURANTS_URL}/search?term=${search}`);
    const restaurants = await res.json() 
    return restaurants;
  }

  onSubmitSearch = async () => {
    const restaurants = await this.getResults()
    this.setState({ restaurants })
  }

  render() {
    const { auth, classes } = this.props
    const { restaurants, search } = this.state;

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
                    value={search}
                    onChange={this.updateSearch}
                  />
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary" onClick={this.onSubmitSearch}>
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
                {restaurants.map(restaurant => (
                  <Grid key={restaurant.name} item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={restaurant.image_url}
                        title="Image title"
                        />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {restaurant.name}
                        </Typography>
                        <Typography>
                          {restaurant.location.display_address[0]}
                        </Typography>
                        <hr />
                        {restaurant.categories.map(category => (
                          <Chip key={category.title} label={category.title} className={classes.chip} />
                        ))}
                      </CardContent>
                      <CardActions>
                        <Button to={`/restaurant/${restaurant.id}`} component={Link} size="small" color="primary">
                          View
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
}

export default withStyles(styles)(PageLayout);