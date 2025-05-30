import Footer from "@/components/Footer"
import Navebar from "@/components/Navebar"
import Link from "next/link"

export default function Login() {
  return (
    <>
    <Navebar/>
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-200">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl w-full">

        {/* Left Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="https://plus.unsplash.com/premium_photo-1710193817300-a2edf01839e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFja2dyb3VuZCUyMGltYWdlcyUyMGhlaWdodCUyMDkwfGVufDB8fDB8fHww"
            alt="Login Visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Log In</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 mt-6">
            Don’t have an account?
            <Link href="/signup" className="text-blue-600 hover:underline ml-1">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
