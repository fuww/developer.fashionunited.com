const logos = [
  {
    id: 1,
    name: "GitLab single sign-on",
    src: "https://about-cdn.fashionunited.com/gitlab.svg",
    href: "https://gitlab.com/groups/fuww/-/saml/sso?token=PuZMDoUj",
  },
  {
    id: 2,
    name: "Google Drive",
    src: "https://about-cdn.fashionunited.com/Google_Drive_icon_(2020).svg",
    href: "https://drive.google.com/drive/u/0/my-drive",
  },
  {
    id: 3,
    name: "Google Calendar",
    src: "https://about-cdn.fashionunited.com/Google_Calendar_icon_(2020).svg",
    href: "https://www.google.com/calendar",
  },
  {
    id: 4,
    name: "Gmail",
    src: "https://about-cdn.fashionunited.com/Gmail_icon_(2020).svg",
    href: "https://mail.google.com/mail/u/0/#inbox",
  },
  {
    id: 5,
    name: "CRM vTiger",
    src: "https://about-cdn.fashionunited.com/vtiger_crm_logo.svg",
    href: "https://crm.fashionunited.com",
  },
  {
    id: 37,
    name: "Google Gemini",
    src: "https://about-cdn.fashionunited.com/Google_Gemini_logo.svg",
    href: "https://gemini.google.com",
  },
  {
    id: 6,
    name: "Google AI Studio",
    src: "https://about-cdn.fashionunited.com/Google_Gemini_logo.svg",
    href: "https://aistudio.google.com/app/prompts/new_chat",
  },
  {
    id: 7,
    name: "OpenAI Playground GPT-4",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    href: "https://platform.openai.com/playground?model=gpt-4",
  },
  {
    id: 8,
    name: "Trello",
    src: "https://about-cdn.fashionunited.com/Trello_logo.svg",
    href: "https://news.fashionunited.com",
  },
  {
    id: 9,
    name: "Humanwave",
    src: "https://humanwave.nl/wp-content/uploads/2019/10/Humanwave_logo_Bruine.svg",
    href: "https://app.humanwave.nl/login",
  },
  {
    id: 12,
    name: "GitHub",
    src: "https://about-cdn.fashionunited.com/Octicons-mark-github.svg",
    href: "https://github.com/orgs/fuww",
  },
  {
    id: 14,
    name: "developer.fashionunited.com",
    src: "https://about-cdn.fashionunited.com/FashionUnited logo BLACK.svg",
    href: "https://developer.fashionunited.com",
  },
  {
    id: 15,
    name: "MongoDB Atlas",
    src: "https://about-cdn.fashionunited.com/MongoDB_Logo.svg",
    href: "https://cloud.mongodb.com/",
  },
  {
    id: 17,
    name: "Cloudflare Zero Trust",
    src: "https://about-cdn.fashionunited.com/Cloudflare_Logo.svg",
    href: "https://one.dash.cloudflare.com/21e981250c869dfa3ec4e9844b094168/home",
  },
  {
    id: 18,
    name: "Cloudflare (CDN, DNS)",
    src: "https://about-cdn.fashionunited.com/Cloudflare_Logo.svg",
    href: "https://dash.cloudflare.com/",
  },
  {
    id: 19,
    name: "Stitch data",
    src: "https://about-cdn.fashionunited.com/FashionUnited logo BLACK.svg",
    href: "https://app.stitchdata.com/",
  },
  {
    id: 20,
    name: "Google Cloud Platform Console",
    src: "https://about-cdn.fashionunited.com/Google_Cloud_logo.svg",
    href: "https://console.cloud.google.com/welcome?project=kubernetes-164514",
  },
  {
    id: 21,
    name: "Google Bigquery",
    src: "https://about-cdn.fashionunited.com/google-bigquery-logo.svg",
    href: "https://console.cloud.google.com/bigquery?referrer=search&project=datawarehouse-164512&ws=!1m0",
  },
  {
    id: 38,
    name: "Google Ad Manager",
    src: "https://about-cdn.fashionunited.com/Google_2015_logo.svg",
    // src: "https://about-cdn.fashionunited.com/Google__G__logo.svg", // square
    href: "https://admanager.google.com/",
  },
  {
    id: 22,
    name: "Exact Online",
    src: "https://about-cdn.fashionunited.com/exact-logo.svg",
    href: "https://start.exactonline.nl/",
  },
  {
    id: 23,
    name: "Figma",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    href: "https://www.figma.com/files/team/665572306422923975/FashionUnited-team",
  },
  {
    id: 24,
    name: "Adobe Creative Cloud",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg",
    href: "https://creativecloud.adobe.com/cc/",
  },
  {
    id: 25,
    name: "Befunky",
    src: "https://about-cdn.fashionunited.com/befunky-logo-darker.svg",
    href: "https://www.befunky.com/",
  },
  {
    id: 26,
    name: "Aruba Instant On Portal (Network)",
    src: "https://about-cdn.fashionunited.com/Aruba_Networks_logo.svg",
    href: "https://portal.arubainstanton.com/#/login?returnUrl=%2Fsite-list",
  },
  {
    id: 27,
    name: "Jamf PRO",
    src: "https://about-cdn.fashionunited.com/Jamf-color-CMYK [Omgezet].svg",
    href: "https://fashionunited.jamfcloud.com/saml/metadata",
  },
  {
    id: 29,
    name: "company.fashionunited.com",
    src: "https://about-cdn.fashionunited.com/FashionUnited logo BLACK.svg",
    href: "https://company.fashionunited.com",
  },
  {
    id: 28,
    name: "Canva",
    src: "https://about-cdn.fashionunited.com/canva.svg",
    href: "https://www.canva.com",
  },
  {
    id: 31,
    name: "n8n Workflow automation",
    src: "https://about-cdn.fashionunited.com/n8n_logo.svg",
    href: "https://fuww.app.n8n.cloud/",
  },
  {
    id: 30,
    name: "Dashboard users",
    src: "https://about-cdn.fashionunited.com/FashionUnited logo BLACK.svg",
    href: "https://dashboard.fashionunited.com/users",
  },
  {
    id: 10,
    name: "Handbook",
    src: "https://about-cdn.fashionunited.com/FashionUnited logo BLACK.svg",
    href: "https://about.fashionunited.com",
  },
  {
    id: 32,
    name: "Google Chat",
    src: "https://about-cdn.fashionunited.com/Google_Chat_Logo_Full.png",
    href: "https://chat.google.com",
  },
  {
    id: 33,
    name: "Trello",
    src: "https://about-cdn.fashionunited.com/Trello_logo.svg",
    href: "https://trello.com/login",
  },

  {
    id: 11,
    name: "Blog",
    src: "https://about-cdn.fashionunited.com/FashionUnited logo BLACK.svg",
    href: "https://about.fashionunited.com/blog",
  },
  {
    id: 36,
    name: "docs.fashionunited.com",
    src: "https://about-cdn.fashionunited.com/FashionUnited logo BLACK.svg",
    href: "https://docs.fashionunited.com",
  },
  {
    id: 35,
    name: "Looker Studio",
    src: "https://about-cdn.fashionunited.com/ic_looker_studio.svg",
    href: "https://datastudio.google.com/",
  },
];

