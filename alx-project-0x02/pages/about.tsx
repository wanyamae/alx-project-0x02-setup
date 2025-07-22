import Header from '@/components/layout/Header';
import Link from 'next/link';

const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200">
            <Header />
            <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
            <p className="text-lg text-gray-200 mb-8">This page contains information about our application.</p>
            <Link href="/home" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Go to Home Page
            </Link>
        </div>
    )
}

export default AboutPage;
