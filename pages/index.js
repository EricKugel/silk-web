import { useSession } from "next-auth/react";

import Link from "next/link";

const Home = () => {
  const session = useSession();
  return (
    <>
      <p>Hello, world!</p>
      <div>Current session:</div>
      <div>{JSON.stringify(session?.data)}</div>
      <Link href="/login">Sign me in!</Link>
    </>
  );
};

export default Home;