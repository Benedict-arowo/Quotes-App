import React from 'react'
import '../Styles/Quote.css'
export default function Quote(props) {
    return (
        <main>
            <div className='container'>
                <div className='quoteContainer'>
                    <div className='quoteContent'>
                        <p className='quote'>
                            <i className="quoteSymbol fa-solid fa-quote-left"></i>
                            {props.quote.content}
                        </p>
                        <p className='author'>- {props.quote.author}</p>
                    </div>
                    <button onClick={props.click}>Get Quote</button>
                </div>
            </div>
        </main>
    )
}