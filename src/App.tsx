import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Add more routes here as needed */}
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  );
}
