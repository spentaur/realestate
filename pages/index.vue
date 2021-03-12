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
                Spencer Adams
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
                href="#"
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
                LISTINGS
              </a>

              <a
                href="#"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              >
                AREAS SERVED
              </a>

              <a
                href="#"
                class="items-center hidden px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent xl:inline-flex hover:border-gray-300 hover:text-gray-700"
              >
                FREE CONSULTATION
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Listings
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
                class="relative flex flex-col items-center justify-center shadow-2xl banner sm:overflow-hidden"
              >
                <div class="absolute inset-0">
                  <img
                    class="object-cover w-full h-full"
                    src="~/assets/img/downtown-champaign.jpg"
                    alt="People working on laptops"
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

        <!-- More main page content here... -->
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
