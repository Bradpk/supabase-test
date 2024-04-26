import Image from "next/image";
import styles from "./page.module.css";
import Test from "../components/test";
import supabase from "@/api/supabase";
import Signup from "@/components/signup";
import Post from "@/components/post";

export default function Home() {
  console.log(supabase)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Test />
        <Post />
        <br></br>
        <Signup />
        </div>
    </main>
  );
}
