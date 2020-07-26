/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// 1. Load API key as an environment variable.

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
}); 

const axios = require("axios"); 
const { useReducer } = require("react");

console.log(process.env.TEST_ENV_VAR)

// 2. Send a call to stocktwits API to retrieve tweets by ticker name

exports.sourceNodes = async ({ 
    actions, 
    createNodeId, 
    createContentDigest, 
}) => {
    const result = await axios({  //axios can send any type of http request (GET in this instance)
        method: "GET",
        url: "https://api.stocktwits.com/api/2/streams/symbol/SPY.json",      // this API used without authentication limits to 200 calls/hour 
        //url: "https://api.stocktwits.com/api/2/trending/symbols.json",
        //data: {
            //Data requests only work w/ method: "POST", not "GET"
    //  }
        params: {
            key: process.env.STOCKTWITS_API_KEY,
            id: "SPY", //This is a required parameter in the steams/symbol 
            limit: 20,
        },
    }).catch(error => {
        console.error(error.message)
    })

    // console.log(result) //This line organizes the data differently than the url
    // console.log(result.data) //This line outputs the data in the same format as the url

    const messages = result.data.messages     //tweets

    messages.forEach(message => {
        const node = {
            ...message,
            id: createNodeId(`StockTweet-${message.id}`), //needed to make Id unique, and adding 'StockTwit' increases the chance that its unique
            internal: {
                type: "StockTweet",
                contentDigest: createContentDigest(message),
            },
        }

// 3. Create Gatsby nodes using the stocktwits API response

        actions.createNode(node)
    })




//    const nodeData = {
//        title: "Test Nodes",
 //       description: "This is a test.",

//    };

//    const newNode = {
 //       ...nodeData,
   //     id: createNodeId("TestNode-testid"),  //required by Gatbsy
//        internal: {      
//            type: "TestNode",   //required by Gatsby
//            contentDigest: createContentDigest(nodeData),   //required by Gatsby (changes iff the title and description fields above change, also any additional field can be added above)
//        },
//    }

 //   actions.createNode(newNode)
}

