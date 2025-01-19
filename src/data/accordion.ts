export const importCode = `
---
import { Accordion, AccordionItem } from 'free-astro-components'
---
`
export const basicUsageCode = `
<div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        <h2 id="accordion-flush-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded="true"
            aria-controls="accordion-flush-body-1"
          >
            <span>What is Flowbite?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-1"
          class="hidden"
          aria-labelledby="accordion-flush-heading-1"
        >
          <div class="py-5 border-b border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to
              <a
                href="/docs/getting-started/introduction/"
                class="text-blue-600 dark:text-blue-500 hover:underline"
                >get started</a
              >
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>Is there a Figma file available?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-2"
          class="hidden"
          aria-labelledby="accordion-flush-heading-2"
        >
          <div class="py-5 border-b border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out the
              <a
                href="https://flowbite.com/figma/"
                class="text-blue-600 dark:text-blue-500 hover:underline"
                >Figma design system</a
              >
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
            data-accordion-target="#accordion-flush-body-3"
            aria-expanded="false"
            aria-controls="accordion-flush-body-3"
          >
            <span
              >What are the differences between Flowbite and Tailwind UI?</span
            >
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-3"
          class="hidden"
          aria-labelledby="accordion-flush-heading-3"
        >
          <div class="py-5 border-b border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                  >Flowbite Pro</a
                >
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                  >Tailwind UI</a
                >
              </li>
            </ul>
          </div>
        </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
{% manifest %} 
  { 
  "type": "Functional", 
  "displayName": "Accordion-Flush", 
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