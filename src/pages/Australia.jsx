import {
  ArrowRight,
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

      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
                Study Destination
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              Study in <span className="text-blue-600">Australia</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
              Embark on your academic journey Down Under! Study in Australia and unlock a world of possibilities — from top-tier education and innovative research opportunities to a vibrant multicultural environment. Elevate your career with globally recognized degrees, bask in the beauty of diverse landscapes, and embrace a lifestyle that seamlessly blends quality education with unforgettable experiences.
            </p>
            <p className="mt-4 text-blue-700 font-medium max-w-3xl">
              Australia welcomes you to a future where success knows no boundaries — make your mark, stand out, and thrive in a land that inspires excellence.
            </p>
            {/* <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-3.5 rounded-full hover:bg-blue-700 transition flex items-center gap-2">
                Apply Now <ArrowRight size={18} />
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3.5 rounded-full hover:bg-blue-50 transition">
                Book Consultation
              </button>
            </div> */}
          </div>
        </section>

        {/* Why Study in Australia */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Australia</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Why Study in Australia?</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm mt-3 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Application Procedure */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Application Process</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Application Procedure</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
              <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                We invite you to embark on a seamless journey towards your educational aspirations with Aaronic International Consultancy Education Service. We recommend initiating the application process <strong>7-8 months</strong> prior to the intended intake date.
              </p>
            </div>

            <div className="space-y-6">
              {applicationSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-600 mt-1 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                At Aaronic International Consultancy Education Service, we are dedicated to facilitating your educational journey, offering expert guidance at every turn. Take the first step toward a promising future by engaging with our comprehensive application procedure.
              </p>
            </div>
          </div>
        </section>

        {/* Entry Requirements */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Requirements</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Entry Points, Requirements & Costs</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
              <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                To gain admission to an Australian university, students are required to meet specific criteria regarding English language proficiency and academic qualifications. Prospective students must demonstrate a satisfactory level of English language proficiency.
              </p>
            </div>

            {/* Academic Requirements */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <School size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Academic Requirements</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Australian Senior School Certificate of Education (Year 12) or overseas equivalent for undergraduate degrees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Certain programs may necessitate specific prerequisite subjects and corresponding grades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>For postgraduate courses: Completed bachelor's degree to a satisfactory standard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Some cases require demonstration of research ability or relevant work experience</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <DollarSign size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Cost of University Courses</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Comparable to other English-speaking countries such as the UK and the USA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Some Bachelor's degrees take 3 years in Australia vs 4 years in the USA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Costs vary depending on institution and course of study</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span>Understanding entry points, meeting requirements, and being aware of costs are crucial for planning</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* IELTS Table */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">IELTS Requirements</h3>
                    <p className="text-sm text-gray-500">Minimum scores required for each study level</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="p-3 text-left font-semibold">Level</th>
                        <th className="p-3 text-center font-semibold">Writing</th>
                        <th className="p-3 text-center font-semibold">Speaking</th>
                        <th className="p-3 text-center font-semibold">Listening</th>
                        <th className="p-3 text-center font-semibold">Reading</th>
                        <th className="p-3 text-center font-semibold">Overall</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ieltsRequirements.map((req, index) => (
                        <tr key={index} className="border-b hover:bg-slate-50">
                          <td className="p-3 font-medium">{req.level}</td>
                          <td className="p-3 text-center">{req.writing}</td>
                          <td className="p-3 text-center">{req.speaking}</td>
                          <td className="p-3 text-center">{req.listening}</td>
                          <td className="p-3 text-center">{req.reading}</td>
                          <td className="p-3 text-center font-bold text-blue-600">{req.overall}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* PTE Table */}
              <div className="bg-white p-8 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                    <FileCheck size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">PTE Requirements</h3>
                    <p className="text-sm text-gray-500">Minimum scores required for each study level</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="p-3 text-left font-semibold">Level</th>
                        <th className="p-3 text-center font-semibold">Writing</th>
                        <th className="p-3 text-center font-semibold">Speaking</th>
                        <th className="p-3 text-center font-semibold">Listening</th>
                        <th className="p-3 text-center font-semibold">Reading</th>
                        <th className="p-3 text-center font-semibold">Overall</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pteRequirements.map((req, index) => (
                        <tr key={index} className="border-b hover:bg-slate-50">
                          <td className="p-3 font-medium">{req.level}</td>
                          <td className="p-3 text-center">{req.writing}</td>
                          <td className="p-3 text-center">{req.speaking}</td>
                          <td className="p-3 text-center">{req.listening}</td>
                          <td className="p-3 text-center">{req.reading}</td>
                          <td className="p-3 text-center font-bold text-purple-600">{req.overall}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-50 rounded-2xl border">
              <p className="text-gray-700 leading-relaxed">
                <strong>Note:</strong> For entry into postgraduate courses, applicants are expected to have completed a bachelor's degree to a satisfactory standard. In some cases, a demonstration of research ability or relevant work experience may also be required. The cost of university education in Australia is comparable to that of other English-speaking countries such as the UK and the USA.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Start Your Australian Journey?</h2>
            <p className="mt-4 text-blue-100 text-lg">
              Take the first step toward a promising future with Aaronic International Consultancy Education Service.
            </p>
            <button className="mt-8 bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition shadow-lg">
              Book a Free Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}