import React, { use } from 'react'
import axios from 'axios'
import './quote.scss'
import { useEffect } from 'react'
import { useState } from 'react'


const Quote = () => {
    const [quote, setQuote] = useState('')
 async function fetchQuote(){
    const response = await axios.get('https://labs.bible.org/api/?passage=random&type=json')
    console.log(response)
    setQuote(response.data[0])
  }
  useEffect(() => {
    fetchQuote()
  },[])

  

  return (
    <div className='quote-center'>
        <h4>{quote.text}</h4>
        <span>{quote.bookname} {quote.chapter}:{quote.verse}</span>
    </div>
  )
}

export default Quote