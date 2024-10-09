import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/(website)/home/page";
import SignupPage from "./pages/(auth)/signup/page";
import LayoutWebsite from "./pages/(website)/layout";
import LayoutAdmin from "./pages/(admin)/layout";
import DashbroadPage from "./pages/(admin)/dashbroad/page";
import NotFoundPage from "./pages/404/layout";
import ProductsPage from "./pages/(website)/products/ProductsPage";
import DetailPage from "./pages/(website)/detail/DetailPage";
import CartPage from "./pages/(website)/cart/CartPage.tsx";
import AdminProductsPage from "./pages/(admin)/products/page.tsx";
import ContactPage from "./pages/(website)/contact/ContactPage.tsx";
import PaymentPage from "./pages/(website)/payment/PaymentPage.tsx";
import AboutPage from "./pages/(website)/about/AboutPage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />}></Route>
          <Route path="signup" element={<SignupPage />}></Route>
          <Route path="products" element={<ProductsPage />}></Route>
          <Route path="productDetail" element={<DetailPage />}></Route>
          <Route path="cart" element={<CartPage />}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
          <Route path="payment" element={<PaymentPage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Navigate to="products" />}></Route>
          <Route path="dashbroad" element={<DashbroadPage />}></Route>
          <Route path="products" element={<AdminProductsPage />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
