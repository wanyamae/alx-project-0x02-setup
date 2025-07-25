import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700">{content}</p>
            <p className="text-sm text-gray-500 mt-2">User ID: {userId}</p>
        </div>
    );
};

export default PostCard;