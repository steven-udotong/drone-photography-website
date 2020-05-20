import React from "react"
import Layout from "../components/layout"

export default function Resources() {
  return (
    <Layout>
      <h1>Resources for learning more</h1>
      <p>
        There's a lot to cover within stock investing/trading even for me and I started
         my journey only began back in June of 2019. But luckily for you, I can give some pointers on what
         I've learned so far and where I gather information. Stocktwits, Investopedia, Davthewave 
        </p>


      <h1> <a href="https://stocktwits.com/symbol/SPY">Stocktwits</a> </h1>
        <div style={{ color: 'black'}}>
          <img src = "https://blog.oneupapp.io/wp-content/uploads/2020/04/image-12-1024x500.png" alt = "Coinbase pic" />    
        </div>
        <p>
          Stocktwits is basically the Twitter for stock/crypto trading, except messages are grouped by whichever
          stock is directly referenced by the messages (i.e. $APPL, $TSLA, $SPY). This makes the site useful for finding 
          DD (due dillegence) and general sentiment around stocks/cryptos which can help explain price changes in stocks. 
          </p>
        <p>
          The tweets on a given $XYZ stock are divided into three subcategories: bullish, bearish, and neutral.
          Bullish meaning they are expecting prices to rise, bearish meaning they expect prices to drop, and 
          neutral is an expectation of sideways movement.
          </p>  
        <p>
          The site is a great resource to understand whats bringing people into stocks and others out 
          of their positons. I read through messages and consider both perspectives before doing
          additional research and ultimately deciding whether or not to enter a position.
          </p>  
        <p>
          In my opinion, the most useful Stocktwit boards are <a href="https://stocktwits.com/symbol/SPY"> $SPY</a> and <a href="https://stocktwits.com/symbol/TVIX">$TVIX</a>.
          SPY is an ETF that tracks the S&P500 stock market index, which tends to be a good indicator on how
          the US economy is performing. TVIX on the other hand, is a little bit more complicated, as it follows 
          the CBOE Volatility Index (VIX) is a measure of expected price fluctuations in the S&P 500 Index options over the 
          next 30 days. The VIX is generally referred to as the "fear index" of the market, so in ideal 
          investing circumstances, you want to see consistent growth in SPY and decay in TVIX. 
          </p>  

      <h1> <a href="https://www.investopedia.com/">Investopedia</a> </h1>
        <div style={{ color: 'purple'}}>
          <img src = "https://www.investopedia.com/thmb/weUpMUH-7U1vlEfnbzbpZTrfKMY=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/WORKINGCAPITALFINALJPEG-4ca1faa51a5b47098914e9e58d739958.jpg" alt = "Coinbase pic" />    
        </div>
        <p>
          Investopedia is a great resource for learning about technical terms within investing
          because a lot of concepts will seem foreign at first. 
          </p>
        <p>  
          At the site header where it says "Education," if you select "Dictionary" you can easily find a list
          of investment/economic terms explained to the fullest.  
          </p>


          <h1> <a href="https://mobile.twitter.com/davthewave">Davthewave</a> </h1>
      <p>
        This is a unique resource in the sense that it's just a Twitter account. But it is
        ran by a Bitcoin trend predictor that uses chart Technical Analysis (TA) to predict both 
        short-term and long-term trends in the digital asset. 
        </p>
      <p>
        Out of all the TA accounts I've seen on twitter/stocktwits, Davthewav stands out due to his
        consistent rationality as well as accuracy in his predictions. I'd definitely check his 
        recent tweets if you're looking to enter a position in Bitcoin, or understand where the price
        seems to be heading in a given timeframe.
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