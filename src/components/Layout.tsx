import type { FC, ReactNode } from "react";
import Header from "components/Header";
import Head from "next/head";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>ARK ダメージシミュレーター</title>
      </Head>
      <Header />
      <div className="px-4 sm:px-6 lg:px-8 mx-auto mt-5 max-w-7xl">
        <div className="mx-auto max-w-3xl">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
