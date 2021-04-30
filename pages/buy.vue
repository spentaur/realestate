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
                    src="~/assets/img/keys2.jpg"
                    alt="Handing Keys to Someone"
                    @load="onLoaded"
                  />
                </transition>
                <div
                  class="absolute inset-0 bg-gray-900 bg-opacity-25"
                  style="mix-blend-mode: multiply"
                ></div>
              </div>
              <div
                class="relative w-full px-4 py-16 text-center sm:px-6 sm:py-24 xl:py-32 xl:px-8"
              >
                <transition appear name="slide-up-fade">
                  <h1 class="text-4xl font-semibold sm:text-5xl xl:text-6xl">
                    <span
                      class="block text-white font-montserrat text-shadow-xl"
                      >THINKING OF BUYING?</span
                    >
                  </h1>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col max-w-6xl px-4 mx-auto lg:flex-row sm:px-6 xl:px-8"
      >
        <div class="w-full max-w-3xl mx-auto my-14">
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
              <label for="school" class="sr-only"
                >Do you have a preffered school distric?
              </label>
              <input
                id="school"
                type="text"
                name="school"
                class="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-none outline-none appearance-none focus:ring-blue-500 focus:border-blue-500"
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
