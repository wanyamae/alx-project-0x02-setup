import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, username, email, address, phone, website, company }) => {
    return (
        <div className="bg-gray-200">
            <h2 className="text-2xl font-bold mb-2">User id: {id} ... {username}</h2>
            <p className="text-gray-700 mb-1">Email: {email}</p>
            <p className="text-gray-700 mb-1">Phone: {phone}</p>
            <p className="text-gray-700 mb-1">Website: {website}</p>
            <div className="mb-4">
                <h3 className="font-semibold">Address:</h3>
                <p>{address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
                <p>Geo: {address.geo.lat}, {address.geo.lng}</p>
            </div>
            <div>
                <h3 className="font-semibold">Company:</h3>
                <p>{company.name}</p>
                <p>{company.catchPhrase}</p>
                <p>{company.bs}</p>
            </div>
        </div>
    )
};

export default UserCard;