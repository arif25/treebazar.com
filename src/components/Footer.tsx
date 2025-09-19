const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12 min-w-[1220px] mx-auto">
        <div className="bg-gray-700 text-white text-center py-2 cursor-pointer hover:bg-gray-600 transition">
        Back to top
        </div>
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
            <h4 className="font-semibold mb-2">Get to Know Us</h4>
            <ul className="text-sm space-y-1">
                <li>About TreeBazar</li>
                <li>Careers</li>
                <li>Press Releases</li>
                <li>TreeBazar Science</li>
            </ul>
            </div>
            <div>
            <h4 className="font-semibold mb-2">Connect with Us</h4>
            <ul className="text-sm space-y-1">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
            </ul>
            </div>
            <div>
            <h4 className="font-semibold mb-2">Make Money with Us</h4>
            <ul className="text-sm space-y-1">
                <li>Sell on Amazon</li>
                <li>Sell under Amazon Accelerator</li>
                <li>Protect and Build Your Brand</li>
                <li>Amazon Global Selling</li>
                <li>Supply to Amazon</li>
            </ul>
            </div>
            <div>
            <h4 className="font-semibold mb-2">Let Us Help You</h4>
            <ul className="text-sm space-y-1">
                <li>Your Account</li>
                <li>Returns Centre</li>
                <li>Recalls and Product Safety Alerts</li>
                <li>100% Purchase Protection</li>
                <li>Amazon App Download</li>
            </ul>
            </div>
        </div>
        <div className="text-center text-sm bg-gray-800 py-4">
            © 1996-2025, treebazar.com, Inc. or its affiliates
        </div>
    </footer>
  );
};

export default Footer;
