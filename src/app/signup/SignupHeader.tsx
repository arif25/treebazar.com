import Image from 'next/image';
import Link from 'next/link';

export default function SignupHeader() {
  return (
    <div className="flex justify-between items-center">
        <div className='w-[1220px] mx-auto py-8 px-6 flex justify-center items-center'>
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <Link href="./home" className="w-[180px] h-[60px] relative"><Image src="/images/reglogo.svg" alt="Plant" fill className="object-contain" /></Link>
            </div>            
        </div>
    </div>
  );
}
