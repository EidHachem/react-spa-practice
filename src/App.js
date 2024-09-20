import { Route, Routes, Navigate } from "react-router-dom"
import AllQuotes from "./pages/AllQuotes"
import QuoteDetail from "./pages/QuoteDetail"
import NewQuote from "./pages/NewQuote"
import Layout from "./components/layout/Layout"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />}></Route>
        <Route path="/quotes" element={<AllQuotes />}></Route>
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}></Route>
        <Route path="/new-quote" element={<NewQuote />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
