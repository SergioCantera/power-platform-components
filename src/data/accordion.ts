export const defaultAccordion = `
<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>What is Microsoft Power Pages?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Microsoft Power Pages is a secure, enterprise-grade, low-code software
        as a service (SaaS) platform for creating, hosting, and administering
        modern external-facing business websites. Whether you're a low-code
        maker or a professional developer, Power Pages empowers you to rapidly
        design, configure, and publish websites that work across web browsers
        and devices.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Can pro developers extend Power Pages capabilities?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Makers can work with pro developers in fusion teams to extend the
        functionality using Visual Studio Code and the Microsoft Power Platform
        CLI to create powerful business application websites.</p>
      <p class="text-gray-500 dark:text-gray-400">Check out the <a
          href="https://learn.microsoft.com/en-us/power-pages/capabilities"
          class="text-blue-600 dark:text-blue-500 hover:underline"
          >tools for pro developers</a
        ></p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Can be integrated with other Microsoft Power Platform components?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Power Pages provides deep integration with other Microsoft Power
        Platform components.</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about available integrations:</p>
      <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://learn.microsoft.com/en-us/power-pages/capabilities#integration-with-other-microsoft-power-platform-components" rel="nofollow"
            class="text-blue-600 dark:text-blue-500 hover:underline">Dataverse</a></li>
        <li><a href="https://learn.microsoft.com/en-us/power-pages/capabilities#integration-with-other-microsoft-power-platform-components" rel="nofollow"
            class="text-blue-600 dark:text-blue-500 hover:underline">Power Apps</a></li>
        <li><a href="https://learn.microsoft.com/en-us/power-pages/capabilities#integration-with-other-microsoft-power-platform-components" rel="nofollow"
            class="text-blue-600 dark:text-blue-500 hover:underline">Power Automate</a></li>
        <li><a href="https://learn.microsoft.com/en-us/power-pages/capabilities#integration-with-other-microsoft-power-platform-components" rel="nofollow"
            class="text-blue-600 dark:text-blue-500 hover:underline">Power BI</a></li>
        <li><a href="https://learn.microsoft.com/en-us/power-pages/capabilities#integration-with-other-microsoft-power-platform-components" rel="nofollow"
            class="text-blue-600 dark:text-blue-500 hover:underline">Microsoft Copilot Studio</a></li>
      </ul>
    </div>
  </div>
</div>

{% manifest %} 
  { 
    "type": "Functional", 
    "displayName": "DefaultAccordion", 
    "description": "This component displays data using a default accordion layout",
    "tables": [], 
    "params": [] 
  } 
{% endmanifest %}
`

export const flushAccordion = `
<div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    data-inactive-classes="text-gray-500 dark:text-gray-400">
  <h2 id="accordion-flush-heading-1">
    <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b
     border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1"
      aria-expanded="true" aria-controls="accordion-flush-body-1">
      <span>What is Microsoft Power Pages?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path>
      </svg>
    </button>
  </h2>
  <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Microsoft Power Pages is a secure, enterprise-grade, low-code software
        as a service (SaaS) platform for creating, hosting, and administering
        modern external-facing business websites. Whether you're a low-code
        maker or a professional developer, Power Pages empowers you to rapidly
        design, configure, and publish websites that work across web browsers
        and devices.
      </p>
    </div>
  </div>
  <h2 id="accordion-flush-heading-2">
    <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b
     border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-2"
      aria-expanded="false" aria-controls="accordion-flush-body-2">
      <span>Can pro developers extend Power Pages capabilities?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path>
      </svg>
    </button>
  </h2>
  <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Makers can work with pro developers in fusion teams to extend the
        functionality using Visual Studio Code and the Microsoft Power Platform
        CLI to create powerful business application websites.
      </p>
      <p class="text-gray-500 dark:text-gray-400">
        Check out the <a href="https://learn.microsoft.com/en-us/power-pages/capabilities"
        class="text-blue-600 dark:text-blue-500 hover:underline">tools for pro developers</a>
      </p>
    </div>
  </div>
  <h2 id="accordion-flush-heading-3">
    <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b
     border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-3"
      aria-expanded="false" aria-controls="accordion-flush-body-3">
      <span>Can be integrated with other Microsoft Power Platform components?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path>
      </svg>
    </button>
  </h2>
  <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Power Pages provides deep integration with other Microsoft Power
        Platform components.
      </p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Learn more about available integrations:
      </p>
      <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li>
          <a href="https://learn.microsoft.com/en-us/power-pages/capabilities#integration-with-other-microsoft-power-platform-components"
            rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Dataverse</a>
        </li>
        <li>
          <a href="https://learn.microsoft.com/en-us/power-pages/capabilities#integration-with-other-microsoft-power-platform-components"
            rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Power Apps</a>
        </li>
        <li>
          <a href="https://learn.microsoft.com/en-us/power-pages/capabilities#integration-with-other-microsoft-power-platform-components"
            rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Power Automate</a>
        </li>
        <li>
          <a href="https://learn.microsoft.com/en-us/power-pages/capabilities#integration-with-other-microsoft-power-platform-components"
            rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Power BI</a>
        </li>
        <li>
          <a href="https://learn.microsoft.com/en-us/power-pages/capabilities#integration-with-other-microsoft-power-platform-components"
            rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Microsoft Copilot Studio</a>
        </li>
      </ul>
    </div>
  </div>
</div>

{% manifest %} 
  { 
  "type": "Functional", 
  "displayName": "AccordionFlush", 
  "description": "This component displays data using a flush accordion layout",
  "tables": [], 
  "params": [] 
  } 
{% endmanifest %} 
`