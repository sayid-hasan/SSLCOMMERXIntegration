import { Link } from "react-router-dom";

const FailedPayment = () => {
  return (
    <div className="bg-gray-100 h-full">
      <div className="bg-white p-6 md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="text-red-600 w-16 h-16 mx-auto my-6"
          fill="currentColor"
        >
          <path d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.707,6.707a1,1,0,0,1,0,1.414L13.414,12l5.293,5.293a1,1,0,0,1-1.414,1.414L12,13.414l-5.293,5.293a1,1,0,0,1-1.414-1.414L10.586,12,5.293,6.707A1,1,0,1,1,6.707,5.293L12,10.586l5.293-5.293A1,1,0,0,1,18.707,6.707Z" />
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Failed!
          </h3>
          <p className="text-gray-600 my-2">
            Unfortunately, your payment could not be processed.
          </p>
          <p>
            Please try again or contact customer support if the issue persists.
          </p>
          <div className="py-10 text-center">
            <Link
              to={"/"}
              className="px-12 bg-red-600 hover:bg-red-500 text-white font-semibold py-3"
            >
              TRY AGAIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailedPayment;
