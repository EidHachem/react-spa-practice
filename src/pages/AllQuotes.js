import React from "react"
import QuoteList from "../components/quotes/QuoteList"

const DUMMY_DATA = [
  { id: "q1", author: "Eid", text: "React is better than vue" },
  { id: "q2", author: "Hachem", text: "React is better than Angular too" },
]

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_DATA} />
    </div>
  )
}

export default AllQuotes
