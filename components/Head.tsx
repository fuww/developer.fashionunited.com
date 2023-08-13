// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import { Head as _Head } from "$fresh/runtime.ts";
import Meta, { type MetaProps } from "./Meta.tsx";
import { SITE_DESCRIPTION, SITE_NAME } from "../utils/constants.ts";
import { ComponentChildren } from "preact";

const CSS = `::selection {
  background-color: #000;
  color: #fff;
}

::is(html[class~="dark"] body) {
  --tw-bg-opacity: 1;
  background-color: rgba(17,17,17,var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(243,244,246,var(--tw-text-opacity));
}
`;

/**
 * This acts as a wrapper around Fresh's `<Head />`.
 * It includes HTML metadata from the `<Meta />` with defaults specifically for Deno Hunt.
 */
export default function Head(
  props: Partial<Omit<MetaProps, "href">> & Pick<MetaProps, "href"> & {
    children?: ComponentChildren;
  },
) {
  const darkmodeCode = `function global_dark(change) {
    if (change === 'auto') delete localStorage.theme; else if (change === 'on') localStorage.theme = 'dark'; else if (change === 'off') localStorage.theme = 'light';
    window.isDark = localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[window.isDark ? 'add' : 'remove']("dark");
  }
  global_dark();`;
  return (
    <_Head>
      <style>
        {CSS}
      </style>
      <script
        dangerouslySetInnerHTML={{
          __html: darkmodeCode,
        }}
      />
      <Meta
        title={props?.title ? `${props.title} ▲ ${SITE_NAME}` : SITE_NAME}
        description={props?.description ?? SITE_DESCRIPTION}
        href={props.href}
      />
      {props.children}
    </_Head>
  );
}
