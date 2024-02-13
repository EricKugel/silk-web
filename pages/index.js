import { useSession } from "next-auth/react";

const Home = () => {
  const session = useSession();
  return (
    <>
      <p>Hello, world!</p>
      <div>Current session:</div>
      <div>{JSON.stringify(session?.data)}</div>
    </>
  );
};

export default Home;