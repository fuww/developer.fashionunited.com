// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import { LINK_STYLES } from "@/utils/constants.ts";

export function TabItem(
  props: { path: string; innerText: string; active: boolean },
) {
  return (
    <a
      href={props.path}
      class={`px-4 py-2 rounded-lg ${
        props.active
          ? "bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
          : ""
      } link-styles`}
    >
      {props.innerText}
    </a>
  );
}

export default function TabsBar(
  props: { links: { path: string; innerText: string }[]; currentPath: string },
) {
  return (
    <div class="flex flex-row w-full mb-8">
      {props.links.map((link) => (
        <TabItem
          path={link.path}
          innerText={link.innerText}
          active={link.path === props.currentPath}
        />
      ))}
    </div>
  );
}
