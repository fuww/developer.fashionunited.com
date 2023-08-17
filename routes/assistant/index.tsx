// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import type { Handlers, PageProps } from "$fresh/server.ts";
import type { SignedInState } from "@/utils/middleware.ts";
import { BUTTON_STYLES } from "@/utils/constants.ts";
import { ComponentChild } from "preact";
import { stripe } from "@/utils/payments.ts";
import Head from "@/components/Head.tsx";
import GitHubAvatarImg from "@/components/GitHubAvatarImg.tsx";
import SearchDialog from "@/islands/SearchDialog.tsx";

export const handler: Handlers<SignedInState, SignedInState> = {
  GET(_request, ctx) {
    return ctx.render(ctx.state);
  },
};

interface RowProps {
  title: string;
  children?: ComponentChild;
  text: string;
}

function Row(props: RowProps) {
  return (
    <li class="py-4">
      <div class="flex flex-wrap justify-between">
        <span>
          <strong>{props.title}</strong>
        </span>
        {props.children && <span>{props.children}</span>}
      </div>
      <p>
        {props.text}
      </p>
    </li>
  );
}

export default function AccountPage(props: PageProps<SignedInState>) {
  // const action = props.data.user.isSubscribed ? "Manage" : "Upgrade";

  return (
    <>
      <Head title="Account" href={props.url.href} />
      <main class="max-w-lg m-auto w-full flex-1 p-4 flex flex-col justify-center">
        <h1 class="text-3xl font-bold">AI Assistant</h1>
        <p class="text-gray-500">
          Get answers using generative AI based on content from FashionUnited
          Developer Documentation.
        </p>
        <SearchDialog withPadding />
        <a
          href="/signout"
          class={`${BUTTON_STYLES} block text-center mt-8`}
        >
          Sign out
        </a>
      </main>
    </>
  );
}
