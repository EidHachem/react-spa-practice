import React from "react"
import { useParams, Route, Link, useRouteMatch } from "react-router-dom"
import Comments from "../components/comments/Comments"
import HighlithedQuote from "../components/quotes/HighlightedQuote"

const DUMMY_DATA = [
  { id: "q1", author: "Eid", text: "React is better than vue" },
  { id: "q2", author: "Hachem", text: "React is better than Angular too" },
]

const QuoteDetail = () => {
  const { quoteId } = useParams()
  const match = useRouteMatch()

  const quote = DUMMY_DATA.find((quote) => quote.id === quoteId)

  if (!quote) {
    return <p>No quote found!</p>
  }

  return (
    <>
      <h1>QuoteDetail</h1>
      <HighlithedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetail
