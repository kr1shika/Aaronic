import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle,
  DollarSign,
  FileCheck,
  GraduationCap,
  MessageSquare,
  School,
  Shield
} from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Australia() {
  const benefits = [
    {
      icon: GraduationCap,
      title: "High-Quality Education",
      description: "Australia is home to some of the world's top-ranked universities and educational institutions, ensuring a high standard of education. Degrees earned in Australia are globally recognized and respected, offering a strong foundation for future career success."
    },
    {
      icon: Award,
      title: "Scholarship Opportunities",
      description: "Australia offers various scholarship opportunities for international students at both the undergraduate and postgraduate levels. Australian universities offer their own scholarships including merit-based, need-based, and specific scholarships for certain programs."
    },
    {
      icon: BookOpen,
      title: "Diverse Course Options & Research",
      description: "Students in Australia have access to a wide range of courses and programs across various disciplines. The country is known for its innovative research environment, providing opportunities to engage in cutting-edge research projects."
    },
    {
      icon: Shield,
      title: "Quality of Life & Safety",
      description: "Australia consistently ranks high in global quality of life indices, offering a safe and welcoming environment. With excellent healthcare, a high standard of living, and a multicultural society, students enjoy a well-rounded lifestyle."
    },
    {
      icon: Briefcase,
      title: "Work & Post-Graduation Opportunities",
      description: "Australia allows international students to work part-time during their studies, providing valuable work experience and financial support. After completing their programs, students can apply for post-graduation work visas."
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
      title: "Document Submission and Profile Evaluation",
      description: "Submit your pertinent documents, allowing our team to conduct a comprehensive evaluation of your academic profile, work experience, and course preferences. Based on this assessment, we will present you with tailored College and University options."
    },
    {
      number: "03",
      title: "Course and University Selection",
      description: "Upon receiving our recommendations, you can confidently choose the course and university that aligns with your academic and professional goals. We will then proceed to submit your application for the Offer Letter."
    },
    {
      number: "04",
      title: "Documentation Assistance and Visa Procedures",
      description: "Count on us for meticulous documentation support and a streamlined visa application process. Our team will guide you through each step to ensure a thorough and hassle-free experience."
    },
    {
      number: "05",
      title: "Visa Application Decision",
      description: "Upon the successful submission of your visa application, expect a decision within 45 days. Throughout this period, we remain committed to keeping you informed and providing any necessary assistance."
    }
  ];

  const ieltsRequirements = [
    { level: "Bachelor", writing: "6.0", speaking: "6.0", listening: "6.0", reading: "6.0", overall: "6.5" },
    { level: "Master", writing: "6.5", speaking: "6.5", listening: "6.5", reading: "6.5", overall: "7.0" }
  ];

  const pteRequirements = [
    { level: "Bachelor", writing: "58", speaking: "58", listening: "58", reading: "58", overall: "62" },
    { level: "Master", writing: "62", speaking: "62", listening: "62", reading: "62", overall: "68" }
  ];

  return (
    <>
      <Header />

      <main className="pt-18">
        {/* Hero Section with Image */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 md:py-12">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-19 lg:gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-[#1b6a69] px-4 py-1.5 rounded-full text-sm font-medium">
                    Study Destination
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Study in <span className="text-[#1b6a69]">Australia</span>
                </h1>
                <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                  Embark on your academic journey Down Under! Study in Australia and unlock a world of possibilities, from top-tier education and innovative research opportunities to a vibrant multicultural environment.
                </p>
                <p className="mt-3 md:mt-4 text-[#1b6a69] font-medium">
                  Australia welcomes you to a future where success knows no boundaries — make your mark, stand out, and thrive in a land that inspires excellence.
                </p>

              </div>

              {/* Right Image */}
              <div className="mt-6 lg:mt-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop&crop=center"
                    alt="Sydney Opera House and Harbour Bridge - Australia"
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-[400px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white text-sm font-medium">📍 Sydney, Australia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Study in Australia */}
        <section className="py-10 md:py-16 items-center">
          <div className="max-w-6xl mx-auto px-6 items-center">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-[#1b6a69] font-semibold text-sm uppercase tracking-wider">Why Australia</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Why Study in Australia?</h2>
              <div className="w-20 h-1 bg-[#1b6a69] mx-auto mt-4"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group p-5 md:p-6 border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-100 text-[#1b6a69] flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[#1b6a69] group-hover:text-white transition">
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
              <span className="text-[#1b6a69] font-semibold text-sm uppercase tracking-wider">Application Process</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Application Procedure</h2>
              <div className="w-20 h-1 bg-[#1b6a69] mx-auto mt-4"></div>
              <p className="text-gray-600 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base">
                We invite you to embark on a seamless journey towards your educational aspirations with Aaronic International Consultancy Education Service. We recommend initiating the application process <strong>7-8 months</strong> prior to the intended intake date.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {applicationSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1b6a69] text-white flex items-center justify-center text-lg md:text-2xl font-bold">
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

            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                At Aaronic International Consultancy Education Service, we are dedicated to facilitating your educational journey, offering expert guidance at every turn. Take the first step toward a promising future by engaging with our comprehensive application procedure.
              </p>
            </div>
          </div>
        </section>

        {/* Entry Requirements */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-[#1b6a69] font-semibold text-sm uppercase tracking-wider">Requirements</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Entry Points, Requirements & Costs</h2>
              <div className="w-20 h-1 bg-[#1b6a69] mx-auto mt-4"></div>
              <p className="text-gray-600 mt-4 md:mt-6 max-w-3xl mx-auto text-sm md:text-base">
                To gain admission to an Australian university, students are required to meet specific criteria regarding English language proficiency and academic qualifications. Prospective students must demonstrate a satisfactory level of English language proficiency.
              </p>
            </div>

            {/* Academic Requirements */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-100 text-[#1b6a69

] flex items-center justify-center">
                    <School size={18} className="md:w-5 md:h-5" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Academic Requirements</h3>
                </div>
                <ul className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Australian Senior School Certificate of Education (Year 12) or overseas equivalent for undergraduate degrees</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Certain programs may necessitate specific prerequisite subjects and corresponding grades</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>For postgraduate courses: Completed bachelor's degree to a satisfactory standard</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Some cases require demonstration of research ability or relevant work experience</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-100 text-[#1b6a69

] flex items-center justify-center">
                    <DollarSign size={18} className="md:w-5 md:h-5" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Cost of University Courses</h3>
                </div>
                <ul className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Comparable to other English-speaking countries such as the UK and the USA</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Some Bachelor's degrees take 3 years in Australia vs 4 years in the USA</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Costs vary depending on institution and course of study</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Understanding entry points, meeting requirements, and being aware of costs are crucial for planning</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* IELTS Table */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-100 text-[#1b6a69

] flex items-center justify-center">
                    <MessageSquare size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">IELTS Requirements</h3>
                    <p className="text-xs md:text-sm text-gray-500">Minimum scores required for each study level</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs md:text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="p-2 md:p-3 text-left font-semibold">Level</th>
                        <th className="p-2 md:p-3 text-center font-semibold">Writing</th>
                        <th className="p-2 md:p-3 text-center font-semibold">Speaking</th>
                        <th className="p-2 md:p-3 text-center font-semibold">Listening</th>
                        <th className="p-2 md:p-3 text-center font-semibold">Reading</th>
                        <th className="p-2 md:p-3 text-center font-semibold">Overall</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ieltsRequirements.map((req, index) => (
                        <tr key={index} className="border-b hover:bg-slate-50">
                          <td className="p-2 md:p-3 font-medium">{req.level}</td>
                          <td className="p-2 md:p-3 text-center">{req.writing}</td>
                          <td className="p-2 md:p-3 text-center">{req.speaking}</td>
                          <td className="p-2 md:p-3 text-center">{req.listening}</td>
                          <td className="p-2 md:p-3 text-center">{req.reading}</td>
                          <td className="p-2 md:p-3 text-center font-bold text-[#1b6a69

]">{req.overall}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* PTE Table */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                    <FileCheck size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">PTE Requirements</h3>
                    <p className="text-xs md:text-sm text-gray-500">Minimum scores required for each study level</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs md:text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="p-2 md:p-3 text-left font-semibold">Level</th>
                        <th className="p-2 md:p-3 text-center font-semibold">Writing</th>
                        <th className="p-2 md:p-3 text-center font-semibold">Speaking</th>
                        <th className="p-2 md:p-3 text-center font-semibold">Listening</th>
                        <th className="p-2 md:p-3 text-center font-semibold">Reading</th>
                        <th className="p-2 md:p-3 text-center font-semibold">Overall</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pteRequirements.map((req, index) => (
                        <tr key={index} className="border-b hover:bg-slate-50">
                          <td className="p-2 md:p-3 font-medium">{req.level}</td>
                          <td className="p-2 md:p-3 text-center">{req.writing}</td>
                          <td className="p-2 md:p-3 text-center">{req.speaking}</td>
                          <td className="p-2 md:p-3 text-center">{req.listening}</td>
                          <td className="p-2 md:p-3 text-center">{req.reading}</td>
                          <td className="p-2 md:p-3 text-center font-bold text-purple-600">{req.overall}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-slate-50 rounded-2xl border">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                <strong>Note:</strong> For entry into postgraduate courses, applicants are expected to have completed a bachelor's degree to a satisfactory standard. In some cases, a demonstration of research ability or relevant work experience may also be required. The cost of university education in Australia is comparable to that of other English-speaking countries such as the UK and the USA.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#1b6a69

] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Start Your Australian Journey?</h2>
            <p className="mt-3 md:mt-4 text-blue-100 text-base md:text-lg">
              Take the first step toward a promising future with Aaronic International Consultancy Education Service.
            </p>
            <button className="mt-6 md:mt-8 bg-white text-[#1b6a69

] px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-50 transition shadow-lg text-sm md:text-base">
              Book a Free Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}