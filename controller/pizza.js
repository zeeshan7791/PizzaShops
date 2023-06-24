
const axios = require("axios");
async function testYelp(
    searchTerm,
    place,
  ) {
    try {
     const apiKey='yJchemi3DpbnEsbthVZqrYa6fD1QimnbK7ueikXoGXZtJY5VBv7DVqzlmzxVFbgw6YB9O2fEF8ejWr2jGC1goNlRsEDmLUwZqZeXbkQcofkrtX_ivOQ5B55h8hT0Y3Yx'
      const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
        headers: {
          'Content-Type': 'application/json',
          "Authorization":`Bearer ${apiKey} `
        },
        params: {
          term: searchTerm,
          location: place,
          limit: 21
        }
      })
  
     console.log(response.data.businesses)
  
     return response.data.businesses;
      
      
    
    
    } catch (e) {
      console.log(e);
    }
  }
  
  //createPizza
  const createPizza = async (req, res) => {
  console.log(req.body)
    try {
      const {
    searchTerm,
    place,
      } = req.body;
   
      const results = await testYelp(
        searchTerm,
        place,
      );
   
  
  console.log(results,"data in vusiness Results")
  
  
    res.status(200).json(
      {succuess:true,
        data:results});
      
  }
  catch (error) {
    res.status(400).send(error);
  }
  };
  module.exports = {
    createPizza,
  }