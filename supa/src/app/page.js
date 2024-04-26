import Image from "next/image";
import styles from "./page.module.css";
import Test from "../components/test";
import supabase from "@/api/supabase";
import Signup from "@/components/signup";

export default function Home() {
  console.log(supabase)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Test />
        <Signup />
        </div>
    </main>
  );
}
