import { useSession } from "next-auth/react";

import { connectDB } from "../helpers/mongohelper";

import Link from "next/link";
import User from "../models/user";

const Home = ({ users }) => {
  const session = useSession();
  return (
    <>
      <div>Current session:</div>
      <div>{JSON.stringify(session?.data)}</div>
      <Link href="/login">Sign me in!</Link>
      <hr></hr>
      <div>
        <div>All current users:</div>
        <ol>
          {users.map((user) => <li key={user._id}>{user.email}</li>)}
        </ol>
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  try {
    await connectDB();
    console.log(JSON.parse(JSON.stringify(await User.find({}).lean())));
    return {
      props: {
        users: JSON.parse(
          JSON.stringify(await User.find({}).lean())
        ),
      },
    };
  } catch (e) {
    console.error(e);
  }
}