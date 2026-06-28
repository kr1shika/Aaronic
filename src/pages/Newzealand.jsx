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
  MapPin,
  Heart,
  Plane,
  Family,
  Trees
} from "lucide-react";

export default function NewZealand() {
  const benefits = [
    {
      icon: GraduationCap,
      title: "World-Class Universities",
      description: "New Zealand is home to prestigious universities consistently ranked among the top in the world, offering high-quality education across diverse fields including engineering, business, health sciences, and environmental studies."
    },
    {
      icon: DollarSign,
      title: "Affordable Education and Living",
      description: "Compared to other developed nations, New Zealand offers competitive tuition fees and reasonable living expenses, making quality education accessible and affordable for international students."
    },
    {
      icon: Briefcase,
      title: "Post-Study Work Opportunities",
      description: "International graduates from New Zealand universities are eligible for post-study work visas, allowing them to gain valuable professional experience and potentially transition to permanent residency."
    },
    {
      icon: Shield,
      title: "Safe and Welcoming Environment",
      description: "New Zealand consistently ranks among the safest countries in the world with a diverse, inclusive, and welcoming society that values international students."
    },
    {
      icon: Trees,
      title: "Stunning Natural Environment",
      description: "Beyond academics, students enjoy access to breathtaking landscapes, outdoor activities, and a vibrant student culture, creating unforgettable experiences during their studies."
    },
    {
      icon: Clock,
      title: "Tuition Fees After Visa Decision",
      description: "A unique advantage of studying in New Zealand is that students can arrange tuition fee payments after receiving their student visa decision, reducing financial burden and providing greater flexibility in payment arrangements."
    },
    {
      icon: Family,
      title: "Dependents & Family Benefits",
      description: "Master's degree students are eligible to bring their spouses and dependent children to New Zealand on dependent visas, allowing families to stay together while pursuing higher education."
    }
  ];

  const applicationSteps = [
    {
      number: "01",
      title: "Career Counselling and University Selection",
      description: "Commence your application process by registering your profile and participating in a complimentary career counselling session. We will help you select suitable New Zealand universities based on your academic profile, career objectives, and preferred field of study."
    },
    {
      number: "02",
      title: "Document Preparation and Submission",
      description: "Prepare and submit all required documents to the university, including academic transcripts, English language proficiency test results (IELTS/TOEFL), letters of recommendation, personal statements, and any other university-specific requirements."
    },
    {
      number: "03",
      title: "Offer Letter and Enrollment",
      description: "Upon successful application review, the university will issue an offer letter. You will need to formally accept the offer and pay any required enrollment fees or deposits."
    },
    {
      number: "04",
      title: "Student Visa Application",
      description: "Apply for your Student Visa at Immigration New Zealand with all required documents including proof of financial support, letter of acceptance from your institution, and health/character requirements. Our team provides comprehensive guidance throughout this process."
    },
    {
      number: "05",
      title: "Pre-Departure and Arrival",
      description: "Upon visa approval, prepare for your departure and arrange accommodation. Upon arrival in New Zealand, complete university orientation and enrollment procedures with assistance from your institution's international student office."
    }
  ];

  return (
    <>
      <Header />

      <main className="pt-18">
        {/* Hero Section with Image */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 md:py-12">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium">
                    Study Destination
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Study in <span className="text-green-600">New Zealand</span>
                </h1>
                <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                  Embark on your academic journey in New Zealand! Study in this island nation and unlock a world of possibilities — from world-renowned universities and innovative educational programs to stunning natural landscapes and a welcoming multicultural society.
                </p>
                <p className="mt-3 md:mt-4 text-green-700 font-medium">
                  New Zealand welcomes you to a future of limitless opportunities — make your mark, expand your horizons, and thrive in a country known for innovation, safety, and outstanding quality of life.
                </p>
              </div>

              {/* Right Image */}
              <div className="mt-6 lg:mt-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=600&fit=crop&crop=center"
                    alt="Mount Cook and Lake Pukaki - New Zealand"
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-[400px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white text-sm font-medium">📍 South Island, New Zealand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Study in New Zealand */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why New Zealand</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Why Study in New Zealand?</h2>
              <div className="w-20 h-1 bg-green-600 mx-auto mt-4"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="group p-5 md:p-6 border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-green-600 group-hover:text-white transition">
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
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Application Process</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Application Procedure</h2>
              <div className="w-20 h-1 bg-green-600 mx-auto mt-4"></div>
              <p className="text-gray-600 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base">
                We invite you to embark on a seamless journey towards your educational aspirations with Aaronic International Consultancy Education Service. We recommend initiating the application process <strong>6-8 months</strong> prior to the intended intake date.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {applicationSteps.map((step, index) => (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-lg md:text-2xl font-bold">
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
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Requirements</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Entry Requirements and Costs</h2>
              <div className="w-20 h-1 bg-green-600 mx-auto mt-4"></div>
              <p className="text-gray-600 mt-4 md:mt-6 max-w-3xl mx-auto text-sm md:text-base">
                To gain admission to a New Zealand university, international students must meet specific academic and English language proficiency requirements.
              </p>
            </div>

            {/* Language Requirements */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
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
                        <td className="p-3 font-medium">6.0</td>
                        <td className="p-3 text-center">6.0</td>
                        <td className="p-3 text-center">6.0</td>
                        <td className="p-3 text-center font-bold text-green-600">6.5</td>
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
                        <td className="p-3 font-medium">13</td>
                        <td className="p-3 text-center">12</td>
                        <td className="p-3 text-center">13</td>
                        <td className="p-3 text-center font-bold text-blue-600">72</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Cost Information */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                    <DollarSign size={18} className="md:w-5 md:h-5" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Tuition Fees</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-semibold text-green-600">Bachelor's Programs</h4>
                    <p className="text-xl font-bold">NZD $18,000 - $28,000</p>
                    <p className="text-xs text-gray-500">(USD $10,500 - $16,500) annually</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-semibold text-blue-600">Master's Programs</h4>
                    <p className="text-xl font-bold">NZD $20,000 - $32,000</p>
                    <p className="text-xs text-gray-500">(USD $12,000 - $19,000) annually</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Building size={18} className="md:w-5 md:h-5" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Living Expenses</h3>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <h4 className="font-semibold text-blue-600">Annual Living Costs</h4>
                  <p className="text-xl font-bold">NZD $15,000 - $20,000</p>
                  <p className="text-xs text-gray-500">(USD $9,000 - $12,000) annually</p>
                  <p className="text-xs text-gray-500 mt-2">Includes accommodation, food, transportation, and other living costs</p>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  <strong>Note:</strong> Many universities offer scholarships and financial assistance for international students, helping reduce overall expenses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Post-Study Work Opportunities */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Post-Study Benefits</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Post-Study Work Opportunities & Benefits</h2>
              <div className="w-20 h-1 bg-green-600 mx-auto mt-4"></div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold">Post-Study Work Visa</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Graduates from recognized New Zealand qualifications are eligible for a post-study work visa, typically valid for <strong>3 years</strong>, allowing you to gain valuable professional experience in New Zealand.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Globe size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold">Pathway to Residency</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Quality work experience in New Zealand combined with an in-demand qualification can create pathways to <strong>permanent residency</strong> and citizenship, opening doors to long-term career prospects.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold">Strong Graduate Employment</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  New Zealand employers highly value graduates from New Zealand universities, with strong employment rates and <strong>competitive salaries</strong> in the job market.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-4">
                  <Family size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold">Dependents on Post-Study Visa</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Spouses and dependent children on post-study work visas may also be eligible to work or study in New Zealand, providing additional <strong>income opportunities</strong> and educational benefits for the entire family.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Explore New Zealand?</h2>
            <p className="mt-3 md:mt-4 text-green-100 text-base md:text-lg">
              Contact Aaronic International Consultancy Education Service for comprehensive support in pursuing your dreams of studying in New Zealand.
            </p>
            <button className="mt-6 md:mt-8 bg-white text-green-600 px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-green-50 transition shadow-lg text-sm md:text-base">
              Book a Free Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}