export const importCode = `
---
import { IndicatorCarousel } from 'free-astro-components'
---
`
export const basicUsageCode = `
<div id="indicators-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/forest_image.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/beach_image.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/laptop_image.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/forest_image.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/beach_image.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

<script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
{% manifest %} 
  { 
  "type": "Functional", 
  "displayName": "IndicatorsCarousel", 
  "description": "This component displays data using a cards layout",
  "tables": [], 
  "params": [] 
  } 
  {% endmanifest %} 
`
export const variantLightCode = `
---
import { Accordion, AccordionItem } from 'free-astro-components'
---

<Accordion variant='light'>
  <AccordionItem title="Accordion 1">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 2">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 3">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
</Accordion>
`
export const variantShadowCode = `
---
import { Accordion, AccordionItem } from 'free-astro-components'
---

<Accordion variant='shadow'>
  <AccordionItem title="Accordion 1">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 2">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 3">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
</Accordion>
`
export const variantBorderedCode = `
---
import { Accordion, AccordionItem } from 'free-astro-components'
---

<Accordion variant='bordered'>
  <AccordionItem title="Accordion 1">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 2">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 3">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
</Accordion>
`
export const variantSplittedCode = `
---
import { Accordion, AccordionItem } from 'free-astro-components'
---

<Accordion variant='splitted'>
  <AccordionItem title="Accordion 1">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 2">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 3">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
</Accordion>
`
export const openCode = `
---
import { Accordion, AccordionItem } from 'free-astro-components'
---

<Accordion>
  <AccordionItem title="Accordion 1">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 2" open>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 3">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
</Accordion>
`
export const interactionCode = `
---
import { Accordion, AccordionItem } from 'free-astro-components'
---

<Accordion>
  <AccordionItem name="accordion-example" title="Accordion 1">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem name="accordion-example" title="Accordion 2">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem name="accordion-example" title="Accordion 3">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
</Accordion>
`
export const customVariablesCode = `
--ac-accordion-background-color
--ac-accordion-border-color
--ac-accordion-border-width
--ac-accordion-rounded
--ac-accordion-spacing
`
export const customStylesCode = `
---
import { Accordion } from 'free-astro-components'
---

<Accordion label='Click me' class='custom-button' />

<style>
/* Example of custom button styles */
.custom-button {
  --ac-btn-border-radius: 999px;
  --ac-btn-font-weight: 600;
  border-width: 0;
  background-image: linear-gradient(
    90deg,
    rgb(var(--ac-primary)) 0%,
    rgb(var(--ac-secondary)) 100%
  );
}
</style>
`

export const tableHead = ['Attribute', 'Type', 'Description', 'Default']

export const tableRows = [
  [
    {
      head: 'Attribute',
      label: 'variant',
    },
    {
      head: 'Type',
      label: '<code>light | shadow | bordered | splitted</code>',
    },
    {
      head: 'Description',
      label: 'The visual variant of the accordion',
    },
    {
      head: 'Default',
      label: '<code>light</code>',
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'class',
    },
    {
      head: 'Type',
      label: '<code>string</code>',
    },
    {
      head: 'Description',
      label: 'CSS class for custom styling.',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'children',
    },
    {
      head: 'Type',
      label: '<code>AccordionItem | AccordionItem[]</code>',
    },
    {
      head: 'Description',
      label:
        'The <code>AccordionItem</code> components contained within the accordion.',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
]
export const tableItemRows = [
  [
    {
      head: 'Attribute',
      label: 'title',
    },
    {
      head: 'Type',
      label: '<code>string</code>',
    },
    {
      head: 'Description',
      label: 'The title displayed in the accordion header.',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'open',
    },
    {
      head: 'Type',
      label: '<code>boolean</code>',
    },
    {
      head: 'Description',
      label: 'Indicates whether the accordion should be open initially.',
    },
    {
      head: 'Default',
      label: '<code>false</code>',
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'name',
    },
    {
      head: 'Type',
      label: '<code>string</code>',
    },
    {
      head: 'Description',
      label:
        'Optional name to identify the accordion and allow them to interact with each other.',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'class',
    },
    {
      head: 'Type',
      label: '<code>string</code>',
    },
    {
      head: 'Description',
      label: 'CSS class for custom styling.',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
  [
    {
      head: 'Attribute',
      label: 'children',
    },
    {
      head: 'Type',
      label: '<code>any</code>',
    },
    {
      head: 'Description',
      label: 'The content displayed when the accordion is open.',
    },
    {
      head: 'Default',
      label: '-',
    },
  ],
]