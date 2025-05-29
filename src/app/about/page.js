import Link from 'next/link';
import Image from 'next/image';
import Navebar from '@/components/Navebar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
    <Navebar/>
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 inline-block pb-2">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <Image
              src="/shariq.jpg" // Make sure to place your image in public folder
              alt="Your Photo"
              width={240}
              height={240}
              className="rounded-xl shadow-xl object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Hi, I'm [SHARIQ]</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm a dedicated <span className="text-blue-600 font-medium">Web Developer</span> with experience in building fast, responsive websites. My current toolkit includes:
            </p>

            <ul className="mt-4 space-y-2 text-gray-700 font-medium">
              <li>• HTML, CSS, JavaScript</li>
              <li>• Next.js (React Framework)</li>
              <li>• Microsoft Word & Excel</li>
            </ul>

            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              I enjoy building clean UI/UX, solving real-world problems, and learning new technologies along the way.
            </p>

            <Link href="/contact" className="inline-block mt-6 text-blue-600 hover:text-blue-800 font-semibold border-b-2 border-transparent hover:border-blue-600 transition">
              Contact Me →
            </Link>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
