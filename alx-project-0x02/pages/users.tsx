import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const UsersPage: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-300">
      <Header />
      <h1 className="sticky top-16 z-40 text-left text-4xl font-bold text-white mb-4 bg-blue-300 w-full px-4">
        Users
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full px-4 p-4 bg-blue-300">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            username={user.username}
            email={user.email}
            address={user.address}
            phone={user.phone}
            website={user.website}
            company={user.company}
          />
        ))}
      </div>
    </div>
  );
};


export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  
  type ApiUser = {
    id: number;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };

  const users: UserProps[] = (data as ApiUser[]).map((item) => ({
    id: item.id,
    username: item.username,
    email: item.email,
    address: item.address,
    phone: item.phone,
    website: item.website,
    company: item.company,
  }));

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;