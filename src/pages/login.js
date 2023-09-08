import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form"
// import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import auth from '@/firebase/firebase.auth';


const LoginPage = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password)
  }


 console.log("firebase auth hooks", user)
  
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined onClick={()=> signIn("google", {callbackUrl: "http://localhost:3000"})} />
          <GithubOutlined onClick={()=> signIn("github", {callbackUrl: "http://localhost:3000/"})} />
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>
          <input {...register("email")} type="email" />
          <label htmlFor="">Your Password</label>
          <input {...register("password")} type="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
