import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const countries = [
  {
    name: "Australia",
    route: "/study-abroad/australia",
    flag: "https://flagcdn.com/w160/au.png",
    description: "World-class education with globally recognized degrees and post-study work pathways."
  },
  {
    name: "Canada",
    route: "/study-abroad/canada",
    flag: "https://flagcdn.com/w160/ca.png",
    description: "Top-ranked universities with affordable tuition and excellent post-graduation opportunities."
  },
  {
    name: "United Kingdom",
    route: "/study-abroad/uk",
    flag: "https://flagcdn.com/w160/gb.png",
    description: "Prestigious universities with high academic standards and diverse course offerings."
  },
  {
    name: "USA",
    route: "/study-abroad/usa",
    flag: "https://flagcdn.com/w160/us.png",
    description: "World-leading research institutions with extensive scholarship and career opportunities."
  },
  {
    name: "China",
    route: "/study-abroad/china",
    flag: "https://flagcdn.com/w160/cn.png",
    description: "Affordable education with generous scholarships and rich cultural experiences."
  }
];

export default function StudyAbroad() {
  return (
    <>
      <Header />

      <main className="pt-18">
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Study Abroad
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
            <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Explore top international destinations and build a successful future with globally recognized education.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-16">
              {countries.map((country) => (
                <Link
                  key={country.name}
                  to={country.route}
                  className="group bg-white rounded-3xl p-6 md:p-10 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-left border border-slate-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <h3 className="text-xl md:text-2xl font-semibold group-hover:text-blue-600 transition">
                      {country.name}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {country.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}