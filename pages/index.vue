<template>
  <div class="flex flex-col min-h-screen antialiased bg-white font-montserrat">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative bg-gray-600">
      <div class="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center sm:px-16">
          <p class="font-medium text-white">
            <span class="md:hidden">🚧 Website Under Construction 🚧</span>
            <span class="hidden md:inline">
              🚧 This Website is Under Construction 🚧
            </span>
          </p>
        </div>
      </div>
    </div>

    <nav class="bg-white">
      <div class="px-4 pt-6 pb-3 mx-auto max-w-7xl sm:px-6 xl:px-8">
        <div class="flex justify-between">
          <div class="flex flex-grow">
            <div class="flex flex-row justify-center flex-shrink-0">
              <div class="flex flex-col justify-center">
                <div
                  class="font-serif text-sm font-medium text-gray-600 sm:text-2xl text-shadow"
                >
                  <a href="/"
                    ><span class="text-lg sm:text-3xl">S</span>PENCER
                    <span class="text-lg sm:text-3xl">A</span>DAMS
                  </a>
                </div>
                <div
                  class="flex -mt-2 text-sm font-light tracking-wider text-gray-600 text-shadow sm:text-lg font-slogan"
                >
                  <div>REAL ESTATE</div>
                </div>
              </div>
              <div class="flex flex-col justify-center pt-2 ml-6">
                <img
                  src="~/assets/img/remax-logo.svg"
                  class="block h-3 sm:h-4"
                  alt="Remax Logo"
                />
                <div class="text-base text-gray-600 sm:text-lg">Choice</div>
              </div>
            </div>
            <div
              class="items-center justify-center flex-grow hidden sm:-my-px sm:ml-6 xl:flex sm:space-x-8"
            >
              <!-- Current: "border-blue-500 text-gray-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->

              <a
                href="#about-me"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 transition-all duration-200 border-b-2 border-transparent text-shadow hover:border-gray-300 hover:text-gray-700"
              >
                ABOUT ME
              </a>

              <a
                href="#contact"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 transition-all duration-200 border-b-2 border-transparent text-shadow hover:border-gray-300 hover:text-gray-700"
              >
                CONTACT
              </a>

              <a
                href="#"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 transition-all duration-200 border-b-2 border-transparent text-shadow hover:border-gray-300 hover:text-gray-700"
              >
                BLOG
              </a>
              <a
                href="https://instagram.com/spenceradams.realestate"
                class="inline-flex items-center px-1 pt-1 text-sm text-gray-600 border-b-2 border-transparent hover:text-gray-700"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div class="items-center justify-center hidden ml-8 xl:flex">
              <button
                class="px-3 py-1 mr-2 text-sm font-semibold text-gray-600 transition-all duration-200 border-2 border-gray-600 text-shadow hover:bg-black hover:text-white hover:border-black"
              >
                BUY
              </button>
              <button
                class="px-3 py-1 text-sm font-semibold text-gray-600 transition-all duration-200 border-2 border-gray-600 text-shadow hover:bg-black hover:text-white hover:border-black"
              >
                SELL
              </button>
            </div>
          </div>
          <div class="flex items-center -mr-2 xl:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="toggle"
            >
              <span class="sr-only">Open main menu</span>
              <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
              <svg
                class="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
              <svg
                class="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div id="mobile-menu" :class="{ hidden: !opened }" class="xl:hidden">
        <div class="pb-3 space-y-1">
          <!-- Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-600 hover:bg-white hover:border-gray-300 hover:text-gray-800" -->

          <a
            href="#about-me"
            class="flex items-center py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-white hover:border-gray-300 hover:text-gray-800"
          >
            About Me
          </a>

          <a
            href="#contact"
            class="flex items-center py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-white hover:border-gray-300 hover:text-gray-800"
          >
            Contact
          </a>

          <a
            href="#"
            class="flex items-center py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-white hover:border-gray-300 hover:text-gray-800"
          >
            Blog
          </a>
          <a
            href="https://instagram.com/spenceradams.realestate"
            class="flex items-center py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-white hover:border-gray-300 hover:text-gray-800"
          >
            <svg
              class="w-6 h-6 mr-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <div class="flex items-center pt-6 pb-2 pl-3 pr-4">
            <button
              class="flex-grow px-3 py-1 mr-2 text-base font-semibold text-gray-600 transition-all duration-200 border-2 border-gray-600 hover:text-gray-800 hover:border-gray-800 text-shadow"
            >
              BUY
            </button>
            <button
              class="flex-grow px-3 py-1 text-base font-semibold text-gray-600 transition-all duration-200 border-2 border-gray-600 hover:text-gray-800 hover:border-gray-800 text-shadow"
            >
              SELL
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="flex-grow py-4">
      <main>
        <div class="mb-12">
          <!-- Hero card -->
          <div class="relative">
            <div class="mx-auto max-w-screen-4xl">
              <div
                class="relative flex flex-col items-center justify-center h-screen-4/5"
              >
                <div class="absolute inset-0">
                  <img
                    class="object-cover w-full h-full"
                    src="~/assets/img/street.jpg"
                    alt="Subdivision Street"
                  />
                  <div
                    class="absolute inset-0 bg-blue-100"
                    style="mix-blend-mode: multiply"
                  ></div>
                </div>
                <div
                  class="relative px-4 py-16 sm:px-6 sm:py-24 xl:py-32 xl:px-8"
                >
                  <h1
                    class="text-4xl font-semibold text-center sm:text-5xl xl:text-6xl"
                  >
                    <span
                      class="block text-white font-montserrat text-shadow-xl"
                      >BRINGING YOU HOME</span
                    >
                  </h1>
                  <p
                    class="max-w-lg mx-auto mt-6 text-lg font-semibold text-center text-white font-montserrat sm:text-2xl text-shadow-xl sm:max-w-3xl"
                  >
                    Your Champaign-Urbana Real Estate Expert
                  </p>
                  <div class="flex justify-center mx-auto mt-10 max-w-none">
                    <div class="flex space-x-4">
                      <a
                        href="#"
                        class="flex items-center justify-center px-4 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-700 border-2 border-white shadow-lg bg-opacity-30 hover:text-shadow-none text-shadow-md hover:bg-white hover:text-gray-600 sm:px-8"
                      >
                        BUY
                      </a>
                      <a
                        href="#"
                        class="flex items-center justify-center px-4 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-700 border-2 border-white shadow-lg bg-opacity-30 hover:text-shadow-none text-shadow-md hover:bg-white hover:text-gray-600 sm:px-8"
                      >
                        SELL
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="about-me" class="relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center">
            <span
              class="px-2 font-serif text-3xl text-gray-600 bg-white text-shadow"
            >
              MEET YOUR AGENT
            </span>
          </div>
        </div>

        <div class="mb-12 bg-white">
          <div class="max-w-6xl px-4 mx-auto sm:px-6 xl:px-8">
            <div class="xl:grid xl:grid-cols-2 xl:gap-4">
              <div
                class="px-6 pt-6 sm:pt-10 sm:px-16 xl:pr-0 xl:py-16 xl:px-20"
              >
                <div
                  v-observe-visibility="{
                    callback: meetYourAgentTextVisibility,
                    once: true,
                    intersection: { threshold: 0.4 },
                    throttle: 300,
                  }"
                  class="xl:self-center"
                >
                  <transition name="slide-right-fade">
                    <p v-show="textVisible" class="my-4 text-lg text-gray-600">
                      Hi! My name is Spencer Adams! I'm a Real Estate Agent
                      working on Team Gordon at Remax Choice out of Champaign,
                      IL. I grew up in Boston and moved to Champaign in 2004
                      when my family decided we should be closer to our
                      grandparents. My parents allowed me to be pretty involved
                      in that process and since then I've had a love for both
                      real estate and Champaign-Urbana. I love helping people
                      move from renters to home owners and showing them all the
                      benefits that come with it!
                    </p>
                  </transition>
                </div>
              </div>
              <div class="flex items-center justify-center">
                <div
                  v-observe-visibility="{
                    callback: meetYourAgentImgVisibility,
                    once: true,
                    intersection: { threshold: 0.4 },
                    throttle: 300,
                  }"
                  class="flex items-center justify-center h-96 w-96"
                >
                  <transition name="slide-left-fade">
                    <img
                      v-show="imgVisible"
                      class="object-cover object-left-top shadow-2xl"
                      src="~/assets/img/me.jpg"
                      alt="Spencer Adams"
                    />
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" class="relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center">
            <span
              class="px-2 font-serif text-3xl text-gray-600 bg-white text-shadow"
            >
              GET IN TOUCH
            </span>
          </div>
        </div>

        <div class="relative bg-white">
          <div class="absolute inset-0">
            <div class="absolute inset-y-0 left-0 w-1/2 bg-white"></div>
          </div>
          <div class="relative mx-auto max-w-7xl xl:grid xl:grid-cols-5">
            <div
              class="px-4 py-16 bg-white sm:px-6 xl:col-span-2 xl:px-8 xl:py-24 xl:pr-12"
            >
              <div class="max-w-lg mx-auto">
                <p class="mt-3 text-lg text-gray-600">
                  Let's sit down and put together a plan to meet your specific
                  real estate goals
                </p>
                <dl class="mt-8 text-lg text-gray-500">
                  <div>
                    <dt class="sr-only">Postal address</dt>
                    <dd>
                      <p class="font-extrabold">Spencer Adams</p>
                      <p class="font-extrabold">2919 Crossing Ct</p>
                      <p class="font-extrabold">Champaign, IL 61822</p>
                    </dd>
                  </div>
                  <div class="mt-8">
                    <dt class="sr-only">Phone number</dt>
                    <dd class="">
                      <a
                        href="tel:+12178197311"
                        class="inline-flex items-center font-medium tracking-wider text-gray-600 transition-all duration-200 hover:text-red-500"
                      >
                        <svg
                          class="-ml-0.5 mr-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        217-819-7311
                      </a>
                    </dd>
                  </div>
                  <div class="">
                    <dt class="sr-only">Email</dt>
                    <dd class="">
                      <a
                        href="mailto:info@spenceradams.realestate"
                        class="inline-flex items-center font-medium tracking-wider text-gray-600 transition-all duration-200 hover:text-red-500"
                      >
                        <svg
                          class="-ml-0.5 mr-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        info@spenceradams.realestate
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div
              class="px-4 pb-16 bg-white sm:px-6 xl:col-span-3 xl:py-24 xl:px-8 xl:pl-12"
            >
              <div class="max-w-lg mx-auto xl:max-w-none">
                <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
                  <div>
                    <label for="full_name" class="sr-only">Full name</label>
                    <input
                      id="full_name"
                      type="text"
                      name="full_name"
                      autocomplete="name"
                      class="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-none outline-none appearance-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label for="email" class="sr-only">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      class="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-none outline-none appearance-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label for="phone" class="sr-only">Phone</label>
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      autocomplete="tel"
                      class="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-none outline-none appearance-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <label for="message" class="sr-only">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      class="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-none outline-none appearance-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="inline-flex justify-center px-5 py-2 text-base font-medium text-blue-400 transition-all duration-200 border border-transparent border-gray-300 hover:border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <footer class="bg-white border-t border-gray-300">
      <div
        class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between xl:px-8"
      >
        <div class="flex flex-col items-start mt-8 md:mt-0 md:order-1">
          <p class="text-sm text-gray-400">
            Made with ❤️ by
            <a href="https://spentaur.com" class="underline">spentaur</a>
          </p>
          <p class="text-sm text-gray-400">
            &copy; 2021 Spencer Adams. All rights reserved.
          </p>
          <p class="mt-3 text-sm text-gray-400">
            Image Of Champaign City Building: © jordan bennett
          </p>
          <p class="text-sm text-gray-400">
            <a href="http://www.city-data.com/picfilesv/picv35888.php">
              http://www.city-data.com/picfilesv/picv35888.php
            </a>
            / CC-BY-SA-3.0
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const opened = ref(false)
    const toggle = () => (opened.value = !opened.value)

    const textVisible = ref(false)
    const meetYourAgentTextVisibility = (isVisible: boolean) => {
      if (isVisible) {
        textVisible.value = true
      }
    }

    const imgVisible = ref(false)
    const meetYourAgentImgVisibility = (isVisible: boolean) => {
      if (isVisible) {
        imgVisible.value = true
      }
    }

    return {
      meetYourAgentTextVisibility,
      meetYourAgentImgVisibility,
      textVisible,
      imgVisible,
      opened,
      toggle,
    }
  },
})
</script>

<style lang="postcss" scoped>
.hero {
  background-image: url('~/assets/img/champaign-city-building.jpg');
}
</style>
