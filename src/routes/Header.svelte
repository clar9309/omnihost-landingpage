<script>
  import "../app.css";

  let showMenu = false;
  function toggleNavbar() {
    showMenu = !showMenu;
  }
</script>

<header
  class="bg-primary-purple-300 max-w-screen text-purple-50 font-montserrat"
>
  <div>
    <div>
      <nav
        class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center md:overflow-hidden font-montserrat"
      >
        <div class="flex items-center justify-between">
          <a
            class="text-xl font-semibold font-montserrat md:text-2xl"
            href="/home">OmniHost</a
          >
          <!-- Mobile menu button -->
          <div on:click={toggleNavbar} class="flex md:hidden">
            <button
              type="button"
              class=" hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 fill-purple-50"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 smooth-scroll {showMenu
            ? 'flex'
            : 'hidden'}"
        >
          <!-- <a class="font-montserrat" href="/">Hotels</a> -->

          <a
            class="font-montserrat group text-purple-50 transition duration-300"
            href="#ourservice"
          >
            Our Service <span
              class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-50"
            />
          </a>
          <a
            class="font-montserrat group text-purple-50 transition duration-300"
            href="#team"
          >
            Team Omnihost <span
              class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-50"
            />
          </a>
          <a
            class="font-montserrat group text-purple-50 transition duration-300"
            href="#contact"
          >
            Contact Us <span
              class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-50"
            />
          </a>

          <div class="flex my-4 sm:flex md:hidden lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              class="mr-4 fill-purple-50"
              ><path
                d="M19.95 21q-3.225 0-6.287-1.438t-5.425-3.8q-2.363-2.362-3.8-5.425T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.013.638T9.4 8.45L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.075.575.338T21 15.9v4.05q0 .45-.3.75t-.75.3Z"
              /></svg
            >
            <a href="tel:+4526192327"> +45 26 19 23 27</a>
          </div>
          <div class="flex sm:flex md:hidden lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              class="mr-4 fill-purple-50"
              ><path
                d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"
              /></svg
            >
            <a href="mailto: info@omnihost.app"> info@omnihost.app</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</header>
