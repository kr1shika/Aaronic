import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const countries = [
  {
    name: "Australia",
    route: "/study-abroad/australia",
  },
  {
    name: "Canada",
    route: "/study-abroad/canada",
  },
  {
    name: "United Kingdom",
    route: "/study-abroad/uk",
  },
];

export default function StudyAbroad() {
  return (
    <>
      <Header />

      <main className="pt-28">
        <section className="py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h1 className="text-5xl font-bold">
              Study Abroad
            </h1>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Explore top international destinations and
              build a successful future with globally
              recognized education.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {countries.map((country) => (
                <Link
                  key={country.name}
                  to={country.route}
                  className="bg-white rounded-3xl p-10 shadow hover:shadow-xl transition"
                >
                  <h3 className="text-2xl font-semibold">
                    {country.name}
                  </h3>

                  <p className="mt-3 text-gray-500">
                    Learn about admission requirements,
                    visa process and opportunities.
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