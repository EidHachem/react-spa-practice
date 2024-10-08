import React, { useEffect } from "react"
import { useParams, Route, Link, Routes } from "react-router-dom"
import Comments from "../components/comments/Comments"
import HighlithedQuote from "../components/quotes/HighlightedQuote"
import useHttp from "../hooks/use-http"
import { getSingleQuote } from "../lib/api"
import LoadingSpinner from "../components/UI/LoadingSpinner"

const QuoteDetail = () => {
  const { quoteId } = useParams()
  // const match = useRouteMatch()

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <p className="centered">{error}</p>
  }

  if (!loadedQuote.text) {
    return <p className="centered">No quote found!</p>
  }

  const loadComments = (
    <div className="centered">
      <Link to={`comments`} className="btn--flat">
        Load Comments
      </Link>
    </div>
  )

  return (
    <>
      <h1>QuoteDetail</h1>
      <HighlithedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route path={`/`} exact element={loadComments}></Route>
        <Route path={`comments`} element={<Comments />}></Route>
      </Routes>
    </>
  )
}

export default QuoteDetail
