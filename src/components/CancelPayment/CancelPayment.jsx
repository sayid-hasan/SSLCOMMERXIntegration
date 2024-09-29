import { Link, useNavigate } from "react-router-dom";

const CancelPayment = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 h-full">
      <div className="bg-white p-6 md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="text-yellow-500 w-16 h-16 mx-auto my-6"
          fill="currentColor"
        >
          <path d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.707,6.707a1,1,0,0,1,0,1.414L13.414,12l5.293,5.293a1,1,0,0,1-1.414,1.414L12,13.414l-5.293,5.293a1,1,0,0,1-1.414-1.414L10.586,12,5.293,6.707A1,1,0,1,1,6.707,5.293L12,10.586l5.293-5.293A1,1,0,0,1,18.707,6.707Z" />
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Canceled
          </h3>
          <p className="text-gray-600 my-2">
            You have canceled the payment process.
          </p>
          <p>If this was a mistake, you can retry the payment.</p>
          <div className="py-10 text-center">
            <button
              onClick={() => navigate(-1)}
              className="px-8 bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-3 mr-4"
            >
              RETRY PAYMENT
            </button>
            <Link
              to={"/"}
              className="px-8 bg-gray-600 hover:bg-gray-500 text-white font-semibold py-3"
            >
              GO TO HOMEPAGE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelPayment;
