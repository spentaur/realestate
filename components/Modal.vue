<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      v-show="showModalWrapper"
      class="fixed inset-0 z-10 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <transition
          name="background-overlay"
          @after-leave="afterLeave"
          @before-enter="beforeEnter"
        >
          <div
            v-show="opened"
            class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
            aria-hidden="true"
            @click="close"
          ></div>
        </transition>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <transition name="modal">
          <div
            v-show="opened"
            ref="modal"
            class="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
            @keydown.esc="close"
          >
            <div>
              <div class="flex items-center justify-center mx-auto">
                <img :src="data.logo" class="w-28" alt="" />
              </div>
              <div class="mt-3 text-center sm:mt-5">
                <h3
                  id="modal-title"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  {{ data.title }}
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ data.text }}
                  </p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-5 sm:mt-6">
              <a
                v-for="button in data.buttons"
                :key="button.text"
                :href="button.link"
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-indigo-600 border border-transparent border-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      showModalWrapper: false,
    }
  },
  computed: {
    opened() {
      return this.$store.state.modal.opened
    },
    data() {
      return this.$store.state.modal.data
    },
  },
  watch: {
    opened(newVal, oldVal) {
      if (newVal === true) {
        this.$refs.modal.tabIndex = 1
        this.$nextTick(() => {
          this.$refs.modal.focus()
        })
      } else {
        this.$refs.modal.tabIndex = -1
      }
    },
  },
  methods: {
    afterLeave(el) {
      this.empty()
      this.showModalWrapper = false
    },
    beforeEnter(el) {
      this.showModalWrapper = true
    },
    ...mapMutations({
      close: 'modal/close',
      empty: 'modal/empty',
    }),
  },
}
</script>

<style lang="postcss" scoped>
.background-overlay-enter-active,
.background-overlay-leave-active {
  @apply transition transform;
}

.background-overlay-enter-active {
  @apply ease-out duration-300;
}
.background-overlay-leave-active {
  @apply ease-out duration-300;
}

.background-overlay-enter,
.background-overlay-leave-to {
  @apply opacity-0;
}
.background-overlay-enter-to,
.background-overlay-leave {
  @apply opacity-100;
}

.modal-enter-active,
.modal-leave-active {
  @apply transition transform;
}

.modal-enter-active {
  @apply ease-out duration-300;
}
.modal-leave-active {
  @apply ease-out duration-300;
}

.modal-enter,
.modal-leave-to {
  @apply opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95;
}
.modal-enter-to,
.modal-leave {
  @apply opacity-100 translate-y-0 sm:scale-100;
}
</style>
