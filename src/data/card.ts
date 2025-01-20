export const importCode = `
---
import { CardWithImage } from 'free-astro-components'
---
`
export const defaultCard = `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">{{ subtitle }}</p>
</a>
{% manifest %} 
  { 
  "type": "Functional", 
  "displayName": "DefaultCard", 
  "description": "This component displays data using a default card layout with a title and subtitile",
  "tables": [], 
  "params": [
    {
      "id": "title",
      "displayName": "Title",
      "description": "Card title"
    },
    {
      "id": "subtitle",
      "displayName": "Subtitle",
      "description": "Card subtitle"
    }
  ] 
  } 
{% endmanifest %} 
`

export const cardWithButton = `


<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ subtitle }}</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {{ buttonText }}
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>

{% manifest %} 
  { 
  "type": "Functional", 
  "displayName": "CardWithButton", 
  "description": "This component displays data using a card layout with an action button",
  "tables": [], 
  "params": [
    {
      "id": "title",
      "displayName": "Title",
      "description": "Card title"
    },
    {
      "id": "subtitle",
      "displayName": "Subtitle",
      "description": "Card subtitle"
    },
    {
      "id": "buttonText",
      "displayName": "Button text",
      "description": "Button text"
    }
  ] 
  } 
{% endmanifest %} 
`

export const cardWithImage = `
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img class="rounded-t-lg" src="{{ imageUrl }}" alt="" />
  </a>
  <div class="p-5">
    <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ title }}
      </h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {{ subtitle }}
    </p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      {{ buttonText }}
      <svg
        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        ></path>
      </svg>
    </a>
  </div>
</div>

{% manifest %} 
  { 
  "type": "Functional", 
  "displayName": "CardWithImage", 
  "description": "This component displays data using a cards layout",
  "tables": [], 
  "params": [
   {
      "id": "title",
      "displayName": "Title",
      "description": "Card title"
    },
    {
      "id": "subtitle",
      "displayName": "Subtitle",
      "description": "Card subtitle"
    },
    {
      "id": "buttonText",
      "displayName": "Button text",
      "description": "Button text"
    },
    {
      "id": "imgUrl",
      "displayName": "Image url",
      "description": "Card image url"
    }
  ] 
  } 
{% endmanifest %} 
`
