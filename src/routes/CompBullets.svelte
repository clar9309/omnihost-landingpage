<script>
  function togglePopup() {
    var popup = document.getElementById("youtubePopup");
    popup.classList.toggle("hidden");
  }

  function smoothScroll(event) {
    event.preventDefault();

    const targetId = event.target.getAttribute("#compbullets");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
</script>

<section
  id="combbullets"
  class="mt-24 text-secondary-marine-blue-300 font-montserrat smooth-scroll"
>
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
    <ul
      class="grid max-w-screen-md mx-auto text-gray-900 sm:grid-cols-3 gap-16"
    >
      <div class="flex flex-col items-center justify-center">
        <p class="mb-2 text-6xl md:text-6xl font-extrabold">50%</p>
        <p class="font-light md:mb-12">Faster than documentation</p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <p class="mb-2 text-6xl md:text-6xl font-extrabold">100%</p>
        <p class="font-light md:mb-12">Unlimited integrations</p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <p class="mb-2 text-6xl md:text-6xl font-extrabold">66%</p>
        <p class="font-light md:mb-12">Less minor types</p>
      </div>
    </ul>
  </div>
</section>
