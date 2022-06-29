import React from 'react'
import Quote from './components/Quote'
import Header from './components/Header'
import './Styles/General.css'




export default function App() {

    const [quote, setQuote] = React.useState({});


    React.useEffect(() => getNewQuote(), [])

    const getNewQuote = () => {
        fetch("https://api.quotable.io/random")
            .then(res => res.json())
            .then(data => {
                setQuote(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Header />
            <Quote 
                quote={quote}
                click={getNewQuote}
            />
        </div>
    )
}