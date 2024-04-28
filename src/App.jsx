import * as React from 'react'
import './App.css'

import DiceIcon from './assets/icon-dice.svg'
import DivisorDesktopPattern from './assets/pattern-divider-desktop.svg'
import DivisorMobilePattern from './assets/pattern-divider-mobile.svg'

function QuoteGen() {
  const [quote,setQuote] = React.useState(`Press the button to generate a new piece of advice.`)
  const [quoteId,setQuoteId] = React.useState(0)

  return (
    <section className='quoteCont'>
      <p className='adviceNo'>ADVICE #{quoteId}</p>
      <p className='adviceQuote'>"{quote}"</p>
      <section className='buttonCont'>
        <img id='dice-icon' src={DiceIcon} onClick={()=>{
          fetch('https://api.adviceslip.com/advice')
          .then((res)=>res.json())
          .then(data => {
            console.log(data);
            setQuote(data.slip.advice);
            setQuoteId(data.slip.id);
          })
          .catch(err => console.log(err.message));
        }} />
      </section>
    </section>
  )
}

function App() {

  return (
    <>
      <section className='mainCont'>
        <section className='adviceCont'>
          <QuoteGen />
          <img id='divisor' src={window.innerWidth>1024?DivisorDesktopPattern:DivisorMobilePattern} />
        </section>
      </section>
    </>
  )
}

export default App