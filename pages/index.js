import React from "react"
import Layout from "../components/layout"

export default function Home() {

  return (

    <div>
    <Layout>
      <h1>Finanical Awareness</h1>
      <p>
        In school, we were never taught about money aside from some optional accounting classes,
        and even then, we didn't learn how to make money.
      </p>
      <p>
        The narrative has been something along the lines of: don't worry about money, focus on learning 
        and eventually the money will come. Well it turns out that's the easiest way to miss out on making money.
      </p>
      <p>
        The sooner you change that, the better, so you may as well start the journey to financial 
        awareness today if you haven't already. If you're still unsure about investing, 
        I'll give the logistical breakdown <a href="/whyinvest/"> here</a>.
      </p>
      <p>  
        If you're going to successfully invest your money, it's imparative that you have
        personal conviction and control of your emotions. As said by Warren Buffet, "If you 
        cannot control your emotions, you cannot control your money." 
      </p>
      <p>
        You have to do your own research, and know what you own.
          </p>  
      <p>
      ----------------------------------------------------------------------------------------
      </p>
        <p>
        © 2020, Built with Gatsby
        </p>
    </Layout>
    </div>
  );
  
}


/*

import { graphql } from 'gatsby';

export const query = graphql`
  {
    allStockTweet {
      nodes {
        id
        created_at
        body
        user {
          username
        }
      }
    }
  }
`

export default ({ data }) => {
  console.log(data)
  return (
    <>
      <h1>Stock Tweets for SPY shares</h1>
      <ul>
        {data.allStockTweet.nodes.map(event => (
          <li key={event.id}>
            <h2>Date Created: {event.created_at}</h2>
            <p>Username: {event.user.username}</p>
            <p>SPY Tweet: {event.body}</p>
          </li>
        ))}
      </ul>
    </>
)}

*/
  
  