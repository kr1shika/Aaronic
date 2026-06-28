import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Shield, 
  Briefcase,
  Globe,
  FileCheck,
  UserCheck,
  School,
  Clock,
  DollarSign,
  MessageSquare,
  CheckCircle,
  Users,
  Building,
  Laptop,
  MapPin
} from "lucide-react";

export default function USA() {
  const benefits = [
    {
      icon: GraduationCap,
      title: "World-Class Universities",
      description: "The USA is home to some of the world's most prestigious universities and educational institutions, ensuring exceptional academic standards and globally recognized degrees."
    },
    {
      icon: DollarSign,
      title: "Scholarship and Financial Aid",
      description: "American universities offer extensive scholarship and financial aid options for international students, including merit-based scholarships, need-based aid, and graduate assistantships."
    },
    {
      icon: Laptop,
      title: "Innovative Research and Technology",
      description: "The USA leads in cutting-edge research and technological advancement, providing students with opportunities to engage in groundbreaking projects and collaborate with renowned experts."
    },
    {
      icon: Users,
      title: "Cultural Diversity and Student Life",
      description: "American campuses offer vibrant multicultural environments with extensive student organizations, cultural events, and recreational activities, enriching your overall experience."
    },
    {
      icon: Briefcase,
      title: "Work and Career Opportunities",
      description: "The USA provides Optional Practical Training (OPT) and work-study programs, allowing international students to gain valuable work experience and enhance their career prospects."
    }
  ];

  const applicationSteps = [
    {
      number: "01",
      title: "Career Counselling and Registration",
      description: "Commence your application process by registering your profile and participating in a complimentary career counselling session at our offices."
    },
    {
      number: "02",
      title: "Standardized Test Preparation",
      description: "Prepare for required standardized tests such as SAT or ACT for undergraduate programs, or GMAT/GRE for graduate programs. Our team provides comprehensive guidance and support for test preparation."
    },
    {
      number: "03",
      title: "University Selection and Application",
      description: "Choose universities that align with your academic and career goals. We assist you in preparing compelling applications, including personal essays and recommendation letters."
    },
    {
      number: "04",
      title: "I-20 Form and Visa Preparation",
      description: "Upon receiving your admission, the university will issue the I-20 form. We guide you through financial documentation, visa interview preparation, and all necessary procedures."
    },
    {
      number: "05",
      title: "Visa Application and Interview",
      description: "Submit your visa application with all required documents and attend your visa interview at the US embassy or consulate. Our team provides comprehensive interview preparation support."
    }
  ];

  return (
    <>
      <Header />

      <main className="pt-18">
        {/* Hero Section with Image */}
        <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-blue-50 py-12 md:py-12">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-medium">
                    Study Destination
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Study in the <span className="text-red-600">USA</span>
                </h1>
                <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                  Embark on your academic journey in the United States! Study in the USA and unlock a world of possibilities — from top-tier research institutions and innovative educational programs to a vibrant multicultural environment.
                </p>
                <p className="mt-3 md:mt-4 text-red-700 font-medium">
                  The United States welcomes you to a future where success knows no boundaries — make your mark, stand out, and thrive in a land that inspires excellence.
                </p>
              </div>

              {/* Right Image */}
              <div className="mt-6 lg:mt-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop&crop=center"
                    alt="Statue of Liberty and New York Skyline - USA"
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-[400px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white text-sm font-medium">📍 New York, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Study in USA */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Why USA</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Why Study in the USA?</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="group p-5 md:p-6 border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-red-600 group-hover:text-white transition">
                      <Icon size={20} className="md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold">{benefit.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Application Procedure */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Application Process</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Application Procedure</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
              <p className="text-gray-600 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base">
                We invite you to embark on a seamless journey towards your educational aspirations with Aaronic International Consultancy Education Service. We recommend initiating the application process <strong>9-12 months</strong> prior to the intended intake date.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {applicationSteps.map((step, index) => (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-lg md:text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base md:text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base mt-1 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Entry Requirements */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Requirements</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Entry Requirements and Costs</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
              <p className="text-gray-600 mt-4 md:mt-6 max-w-3xl mx-auto text-sm md:text-base">
                To gain admission to a US university, students are required to meet specific criteria regarding English language proficiency, academic qualifications, and standardized test scores.
              </p>
            </div>

            {/* Language Requirements */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                    <MessageSquare size={18} className="md:w-5 md:h-5" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">TOEFL Requirements</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">Bachelor Level of Study</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="p-3 text-left font-semibold">Reading</th>
                        <th className="p-3 text-center font-semibold">Listening</th>
                        <th className="p-3 text-center font-semibold">Writing</th>
                        <th className="p-3 text-center font-semibold">Overall</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-slate-50">
                        <td className="p-3 font-medium">18</td>
                        <td className="p-3 text-center">17</td>
                        <td className="p-3 text-center">18</td>
                        <td className="p-3 text-center font-bold text-red-600">80</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <MessageSquare size={18} className="md:w-5 md:h-5" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">IELTS Requirements</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">Bachelor Level of Study</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="p-3 text-left font-semibold">Reading</th>
                        <th className="p-3 text-center font-semibold">Listening</th>
                        <th className="p-3 text-center font-semibold">Writing</th>
                        <th className="p-3 text-center font-semibold">Overall</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-slate-50">
                        <td className="p-3 font-medium">6.5</td>
                        <td className="p-3 text-center">6.5</td>
                        <td className="p-3 text-center">6.5</td>
                        <td className="p-3 text-center font-bold text-blue-600">7.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Cost Information */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                  <DollarSign size={18} className="md:w-5 md:h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold">Cost of University Education in the USA</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <h4 className="font-semibold text-red-600">Public Universities</h4>
                  <p className="text-2xl font-bold mt-2">$12,000 - $28,000</p>
                  <p className="text-sm text-gray-500">Annual tuition and fees</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <h4 className="font-semibold text-blue-600">Private Universities</h4>
                  <p className="text-2xl font-bold mt-2">$25,000 - $45,000</p>
                  <p className="text-sm text-gray-500">Annual tuition and fees</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <strong>Note:</strong> Many universities offer substantial scholarships and financial aid packages for international students, which can significantly reduce the actual costs. Additional expenses include accommodation, meals, books, and personal expenses.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Start Your American Journey?</h2>
            <p className="mt-3 md:mt-4 text-red-100 text-base md:text-lg">
              Let Aaronic International Consultancy Education Service guide you through every step of your USA journey.
            </p>
            <button className="mt-6 md:mt-8 bg-white text-red-600 px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-red-50 transition shadow-lg text-sm md:text-base">
              Book a Free Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}