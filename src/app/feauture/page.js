import Footer from "@/components/Footer";
import Navebar from "@/components/Navebar";

export default function Features() {
    
   
  const features = [
    {
      title: "Responsive Web Design",
      desc: "Fully mobile-friendly and cross-browser websites using HTML, CSS, and Tailwind CSS.",
      icon: "🖥️",
    },
    {
      title: "Dynamic Web Apps",
      desc: "Modern web apps using JavaScript and Next.js, with fast routing and SEO support.",
      icon: "⚡",
    },
    {
      title: "Performance Optimization",
      desc: "Optimized images, lazy loading, and best practices for blazing fast websites.",
      icon: "🚀",
    },
    {
      title: "Admin Dashboards",
      desc: "Clean, functional admin panels built with reusable components and logic.",
      icon: "📊",
    },
    {
      title: "Documentation & Reporting",
      desc: "Professional reports and documentation using Microsoft Word & Excel.",
      icon: "📄",
    },
  ];

  return (
    <>
    <Navebar/>
    <section className="bg-gray-50 min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What I Offer</h2>
        <p className="text-gray-600 text-lg mb-12">
          High-quality web development solutions tailored to your business needs.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-blue-500 border-black border-2 border-solid rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-white-200">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
