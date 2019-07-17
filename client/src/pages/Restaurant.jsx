import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


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

    if (!restaurant) return <div>Loading</div>;
    console.log(restaurant);

    return (
      <div>{restaurant.name}</div>
    )
  }
}

export default withRouter(Restaurant)