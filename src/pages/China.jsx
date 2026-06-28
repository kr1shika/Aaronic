import {
    Award,
    Briefcase,
    Building,
    DollarSign,
    GraduationCap,
    Heart,
    Landmark,
    MessageSquare
} from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function China() {
    const benefits = [
        {
            icon: GraduationCap,
            title: "Leading Universities and Research",
            description: "China is home to world-class universities such as Tsinghua, Peking University, and Fudan University, offering high-quality education and cutting-edge research opportunities in various disciplines."
        },
        {
            icon: DollarSign,
            title: "Affordable Tuition and Living",
            description: "Compared to Western countries, studying in China offers significantly lower tuition fees and living expenses, making it an economical choice for international students seeking quality education."
        },
        {
            icon: Award,
            title: "Generous Scholarship Programs",
            description: "The Chinese government and universities offer extensive scholarship opportunities, including full scholarships and partial tuition waivers for international students, reducing financial burdens."
        },
        {
            icon: Landmark,
            title: "Rich Cultural Experience",
            description: "Studying in China provides immersion in a civilization spanning thousands of years, offering students unique cultural experiences, language learning opportunities, and global networking with peers from diverse backgrounds."
        },
        {
            icon: Briefcase,
            title: "Economic and Career Opportunities",
            description: "As a global economic powerhouse, China offers excellent career prospects and networking opportunities with international organizations, multinational companies, and emerging startups."
        }
    ];

    const applicationSteps = [
        {
            number: "01",
            title: "Career Counselling and University Selection",
            description: "Commence your application process by registering your profile and participating in a complimentary career counselling session. We will help you select suitable Chinese universities based on your academic profile and career objectives."
        },
        {
            number: "02",
            title: "Document Preparation and Submission",
            description: "Prepare and submit all required documents to the university, including academic transcripts, letters of recommendation, personal statements, and English language proficiency certificates."
        },
        {
            number: "03",
            title: "Admission Letter and JW202 Form",
            description: "Upon acceptance, the university will issue an admission letter and JW202 form (Certificate of Admission for Foreign Students), essential documents for visa application and accommodation arrangements."
        },
        {
            number: "04",
            title: "Visa Application and Documentation",
            description: "Apply for your X1 visa (student visa) at the Chinese embassy or consulate with all required documents. Our team provides comprehensive guidance on documentation and visa procedures."
        },
        {
            number: "05",
            title: "Arrival and On-Campus Registration",
            description: "Upon arrival in China, complete on-campus registration, obtain your residence permit, and finalize accommodation and enrollment procedures with university assistance."
        }
    ];

    return (
        <>
            <Header />

            <main className="pt-18">
                {/* Hero Section with Image */}
                <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-yellow-50 py-12 md:py-12">
                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
                    <div className="max-w-6xl mx-auto px-6 relative">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Left Content */}
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="bg-red-100 text-[#d87c43] px-4 py-1.5 rounded-full text-sm font-medium">
                                        Study Destination
                                    </span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                    Study in <span className="text-[#d87c43]">China</span>
                                </h1>
                                <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                                    Embark on your academic journey in China! Study in China and unlock a world of possibilities — from prestigious universities and innovative research programs to a rich cultural heritage and dynamic economic landscape.
                                </p>
                                <p className="mt-3 md:mt-4 text-[#d87c43] font-medium">
                                    China welcomes you to a future of boundless opportunities — make your mark, expand your horizons, and thrive in a nation shaping the future of education and innovation.
                                </p>
                            </div>

                            {/* Right Image */}
                            <div className="mt-6 lg:mt-0">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&h=600&fit=crop&crop=center"
                                        alt="The Forbidden City and Beijing Skyline - China"
                                        className="w-full h-64 sm:h-72 md:h-80 lg:h-[400px] object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                        <p className="text-white text-sm font-medium">📍 Beijing, China</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Study in China */}
                <section className="py-16 md:py-24">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12 md:mb-16">
                            <span className="text-[#d87c43] font-semibold text-sm uppercase tracking-wider">Why China</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Why Study in China?</h2>
                            <div className="w-20 h-1 bg-[#d87c43] mx-auto mt-4"></div>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group p-5 md:p-6 border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                                    >
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-red-100 text-[#d87c43] flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[#d87c43] group-hover:text-white transition">
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
                            <span className="text-[#d87c43] font-semibold text-sm uppercase tracking-wider">Application Process</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Application Procedure</h2>
                            <div className="w-20 h-1 bg-[#d87c43] mx-auto mt-4"></div>
                            <p className="text-gray-600 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base">
                                We invite you to embark on a seamless journey towards your educational aspirations with Aaronic International Consultancy Education Service. We recommend initiating the application process <strong>4-6 months</strong> prior to the intended intake date.
                            </p>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            {applicationSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#d87c43] text-white flex items-center justify-center text-lg md:text-2xl font-bold">
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
                            <span className="text-[#d87c43] font-semibold text-sm uppercase tracking-wider">Requirements</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Entry Requirements and Costs</h2>
                            <div className="w-20 h-1 bg-[#d87c43] mx-auto mt-4"></div>
                            <p className="text-gray-600 mt-4 md:mt-6 max-w-3xl mx-auto text-sm md:text-base">
                                To gain admission to a Chinese university, international students must meet specific academic and English language proficiency requirements.
                            </p>
                        </div>

                        {/* Language Requirements */}
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                            <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-red-100 text-[#d87c43] flex items-center justify-center">
                                        <MessageSquare size={18} className="md:w-5 md:h-5" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold">English Language Proficiency</h3>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">Minimum IELTS Requirements</p>
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
                                                <td className="p-3 font-medium">5.5</td>
                                                <td className="p-3 text-center">5.5</td>
                                                <td className="p-3 text-center">5.5</td>
                                                <td className="p-3 text-center font-bold text-[#d87c43]">6.0</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Minimum scores required for Bachelor level of study</p>
                            </div>

                            <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                                        <DollarSign size={18} className="md:w-5 md:h-5" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold">Tuition Fees</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="p-3 bg-slate-50 rounded-xl">
                                        <h4 className="font-semibold text-[#d87c43]">Bachelor's Programs</h4>
                                        <p className="text-xl font-bold">$2,000 - $5,000 USD</p>
                                        <p className="text-xs text-gray-500">Annual tuition fees</p>
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-xl">
                                        <h4 className="font-semibold text-blue-600">Master's Programs</h4>
                                        <p className="text-xl font-bold">$2,500 - $6,000 USD</p>
                                        <p className="text-xs text-gray-500">Annual tuition fees</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scholarship Benefits */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center">
                                    <Award size={18} className="md:w-5 md:h-5" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold">Comprehensive Scholarship Benefits</h3>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">
                                Many universities offer Chinese Government Scholarships and other merit-based scholarships with comprehensive benefits:
                            </p>
                            <div className="grid sm:grid-cols-3 gap-4">
                                <div className="p-4 bg-green-50 rounded-xl text-center border border-green-100">
                                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-2">
                                        <DollarSign size={18} />
                                    </div>
                                    <h4 className="font-bold text-sm">Full Scholarship</h4>
                                    <p className="text-xs text-gray-600 mt-1">Up to 100% tuition coverage</p>
                                </div>
                                <div className="p-4 bg-blue-50 rounded-xl text-center border border-blue-100">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-2">
                                        <Building size={18} />
                                    </div>
                                    <h4 className="font-bold text-sm">Free Accommodation</h4>
                                    <p className="text-xs text-gray-600 mt-1">On-campus housing included</p>
                                </div>
                                <div className="p-4 bg-purple-50 rounded-xl text-center border border-purple-100">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-2">
                                        <Heart size={18} />
                                    </div>
                                    <h4 className="font-bold text-sm">Monthly Stipend</h4>
                                    <p className="text-xs text-gray-600 mt-1">$200 - $400 USD monthly</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-xs mt-4">
                                <strong>Note:</strong> Many universities offer comprehensive scholarships that cover 100% of tuition fees, provide free on-campus accommodation, and offer monthly living stipends ranging from $200-$400 USD for daily living expenses.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-20 bg-[#d87c43] text-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Explore China?</h2>
                        <p className="mt-3 md:mt-4 text-red-100 text-base md:text-lg">
                            Contact Aaronic International Consultancy Education Service for comprehensive support in pursuing your dreams of studying in China.
                        </p>
                        <button className="mt-6 md:mt-8 bg-white text-[#d87c43] px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-red-50 transition shadow-lg text-sm md:text-base">
                            Book a Free Consultation
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}