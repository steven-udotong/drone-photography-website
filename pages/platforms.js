import React from "react"
import Layout from "../components/layout"

export default function Platforms() {
  return (
    <Layout>
      <h1>Platforms for investing</h1>
      <p>
        I'm going to give a breakdown on some easy investing platforms I'd reccomend using. Personally, 
        I've only ever used Robinhood, Coinbase, and WeBull but there are many more options.
      </p>
      <p>
        Robinhood and WeBull are unique platforms that are currently offering free shares as 
        an incentive to gain new members, which is similar to PayPal's old strategy of giving 
        new users a free $10 for opening an account. 
      </p>

      <h1>Robinhood</h1>
      <div style={{ color: 'purple'}}>
          <img src = "https://cdn.robinhood.com/assets/robinhood/shared/robinhood-preview.png" alt = "Robinhood pic" />    
        </div>
        <p>
          If you want to get started on robinhood, here's a link to create an account and the best part is that we'll
          both get a free stock out of it: <a href= "https://join.robinhood.com/steveu26"> join.robinhood.com/steveu26</a> 
          </p>
        <p>
            This is the first platform I've ever used, and the best part about it is that you're 
            given you one free stock when you sign up, which can be anything from Apple to GoPro 
            (valued @ $307 and $4 respectively at the time of writing this). 
          </p>
        <p>
            Robinhood also offers comission-free trading, which means when you buy/sell stocks/ETFs/options/cryptocurrencies
            you won't receive an additional charge by the stock broker/exchange unlike most traditional 
            trading companies. Fun fact: Robinhood inspired a wave of adoption to zero comission trading. 
          </p>
          <p>
            On Robinhood, you can trade stocks, ETFs, options, and cryptocurrencies. They have also 
            recently introduced fractional shares, which allows you to invest in up to 0.000001 share of stocks
            if you can't afford the full share. This means you could technically start investing in Amazon with just
            1 penny.  
          </p>


        <h1>Coinbase</h1>
        <div style={{ color: 'purple'}}>
          <img src = "https://www.coinbase.com/img/og-default.jpg" alt = "Coinbase pic" />    
        </div>
        <p>
          Coinbase is the world's largest Bitcoin broker and probably the easiest platform to
          use for buying/selling and managing cryptocurrencies. I would probably consider Coinbase 
          the PayPal of cryptocurrencies for its simplicity and ability to scale to processing business payments.
          </p>
        <p>
          Here, you can buy and sell Bitcoin, Ethereum, XRP (Ripple), Litecoin, and several more. You can 
          also set up a crypto wallet to safely store your digital assets. This in conjunction with a simple user interface makes Coinbase a great platform for new 
          crypto investors. 
          </p>


        <h1>WeBull</h1>
        <div style={{ color: 'purple'}}>
          <img src = "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_9i0on20y/def_height/628/def_width/1200/version/100011/type/1" alt = "WeBull Pic" />    
        </div>
        <p>
            Similar to Robinhood, this platform offers one free stock upon opening an account, 
            however, they also offer a second stock if you deposit $100 into your account within 
            a month of opening. 
          </p>
        <p>
          However, WeBull has a signifiantly more technical layout than robinhood which may be confusing
          for new stock traders (I'm still learning how to use all the features) but the best way to learn
          is to drink from the firehouse, so that shouldn't be a reason to stop you from trying the platform.
          </p>
        <p>
          WeBull offers just about every trading feature Robinhood does, except for the trading
          cryptocurrencies and buying fractional shares. These are the only two additions that give 
          Robinhood an edge over WeBull's platform.
          </p>  


        <h1>Other reccomended platforms </h1>
        <p>
          Stock: [E-trade, TD Ameritrade, Charles Schwab, etc...];
          Crypto: [ByBit, Kraken, Binance etc...]
          </p>

        <p>
      ----------------------------------------------------------------------------------------
          </p>
        <p>
        © 2020, Built with Gatsby
          </p>
    </Layout>
  )
}

