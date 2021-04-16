<template>
  <div>
    <div class="mt-4 mb-12 bg-white">
      <div class="">
        <!-- Hero card -->
        <div class="relative">
          <div class="mx-auto max-w-screen-4xl">
            <div
              class="relative flex flex-col items-start justify-center h-screen-2/5"
            >
              <div class="absolute inset-0">
                <transition name="fade">
                  <img
                    v-show="loaded"
                    class="object-cover w-full h-full"
                    src="~/assets/img/keys.jpg"
                    alt="Haning Keys to Someone"
                    @load="onLoaded"
                  />
                </transition>
                <div
                  class="absolute inset-0 bg-gray-900 bg-opacity-25"
                  style="mix-blend-mode: multiply"
                ></div>
              </div>
              <div
                class="relative px-4 py-16 sm:px-6 sm:py-24 xl:py-32 xl:px-8"
              >
                <h1 class="text-4xl font-semibold sm:text-5xl xl:text-6xl">
                  <span class="block text-white font-montserrat text-shadow-xl"
                    >CONTACT</span
                  >
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col max-w-6xl px-4 mx-auto lg:flex-row sm:px-6 xl:px-8"
      >
        <div class="relative bg-white">
          <div class="absolute inset-0">
            <div class="absolute inset-y-0 left-0 w-1/2 bg-white"></div>
          </div>
          <div class="relative mx-auto max-w-7xl xl:grid xl:grid-cols-5">
            <div
              class="px-4 py-16 bg-white sm:px-6 xl:col-span-2 xl:px-8 xl:py-24 xl:pr-12"
            >
              <div class="max-w-lg mx-auto">
                <p class="mt-3 text-lg font-medium text-gray-600">
                  Let's sit down and put together a plan to meet your specific
                  real estate goals
                </p>
                <dl class="mt-8 text-lg text-gray-500">
                  <div>
                    <dt class="sr-only">Postal address</dt>
                    <dd>
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
                    <label for="reason" class="sr-only">Type of Contact</label>
                    <select
                      id="reason"
                      name="reason"
                      class="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-none outline-none appearance-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="" disabled selected>
                        What is your reason for contacting?
                      </option>
                      <option>I am a buyer</option>
                      <option>I am a seller</option>
                      <option>I am an investor</option>
                      <option>I am looking for more information</option>
                      <option>I am contacting you for another reason</option>
                    </select>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loaded: false,
  }),
  methods: {
    onLoaded() {
      this.loaded = true
    },
  },
}
</script>
