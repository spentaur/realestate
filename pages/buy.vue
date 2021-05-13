<template>
  <div class="flex flex-col bg-white">
    <div class="p-2 sm:p-3">
      <div class="flex flex-wrap items-center justify-start">
        <div class="flex-shrink-0 order-2 sm:order-3 sm:ml-2">
          <button
            type="button"
            class="flex items-center justify-center p-2 -mr-1 focus:outline-none focus:ring-2 focus:ring-white"
            @click.prevent="close"
          >
            <span class="sr-only">Dismiss</span>
            <!-- Heroicon name: outline/x -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-indigo-400"
              fill="none"
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
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center flex-grow p-6 mx-auto text-lg leading-normal text-gray-600 md:text-2xl lg:text-4xl text-shadow max-w-7xl font-slogan"
    >
      <p>
        As your real estate broker, it is important for me to know as much as
        possible about you, your family, and your housing needs.
      </p>
      <p class="mt-4">
        Please complete this in as much detail as possible in order for us to
        get started on the search for your new home.
      </p>
    </div>
    <div class="px-2 py-12 sm:px-3">
      <div class="flex flex-wrap items-center justify-center">
        <div class="flex items-center justify-center flex-1 w-0">
          <span class="flex p-2">
            <!-- <button
              type="button"
              class="inline-flex items-center px-4 py-2 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Button text
              
            </button> -->
          </span>
          <span class="flex p-2">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'forms',
  data: () => ({
    loaded: false,
  }),
  methods: {
    onLoaded() {
      this.loaded = true
    },
    close() {
      if (!this.$nuxt.context.from) {
        this.$router.push('/')
      } else {
        this.$router.go(-1)
      }
    },
  },
}
</script>
