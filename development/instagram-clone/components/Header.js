import Image from 'next/image';

function Header() {
    return (
        <div>
            <div className="flex justify-between max-w-6xl">
                {/* Left */}
                <div className="relative hidden lg:inline-grid h-24 w-24">
                    <Image
                        src="/instagram.png"
                        layout="fill"
                        objectFit="contain" 
                        />
                </div>

            </div>

        </div>


    );
}

export default Header;