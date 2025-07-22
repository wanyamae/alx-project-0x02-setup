import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="flex fixed top-0 left-0 right-0 bg-indigo-500 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Next.js App</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/home" className="hover:underline">Home</Link></li>
                        <li><Link href="/about" className="hover:underline">About</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
