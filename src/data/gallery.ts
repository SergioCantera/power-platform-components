export const defaultGallery = `
<div class="defaultgallery-container">
  <div>
    <img
      class="defaultgallery-item"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="defaultgallery-item"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="defaultgallery-item"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="defaultgallery-item"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="defaultgallery-item"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="defaultgallery-item"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="defaultgallery-item"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="defaultgallery-item"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="defaultgallery-item"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="defaultgallery-item"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="defaultgallery-item"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
      alt=""
    />
  </div>
  <div>
    <img
      class="defaultgallery-item"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
      alt=""
    />
  </div>
</div>
<style>
.defaultgallery-container{display:grid;grid-gap:1rem;grid-template-columns:repeat({{smCols}},1fr);}
.defaultgallery-item{height:auto;max-width:100%;border-radius:.5rem;}
@media (min-width: 768px) {.defaultgallery-container{grid-template-columns:repeat({{mdCols}},1fr);}}
</style>

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
<div class="featuredgallery-container">
  <div>
    <img
      class="featuredgallery-item"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
      alt=""
    />
  </div>
  <div class="featuredgallery-subcontainer">
    <div>
      <img
        class="featuredgallery-item"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="featuredgallery-item"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="featuredgallery-item"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="featuredgallery-item"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="featuredgallery-item"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
        alt=""
      />
    </div>
  </div>
</div>
<style>
.featuredgallery-container{display:grid;grid-gap:1rem;}.featuredgallery-item{height:auto;max-width:100%;border-radius:.5rem;}
.featuredgallery-subcontainer{display:grid;grid-template-columns:repeat({{ cols }},1fr);grid-gap:1rem;}
</style>

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