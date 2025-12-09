import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogPage from "./pages/BlogPage";
import AuthPage from "./pages/AuthPage";

function Layout() {
  const location = useLocation();

  // Hide Header/Footer on these routes
  const hideLayoutRoutes = ["/login"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
