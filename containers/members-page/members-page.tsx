import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "./members-page.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { members: data },
  };
};

export const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getMembers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setMembers(data);
    };
    getMembers();
  }, []);

  return (
    <>
      <Head>
        <title>Member List | List</title>
        <meta name="keywords" content="members" />
      </Head>
      <div>
        <h1>All Members</h1>
        {members.map((member: any) => (
          <div key={member.id}>
            <a className={styles.single}>
              <h3>{member.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
