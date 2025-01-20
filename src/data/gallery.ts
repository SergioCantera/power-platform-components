export const importCode = `
---
import { Gallery } from 'free-astro-components'
---
`

export const defaultGallery = `
<div class="grid grid-cols-{{ smCols }} md:grid-cols-{{ mdCols }} gap-4">
  <div>
    <img
      class="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
      alt=""
    />
  </div>
</div>

{% manifest %} 
  { 
    "type": "Functional", 
    "displayName": "DefaultGallery", 
    "description": "This component displays images using a responsive default gallery layout",
    "tables": [], 
    "params": [
      {
        "id": "smCols",
        "displayName": "Small Devices Columns",
        "description": "Define the number of columns for small-size devices."
      },
      {
        "id": "mdCols",
        "displayName": "Medium and Large Devices Columns",
        "description": "Define the number of columns for medium-size devices and greater."
      }
    ] 
  } 
{% endmanifest %}
`

export const featuredImageGallery = `
<div class="grid gap-4">
  <div>
    <img
      class="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
      alt=""
    />
  </div>
  <div class="grid grid-cols-5 gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
        alt=""
      />
    </div>
  </div>
</div>

{% manifest %} 
  { 
    "type": "Functional", 
    "displayName": "FeaturedImageGallery", 
    "description": "This component displays a featured image and a list of non-featured images using gallery layout",
    "tables": [], 
    "params": [
      {
        "id": "cols",
        "displayName": "Columns",
        "description": "Define the number of columns for non-featured images."
      }
    ] 
  } 
{% endmanifest %} 
`