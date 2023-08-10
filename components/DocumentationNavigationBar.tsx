const DocumentationNavigationBar = (props: { active: string }) => {
  const items = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "docs",
      href: "/docs",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Showcase",
      href: "/showcase",
    },
    {
      name: "Apps 🡕",
      href: "https://fashionunited.cloudflareaccess.com",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "fashionunited.info 🡕",
      href: "https://fashionunited.info/about-us",
    },
  ];

  return (
    <span>
      {items.map((item) => (
        <a
          href={item.href}
          class={`text-sm relative -ml-2 hidden whitespace-nowrap p-2 md:inline-block text-gray-600 hover:text-gray-800 ${
            // contrast-more:text-gray-700 contrast-more:dark:text-gray-100
            // dark:text-gray-400 dark:hover:text-gray-200
            props.active == item.href ? "font-bold text-gray-700" : ""}`}
        >
          {item.name}
        </a>
      ))}
    </span>
    // <nav class="py-2 border-b border-neutral-200">
    //   <ul class="flex justify-center gap-8 mx-4 ">
    //     {items.map((item) => (
    //       <li>
    //         <a
    //           href={item.href}
    //           class={`text-gray-600 hover:underline ${
    //             props.active == item.href ? "font-bold" : ""
    //           }`}
    //         >
    //           {item.name}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
  );
};

export default DocumentationNavigationBar;
