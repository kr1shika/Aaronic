import logo from "../assets/nobglogo.png";
const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center flex-shrink-0">
                    <img
                        src={logo}
                        alt="Aaronic Logo"
                        className="h-8 sm:h-10 w-auto object-contain"
                    />
                    <span className="ml-2 text-base sm:text-lg font-bold text-black hidden sm:inline">
                        Aaronic
                    </span>
                </div>
                <nav className="hidden md:flex gap-3 lg:gap-5 items-center">
                    <a
                        href="#about"
                        className="text-gray-700 text-xs sm:text-sm font-medium hover:text-blue-600 transition-colors duration-200"
                    >
                        Study Aborad Guide                    </a>
                    <a
                        href="#services"
                        className="text-gray-700 text-xs sm:text-sm font-medium hover:text-blue-600 transition-colors duration-200"
                    >
                        Services
                    </a>
                    <a
                        href="#countries"
                        className="text-gray-700 text-xs sm:text-sm font-medium hover:text-blue-600 transition-colors duration-200"
                    >
                        Destinations
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-700 text-xs sm:text-sm font-medium hover:text-blue-600 transition-colors duration-200"
                    >
                        Contacts
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-700 text-xs sm:text-sm font-medium hover:text-blue-600 transition-colors duration-200"
                    >
                        Scholarship
                    </a>
                </nav>
                <div className="flex items-center gap-2 sm:gap-3">
                    <a
                        href="tel:+1234567890"
                        className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white px-3 sm:px-3.5 py-1 rounded-full transition-all duration-200 text-xs font-medium whitespace-nowrap shadow-sm hover:shadow-md"
                    >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span className="hidden xs:inline">Call</span>
                    </a>
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1da851] text-white px-3 sm:px-3.5 py-1 rounded-full transition-all duration-200 text-xs font-medium whitespace-nowrap shadow-sm hover:shadow-md"
                    >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <span className="hidden xs:inline">WhatsApp</span>
                    </a>
                </div>
                <button className="md:hidden flex flex-col gap-1 p-1 hover:bg-gray-100 rounded transition">
                    <span className="w-4 h-0.5 bg-gray-800"></span>
                    <span className="w-4 h-0.5 bg-gray-800"></span>
                    <span className="w-4 h-0.5 bg-gray-800"></span>
                </button>
            </div>
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
                <div className="px-4 py-1.5 flex flex-col gap-1.5">
                    <a
                        href="#about"
                        className="text-gray-700 text-xs font-medium hover:text-blue-600 hover:bg-gray-50 px-3 py-1 rounded-lg transition"
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        className="text-gray-700 text-xs font-medium hover:text-blue-600 hover:bg-gray-50 px-3 py-1 rounded-lg transition"
                    >
                        Services
                    </a>
                    <a
                        href="#countries"
                        className="text-gray-700 text-xs font-medium hover:text-blue-600 hover:bg-gray-50 px-3 py-1 rounded-lg transition"
                    >
                        Destinations
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-700 text-xs font-medium hover:text-blue-600 hover:bg-gray-50 px-3 py-1 rounded-lg transition"
                    >
                        Contact
                    </a>
                    <div className="flex gap-2 mt-1.5 pt-1.5 border-t border-gray-100">
                        <a
                            href="tel:+1234567890"
                            className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center px-3 py-1.5 rounded-lg text-xs font-medium transition"
                        >
                            📞 Call
                        </a>
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#25D366] hover:bg-[#1da851] text-white text-center px-3 py-1.5 rounded-lg text-xs font-medium transition"
                        >
                            💬 WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;