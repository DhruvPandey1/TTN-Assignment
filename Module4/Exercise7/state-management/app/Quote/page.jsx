"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchQuotes } from "../actions/fetchAction"
import './page.css'

export default function Quote(){
    const {quotes, loading, error} = useSelector((state) => state.fetchReducer)
    const dispatch = useDispatch()

    return (
        <div className="quote-container">
            <h2>Quotes List</h2>
            <button onClick={() => dispatch(fetchQuotes())} disabled={loading}>
                {loading ? "Loading..." : "Fetch Quotes"}
            </button>

            {error && <p className="error">Error: {error}</p>}

            <ol type="number">
                {quotes?.map((quote) => (
                    <li key={quote.id} className="quotes">
                        <p>"{quote.quote}"</p>
                        <strong>- {quote.author}</strong>
                    </li>
                ))}
            </ol>
        </div>
    )
}
