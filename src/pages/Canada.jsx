import {
    Award,
    BookOpen,
    Briefcase,
    Building,
    CheckCircle,
    DollarSign,
    FileCheck,
    Globe,
    GraduationCap,
    MessageSquare,
    UserCheck,
    Users
} from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Canada() {
    const benefits = [
        {
            icon: Users,
            title: "Co-op Programs",
            description: "Opting to continue education in Canada is beneficial as students can leverage co-op programs offered by Canadian universities. It allows students to amalgamate their studies with an official paid work term."
        },
        {
            icon: Briefcase,
            title: "Work During & Post Study",
            description: "International students can work part-time (up to 20 hours per week) during school terms and full-time during scheduled breaks. Canada offers a post-graduation work permit program allowing students to stay and work for up to three years after graduation."
        },
        {
            icon: DollarSign,
            title: "Living and Studying at Reasonable Cost",
            description: "Canada has an advantage over other countries in higher education due to the relative affordability of its universities. The majority of Canadian students spend less than they would at other prestigious universities."
        },
        {
            icon: BookOpen,
            title: "Flexible and Excellent Learning",
            description: "Canada provides top-notch educational opportunities from elementary to post-secondary levels. Students around the world have no difficulty transferring between different types and levels of education."
        },
        {
            icon: Award,
            title: "Exceptional Educational Quality",
            description: "Canadian universities and colleges offer excellent educational programs. Degrees are well-known and in high demand on the global labor market. Canada ranks as the fourth most research-active nation in the world."
        }
    ];

    const applicationSteps = [
        {
            icon: Building,
            number: "1",
            title: "Find a University / College in Canada",
            description: "Choosing a Canadian institution or college is the first step in the application process. There are plenty of possibilities including language schools, colleges, and universities. You can get assistance from our team of experts."
        },
        {
            icon: FileCheck,
            number: "2",
            title: "Getting a Letter of Acceptance",
            description: "It is mandatory to have a letter of acceptance from the Designated Learning Institution (DLI) in Canada for the Visa process. This proves that the institute has given admission to the student for a specific duration of the program."
        },
        {
            icon: DollarSign,
            number: "3",
            title: "Tuition Fee Payment",
            description: "When you get an offer letter, the next step is to pay the college or university fees. Once you have paid your fee, you will receive a receipt from the university."
        },
        {
            icon: Globe,
            number: "4",
            title: "Documents Submission for Student Visa",
            description: "Submit all required documents to Immigration, Refugees, and Citizenship Canada (IRCC) including application form, passport, letter of acceptance, photographs, medical report, police clearance, financial proof, and SOP."
        },
        {
            icon: UserCheck,
            number: "5",
            title: "Visa Lodgement and Biometrics Fee Payment",
            description: "Once you have all required documents and have paid the fees, you can submit your application. We will help you create an account on the Government of Canada's immigration website and complete the online application form."
        }
    ];

    const requiredDocuments = [
        "Birth certificate",
        "Passport",
        "Passport size photograph",
        "10th and 12th Transcript certificates",
        "Diploma's Marksheet, Degree/Provisional certificate",
        "Bachelor's Marksheet, Degree/Provisional certificate",
        "Master's Marksheet, Degree/Provisional certificate",
        "IELTS/PTE certificate"
    ];

    const visaDocuments = [
        "Application form",
        "A valid passport",
        "Letter of Acceptance from Designated Learning Institution",
        "Two recent photographs",
        "Passport and Photograph of accompanying family member",
        "Birth Certificate (in case of minor applicant)",
        "Medical Report",
        "Police Clearance Report",
        "Financial proof",
        "University/College fees payment Receipt",
        "Payment receipt of application form",
        "Statement of Purpose (SOP)"
    ];

    return (
        <>
            <Header />

            <main className="pt-18">
                {/* Hero Section with Image */}
                <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50 py-12 md:py-12">
                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
                    <div className="max-w-6xl mx-auto px-6 relative">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Left Content */}
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="bg-green-100 text-[#405d32] px-4 py-1.5 rounded-full text-sm font-medium">
                                        Study Destination
                                    </span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                    Study in <span className="text-[#405d32]">Canada</span>
                                </h1>
                                <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                                    Canada offers top-ranked universities and colleges that attract international students. In fact, multiple Canadian universities are included in the QS World University Rankings 2024.
                                </p>
                                <p className="mt-3 md:mt-4 text-[#405d32] font-medium">
                                    Canada provides excellent post-graduation work opportunities, allowing you to gain valuable international experience.
                                </p>
                            </div>

                            {/* Right Image */}
                            <div className="mt-6 lg:mt-0">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&h=600&fit=crop&crop=center"
                                        alt="CN Tower and Toronto Skyline - Canada"
                                        className="w-full h-64 sm:h-72 md:h-80 lg:h-[400px] object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                        <p className="text-white text-sm font-medium">📍 Toronto, Canada</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Study in Canada */}
                <section className="py-16 md:py-24">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12 md:mb-16">
                            <span className="text-[#405d32] font-semibold text-sm uppercase tracking-wider">Why Canada</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Why Study in Canada?</h2>
                            <div className="w-20 h-1 bg-[#405d32] mx-auto mt-4"></div>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group p-5 md:p-6 border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                                    >
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-100 text-[#405d32] flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[#405d32] group-hover:text-white transition">
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
                            <span className="text-[#405d32] font-semibold text-sm uppercase tracking-wider">Application Process</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Application Procedure</h2>
                            <div className="w-20 h-1 bg-[#405d32] mx-auto mt-4"></div>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            {applicationSteps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100"
                                    >
                                        <div className="flex-shrink-0 flex items-center gap-3">
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#405d32] text-white flex items-center justify-center text-base md:text-xl font-bold">
                                                {step.number}
                                            </div>
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-green-100 text-[#405d32] flex items-center justify-center md:hidden">
                                                <Icon size={16} className="md:w-5 md:h-5" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-green-100 text-[#405d32] items-center justify-center hidden md:flex">
                                                    <Icon size={18} className="md:w-5 md:h-5" />
                                                </div>
                                                <h3 className="text-base md:text-xl font-bold">{step.title}</h3>
                                            </div>
                                            <p className="text-gray-600 text-sm md:text-base mt-1 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Documents Required */}
                <section className="py-16 md:py-24">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12 md:mb-16">
                            <span className="text-[#405d32] font-semibold text-sm uppercase tracking-wider">Documents Required</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Documents for Application</h2>
                            <div className="w-20 h-1 bg-[#405d32] mx-auto mt-4"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                                <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
                                    <FileCheck className="text-[#405d32]" size={20} />
                                    For Letter of Acceptance
                                </h3>
                                <ul className="space-y-2">
                                    {requiredDocuments.map((doc, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                                            <CheckCircle className="text-[#405d32] mt-1 flex-shrink-0" size={16} />
                                            <span>{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                                <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
                                    <Globe className="text-[#405d32]" size={20} />
                                    For Student Visa (IRCC)
                                </h3>
                                <ul className="space-y-2">
                                    {visaDocuments.map((doc, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                                            <CheckCircle className="text-[#405d32] mt-1 flex-shrink-0" size={16} />
                                            <span>{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Entry Requirements */}
                <section className="py-16 md:py-24 bg-slate-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12 md:mb-16">
                            <span className="text-[#405d32] font-semibold text-sm uppercase tracking-wider">Requirements</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Entry Requirements for Students</h2>
                            <div className="w-20 h-1 bg-[#405d32] mx-auto mt-4"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            {/* Academic Requirements */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                                    <GraduationCap className="text-[#405d32]" size={20} />
                                    Academic Requirements
                                </h3>

                                <div className="mb-4 md:mb-6 p-4 bg-slate-50 rounded-xl">
                                    <h4 className="font-bold text-[#405d32] text-sm md:text-base">Bachelor's Degree Program</h4>
                                    <ul className="mt-2 space-y-2 text-gray-600 text-sm md:text-base">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-[#405d32] mt-1 flex-shrink-0" size={16} />
                                            <span>Graduation (or graduating soon) from a recognized senior secondary school program</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-[#405d32] mt-1 flex-shrink-0" size={16} />
                                            <span>Minimum GPA of 2.8 or equivalent</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 bg-slate-50 rounded-xl">
                                    <h4 className="font-bold text-[#405d32] text-sm md:text-base">Master's Degree Program</h4>
                                    <ul className="mt-2 space-y-2 text-gray-600 text-sm md:text-base">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-[#405d32] mt-1 flex-shrink-0" size={16} />
                                            <span>Completion of a 4-year bachelor's degree or equivalent</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-[#405d32] mt-1 flex-shrink-0" size={16} />
                                            <span>Equivalent of a minimum "B" average over the last two years of your degree</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Language Requirements */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                                    <MessageSquare className="text-[#405d32]" size={20} />
                                    Language Requirements
                                </h3>

                                <div className="mb-4 md:mb-6 p-4 bg-slate-50 rounded-xl">
                                    <h4 className="font-bold text-[#405d32] text-sm md:text-base">IELTS Requirements</h4>
                                    <p className="text-xs md:text-sm text-gray-500 mt-1">Overall band score of 6.0 and above</p>
                                    <div className="mt-3 space-y-2">
                                        <div className="flex justify-between items-center p-2 bg-white rounded-lg border text-sm md:text-base">
                                            <span className="text-gray-700">Certificate/Diploma/Bachelor's</span>
                                            <span className="font-bold text-[#405d32]">6.5 Overall</span>
                                        </div>
                                        <div className="flex justify-between items-center p-2 bg-white rounded-lg border text-sm md:text-base">
                                            <span className="text-gray-700">Postgraduate/Masters</span>
                                            <span className="font-bold text-[#405d32]">7.0 Overall</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">No band less than 6.0 for Bachelor's, 6.5 for Masters</p>
                                </div>

                                <div className="p-4 bg-slate-50 rounded-xl">
                                    <h4 className="font-bold text-[#405d32] text-sm md:text-base">PTE Requirements</h4>
                                    <div className="mt-3 space-y-2">
                                        <div className="flex justify-between items-center p-2 bg-white rounded-lg border text-sm md:text-base">
                                            <span className="text-gray-700">Certificate/Diploma/Bachelor's</span>
                                            <span className="font-bold text-[#405d32]">64 Overall</span>
                                        </div>
                                        <div className="flex justify-between items-center p-2 bg-white rounded-lg border text-sm md:text-base">
                                            <span className="text-gray-700">Postgraduate/Masters</span>
                                            <span className="font-bold text-[#405d32]">67 Overall</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">No band less than 60 for Bachelor's, 63 for Masters</p>
                                </div>
                            </div>
                        </div>

                        {/* Visa Fees */}
                        <div className="mt-6 md:mt-8 grid md:grid-cols-2 gap-4 md:gap-6">
                            <div className="bg-white p-4 md:p-6 rounded-2xl border shadow-sm">
                                <h4 className="font-bold text-base md:text-lg mb-1">Visa Application Fee</h4>
                                <p className="text-2xl md:text-3xl font-bold text-[#405d32]">CAD $150</p>
                                <p className="text-xs md:text-sm text-gray-500 mt-1">Covers the cost of processing your student visa application</p>
                            </div>
                            <div className="bg-white p-4 md:p-6 rounded-2xl border shadow-sm">
                                <h4 className="font-bold text-base md:text-lg mb-1">Biometrics Fee</h4>
                                <p className="text-2xl md:text-3xl font-bold text-[#405d32]">CAD $85</p>
                                <p className="text-xs md:text-sm text-gray-500 mt-1">For fingerprints and photo required as part of your student visa application</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-20 bg-[#405d32] text-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Start Your Canadian Journey Today</h2>
                        <p className="mt-3 md:mt-4 text-red-100 text-base md:text-lg">
                            Get expert guidance for your Canadian education from Aaronic International Consultancy Education Service.
                        </p>
                        <button className="mt-6 md:mt-8 bg-white text-[#405d32] px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-red-50 transition shadow-lg text-sm md:text-base">
                            Book a Free Consultation
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}