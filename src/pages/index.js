import Head from "next/head";
import { useSession } from "next-auth/react"

const HomePage = () => {

  const { data: session } = useSession()

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>Welcome To Next Auth Home Page</h1>
      <h2 style={{ textAlign: "center" }}>Logged User : {session?.user?.name}</h2>
      <h3 style={{ textAlign: "center" }}>Logged Email : {session?.user?.email}</h3>
      
    </div>
  );
};

export default HomePage;
