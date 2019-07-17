const axios = require('axios');
const apiKey = process.env.Yelp_API_Key;

module.exports = {
  index,
  search,
  restaurantInfo
};

let cache = {}

async function restaurantInfo(req, res) {
  const { id } = req.params;
  try {
    const { data } = await axios.get(`https://api.yelp.com/v3/businesses/${id}`, { 
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
    return res.json(data)
  } catch (e) {
    res.status(400).json(e);
  }
}

async function index(req, res) {
  if (cache.index) {
    return res.json(cache.index)
  }
  try {
    const { data } = await axios.get('https://api.yelp.com/v3/businesses/search?location=AUSTIN,TX&term=vegan', { 
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
    cache.index = data.businesses.slice(0, 9)
    return res.json(cache.index);
  } catch (e) {
    res.status(400).json(e);
  }
}

async function search(req, res) {
  try {
    const { term } = req.query;
    if (cache[term]) {
      return res.json(cache[term])
    }
    const { data } = await axios.get(`https://api.yelp.com/v3/businesses/search?location=AUSTIN,TX&term=vegan,${term}`, { 
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
    cache[term] = data.businesses
    return res.json(cache[term]);
  } catch (e) {
    res.status(400).json(e);
  }
}

/*----- Helper Functions -----*/
