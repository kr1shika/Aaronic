import {
    Award,
    Briefcase,
    FileText,
    Languages,
    MessageSquare
} from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
    const services = [
        {
            icon: Briefcase,
            title: "Career Counseling",
            description:
                "Expert guidance to align your education with future career goals.",
        },
        {
            icon: Languages,
            title: "IELTS / PTE Classes",
            description:
                "Comprehensive preparation classes to achieve your target score.",
        },
        {
            icon: FileText,
            title: "Documentation & SOP Guidance",
            description:
                "Professional assistance with SOPs, LORs, financial documents, and applications.",
        },
        {
            icon: MessageSquare,
            title: "Interview Preparation",
            description:
                "Mock interviews and coaching sessions to build confidence and success.",
        },
        {
            icon: Award,
            title: "Scholarship Guidance",
            description:
                "Find and apply for scholarships that fit your profile.",
        },
    ];
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section className="pt-24 min-h-screen bg-gradient-to-br from-black-50 via-white to-indigo-100">
                    <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 items-center gap-12">

                        <div>
                            <span className="bg-black-100 text-black-600 px-4 py-2 rounded-full text-sm font-medium">
                                Study Abroad Made Easy
                            </span>

                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mt-6 leading-tight">
                                Your Journey To
                                <span className="text-black-600"> Global Education </span>
                                Starts Here
                            </h1>

                            <p className="text-gray-600 mt-6 text-lg">
                                Expert guidance for university admissions, visa
                                applications, scholarships, and career planning in
                                top study destinations worldwide.
                            </p>

                        </div>

                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                                alt="Students"
                                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-white py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-4 gap-8 text-center">

                            <div>
                                <h3 className="text-4xl font-bold text-black-600">
                                    5000+
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Students Guided
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-bold text-black-600">
                                    95%
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Visa Success Rate
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-bold text-black-600">
                                    200+
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Partner Universities
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-bold text-black-600">
                                    15+
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Study Destinations
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Services */}

                <section
                    id="services"
                    className="py-20 bg-slate-50"
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center">
                            Our Services
                        </h2>

                        <p className="text-center text-slate-500 mt-4 max-w-2xl mx-auto">
                            We provide complete support throughout your study abroad
                            journey, from choosing the right university to preparing
                            for your departure.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                            {services.map((service, index) => {
                                const Icon = service.icon;

                                return (
                                    <div
                                        key={index}
                                        className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                                            <Icon size={24} />
                                        </div>

                                        <h3 className="text-xl font-semibold mb-3 text-center">
                                            {service.title}
                                        </h3>

                                        <p className="text-slate-600 leading-relaxed text-center">
                                            {service.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Countries */}
                <section
                    id="countries"
                    className="py-24 bg-white"
                >
                    <style>{`
                        .flag-circle {
                            transition: transform 0.7s ease;
                        }
                        .country-card:hover .flag-circle {
                            transform: rotate(360deg);
                        }
                    `}</style>
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center">
                            Popular Destinations
                        </h2>

                        <div className="flex flex-wrap justify-center gap-10 mt-14">                            {[
                            {
                                name: "USA",
                                flag: "https://flagcdn.com/w160/us.png",
                            },
                            {
                                name: "Australia",
                                flag: "https://flagcdn.com/w160/au.png",
                            },
                            {
                                name: "Canada",
                                flag: "https://flagcdn.com/w160/ca.png",
                            },
                            {
                                name: "New Zealand",
                                flag: "https://flagcdn.com/w160/nz.png",
                            },
                            {
                                name: "UK",
                                flag: "https://flagcdn.com/w160/gb.png",
                            },
                            {
                                name: "China",
                                flag: "https://flagcdn.com/w160/cn.png",
                            },
                            {
                                name: "Finland",
                                flag: "https://flagcdn.com/w160/fi.png",
                            },
                            {
                                name: "Germany",
                                flag: "https://flagcdn.com/w160/de.png",
                            },
                        ].map((country) => (
                            <div
                                key={country.name}
                                className="country-card flex flex-col items-center gap-4 cursor-pointer group"
                            >
                                <div className="flag-circle w-24 h-24 rounded-full overflow-hidden shadow-md border-2 border-slate-100">
                                    <img
                                        src={country.flag}
                                        alt={`${country.name} flag`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="font-semibold text-slate-700 text-sm text-center">
                                    {country.name}
                                </span>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-black-600 text-white">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h2 className="text-5xl font-bold">
                            Ready To Study Abroad?
                        </h2>

                        <p className="mt-6 text-xl text-black-100">
                            Book a free consultation with our education
                            experts and start your journey today.
                        </p>

                        <button className="mt-8 bg-white text-black-600 px-8 py-4 rounded-full font-semibold">
                            Get Started
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;