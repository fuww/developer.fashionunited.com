// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import {
  ACTIVE_LINK_STYLES,
  LINK_STYLES,
  SITE_BAR_STYLES,
} from "@/utils/constants.ts";
import { stripe } from "@/utils/payments.ts";
import { Bars, Bell, CircleFilled, Cross } from "./Icons.tsx";
import Logo from "@/components/Logo.tsx";

export default function Header(
  props: { sessionId?: string; hasNotifications: boolean; url: URL },
) {
  const NAV_ITEM = "text-gray-500 px-3 py-4 sm:py-2";
  return (
    <header class="site-bar-styles flex-col sm:flex-row">
    >
      <input
        type="checkbox"
        id="nav-toggle"
        class="hidden [:checked&+*>:last-child>*>:first-child]:hidden [:checked&+*>:last-child>*>:last-child]:block checked:siblings:last-child:flex"
      />

      <div class="flex justify-between items-center">
        <a href="/" class="shrink-0">
          <span class="pt-2 pr-2 pb-2">
            <Logo />
          </span>
        </a>
        <div class="flex gap-4 items-center">
          <label
            tabIndex={0}
            class="sm:hidden"
            id="nav-toggle-label"
            htmlFor="nav-toggle"
          >
            <Bars class="w-6 h-6" />
            <Cross class="hidden w-6 h-6" />
          </label>
        </div>
      </div>
      <script>
        {`
          const navToggleLabel = document.getElementById('nav-toggle-label');
          navToggleLabel.addEventListener('keydown', () => {
            if (event.code === 'Space' || event.code === 'Enter') {
              navToggleLabel.click();
              event.preventDefault();
            }
          });
        `}
      </script>
      <nav
        class={"hidden flex-col gap-x-4 divide-y divide-solid sm:(flex items-center flex-row divide-y-0)"}
      >
        <a
          href="/docs/advertising"
          class="link-styles data-[ancestor]:!text-black data-[ancestor]:dark:!text-white nav-item"
        >
          Docs
        </a>
        <a
          href="/showcase"
          class="link-styles data-[ancestor]:!text-black data-[ancestor]:dark:!text-white nav-item"
        >
          Showcase
        </a>
      </nav>
    </header>
  );
}
