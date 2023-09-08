import Head from "next/head";
import auth from "@/firebase/firebase.auth";
import { useAuthState } from "react-firebase-hooks/auth";

const HomePage = () => {
  const [user,   error, loading] = useAuthState(auth)
  return (
    <div style={{ textAlign: "center", marginTop:"10%" }}>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop:"10%" }}>Welcome To Next Auth Home Page</h1>
      {user?.email && <h4>User Name: {user.email}</h4>}
    </div>
  );
};

export default HomePage;
