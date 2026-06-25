import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="pt-28">
        <section className="py-24">

          <div className="max-w-5xl mx-auto px-6">

            <h1 className="text-5xl font-bold text-center">
              Contact Us
            </h1>

            <p className="text-center mt-4 text-gray-600">
              Speak with our education consultants.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mt-16">

              <div>
                <h3 className="font-semibold text-xl">
                  Office
                </h3>

                <p className="mt-4 text-gray-600">
                  Add your office address here
                </p>

                <p className="mt-3">
                  +977 XXXXXXXX
                </p>

                <p>
                  info@aaronic.com
                </p>
              </div>

              <form className="space-y-4">

                <input
                  className="w-full border p-3 rounded-lg"
                  placeholder="Name"
                />

                <input
                  className="w-full border p-3 rounded-lg"
                  placeholder="Email"
                />

                <textarea
                  rows="5"
                  className="w-full border p-3 rounded-lg"
                  placeholder="Message"
                />
                <button className="bg-black text-white px-6 py-3 rounded-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}