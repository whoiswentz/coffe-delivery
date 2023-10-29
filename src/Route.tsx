import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { OrderConfirmation } from "./pages/OrderConfirmation";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Route>
    </Routes>
  )
}