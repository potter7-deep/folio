import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Ending() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" }
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Dan <span className="text-teal-500">Maina</span>
            </h3>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              A passionate full-stack developer dedicated to building exceptional digital experiences. Let's create something amazing together.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-teal-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a 
                  href="mailto:dm549153@gmail.com"
                  className="hover:text-teal-500 transition-colors duration-200"
                >
                  dm549153@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+254714740470"
                  className="hover:text-teal-500 transition-colors duration-200"
                >
                  +254 714 740 470
                </a>
              </li>
              <li>Nyeri, Kenya</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Dan Maina. All rights reserved.
            </p>
            {/* <p className="text-slate-500 text-sm">
              Built with <span className="text-red-500">❤</span> using React
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Ending;

