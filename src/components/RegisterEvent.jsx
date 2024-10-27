// RegisterEvent.js
const RegisterEvent = () => {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">
        Register an Event
      </h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Event Name"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-300"
        />
        <textarea
          placeholder="Event Description"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-300"
        ></textarea>
        <input
          type="number"
          placeholder="Vehicles Needed"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-300"
        />
        <input
          type="date"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-300"
        />
        <input
          type="number"
          placeholder="Personnel Needed"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-300"
        />
        <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterEvent;
