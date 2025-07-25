import { PostProps } from '@/interfaces';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';

type PostsPageProps = {
  posts: PostProps[];
};

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => (
  <div className="flex flex-col min-h-screen bg-emerald-300">
    <Header />
    <h1 className="sticky top-16 z-40 text-left text-4xl font-bold text-white mb-4 bg-emerald-300 w-full px-4">
      Posts
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 w-full px-4 p-4 bg-emerald-300">
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
);

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  type ApiPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  const posts: PostProps[] = (data as ApiPost[]).map((item) => ({
    userId: item.userId,
    title: item.title,
    content: item.body,
    className: "w-full h-64 p-6 text-lg bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow bg-emerald-100",
  }));

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;