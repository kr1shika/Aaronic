import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="pt-12">
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-5xl font-bold text-center">
              Find Us
            </h1>

            <p className="text-center mt-4 text-gray-600">
              Speak with our education consultants.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mt-10">
              {/* Left Column - Contact Info */}
              <div>
                <h3 className="font-semibold text-xl">Office</h3>

                <p className="mt-4 text-gray-600">
                  Add your office address here
                </p>

                <p className="mt-3 font-medium">Phone</p>
                <p className="text-gray-600">+977 XXXXXXXX</p>

                <p className="mt-3 font-medium">Email</p>
                <p className="text-gray-600">info@aaronic.com</p>
              </div>

              {/* Right Column - Google Maps */}
              <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg">                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.545101059269!2d85.33657677546712!3d27.700451276186516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872c7735bf377293%3A0xba6e04388e80314a!2sAaronic%20International%20Consultancy%20Education%20Services!5e0!3m2!1sen!2snp!4v1782743233743!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Aaronic International Consultancy Location"
              />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}