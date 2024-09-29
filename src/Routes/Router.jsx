import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SuccessPayment from "../components/successPayment/SuccessPayment";
import FailedPayment from "../components/FailedPayment/FailedPayment";
import CancelPayment from "../components/CancelPayment/CancelPayment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/successPayment",
    element: <SuccessPayment></SuccessPayment>,
  },
  {
    path: "/failedPayment",
    element: <FailedPayment></FailedPayment>,
  },
  {
    path: "/cancelPayment",
    element: <CancelPayment></CancelPayment>,
  },
]);
export default router;
