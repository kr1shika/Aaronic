import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  FileCheck,
  Heart,
  Compass,
  MessageSquare,
  DollarSign,
  GraduationCap,
  Shield,
  Users,
  Globe,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: FileCheck,
      title: "Student Visa Services",
      description: "Embarking on an international academic journey is a significant step, and we are dedicated to making the process of securing a student visa seamless and stress-free.",
      features: [
        "University Selection - Expert guidance to choose the right university",
        "Offer Acquisition - Compelling application preparation",
        "Document Preparation - Organize all necessary documents",
        "Online Application Assistance - Step-by-step guidance",
        "Health and Biometrics Check - Schedule and preparation assistance",
        "Visa Lodgement Fees Submission - Transparent guidance",
        "Visa Approval - Celebration and next steps guidance"
      ]
    },
    {
      icon: Heart,
      title: "Overseas Health Insurance Coverage",
      description: "Ensuring your health and well-being during your studies abroad is paramount. We offer robust overseas health insurance coverage tailored to meet the unique needs of international students.",
      features: [
        "Tailored Insurance Plans - Customized coverage for your needs",
        "Compliance with Visa Requirements - Meets immigration criteria",
        "24/7 Assistance and Support - Round-the-clock availability",
        "Mental Health Services Coverage",
        "Dental Care Coverage",
        "Repatriation Coverage",
        "Emergency Medical Services"
      ]
    },
    {
      icon: Compass,
      title: "Admission and Career Counselling",
      description: "Embarking on the journey of higher education is a transformative experience. We are committed to guiding you through every step of the way with comprehensive Admission and Career Counselling services.",
      features: [
        "Personalized Guidance - Understand your unique aspirations",
        "University and Program Selection - Expert advice",
        "Application Strategy - Strong application preparation",
        "Career Counselling - Understand the evolving job market",
        "Internship Opportunities Exploration",
        "Postgraduate Studies Guidance",
        "Workforce Entry Preparation"
      ]
    },
    {
      icon: MessageSquare,
      title: "Interview Preparation",
      description: "Interviews are pivotal moments in your journey to studying abroad. Our Interview Preparation services are tailored to equip you with the confidence and skills needed to make a lasting impression.",
      features: [
        "Personalized Approach - Tailored to your needs",
        "University Admission Interview Preparation",
        "Visa Application Interview Preparation",
        "Comprehensive Visa Documentation Guidance",
        "Mock Interview Scenarios",
        "Common Questions Practice",
        "Ongoing Support and Guidance"
      ]
    },
    {
      icon: DollarSign,
      title: "Education Loan Guidance & Assistance",
      description: "Embarking on a journey of higher education often requires financial support. We understand the importance of securing reliable and tailored financing options.",
      features: [
        "Tailored Financial Solutions - A Class Banks of Nepal",
        "Documentation Support - Compile all required documents",
        "Timely Processing - Quick turnaround time",
        "Transparent Communication - Stay informed throughout",
        "Consultation - Assess your financial needs",
        "Application Assistance - Complete loan applications",
        "Follow-Up and Support - Until loan approval"
      ]
    }
  ];

  return (
    <>
      <Header />

      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-24">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium">
                Our Services
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              Your Complete <span className="text-indigo-600">Education</span> Partner
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
              From visa assistance to career counselling, we provide comprehensive support throughout your study abroad journey. Our expert team is dedicated to making your international education dreams a reality.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3.5 rounded-full hover:bg-indigo-700 transition flex items-center gap-2">
                Book Consultation <ArrowRight size={18} />
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-8 py-3.5 rounded-full hover:bg-indigo-50 transition">
                Explore Services
              </button>
            </div>
          </div>
        </section>

        {/* All Services Section */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Comprehensive Services</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
              <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                We provide complete support throughout your study abroad journey, from choosing the right university to preparing for your departure.
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-start bg-white p-8 rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="lg:w-1/3 flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                        <Icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-gray-600 mt-3 leading-relaxed">{service.description}</p>
                      <div className="mt-4">
                        <button className="text-indigo-600 font-semibold hover:text-indigo-800 transition flex items-center gap-1">
                          Learn More <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="lg:w-2/3">
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div 
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl hover:bg-indigo-50 transition group"
                          >
                            <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-indigo-600 group-hover:text-white transition">
                              <CheckCircle size={12} />
                            </div>
                            <span className="text-sm text-gray-700 group-hover:text-indigo-700 transition">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Why Choose Aaronic?</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border text-center hover:shadow-xl transition group">
                <div className="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
                  <Users size={28} />
                </div>
                <h3 className="font-bold">Expert Team</h3>
                <p className="text-gray-600 text-sm mt-2">Experienced consultants with deep knowledge of international education</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border text-center hover:shadow-xl transition group">
                <div className="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
                  <Globe size={28} />
                </div>
                <h3 className="font-bold">Global Network</h3>
                <p className="text-gray-600 text-sm mt-2">Partnerships with 200+ universities across 15+ countries</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border text-center hover:shadow-xl transition group">
                <div className="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
                  <Shield size={28} />
                </div>
                <h3 className="font-bold">95% Visa Success</h3>
                <p className="text-gray-600 text-sm mt-2">Proven track record of successful visa applications</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border text-center hover:shadow-xl transition group">
                <div className="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
                  <Clock size={28} />
                </div>
                <h3 className="font-bold">End-to-End Support</h3>
                <p className="text-gray-600 text-sm mt-2">From initial counselling to post-arrival assistance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Test Preparation */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Test Preparation</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Language Test Preparation</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
              <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                We provide comprehensive preparation for IELTS and PTE tests with expert instructors and proven strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* IELTS Section */}
              <div className="bg-white p-8 rounded-3xl border shadow-sm hover:shadow-xl transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">IELTS Classes</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Achieving a high IELTS score is a crucial step toward your academic and professional goals. Our IELTS classes provide comprehensive preparation with expert instructors.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Expert Instructors with personalized guidance</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Comprehensive study materials for all sections</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Regular mock tests with detailed feedback</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Speaking practice sessions for confidence building</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Flexible timings for students and professionals</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-semibold text-blue-700">Test Registration</h4>
                  <p className="text-sm text-gray-600 mt-1">We offer seamless IELTS test registration services through IDP Nepal and British Council with guidance on test centers, application form assistance, and payment processing.</p>
                </div>
              </div>

              {/* PTE Section */}
              <div className="bg-white p-8 rounded-3xl border shadow-sm hover:shadow-xl transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    <FileCheck size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">PTE Test Preparation</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Preparing for the PTE (Pearson Test of English) is a significant undertaking. Our PTE Test Preparation classes are designed to maximize your performance in this computer-based English language proficiency test.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Detailed content coverage for all sections</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Practice tests with performance analysis</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Time management strategies for test success</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Technology familiarization with test interface</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>Focus on developing specific skills for each section</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-purple-50 rounded-xl">
                  <h4 className="font-semibold text-purple-700">Test Registration</h4>
                  <p className="text-sm text-gray-600 mt-1">We streamline the PTE test registration process with assistance in choosing test centers, application form guidance, and payment processing support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials / Stats */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-5xl font-bold">5000+</h3>
                <p className="text-indigo-200 mt-2">Students Guided</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold">95%</h3>
                <p className="text-indigo-200 mt-2">Visa Success Rate</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold">200+</h3>
                <p className="text-indigo-200 mt-2">Partner Universities</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold">15+</h3>
                <p className="text-indigo-200 mt-2">Study Destinations</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Start Your Journey?</h2>
            <p className="mt-4 text-gray-600 text-lg">
              Book a free consultation with our education experts and take the first step toward your international education dreams.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="bg-indigo-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg">
                Book Free Consultation
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-10 py-4 rounded-full font-semibold hover:bg-indigo-50 transition">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}