<script>
  import "../app.css";

  function togglePopup() {
    var popup = document.getElementById("youtubePopup");
    popup.classList.toggle("hidden");
  }
</script>

<section
  id="ourservice"
  class="bg-white dark:bg-gray-900 mt-16 mb-42 mr-4 ml-4"
>
  <div
    class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
  >
    <img
      class="w-full dark:hidden mb-12 md:mb-0"
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
      alt=""
    />
    <img
      class="w-full hidden dark:block mb-12 md:mb-0"
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
      alt=""
    />
    <div class="mt-4 md:mt-0">
      <h2
        class="mb-4 md:text-6xl text-4xl tracking-tight font-ivypresto text-secondary-marine-blue-300"
      >
        Our Service
      </h2>
      <p
        class="mb-6 font-light text-base md:text-base text-secondary-marine-blue-300 opacity-85 font-montserrat"
      >
        Our system streamlines hotel operations by efficiently managing
        check-in/check-out, long-term item tracking, car management, task
        user-friendly dashboard offers weather forecasts, deadline alerts, and
        seamless document management. With anytime, anywhere access, our system
        optimizes efficiency for smooth hotel workflows.
      </p>
      <div class="flex gap-2">
        <!-- <a
          href="#"
          class="inline-flex items-center justify-center px-4 md:px-4 py-2 lg:mr-6 text-base font-medium text-center text-purple-50 bg-primary-purple-300 rounded-lg md:opacity-90 md:hover:opacity-100 md:hover:ease-in-out"
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
          class="inline-flex items-center justify-center px-4 md:px-4 py-2 lg:mr-6 text-base font-medium text-center text-purple-50 bg-primary-purple-300 rounded-lg md:opacity-90 md:hover:opacity-100 md:hover:ease-in-out"
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

        <a
          href="#contact"
          class="inline-flex items-center justify-center px-6 py-2 text-base font-medium border-2 border-gray-300 rounded-lg border-primary-purple-300 text-primary-purple-300 opacity-90 hover:opacity-100 hover:ease-in-out"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</section>
