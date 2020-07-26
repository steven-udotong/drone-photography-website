require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}); 

module.exports = {
  
  plugins: [
    
    {
      resolve: 'gatsby-stocktwits-symbol',
      options: {
        apikey: process.env.STOCKTWITS_API_KEY,   
        stockId: 'SPY',     
      }
    },
    
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
  siteMetadata: {
    title: "Steve's Investing Site",
    author: "Steve Udotong",
  }
}

