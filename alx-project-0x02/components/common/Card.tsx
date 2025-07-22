import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md bg-cyan-500">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700">{content}</p>
        </div>
    );
};

export default Card;
