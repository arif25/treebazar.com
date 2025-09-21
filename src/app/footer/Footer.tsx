import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12 min-w-full mx-auto">
        <div className="bg-gray-700 text-white text-center py-2 cursor-pointer hover:bg-gray-600 transition">
        Back to top
        </div>
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
            <h4 className="font-semibold mb-2">Get to Know Us</h4>
            <ul className="text-sm space-y-1 flex flex-wrap gap-2 text-xs font-light text-[#dbdbdb]">
                <li className="w-full ">
                    <Link href="/contactus">Contact us</Link>
                </li>
                <li className="w-full ">
                    <Link href="aboutus">About TreeBazar</Link>
                </li>
                <li className="w-full">Careers</li>
                <li className="w-full">Press Releases</li>
                <li className="w-full">TreeBazar Science</li>
            </ul>
            </div>
            <div>
            <h4 className="font-semibold mb-2">Connect with Us</h4>
            <ul className="text-sm space-y-1 flex flex-wrap gap-2 text-xs font-light text-[#dbdbdb]">
                <li className="w-full ">Facebook</li>
                <li className="w-full ">Twitter</li>
                <li className="w-full ">Instagram</li>
                <li className="w-full ">LinkedIn</li>
            </ul>
            </div>
            <div>
            <h4 className="font-semibold mb-2">Make Money with Us</h4>
            <ul className="text-sm space-y-1 flex flex-wrap gap-2 text-xs font-light text-[#dbdbdb]">
                <li className="w-full ">Sell on Amazon</li>
                <li className="w-full ">Sell under Amazon Accelerator</li> 
                <li className="w-full ">Protect and Build Your Brand</li>
                <li className="w-full ">Amazon Global Selling</li>
                <li className="w-full ">Supply to Amazon</li>
            </ul>
            </div>
            <div>
            <h4 className="font-semibold mb-2">Let Us Help You</h4>
            <ul className="text-sm space-y-1 flex flex-wrap gap-2 text-xs font-light text-[#dbdbdb]">
                <li className="w-full ">Your Account</li>
                <li className="w-full ">Returns Centre</li>
                <li className="w-full ">Recalls and Product Safety Alerts</li> 
                <li className="w-full ">100% Purchase Protection</li>
                <li className="w-full ">Amazon App Download</li>
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
