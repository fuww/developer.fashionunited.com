// Copyright 2023-2024 the Deno authors. All rights reserved. MIT license.
import { SITE_NAME } from "@/utils/constants.ts";
import { isStripeEnabled } from "@/utils/stripe.ts";
import IconX from "tabler_icons_tsx/x.tsx";
import IconMenu from "tabler_icons_tsx/menu-2.tsx";
import { User } from "@/utils/db.ts";
// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import {
  ACTIVE_LINK_STYLES,
  LINK_STYLES,
  SITE_BAR_STYLES,
} from "@/utils/constants.ts";
// import { stripe } from "@/utils/payments.ts";
// import { Bars, Bell, CircleFilled, Cross } from "./Icons.tsx";
import Logo from "@/components/Logo.tsx";

export interface HeaderProps {
  /** Currently signed-in user */
  sessionUser?: User;
  /**
   * URL of the current page. This is used for highlighting the currently
   * active page in navigation.
   */
  url: URL;
}

export default function Header(props: HeaderProps) {
  return (
    <header class="site-bar-styles flex-col sm:flex-row">
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
            <IconMenu class="size-6" />
            <IconX class="hidden size-6" />
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
        class={"hidden flex-col gap-x-4 divide-y divide-solid sm:flex sm:items-center sm:flex-row sm:divide-y-0"}
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
