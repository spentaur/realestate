<template>
  <div class="flex flex-col min-h-screen antialiased bg-gray-50">
    <nav class="bg-gray-50">
      <div class="px-4 pt-6 pb-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex justify-between">
          <div class="flex flex-grow">
            <div class="flex flex-col justify-center flex-shrink-0">
              <div
                class="font-serif text-2xl font-medium text-gray-900 text-shadow"
              >
                <a href="/">Spencer Adams </a>
              </div>
              <div
                class="flex text-lg font-light tracking-wider text-gray-500 font-slogan"
              >
                <div>REAL ESTATE</div>
              </div>
              <div class="hidden text-lg tracking-wider lg:flex font-slogan">
                <a
                  class="text-blue-400 hover:underline"
                  href="https://teamgordon.net"
                >
                  Team Gordon · RE/MAX Choice
                </a>
              </div>
            </div>
            <div
              class="items-center justify-center flex-grow hidden sm:-my-px sm:ml-6 lg:flex sm:space-x-8"
            >
              <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->

              <a
                href="#about-me"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              >
                ABOUT ME
              </a>

              <a
                href="#"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              >
                CONTACT
              </a>

              <a
                href="#"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              >
                AREAS SERVED
              </a>

              <a
                href="#"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              >
                FREE CONSULTATION
              </a>
            </div>
            <div
              class="items-center justify-center flex-grow hidden ml-8 lg:flex"
            >
              <a
                href="https://instagram.com/spenceradams.realestate"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:text-gray-700"
              >
                <svg
                  id="Instagram"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  class="w-6 h-6"
                >
                  <title>instagram</title>
                  <path
                    d="M18.94586,6.28931a6.60561,6.60561,0,0,0-.41833-2.18463,4.41189,4.41189,0,0,0-1.03809-1.59412,4.41189,4.41189,0,0,0-1.59412-1.03809,6.60561,6.60561,0,0,0-2.18463-.41833C12.75073,1.01038,12.44427,1,10,1s-2.75073.01038-3.71069,0.05414a6.60561,6.60561,0,0,0-2.18463.41833A4.41189,4.41189,0,0,0,2.51056,2.51056,4.41189,4.41189,0,0,0,1.47247,4.10468a6.60561,6.60561,0,0,0-.41833,2.18463C1.01038,7.24927,1,7.55573,1,10s0.01038,2.75073.05414,3.71069a6.60561,6.60561,0,0,0,.41833,2.18463,4.41189,4.41189,0,0,0,1.03809,1.59412,4.41109,4.41109,0,0,0,1.59412,1.03809,6.60561,6.60561,0,0,0,2.18463.41833C7.24927,18.98969,7.55573,19,10,19s2.75073-.01031,3.71069-0.05414a6.60561,6.60561,0,0,0,2.18463-.41833,4.60208,4.60208,0,0,0,2.6322-2.6322,6.60561,6.60561,0,0,0,.41833-2.18463C18.98962,12.75073,19,12.44427,19,10S18.98962,7.24927,18.94586,6.28931Zm-1.61993,7.34747a4.97824,4.97824,0,0,1-.30994,1.67114A2.98017,2.98017,0,0,1,15.30792,17.016a4.9786,4.9786,0,0,1-1.67114.30994C12.68787,17.3692,12.40326,17.37836,10,17.37836s-2.68787-.00916-3.63678-0.05243A4.9786,4.9786,0,0,1,4.69208,17.016a2.78769,2.78769,0,0,1-1.03485-.67322A2.78769,2.78769,0,0,1,2.984,15.30792a4.97824,4.97824,0,0,1-.30994-1.67114C2.6308,12.68774,2.62164,12.40314,2.62164,10s0.00916-2.68774.05243-3.63678A4.9786,4.9786,0,0,1,2.984,4.69208a2.78769,2.78769,0,0,1,.67322-1.03485A2.78769,2.78769,0,0,1,4.69208,2.984a4.9786,4.9786,0,0,1,1.67114-.30994C7.31226,2.6308,7.59686,2.62164,10,2.62164s2.68774,0.00916,3.63678.05243a4.9786,4.9786,0,0,1,1.67114.30994,2.78769,2.78769,0,0,1,1.03485.67322A2.78769,2.78769,0,0,1,17.016,4.69208a4.9786,4.9786,0,0,1,.30994,1.67114c0.04327,0.949.05243,1.2337,0.05243,3.63678S17.3692,12.68774,17.32593,13.63678ZM10,5.37836A4.62164,4.62164,0,1,0,14.62164,10,4.62169,4.62169,0,0,0,10,5.37836ZM10,13a3,3,0,1,1,3-3A3,3,0,0,1,10,13Zm5.88422-7.8042a1.08,1.08,0,1,1-1.08-1.08A1.08,1.08,0,0,1,15.88422,5.1958Z"
                    transform="translate(-1 -1)"
                  />
                </svg>
              </a>
            </div>
            <div class="items-center justify-center hidden ml-8 lg:flex">
              <button
                class="px-3 py-1 mr-2 text-sm font-semibold text-gray-900 border-2 border-gray-900 hover:bg-black hover:text-white hover:border-black text-shadow"
              >
                BUY
              </button>
              <button
                class="px-3 py-1 text-sm font-semibold text-gray-900 border-2 border-gray-900 hover:bg-black hover:text-white hover:border-black text-shadow"
              >
                SELL
              </button>
            </div>
          </div>
          <div class="flex items-center -mr-2 lg:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-gray-50 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
      <div id="mobile-menu" :class="{ hidden: !opened }" class="lg:hidden">
        <div class="pb-3 space-y-1">
          <a
            class="block py-2 pl-3 pr-4 text-base font-medium text-blue-400 border-l-4 border-transparent hover:text-blue-600 hover:bg-gray-50 hover:border-gray-300"
            href="https://teamgordon.net"
          >
            Team Gordon · RE/MAX Choice
          </a>
          <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" -->

          <a
            href="#about-me"
            class="flex items-center py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="w-4 h-4 mr-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              /></svg
            >About Me
          </a>

          <a
            href="#"
            class="flex items-center py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="w-4 h-4 mr-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Contact
          </a>

          <a
            href="#"
            class="flex items-center py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="w-4 h-4 mr-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            Areas Served
          </a>

          <a
            href="#"
            class="flex items-center py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="w-4 h-4 mr-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>
            Free Consultation
          </a>
          <a
            href="https://instagram.com/spenceradams.realestate"
            class="flex items-center py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
          >
            <svg
              id="Instagram"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              class="w-4 h-4 mr-4"
            >
              <title>instagram</title>
              <path
                d="M18.94586,6.28931a6.60561,6.60561,0,0,0-.41833-2.18463,4.41189,4.41189,0,0,0-1.03809-1.59412,4.41189,4.41189,0,0,0-1.59412-1.03809,6.60561,6.60561,0,0,0-2.18463-.41833C12.75073,1.01038,12.44427,1,10,1s-2.75073.01038-3.71069,0.05414a6.60561,6.60561,0,0,0-2.18463.41833A4.41189,4.41189,0,0,0,2.51056,2.51056,4.41189,4.41189,0,0,0,1.47247,4.10468a6.60561,6.60561,0,0,0-.41833,2.18463C1.01038,7.24927,1,7.55573,1,10s0.01038,2.75073.05414,3.71069a6.60561,6.60561,0,0,0,.41833,2.18463,4.41189,4.41189,0,0,0,1.03809,1.59412,4.41109,4.41109,0,0,0,1.59412,1.03809,6.60561,6.60561,0,0,0,2.18463.41833C7.24927,18.98969,7.55573,19,10,19s2.75073-.01031,3.71069-0.05414a6.60561,6.60561,0,0,0,2.18463-.41833,4.60208,4.60208,0,0,0,2.6322-2.6322,6.60561,6.60561,0,0,0,.41833-2.18463C18.98962,12.75073,19,12.44427,19,10S18.98962,7.24927,18.94586,6.28931Zm-1.61993,7.34747a4.97824,4.97824,0,0,1-.30994,1.67114A2.98017,2.98017,0,0,1,15.30792,17.016a4.9786,4.9786,0,0,1-1.67114.30994C12.68787,17.3692,12.40326,17.37836,10,17.37836s-2.68787-.00916-3.63678-0.05243A4.9786,4.9786,0,0,1,4.69208,17.016a2.78769,2.78769,0,0,1-1.03485-.67322A2.78769,2.78769,0,0,1,2.984,15.30792a4.97824,4.97824,0,0,1-.30994-1.67114C2.6308,12.68774,2.62164,12.40314,2.62164,10s0.00916-2.68774.05243-3.63678A4.9786,4.9786,0,0,1,2.984,4.69208a2.78769,2.78769,0,0,1,.67322-1.03485A2.78769,2.78769,0,0,1,4.69208,2.984a4.9786,4.9786,0,0,1,1.67114-.30994C7.31226,2.6308,7.59686,2.62164,10,2.62164s2.68774,0.00916,3.63678.05243a4.9786,4.9786,0,0,1,1.67114.30994,2.78769,2.78769,0,0,1,1.03485.67322A2.78769,2.78769,0,0,1,17.016,4.69208a4.9786,4.9786,0,0,1,.30994,1.67114c0.04327,0.949.05243,1.2337,0.05243,3.63678S17.3692,12.68774,17.32593,13.63678ZM10,5.37836A4.62164,4.62164,0,1,0,14.62164,10,4.62169,4.62169,0,0,0,10,5.37836ZM10,13a3,3,0,1,1,3-3A3,3,0,0,1,10,13Zm5.88422-7.8042a1.08,1.08,0,1,1-1.08-1.08A1.08,1.08,0,0,1,15.88422,5.1958Z"
                transform="translate(-1 -1)"
              />
            </svg>
            Instagram
          </a>
          <div class="flex items-center pt-6 pb-2 pl-3 pr-4">
            <button
              class="flex-grow px-3 py-1 mr-2 text-base font-semibold text-gray-600 border-2 border-gray-600 hover:text-gray-800 hover:border-gray-800 text-shadow"
            >
              BUY
            </button>
            <button
              class="flex-grow px-3 py-1 text-base font-semibold text-gray-600 border-2 border-gray-600 hover:text-gray-800 hover:border-gray-800 text-shadow"
            >
              SELL
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="flex-grow py-4">
      <main>
        <div>
          <!-- Hero card -->
          <div class="relative">
            <div class="mx-auto max-w-screen-4xl">
              <div
                class="relative flex flex-col items-center justify-center shadow-md banner sm:overflow-hidden"
              >
                <div class="absolute inset-0">
                  <img
                    class="object-cover w-full h-full"
                    src="~/assets/img/downtown-champaign.jpg"
                    alt="Downtown Champaign"
                  />
                  <div
                    class="absolute inset-0 bg-gray-400"
                    style="mix-blend-mode: multiply"
                  ></div>
                </div>
                <div
                  class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"
                >
                  <h1
                    class="text-3xl font-semibold tracking-tight text-center sm:text-5xl lg:text-6xl"
                  >
                    <span class="block text-white text-shadow-lg"
                      >BRINGING YOU HOME</span
                    >
                  </h1>
                  <p
                    class="max-w-lg mx-auto mt-6 text-lg font-semibold text-center text-white sm:text-2xl text-shadow-lg sm:max-w-3xl"
                  >
                    Your Champaign Real Estate Expert
                  </p>
                  <div
                    class="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center"
                  >
                    <div
                      class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"
                    >
                      <a
                        href="#"
                        class="flex items-center justify-center px-4 py-3 text-base font-bold text-white border-2 border-white rounded-md shadow-sm bg-opacity-10 hover:text-shadow-none text-shadow-md hover:bg-white hover:text-gray-900 sm:px-8"
                      >
                        BUY
                      </a>
                      <a
                        href="#"
                        class="flex items-center justify-center px-4 py-3 text-base font-bold text-white border-2 border-white rounded-md shadow-sm bg-opacity-10 hover:text-shadow-none text-shadow-md hover:bg-white hover:text-gray-900 sm:px-8"
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

        <div id="about-me" class="bg-gray-50">
          <div class="px-4 py-16 mx-auto sm:py-28 max-w-7xl sm:px-6 lg:px-8">
            <div
              class="shadow-2xl bg-indigo-50 rounded-2xl lg:grid lg:grid-cols-2 lg:gap-4"
            >
              <div
                class="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
              >
                <div class="lg:self-center">
                  <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    <span class="block">Meet Your Agent</span>
                  </h2>
                  <p class="mt-4 text-lg leading-6 text-gray-700">
                    Hi! My name is Spencer Adams! I'm a Real Estate Agent
                    working at Team Gordon at Remax Choice out of Champaign, IL.
                    I grew up in Boston and moved to Champaign in 2004 when my
                    family decided we should be closer to our grandparents. My
                    parents allowed me to be pretty involved in that process and
                    since then I've had a love for both real estate and
                    Champaign-Urbana. I love helping people move from renters to
                    home owners and showing them all the benefits that come with
                    it!
                  </p>
                </div>
              </div>
              <div class="-mt-6">
                <img
                  class="object-cover object-left-top transform translate-x-6 translate-y-6 rounded-full sm:translate-x-32 lg:translate-y-20"
                  src="~/assets/img/me.png"
                  alt="App screenshot"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center">
            <span
              class="px-2 font-serif text-4xl text-gray-900 text-shadow-sm bg-gray-50"
            >
              AREAS SERVED
            </span>
          </div>
        </div>

        <div
          class="relative flex flex-col items-center justify-center mx-auto my-20 shadow-2xl rounded-2xl max-w-7xl sm:overflow-hidden"
        >
          <div class="absolute inset-0">
            <img
              class="object-cover w-full h-full"
              src="~/assets/img/downtown-champaign.jpg"
              alt="Downtown Champaign"
            />
            <div
              class="absolute inset-0 bg-gray-400"
              style="mix-blend-mode: multiply"
            ></div>
          </div>
          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-48 lg:px-8">
            <h1
              class="text-3xl font-semibold tracking-tight text-center sm:text-5xl lg:text-6xl"
            >
              <span class="block text-white text-shadow-lg">CHAMPAIGN</span>
              <div
                class="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center"
              >
                <a
                  href="#"
                  class="flex items-center justify-center px-4 py-3 text-base font-bold text-white border-2 border-white rounded-md shadow-sm bg-opacity-10 hover:text-shadow-none text-shadow-md hover:bg-white hover:text-gray-900 sm:px-8"
                >
                  LEARN MORE
                </a>
              </div>
            </h1>
          </div>
        </div>

        <div
          class="relative flex flex-col items-center justify-center mx-auto my-20 shadow-2xl rounded-2xl max-w-7xl sm:overflow-hidden"
        >
          <div class="absolute inset-0">
            <img
              class="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1546896063-fb32192e205f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Downtown Champaign"
            />
            <div
              class="absolute inset-0 bg-gray-400"
              style="mix-blend-mode: multiply"
            ></div>
          </div>
          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-48 lg:px-8">
            <h1
              class="text-3xl font-semibold tracking-tight text-center sm:text-5xl lg:text-6xl"
            >
              <span class="block text-white text-shadow-lg">SADORUS</span>
              <div
                class="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center"
              >
                <a
                  href="#"
                  class="flex items-center justify-center px-4 py-3 text-base font-bold text-white border-2 border-white rounded-md shadow-sm bg-opacity-10 hover:text-shadow-none text-shadow-md hover:bg-white hover:text-gray-900 sm:px-8"
                >
                  LEARN MORE
                </a>
              </div>
            </h1>
          </div>
        </div>

        <div
          class="relative flex flex-col items-center justify-center mx-auto my-20 shadow-2xl rounded-2xl max-w-7xl sm:overflow-hidden"
        >
          <div class="absolute inset-0">
            <img
              class="object-cover object-center w-full h-full"
              src="https://images.unsplash.com/photo-1510629326852-3f0946701bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
              alt="Downtown Champaign"
            />
            <div
              class="absolute inset-0 bg-gray-400"
              style="mix-blend-mode: multiply"
            ></div>
          </div>
          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-48 lg:px-8">
            <h1
              class="text-3xl font-semibold tracking-tight text-center sm:text-5xl lg:text-6xl"
            >
              <span class="block text-white text-shadow-lg">URBANA</span>
              <div
                class="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center"
              >
                <a
                  href="#"
                  class="flex items-center justify-center px-4 py-3 text-base font-bold text-white border-2 border-white rounded-md shadow-sm bg-opacity-10 hover:text-shadow-none text-shadow-md hover:bg-white hover:text-gray-900 sm:px-8"
                >
                  LEARN MORE
                </a>
              </div>
            </h1>
          </div>
        </div>

        <div
          class="relative flex flex-col items-center justify-center mx-auto my-20 shadow-2xl rounded-2xl max-w-7xl sm:overflow-hidden"
        >
          <div class="absolute inset-0">
            <img
              class="object-cover object-center w-full h-full"
              src="https://images.unsplash.com/photo-1604285137078-0b2f54e09abd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1913&q=80"
              alt="Downtown Champaign"
            />
            <div
              class="absolute inset-0 bg-gray-400"
              style="mix-blend-mode: multiply"
            ></div>
          </div>
          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-48 lg:px-8">
            <h1
              class="text-3xl font-semibold tracking-tight text-center sm:text-5xl lg:text-6xl"
            >
              <span class="block text-white text-shadow-lg">TOLONO</span>
              <div
                class="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center"
              >
                <a
                  href="#"
                  class="flex items-center justify-center px-4 py-3 text-base font-bold text-white border-2 border-white rounded-md shadow-sm bg-opacity-10 hover:text-shadow-none text-shadow-md hover:bg-white hover:text-gray-900 sm:px-8"
                >
                  LEARN MORE
                </a>
              </div>
            </h1>
          </div>
        </div>

        <div
          class="relative flex flex-col items-center justify-center mx-auto my-20 shadow-2xl rounded-2xl max-w-7xl sm:overflow-hidden"
        >
          <div class="absolute inset-0">
            <img
              class="object-cover object-center w-full h-full"
              src="https://lh3.googleusercontent.com/pw/ACtC-3dwUdCXOY2yugu0hqU7tZdobslyF23FrXhA099V-OHK_7EQOZuQZh6bgt8CTppBJ75VNGHDpkEFUdQrengOjYttCVXSh-5hqnOAB4v-5JViNr6aqQXz_mbqac7GyHbT48fz1IfNqjXYIopzTZ6NCYw8jw=s1360-no?authuser=0"
              alt="Downtown Champaign"
            />
            <div
              class="absolute inset-0 bg-gray-400"
              style="mix-blend-mode: multiply"
            ></div>
          </div>
          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-48 lg:px-8">
            <h1
              class="text-3xl font-semibold tracking-tight text-center sm:text-5xl lg:text-6xl"
            >
              <span class="block text-white text-shadow-lg">MONTICELLO</span>
              <div
                class="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center"
              >
                <a
                  href="#"
                  class="flex items-center justify-center px-4 py-3 text-base font-bold text-white border-2 border-white rounded-md shadow-sm bg-opacity-10 hover:text-shadow-none text-shadow-md hover:bg-white hover:text-gray-900 sm:px-8"
                >
                  LEARN MORE
                </a>
              </div>
            </h1>
          </div>
        </div>

        <div class="relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center">
            <span
              class="px-2 font-serif text-4xl text-gray-900 text-shadow-sm bg-gray-50"
            >
              GET IN TOUCH
            </span>
          </div>
        </div>

        <div class="relative bg-gray-50">
          <div class="absolute inset-0">
            <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
          </div>
          <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
            <div
              class="px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"
            >
              <div class="max-w-lg mx-auto">
                <p
                  class="mt-3 text-lg leading-6 text-gray-500 text-shadow text-slogan"
                >
                  If you're interested in working together, please fill out this
                  form and I will get back to you promptly.
                </p>
                <dl class="mt-8 text-base text-gray-500">
                  <div>
                    <dt class="sr-only">Postal address</dt>
                    <dd>
                      <p class="font-extrabold text-slogan">Spencer Adams</p>
                      <p class="font-extrabold text-slogan">2919 Crossing Ct</p>
                      <p class="font-extrabold text-slogan">
                        Champaign, IL 61822
                      </p>
                    </dd>
                  </div>
                  <div class="mt-6">
                    <dt class="sr-only">Phone number</dt>
                    <dd class="flex">
                      <!-- Heroicon name: outline/phone -->
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                      <a href="tel:+12178197311" class="ml-3 underline"
                        >217-819-7311</a
                      >
                    </dd>
                  </div>
                  <div class="mt-3">
                    <dt class="sr-only">Email</dt>
                    <dd class="flex">
                      <!-- Heroicon name: outline/mail -->
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                      <a
                        href="mailto:info@spenceradams.realestate"
                        class="ml-3 underline"
                      >
                        info@spenceradams.realestate
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div
              class="px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"
            >
              <div class="max-w-lg mx-auto lg:max-w-none">
                <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
                  <div>
                    <label for="full_name" class="sr-only">Full name</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      autocomplete="name"
                      class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
                      class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label for="phone" class="sr-only">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autocomplete="tel"
                      class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <label for="message" class="sr-only">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const opened = ref(false)

    const toggle = () => (opened.value = !opened.value)

    return {
      opened,
      toggle,
    }
  },
})
</script>
