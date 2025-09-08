import Image from "next/image";

const Footer = () => (
  <footer className="w-full bg-gray-100 border-t border-gray-200">
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <div className="flex items-center">
            <Image
              src="/favicon.ico"
              alt="Project Logo"
              width={40}
              height={40}
            />
            <h2 className="text-xl font-bold text-gray-800 ml-4">DIFFPaths</h2>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            The money app designed to make your payments and savings simple.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Help Center
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Connect
          </h3>
          <div className="mt-3 flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} DIFFPaths. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
