<template>
  <div>
    <div class="mt-8 mb-12 bg-white lg:mt-16">
      <div
        class="flex flex-col items-center justify-center max-w-6xl px-4 mx-auto transform lg:translate-x-24 lg:flex-row sm:px-6 xl:px-8"
      >
        <div class="flex items-center justify-center">
          <div class="flex items-center justify-center lg:w-128 lg:h-128">
            <transition appear name="fade">
              <img
                class="object-cover object-left-top shadow-2xl"
                src="~/assets/img/me.jpg"
                alt="Spencer Adams"
              />
            </transition>
          </div>
        </div>
        <transition appear name="slide-right-fade">
          <div
            class="self-center px-6 py-6 transform -translate-y-16 shadow-2xl bg-opacity-90 bg-gray-50 sm:w-96 w-80 lg:w-auto lg:-translate-x-32"
          >
            <div
              class="font-serif text-3xl font-medium text-gray-700 text-shadow"
            >
              <span class="text-4xl">S</span>PENCER
              <span class="text-4xl">A</span>DAMS
            </div>
            <dl class="mt-8 text-lg text-gray-700">
              <div>
                <dt class="sr-only">Postal address</dt>
                <dd>
                  <p class="font-medium">2919 Crossing Ct</p>
                  <p class="font-medium">Champaign, IL 61822</p>
                </dd>
              </div>
              <div class="mt-8">
                <dt class="sr-only">Phone number</dt>
                <dd class="">
                  <a
                    href="tel:+12178197311"
                    class="inline-flex items-center text-base font-medium tracking-wider text-gray-700 transition-all duration-200 sm:text-lg hover:text-red-500"
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
                    class="inline-flex items-center text-base font-medium tracking-wider text-gray-700 transition-all duration-200 sm:text-lg hover:text-red-500"
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
        </transition>
      </div>
      <div
        class="flex flex-col max-w-4xl px-4 mx-auto mt-0 lg:mt-12 lg:flex-row sm:px-6 xl:px-8"
      >
        <p class="my-4 text-lg font-medium text-gray-700">
          Hi! My name is Spencer Adams! I'm a Real Estate Agent working on Team
          Gordon at Remax Choice out of Champaign, IL. I grew up in Boston and
          moved to Champaign in 2004 when my family decided we should be closer
          to our grandparents. My parents allowed me to be pretty involved in
          that process and since then I've had a love for both real estate and
          Champaign-Urbana. I love helping people move from renters to home
          owners and showing them all the benefits that come with it!
        </p>
      </div>
      <div
        class="flex justify-center max-w-2xl px-4 mx-auto mt-12 sm:px-6 xl:px-8"
      >
        <a
          href="#"
          class="flex items-center justify-center px-4 py-3 text-xl font-medium text-red-400 transition-all duration-200 bg-white border-2 border-red-400 hover:text-white hover:bg-red-500 sm:px-8"
        >
          Contact Me
        </a>
      </div>
    </div>
  </div>
</template>
