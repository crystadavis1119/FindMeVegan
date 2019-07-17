import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '8%'
  },
  title: {
    fontSize: 20,
    margin: 15,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,
  },
  root: {
    width: '80%',
    margin: '0 auto',
    marginBottom: '10%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});


class Restaurant extends Component {
  state = {
    restaurant: null,
  }

  BASE_RESTAURANTS_URL = '/api/restaurants/';

  async componentDidMount() {
    const { match } = this.props;
    const restaurantId = match.params.id;
    const response = await fetch(`${this.BASE_RESTAURANTS_URL}/${restaurantId}`);
    const restaurant = await response.json();
    this.setState({ restaurant });
  }

  render() {
    const { restaurant } = this.state;
    const { classes } = this.props;

    if (!restaurant) return <div>Loading</div>;
    console.log(restaurant);


    return (
      <div>
        <div className={classes.container}>
          <CardContent>

            <CardMedia
              className={classes.media}
              image={restaurant.image_url}
            />
            <br />

            <Typography variant="h3" component="h2">
              {restaurant.name}
            </Typography>

            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {restaurant.location.display_address}
            </Typography>
            <hr />

          </CardContent>
        </div>
        <div className={classes.root}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Contact Information</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {restaurant.display_phone}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Hours</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {restaurant.hours.open}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>More Restaurant Info</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <a href={restaurant.url}>Visit {restaurant.name} on Yelp here</a>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

        </div>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(Restaurant))