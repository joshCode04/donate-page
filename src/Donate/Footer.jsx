const Footer = () => {
  return (
    <footer className="bg-white text-gray-300 py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-sm:text-center">
        {/* Mission Statement */}
        <div className="text-[#2C3A04]">
          <h2 className="text-xl font-semibold mb-4">The Power of Giving</h2>
          <p className="text-sm">
            Support a cause and make a difference through charity.
          </p>
        </div>

        {/* About Us Section */}
        <div className="text-[#2C3A04]">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Our History</li>
            <li>What We Believe</li>
            <li>Our Programs</li>
            <li>Partners</li>
          </ul>
        </div>

        {/* Ways to Give Section */}
        <div className="text-[#2C3A04]">
          <h3 className="text-lg font-semibold mb-4">Ways To Give</h3>
          <ul className="space-y-2 text-sm">
            <li>Fundraise</li>
            <li>Planned Giving</li>
            <li>Brand Partnership</li>
            <li>Legacy Giving</li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="text-[#2C3A04]">
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <p className="text-sm">1234 Thornridge Cir.</p>
          <p className="text-sm">Syracuse, Connecticut 56789</p>
          <p className="text-sm mt-2">(406) 555-0121</p>
          <p className="text-sm">mail@example.com</p>
        </div>
      </div>

      {/* Footer Bottom with Social Media Icons */}
      <div className="mt-8 text-center text-sm text-[#2C3A04] border-t border-gray-600 pt-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Copyright */}
        <div>© 2024 Non-Profit Organization. All rights reserved.</div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-2xl mt-4 sm:mt-0">
          <a
            className="hover:text-gray-400"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a
            className="hover:text-gray-400"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a
            className="hover:text-gray-400"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a
            className="hover:text-gray-400"
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
