<script>
  import "../app.css";
  let showMenu = false;
  function toggleNavbar() {
    showMenu = !showMenu;
  }
</script>

<header class="bg-primary-purple-300 max-w-screen text-purple-50">
  <div>
    <div>
      <nav
        class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center md:overflow-hidden"
      >
        <div class="flex items-center justify-between">
          <a
            class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400"
            href="/home"
            >Logo
          </a>
          <!-- Mobile menu button -->
          <div on:click={toggleNavbar} class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
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
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
            ? 'flex'
            : 'hidden'}"
        >
          <a class="text-gray-800 hover:text-blue-400" href="/">Hotels</a>
          <a class="text-gray-800 hover:text-blue-400" href="/">Our Service</a>
          <a class="text-gray-800 hover:text-blue-400" href="/">Team OmniHost</a
          >
          <a class="text-gray-800 hover:text-blue-400" href="/">Contact</a>
        </div>
      </nav>
    </div>
  </div>
</header>
<!-- <header class="bg-primary-purple-300">
  <nav
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
  >
    <div class="text-purple-50 font-medium">OmniHost</div>
    <ul
      class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 text-purple-50"
    >
      <li>
        <a href="#">Hotels</a>
      </li>
      <li>
        <a href="#">Our Service</a>
      </li>
      <li>
        <a href="#">Team Omnichart</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
</header> -->
