import {
    Award,
    BookOpen,
    Briefcase,
    CheckCircle,
    FileCheck,
    Globe,
    GraduationCap,
    Users
} from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function UK() {
    const benefits = [
        {
            icon: Award,
            title: "Academic Excellence",
            description: "The United Kingdom is renowned for its world-class education system and prestigious universities. International students benefit from high academic standards, cutting-edge research facilities, and expert faculty, ensuring a quality education that is globally recognized."
        },
        {
            icon: BookOpen,
            title: "Foundation Program",
            description: "Foundation or pathway courses are crafted for students who don't fulfill academic entry criteria, haven't achieved desired English scores, or intend to change their field of study. These programs help international students improve language skills and gain essential capabilities."
        },
        {
            icon: Briefcase,
            title: "Post-Study Work Permit",
            description: "The United Kingdom offers a post-study work option known as the 'Graduate Route,' permitting international students who have finished a degree to remain in the country and work or search for employment. Students can stay for up to two years, with three years for doctoral programs."
        },
        {
            icon: Globe,
            title: "Diverse Course Offerings",
            description: "UK universities offer a broad range of programs, allowing international students to choose from a diverse array of fields and specializations in arts, sciences, business, technology, and more."
        },
        {
            icon: Users,
            title: "Global Connections",
            description: "The United Kingdom functions as a worldwide center for business, technology, and innovation. Enrolling in studies here offers chances to create an international network, engage with professionals, and take part in industry gatherings."
        }
    ];

    const applicationSteps = [
        {
            number: "1",
            title: "Choose a Course and Institution",
            description: "Begin by carefully selecting a course of study and identifying an educational institution in the UK. Ensure that the chosen institution holds a Tier 4 Sponsor License, emphasising the importance of choosing recognized programs."
        },
        {
            number: "2",
            title: "Receive an Offer of Admission",
            description: "Once you've chosen an institution and course, strive to secure an unconditional offer of admission. This acceptance is a pivotal step before proceeding with the visa application."
        },
        {
            number: "3",
            title: "Confirmation of Acceptance for Studies (CAS)",
            description: "Upon accepting the unconditional offer, the institution will issue a Confirmation of Acceptance for Studies (CAS), a unique reference number that serves as a crucial document in the visa application process."
        },
        {
            number: "4",
            title: "Financial Requirements",
            description: "Demonstrate financial capability to cover tuition fees and living expenses. The specific amount varies based on the location of the institution and the duration of the chosen course."
        },
        {
            number: "5",
            title: "English Language Proficiency",
            description: "Showcase proficiency in the English language by taking an accredited language test such as IELTS or TOEFL. Meeting the required score ensures that you possess the language skills necessary for academic success."
        },
        {
            number: "6",
            title: "Healthcare Surcharge",
            description: "Fulfill the mandatory Immigration Health Surcharge, a crucial component for gaining access to the National Health Service (NHS) during your stay in the UK."
        },
        {
            number: "7",
            title: "Complete the Visa Application Form",
            description: "Navigate to the official UK government website and meticulously fill out the online visa application form. Provide accurate and comprehensive information to facilitate a streamlined application process."
        },
        {
            number: "8",
            title: "Biometric Information",
            description: "Schedule and attend a biometric appointment to provide fingerprints and a photograph. This step contributes to the verification process and enhances the security of the visa application."
        },
        {
            number: "9",
            title: "Visa Fee Payment",
            description: "Pay the stipulated visa application fee, which varies based on the type and duration of the selected course. Ensure prompt payment to avoid delays in processing."
        },
        {
            number: "10",
            title: "Submit Documents",
            description: "Gather and submit all required supporting documents, including your passport, CAS letter, financial evidence, proof of English proficiency, and any additional documents specified by the application guidelines."
        },
        {
            number: "11",
            title: "Visa Interview (if required)",
            description: "If a visa interview is part of the application process, attend the session at the UK embassy or consulate in your home country. Be prepared to discuss your study plans and provide further insights into your application."
        },
        {
            number: "12",
            title: "Wait for Visa Decision",
            description: "Following the submission of your application, patiently await a decision. Visa processing times may vary, and staying informed about the progress of your application is crucial."
        },
        {
            number: "13",
            title: "Travel to the UK",
            description: "Once your visa application is approved, you are cleared to travel to the UK. Ensure that you plan your arrival before the course start date, allowing ample time for settling in and attending any orientation activities."
        }
    ];

    const entryRequirements = [
        "Completed secondary education with qualifications equivalent to UK A-levels or the International Baccalaureate (IB)",
        "Accepted qualifications from various educational systems worldwide",
        "English language proficiency through standardized tests (IELTS, TOEFL, Cambridge English)",
        "Minimum scores specified by each university and program",
        "Online application through official university portal",
        "Personal statement or statement of purpose",
        "Letters of recommendation from teachers or academic mentors",
        "Portfolio for artistic or creative programs",
        "Program-specific interviews (in-person, phone, or video conference)",
        "Confirmation of Acceptance for Studies (CAS) document",
        "Student visa application with financial requirements",
        "Proof of funds for tuition and living expenses",
        "Health insurance coverage during studies"
    ];

    return (
        <>
            <Header />

            <main className="pt-18">
                {/* Hero Section with Image */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 py-12 md:py-12">
                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
                    <div className="max-w-6xl mx-auto px-6 relative">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Left Content */}
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
                                        Study Destination
                                    </span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                    Study in the <span className="text-blue-600">UK</span>
                                </h1>
                                <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                                    The UK offers a compelling experience for international students, boasting an outstanding higher-education system and numerous top-tier universities.
                                </p>
                                <p className="mt-3 md:mt-4 text-gray-700">
                                    It covers various aspects, including selecting the UK as your study destination, choosing a specific location within the country, gaining insights into its history and culture, and adjusting to life in your new home.
                                </p>
                            </div>

                            {/* Right Image */}
                            <div className="mt-6 lg:mt-0">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop&crop=center"
                                        alt="Big Ben and London Skyline - United Kingdom"
                                        className="w-full h-64 sm:h-72 md:h-80 lg:h-[400px] object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                        <p className="text-white text-sm font-medium">📍 London, United Kingdom</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Study in UK */}
                <section className="py-16 md:py-24">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12 md:mb-16">
                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why UK</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Why Study in the United Kingdom?</h2>
                            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group p-5 md:p-6 border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                                    >
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
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
                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Application Process</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Application Procedure</h2>
                            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
                            <p className="text-gray-600 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base">
                                Enrolling in a UK academic program involves a structured process that encompasses critical steps ensuring a smooth transition for international students.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                            {applicationSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-4 md:p-5 rounded-2xl border hover:shadow-lg transition relative"
                                >
                                    <div className="absolute -top-3 -left-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs md:text-sm font-bold">
                                        {step.number}
                                    </div>
                                    <h3 className="text-sm md:text-base font-bold mt-2">{step.title}</h3>
                                    <p className="text-gray-600 text-xs md:text-sm mt-2 leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 md:mt-8 p-4 md:p-6 bg-blue-50 rounded-2xl border border-blue-100">
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                <strong>Note:</strong> Navigating these steps diligently ensures a well-prepared and successful journey for international students pursuing education in the United Kingdom.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Entry Requirements */}
                <section className="py-16 md:py-24">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12 md:mb-16">
                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Requirements</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Entry Requirements for Students</h2>
                            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                                    <GraduationCap className="text-blue-600" size={20} />
                                    Academic & Application Requirements
                                </h3>
                                <ul className="space-y-2 md:space-y-3">
                                    {entryRequirements.slice(0, 9).map((req, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm">
                                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                                    <FileCheck className="text-blue-600" size={20} />
                                    Visa & Financial Requirements
                                </h3>
                                <ul className="space-y-2 md:space-y-3">
                                    {entryRequirements.slice(9).map((req, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-20 bg-blue-600 text-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Study in the UK?</h2>
                        <p className="mt-3 md:mt-4 text-blue-100 text-base md:text-lg">
                            Let Aaronic International Consultancy Education Service guide you through every step of your UK journey.
                        </p>
                        <button className="mt-6 md:mt-8 bg-white text-blue-600 px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-50 transition shadow-lg text-sm md:text-base">
                            Book a Free Consultation
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}