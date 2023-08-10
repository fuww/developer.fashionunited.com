// Copyright 2023-2024 the Deno authors. All rights reserved. MIT license.
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import type { State } from "@/plugins/session.ts";
import { defineApp } from "$fresh/server.ts";

export default defineApp<State>((_, ctx) => {
  return (
    <html>
      <head>
      </head>
      <body>
        <div class="dark:bg-gray-900">
          <div class="flex flex-col min-h-screen mx-auto max-w-7xl w-full dark:text-white">
            <Header
              url={props.url}
              sessionId={props.data?.sessionId}
              hasNotifications={props.data?.hasNotifications}
            />
            <props.Component />
            <Footer url={props.url} />
          </div>
        </div>
      </body>
    </html>
  );
});
