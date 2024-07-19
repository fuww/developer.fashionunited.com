const CardWithBackgroundImage = () => (
  <div class="not-content bg-white dark:bg-dark dark:text-gray-300">
    <main>
      <div>
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100 dark:bg-dark dark:text-gray-300" />
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 dark:bg-dark dark:text-gray-300">
            <div
              class="relative shadow-xl sm:overflow-hidden
              sm:rounded-2xl"
            >
              <div class="absolute inset-0">
                <img
                  class="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  alt="People working on laptops"
                />
                <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
              </div>

              <div
                class="relative px-4 py-16 sm:px-6 sm:py-24
              lg:py-32 lg:px-8"
              >
                <h1
                  class="text-center text-4xl font-bold tracking-tight
                sm:text-5xl lg:text-6xl"
                >
                  <span class="block text-white">
                    Stay in control and share knowledge
                  </span>
                  <span class="block text-indigo-200">
                    How we get work done at FashionUnited
                  </span>
                </h1>

                <p
                  class="mx-auto mt-6 max-w-lg text-center text-xl
                text-indigo-200 sm:max-w-3xl"
                >
                  Everything you need to know about how work is done at
                  FashionUnited. From IT specs, Marketing tricks, Editorial
                  hacks and all sorts of procedures. The single point of truth
                  lies here!
                </p>

                <div
                  class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none
                sm:justify-center"
                >
                  <div
                    class="space-y-4 sm:mx-auto sm:inline-grid
                    sm:grid-cols-2 sm:gap-5 sm:space-y-0"
                  >
                    <a
                      href="/handbook"
                      class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                    >
                      Get started
                    </a>
                    <a
                      href="/handbook/help"
                      class="flex items-center justify-center rounded-md
                      border border-transparent bg-indigo-500 bg-opacity-60
                      px-4 py-3 text-base font-medium text-white shadow-sm
                      hover:bg-opacity-70 sm:px-8"
                    >
                      Get IT Help
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default CardWithBackgroundImage;
