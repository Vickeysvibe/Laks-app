// ReportQuery.js
import CameraCapture from "./CameraCapture.jsx"; // Use the camera component we built earlier

const ReportQuery = () => {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">
        Report a Query
      </h2>
      <textarea
        placeholder="Describe your query"
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-300 mb-4"
      ></textarea>
      <CameraCapture />
      <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 mt-4">
        Submit Query
      </button>
    </div>
  );
};

export default ReportQuery;
