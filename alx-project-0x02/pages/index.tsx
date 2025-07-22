import Header from "@/components/layout/Header";


const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200">
      <Header />
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to My Next.js App!</h1>
      <p className="text-lg text-gray-200 mb-8">This is a simple example of a Next.js application with Tailwind CSS.</p>
      <a href="/about" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Go to About Page
      </a>
    </div>
  )

}

export default Home;
