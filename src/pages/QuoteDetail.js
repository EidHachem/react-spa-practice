import React from "react"
import { useParams } from "react-router-dom"
import Comments from "../components/comments/Comments"
import { Route } from "react-router-dom"

const QuoteDetail = () => {
  const { quoteId } = useParams()

  return (
    <>
      <h1>QuoteDetail</h1>
      <p>{quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetail
