import React, { Suspense } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import Layout from "./components/layout/Layout"
import LoadingSpinner from "./components/UI/LoadingSpinner"

const NewQuote = React.lazy(() => import("./pages/NewQuote"))
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"))

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />}></Route>
          <Route path="/quotes" element={<AllQuotes />}></Route>
          <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}></Route>
          <Route path="/new-quote" element={<NewQuote />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
