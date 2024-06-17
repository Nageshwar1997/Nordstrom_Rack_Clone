/* eslint-disable react-hooks/exhaustive-deps */
// CSS
import "./App.css"; // Import your custom styles

// React Router Dom
import { Outlet } from "react-router-dom";

// React
import { useEffect, useState } from "react";

// React Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Helpers
import SummaryApi from "./common";

// Context
import Context from "./context";

// React Redux
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(0);

  // Function to fetch user details from API
  const fetchUserDetails = async () => {
    try {
      const dataResponse = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: "include",
      });
      const dataApi = await dataResponse.json();

      if (dataApi?.success) {
        dispatch(setUserDetails(dataApi?.data));
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  // Function to fetch cart product count from API
  const fetchAddToCartCount = async () => {
    try {
      const response = await fetch(SummaryApi.addToCartProductCount.url, {
        method: SummaryApi.addToCartProductCount.method,
        credentials: "include",
      });
      const responseCount = await response.json();

      setCartProductCount(responseCount?.data?.count);
    } catch (error) {
      console.error("Error fetching cart product count:", error);
    }
  };

  useEffect(() => {
    // Fetch user details and cart count on component mount
    fetchUserDetails();
    fetchAddToCartCount();
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, // Function to fetch user details
          cartProductCount, // Number of products in cart
          fetchAddToCartCount, // Function to fetch cart count
        }}
      >
        {/* Toast container for notifications */}
        <ToastContainer position="top-center" autoClose={2000} limit={2} />

        {/* Header component */}
        <Header />

        {/* Main content area */}
        <main className="min-h-[calc(100vh-120px)] pt-16">
          <Outlet /> {/* Router outlet for rendering nested routes */}
        </main>

        {/* Footer component */}
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
