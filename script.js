Vue.component( "component", {
  props: ["content", "cta"],
  template: `
    <div class="flex flex-col items-center justify-around p-8 w-full sm:-translate-y-1/2 sm:absolute sm:flex-row sm:top-1/2 sm:transform">
      <div class="max-w-xl">
        <div>
          <h1 class="font-extrabold text-5xl text-white sm:text-6xl">{{ content.title }}</h1>
          <h2 class="font-extrabold mt-6 text-3xl text-white sm:text-4xl">{{ content.subtitle }}</h2>
          <h3 class="leading-normal mt-6 text-xl text-white sm:text-2xl">{{ content.description }}</h3>
        </div>
      </div>
      <div class="flex flex-col items-center ml-6 mt-6 w-56 sm:mt-0">
        <img src="photo.jpg" width="166" height="166" class="flex-grow-0 rounded-full">
        <div class="bg-white flex items-center justify-center mt-6 px-4 py-2 rounded-lg w-56">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="30" height="30" class="mr-4">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
          </svg>
          <a class="text-lg">{{cta.button}}</a>
        </div>
        <img src="image.png" class="mt-3">
        <p class="text-lg text-white">{{cta.link}}</p>
      </div>
    </div>
  `
});

var app = new Vue({
	el: '#app',
    data: {
      "content": {
        "title": "BMI Out of Whack?",
        "subtitle": "Take it down where nature intended",
        "description": "With a 12-week program that will steadily improve your weight, energy, and health, requires no exercise, and relies entirely on nourishing food to crowd out most of the crap you eat"
      },
      "cta": {
        "button": "Watch my pitch",
        "link": "Or read the longish form version here..."
      }
    }
})