import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const MainLayout = () => {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location])

  return (
    <div className="container mx-auto">

      <Helmet>
        <title>Historic Gems | Home</title>
      </Helmet>

      <Navbar />

      {/* Outlet */}
      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
