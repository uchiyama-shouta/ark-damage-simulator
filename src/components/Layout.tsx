import type { FC, ReactNode } from "react";
import Header from "components/Header";
import { Container } from "@mantine/core";
import Head from "next/head";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>ARK ダメージシミュレーター</title>
      </Head>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
