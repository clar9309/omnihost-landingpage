<script>
  import "../app.css";

  function togglePopup() {
    var popup = document.getElementById("youtubePopup");
    popup.classList.toggle("hidden");
  }
</script>

<section class="bg-primary-purple-300 md:h-[42rem]">
  <div
    class="grid max-w-screen-xl max-h-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
  >
    <div
      class="mr-auto place-self-center lg:col-span-7 animate-fade-in animate-duration-[500ms] animate-delay-300"
    >
      <h1
        class="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl text-purple-100 font-ivypresto"
      >
        We digitalize and optimize your hotels systems
      </h1>
      <p
        class="max-w-2xl mb-6 text-purple-50 lg:mb-8 md:text-lg lg:text-xl font-montserrat font-light"
      >
        Unlocking Efficiency, Creating Magical Memories: <br /> Where Every Second
        Counts.
      </p>

      <div class="md:inline-flex">
        <div
          id="youtubePopup"
          class="fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center bg-marine-blue-800 bg-opacity-50 hidden font-montserrat"
        >
          <div class="rounded-lg shadow-lg p-6">
            <button
              onclick="togglePopup()"
              class="absolute top-0 right-0 mt-4 mr-4 font-bold py-2 px-4 rounded text-purple-50"
            >
              Close
            </button>
            <!-- Insert your YouTube video embed code here -->
            <iframe
              width="1080"
              height="700"
              src="https://www.youtube.com/watch?v=4AQQk3y3Qg0&ab_channel=BlueWorldTV"
              frameborder="0"
              allowfullscreen
            />
          </div>
        </div>

        <button
          onclick="togglePopup()"
          class="inline-flex items-center justify-center px-6 py-2 lg:mr-6 xl:mr-6 md:mr-2 text-base font-medium text-center bg-purple-50 text-primary-purple-300 rounded-lg md:inline-flex md:opacity-80 md:hover:opacity-100 md:hover:ease-in-out"
        >
          Watch Demo

          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              class="ml-2"
              ><path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 13.5v-7a.5.5 0 0 1 .8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5a.5.5 0 0 1-.8-.4z"
              /></svg
            >
          </span>
        </button>

        <script>
          function togglePopup() {
            var popup = document.getElementById("youtubePopup");
            popup.classList.toggle("hidden");
          }
        </script>

        <!-- <a
          href="#"
          class="inline-flex items-center justify-center px-6 py-2 lg:mr-6 xl:mr-6 md:mr-2 text-base font-medium text-center bg-purple-50 text-primary-purple-300 rounded-lg md:inline-flex md:opacity-80 md:hover:opacity-100 md:hover:ease-in-out"
        >
          Watch Demo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            class="ml-2"
            ><path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 13.5v-7a.5.5 0 0 1 .8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5a.5.5 0 0 1-.8-.4z"
            /></svg
          >
        </a> -->

        <a
          href="#contact"
          class="inline-flex items-center justify-center px-10 py-2 text-base font-medium text-purple-50 border border-gray-300 rounded-lg md:opacity-90 md:hover:opacity-100 md:hover:ease-in-out"
        >
          Contact Us
        </a>
      </div>
    </div>
    <div class="visibile mt-12 md:flex lg:mt-0 lg:col-span-5 lg:flex">
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
        alt="mockup"
      />
    </div>
  </div>
  <div class=" mt-20 flex justify-center">
    <a href="#combbullets">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 256 256"
        class="fill-purple-50 animate-bounce ease-in-out animation-duration-1s md:opacity-90 md:hover:opacity-100 md:hover:ease-in-out"
        ><path
          d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92Zm34.83-86.83a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L124 158.34V88a4 4 0 0 1 8 0v70.34l25.17-25.17a4 4 0 0 1 5.66 0Z"
        /></svg
      >
    </a>
  </div>
</section>
