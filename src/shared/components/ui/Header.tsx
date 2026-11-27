import Link from "next/link";
import Logo from "./Logo";
import GuestNavigation from "./GuestNavigation";


export default function Header() {
    return (
        <header className="border-b-2 border-white">
            <div className="md:flex md:justify-between md:items-center max-w-7xl mx-auto p-5 lg:px-0 lg:mx-15 md:m-0">
                <div className="flex justify-center">
                    <Link href='/'>
                        <div className="w-64">
                            <Logo />
                        </div>
                    </Link>
                </div>

                <GuestNavigation />
            </div>

        </header>
    )
}
