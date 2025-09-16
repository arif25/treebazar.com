import Image from 'next/image';
import Link from 'next/link';

export default function SignupHeader() {
  return (
    <div className="bg-green-50 py-4 px-6 flex justify-between items-center border-b">
        <div className='w-[1220px] mx-auto flex justify-between items-center'>
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <Link href="./home" className="w-[120px] h-[60px] relative"><Image src="/images/logoTreeBazaar.svg" alt="Plant" fill className="object-contain" /></Link>
            </div>

            {/* Steps */}
            <div className="flex items-center space-x-6 text-sm font-medium">
                {/* Step 1 - Active */}
                <div className="flex items-center space-x-1 text-black">
                <span className="w-5 h-5 rounded-full bg-black text-white text-xs flex items-center justify-center">1</span>
                <span>ACCOUNT CREATION</span>
                </div>

                {/* Step 2 */}
                <div className="flex items-center space-x-1 text-gray-600">
                <span className="w-5 h-5 rounded-full border border-gray-500 text-xs flex items-center justify-center">2</span>
                <span>BUSINESS DETAILS</span>
                </div>

                {/* Step 3 */}
                <div className="flex items-center space-x-1 text-gray-600">
                <span className="w-5 h-5 rounded-full border border-gray-500 text-xs flex items-center justify-center">3</span>
                <span>FINISH</span>
                </div>
            </div>
        </div>
    </div>
  );
}
