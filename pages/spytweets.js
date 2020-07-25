import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout"

export const query = graphql`
{
    allStockTweet {
      nodes {
        id
        created_at(formatString: "MMMM Do, YYYY hh:mm:ssa")
        body
        user {
          username
          avatar_url
        }
      }
    }
  }
`

export default ({ data }) => {
  console.log(data)
  return (

    <Layout>
      <h1><a href="https://stocktwits.com/symbol/SPY"> $SPY message board</a> </h1>
      <p> _____________________________________________________________________________________________</p>
      <l>
        {data.allStockTweet.nodes.map(event => (
          <l key={event.id}>
            <div style={{ color: 'green'}}>
                <img src = {event.user.avatar_url} alt = "Stocktwit User Avatar" /> 
                <p>{event.user.username} </p>   
            </div>
            <p> {event.body}</p>
            <p>Posted {event.created_at} UTC</p>
            <p> _____________________________________________________________________________________________</p>
          </l>
        ))}
      </l>
      <p>
        © 2020, Built with Gatsby
        </p>
    </Layout>
)}