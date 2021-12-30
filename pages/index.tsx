import React from "react";
import type { NextPage } from "next";
import Logo from "../components/Logo";
import Header1 from "../components/UI/Header1";
import Paragraph from "../components/UI/Paragraph";
import Link from "../components/UI/Link";

const Home: NextPage = () => {
  return (
    <>
      <main className="w-screen h-screen flex items-center justify-center">
        <div className="relative -top-5 flex flex-col gap-5 items-center">
          <div className="flex flex-row items-center gap-10">
            <Logo />
            <div className="relative top-2">
              <Header1 text="TGMusicfy" />
            </div>
          </div>
          <div className="max-w-3xl text-center">
            <Paragraph>@TGMusicfy - Minimalistic Telegram music search bot written in TypeScript and based on Telegraf and Express JS.</Paragraph>
          </div>
          <Link />
        </div>
      </main>
    </>
  );
};

export default Home;
