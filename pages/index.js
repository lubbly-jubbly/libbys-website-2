// index.html
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout";
import styles from "./index.module.css";

function HomePage() {
  const [funMode, setFunMode] = useState(true);

  return (
    <Layout>
      <div>
        Hello! I am a software developer, currently based in Glasgow, Scotland,
        but hoping to move to Berlin...with your help!
      </div>
      <div>
        <Image src="/images/fun-libby.png" alt="me" width="64" height="64" />
      </div>
    </Layout>
  );
}

export default HomePage;
