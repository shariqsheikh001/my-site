import Link from "next/link";
import Image from "next/image";
import Navebar from "@/components/Navebar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navebar/>
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center px-6 md:px-16 py-10">
        {/* Left - Image */}
        <div className="w-full h-80 md:h-[500px] relative">
          <Image
            src="/shariq.jpg" // Ensure this image is in the public folder
            alt="Profile"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right - Text Content */}
        <div className="mt-10 md:mt-0 md:pl-16">
          <h1 className="text-5xl font-extrabold mb-4">
            <span className="text-gray-800">"Hi" I am Shariq</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
           "We specialize in web development, delivering innovative and tailored digital solutions that elevate your business online."
          </p>
          <Link
            href="#contact"
            className="bg-pink-600 text-white px-6 py-3 rounded font-semibold hover:bg-pink-700 transition"
          >
            CONTACT US
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg border hover:scale-105 transition-transform">
            <div className="text-pink-600 text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-2">HTML</h3>
            <p className="text-gray-600 text-sm">Structure and content of web pages.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border hover:scale-105 transition-transform">
            <div className="text-pink-600 text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">CSS</h3>
            <p className="text-gray-600 text-sm">Styling and layout for elegant designs.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border hover:scale-105 transition-transform">
            <div className="text-pink-600 text-3xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold mb-2">JavaScript</h3>
            <p className="text-gray-600 text-sm">Interactive and dynamic web functionality.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border hover:scale-105 transition-transform">
            <div className="text-pink-600 text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Next.js</h3>
            <p className="text-gray-600 text-sm">Powerful React framework for fast web apps.</p>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}
