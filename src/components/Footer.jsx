
const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-10">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-3">
                            aaronic
                        </h2>
                        <p>
                            Helping students achieve their international education
                            dreams through expert guidance and personalized support.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Universities</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Contact
                        </h3>
                        <p>Kathmandu, Nepal</p>
                        <p>info@aaronic.com</p>
                        <p>+977 98XXXXXXXX</p>
                    </div>
                </div>

                <div className="border-t border-slate-700 mt-8 pt-6 text-center">
                    © 2026 aaronic Consultancy. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;