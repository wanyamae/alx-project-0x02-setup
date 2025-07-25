import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import { CardProps, cardData } from "@/interfaces";
import PostModal from "@/components/common/PostModal";
import Link from "next/link";
import { useState } from "react";


const Home: React.FC = () => {
  const [posts, setPosts] = useState<CardProps[]>([]);
  
  const handleAddPost = (post: CardProps) => {
    setPosts([...posts, post])
  }
  return (
    <div className="flex flex-col justify-center min-h-screen bg-blue-200">
      <Header />
      <div className="flex grid-cols-2 justify-center w-full gap-4">
        <Link href="/about" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">
          Go to About Page
        </Link>

        <PostModal onAddPost={handleAddPost} />
      </div>
    
     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 w-screen px-4">
        {[...cardData, ...posts].map((card: CardProps, idx: number) => (
          <Card
            key={card.id || idx}
            title={card.title}
            content={card.content}
            className="w-full h-64 p-6 text-lg"
          />
        ))}
     </div>
    </div>
  )

}

export default Home;
