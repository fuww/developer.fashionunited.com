// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import { AppProps } from "$fresh/server.ts";
import Header from "@/components/Header.tsx";
import DarkMode from "@/islands/DarkMode.tsx";
import Footer from "@/components/Footer.tsx";

export default function App(props: AppProps) {
  return (
    <div class="bg-white dark:bg-dark">
      <div class="flex flex-col min-h-screen mx-auto max-w-7xl w-full text-gray-900 dark:text-white">
        <Header
          url={props.url}
          sessionId={props.data?.sessionId}
          hasNotifications={props.data?.hasNotifications}
        />
        <props.Component />
        <DarkMode prev={"system"} />
        <Footer url={props.url} />
      </div>
    </div>
  );
}
