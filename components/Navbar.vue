<template>
  <div>
    <!-- <div class="relative bg-gray-600">
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
    </div> -->
    <nav class="bg-white">
      <div class="px-4 pt-6 pb-3 mx-auto max-w-7xl sm:px-6 xl:px-8">
        <div class="flex justify-between">
          <div class="flex flex-grow">
            <div class="flex flex-row justify-center flex-shrink-0">
              <div class="flex flex-col justify-center">
                <nuxt-link to="/">
                  <div
                    class="font-serif text-base font-medium text-gray-600 sm:text-2xl text-shadow"
                  >
                    <span class="text-xl sm:text-3xl">S</span>PENCER
                    <span class="text-xl sm:text-3xl">A</span>DAMS
                  </div>
                  <div
                    class="flex -mt-2 text-base font-light tracking-wider text-gray-600 text-shadow sm:text-lg font-slogan"
                  >
                    <div>REAL ESTATE</div>
                  </div>
                </nuxt-link>
              </div>
              <div class="flex flex-col justify-center pt-2 ml-4 sm:ml-6">
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

              <nuxt-link
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 transition-all duration-200 border-b-2 border-transparent text-shadow hover:border-gray-300 hover:text-gray-700"
                to="/about"
              >
                ABOUT ME
              </nuxt-link>

              <nuxt-link
                to="/contact"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 transition-all duration-200 border-b-2 border-transparent text-shadow hover:border-gray-300 hover:text-gray-700"
              >
                CONTACT
              </nuxt-link>

              <!-- <a
                href="#"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 transition-all duration-200 border-b-2 border-transparent text-shadow hover:border-gray-300 hover:text-gray-700"
              >
                CALCULATORS
              </a>

              <a
                href="#"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 transition-all duration-200 border-b-2 border-transparent text-shadow hover:border-gray-300 hover:text-gray-700"
              >
                GUIDES
              </a> -->
              <div class="relative inline-block text-left">
                <div>
                  <button
                    v-click-outside="closeTools"
                    type="button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 transition-all duration-200 border-b-2 border-transparent text-shadow hover:border-gray-300 hover:text-gray-700"
                    @click="toggleTools()"
                  >
                    TOOLS

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 h-3 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <div
                    v-if="showTools"
                    class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div class="py-1" role="none">
                      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                      <a
                        id="menu-item-0"
                        href="#"
                        class="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabindex="-1"
                        >Guides</a
                      >
                      <a
                        id="menu-item-1"
                        href="#"
                        class="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabindex="-1"
                        >Calculators</a
                      >
                      <a
                        id="menu-item-2"
                        href="#"
                        class="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabindex="-1"
                        >Graphs</a
                      >
                    </div>
                  </div>
                </transition>
              </div>

              <a
                href="https://connectmls-portal.mredllc.com"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 transition-all duration-200 border-b-2 border-transparent text-shadow hover:border-gray-300 hover:text-gray-700"
                @click.prevent="openConnectMLSModal"
              >
                <img
                  src="https://connectmls-portal.mredllc.com/static/media/connectmls.07c15b95.svg"
                  class="w-24 mb-1"
                  alt=""
                />
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
              <nuxt-link
                to="/buy"
                class="px-3 py-1 mr-2 text-sm font-semibold text-gray-600 transition-all duration-200 border-2 border-gray-600 text-shadow hover:bg-black hover:text-white hover:border-black"
              >
                BUY
              </nuxt-link>
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

          <nuxt-link
            to="/about"
            class="flex items-center py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-white hover:border-gray-300 hover:text-gray-800"
          >
            About Me
          </nuxt-link>

          <nuxt-link
            to="/contact"
            class="flex items-center py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-white hover:border-gray-300 hover:text-gray-800"
          >
            Contact
          </nuxt-link>
          <div class="border-l-4 border-transparent hover:border-gray-300">
            <div>
              <button
                type="button"
                aria-expanded="true"
                aria-haspopup="true"
                class="flex items-center py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:bg-white hover:text-gray-800"
                @click="toggleMobileTools()"
              >
                Tools

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 h-3 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div v-show="showMobileTools" class="px-2 py-1" role="none">
              <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
              <a
                id="menu-item-0"
                href="#"
                class="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                >Guides</a
              >
              <a
                id="menu-item-1"
                href="#"
                class="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                >Calculators</a
              >
              <a
                id="menu-item-2"
                href="#"
                class="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                >Graphs</a
              >
            </div>
          </div>
          <a
            href="https://connectmls-portal.mredllc.com"
            class="flex items-center py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-white hover:border-gray-300 hover:text-gray-800"
            @click.prevent="openConnectMLSModal"
          >
            <img
              src="https://connectmls-portal.mredllc.com/static/media/connectmls.07c15b95.svg"
              class="w-24"
              alt=""
            />
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
            <nuxt-link
              to="/buy"
              class="flex-grow px-3 py-1 mr-2 text-base font-semibold text-gray-600 transition-all duration-200 border-2 border-gray-600 hover:text-gray-800 hover:border-gray-800 text-shadow"
            >
              BUY
            </nuxt-link>
            <button
              class="flex-grow px-3 py-1 text-base font-semibold text-gray-600 transition-all duration-200 border-2 border-gray-600 hover:text-gray-800 hover:border-gray-800 text-shadow"
            >
              SELL
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    opened: false,
    showTools: false,
    showMobileTools: false,
  }),
  watch: {
    $route(to, from) {
      this.close()
    },
  },
  methods: {
    toggleTools() {
      this.showTools = !this.showTools
    },
    toggleMobileTools() {
      this.showMobileTools = !this.showMobileTools
    },
    closeTools() {
      this.showTools = false
    },
    close() {
      this.opened = false
    },
    toggle() {
      this.opened = !this.opened
    },
    openConnectMLSModal() {
      this.$store.commit('modal/open', {
        logo:
          'https://connectmls-portal.mredllc.com/static/media/connectmls.07c15b95.svg',
        title: 'You are about to navigate to the connectMLS Client Portal',
        text:
          'If you want to learn more about how to use the connectMLS Client Portal, please check out my guides by clicking below.',
        buttons: [
          {
            text: 'Guides',
            link: '/guides/connectMLS',
          },
          {
            text: 'connectMLS',
            link: 'https://connectmls-portal.mredllc.com/login',
          },
        ],
      })
    },
  },
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply border-indigo-300;
}
</style>
