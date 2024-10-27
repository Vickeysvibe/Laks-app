// LoginPage.js
const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
