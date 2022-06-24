import Head from "next/head";
import { withRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const WithCheckAppId = (Component: React.FC<{ memberId: string }>) => {
  return withRouter(({ router }) => {
    const { query } = router;
    return query?.id ? (
      <Component memberId={query.id.toString()} />
    ) : (
      <div>Missing Member ID</div>
    );
  });
};

export const MemberDetail: React.FC<{ memberId: string }> = ({ memberId }) => {
  const [member, setMember] = useState({
    id: "",
    name: "",
    email: "",
    website: "",
  });

  useEffect(() => {
    const getMember = async (memberId: string) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${memberId}`
      );
      const data = await res.json();
      setMember(data);
    };
    getMember(memberId);
  }, []);

  return (
    <>
      <Head>
        <title>Member List | Detail</title>
      </Head>
      <div>
        <h1>Details</h1>
        <h2>{member.name}</h2>
        <p>{member.email}</p>
        <p>{member.website}</p>
      </div>
    </>
  );
};

export const MemberDetailContainer = WithCheckAppId(MemberDetail);