export default function ApplicationButtons() {
  return (
    <>
      <div class="not-content bg-white dark:bg-dark dark:text-gray-300">
        <div class="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <h2 class="dark:text-white text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All FashionUnited applications in one place
          </h2>
          <p class="text-gray-600 mx-auto mt-6 max-w-xl text-lg leading-8">
            Use the app launcher at{" "}
            <a
              class="text-blue-600 dark:text-blue-500 hover:underline"
              href="https://fashionunited.cloudflareaccess.com/"
            >
              fashionunited.cloudflareaccess.com
            </a>
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/handbook/"
              class="bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Get started
            </a>
            <a
              href="https://fashionunited.cloudflareaccess.com/"
              class="dark:text-white text-sm font-semibold leading-6 text-gray-900"
            >
              App Launcher
            </a>
          </div>
          <div class="mt-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:gap-4 md:grid-cols-4 lg:mt-8">
            {logos.map((item) => (
              <a href={item.href}>
                <div class="bg-gray-50">
                  <div
                    key={item.id}
                    class="col-span-1 flex justify-center bg-gray-50 py-8 px-8"
                  >
                    <img
                      class="max-h-12 min-h-12 w-full object-contain"
                      src={item.src}
                      alt={item.name}
                    />
                  </div>
                  <p class="text-center text-sm font-semibold text-gray-600 bg-gray-50 pb-4">
                    {item.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
