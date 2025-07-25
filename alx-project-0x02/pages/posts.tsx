import { useEffect, useState } from 'react';
import { PostProps } from '@/interfaces';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';



const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            type ApiPost = {
                userId: number;
                id: number;
                title: string;
                body: string;
            };
            const mapped = (data as ApiPost[]).map((item) => ({
                userId: item.userId,
                title: item.title,
                content: item.body,
                className: "w-full h-64 p-6 text-lg bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow bg-emerald-100",
            }));
        setPosts(mapped);
        });
    }, []);
    return (
        <div className="flex flex-col min-h-screen bg-emerald-300">
            <Header />
            <h1 className="fixed top-0 mt-16 text-left text-4xl font-bold text-white mb-4 bg-emerald-300 w-full px-4">
                Posts
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-30 w-full px-4 p-4 bg-emerald-300">
                {posts.map((post, idx) => (
                    <PostCard
                        key={idx}
                        title={post.title}
                        content={post.content}
                        userId={post.userId}
                        className={post.className}
                    />
                ))}
            </div>
        </div>
    )
};

export default PostsPage;