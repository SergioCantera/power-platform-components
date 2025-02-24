export const defaultJumbotron = `
<section class="defaultjumbotron-section">
  <div class="defaultjumbotron-container">
    <h1
      class="defaultjumbotron-title"
    >
      {{ title }}
    </h1>
    <p
      class="defaultjumbotron-description"
    >
      {{ description }}
    </p>
    <div
      class="defaultjumbotron-buttons"
    >
      <a
        href="#"
        class="defaultjumbotron-button-primary"
      >
        {{ buttonLabel1 }}
        <svg
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
            d="M1 5h12m0 0L9 1m4 4L9 9"></path>
        </svg>
      </a>
      <a
        href="#"
        class="defaultjumbotron-button-secondary"
      >
        {{ buttonLabel2 }}
      </a>
    </div>
  </div>
</section>
<style>
.defaultjumbotron-section{background-color:#ffffff;text-align:center;}.defauljumbotron-container{padding-left:1rem;padding-right:1rem;padding-top:2rem;padding-bottom:2rem;
max-width: 1280px;margin:auto 0 text-align: center;}.defaultjumbotron-title{margin-bottom:1rem;font-size:2.25rem;font-weight:800;line-height:1rem;
letter-spacing:-0.025rem;color:#111827;}.defaultjumbotron-description{margin-bottom:2rem;font-size:1.125rem;line-height:1.75;font-weight:400;color:#6B7280;}
.defaultjumbotron-buttons{display:flex;flex-direction:column;margin-top:1rem;}.defaultjumbotron-button-primary{display:inline-flex;padding-top:0.75rem;
padding-bottom:0.75rem;padding-left:1.25rem;padding-right:1.25rem;justify-content:center;align-items:center;border-radius:0.5rem;font-size:1rem;
line-height:1.5rem;font-weight:500;text-align:center;color:#ffffff !important;background-color:#1D4ED8;;text-decoration:none !important;}.defaultjumbotron-button-primary:hover{background-color:#1E40AF;}
.defaultjumbotron-button-primary svg{width:0.875rem;height:0.875rem;margin-inline-start:0.5rem;}.defaultjumbotron-button-secondary{padding-top:0.75rem;
padding-bottom:0.75rem;padding-left:1.25rem;padding-right:1.25rem;border-radius:0.5rem;border-width:1px;border-color:#E5E7EB;font-size:0.875rem;
line-height:1.25rem;font-weight:500;color:#111827;background-color:#ffffff;text-decoration:none !important;}.defaultjumbotron-button-secondary:hover{color:#1D4ED8;background-color:#F3F4F6;}
.defaultjumbotron-button-secondary:focus{z-index:10;outline-style:none;box-shadow:0 0 0 3px rgba(66,153,225,0.5);}
@media(min-width:640px){.defaultjumbotron-description{padding-left:4rem;padding-right:4rem;}.defaultjumbotron-buttons{margin-top:0;flex-direction:row;
justify-content:center}.defaultjumbotron-button-secondary{margin-inline-start:1rem;}}
@media(min-width:768px){.defaultjumbotron-title{font-size:3rem;line-height:1;}}
@media(min-width:1024px){.defaultjumbotron-container{padding-top:4rem;padding-bottom:4rem;}.defaultjumbotron-title{font-size:3.75rem;line-height:1;}
.defaultjumbotron-description{padding-left:12rem;padding-right:12rem;font-size:1.25rem;line-height:1.75rem;}}
</style>

{% manifest %} 
  { 
    "type": "Functional", 
    "displayName": "DefaultJumbotron", 
    "description": "This component displays data using a default jumbotron layout",
    "tables": [], 
    "params": [
      {
        "id": "title",
        "displayName": "Title",
        "description": "Define a title for the jumbotron component."
      },
      {
        "id": "description",
        "displayName": "Description",
        "description": "Define a description for the jumbotron component."
      },
      {
        "id": "buttonLabel1",
        "displayName": "Button label 1",
        "description": "Define a label for button 1 in the jumbotron component."
      },
      {
        "id": "buttonLabel2",
        "displayName": "Button Label 2",
        "description": "Define a label for button 2 in the jumbotron component."
      }
    ] 
  } 
{% endmanifest %}
`

export const gradientBackgroundJumbotron = `
<section class="gradientjumbotron-section">
  <div class="gradientjumbotron-container">
    <h1 class="gradientjumbotron-title">
      {{ title }}
    </h1>
    <p class="gradientjumbotron-description">
      {{ description }}
    </p>
    <div class="gradientjumbotron-buttons">
      <a href="#" class="gradientjumbotron-button-primary">
        {{ buttonLabel1 }}
        <svg
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
            d="M1 5h12m0 0L9 1m4 4L9 9"></path>
        </svg>
      </a>
      <a href="#" class="gradientjumbotron-button-secondary">
        {{ buttonLabel2 }}
      </a>
    </div>
  </div>
  <div class="gradientjumbotron-gradient"></div>
</section>
<style>
.gradientjumbotron-section{background-color:#ffffff;text-align:center;}
.gradientjumbotron-container{position: relative;z-index:10;padding-left:1rem;padding-right:1rem;padding-top:2rem;padding-bottom:2rem;
max-width: 1280px;margin:auto 0; text-align: center;}.gradientjumbotron-title{margin-bottom:1rem;font-size:2.25rem;font-weight:800;line-height:1rem;
letter-spacing:-0.025rem;color:#111827;}.gradientjumbotron-description{margin-bottom:2rem;font-size:1.125rem;line-height:1.75;font-weight:400;color:#6B7280;}
.gradientjumbotron-buttons{display:flex;flex-direction:column;margin-top:1rem;}.gradientjumbotron-button-primary{display:inline-flex;padding-top:0.75rem;
padding-bottom:0.75rem;padding-left:1.25rem;padding-right:1.25rem;justify-content:center;align-items:center;border-radius:0.5rem;font-size:1rem;
line-height:1.5rem;font-weight:500;text-align:center;color:#ffffff !important;background-color:#1D4ED8;;text-decoration:none !important;}.gradientjumbotron-button-primary:hover{background-color:#1E40AF;}
.gradientjumbotron-button-primary svg{width:0.875rem;height:0.875rem;margin-inline-start:0.5rem;}.gradientjumbotron-button-secondary{padding-top:0.75rem;
padding-bottom:0.75rem;padding-left:1.25rem;padding-right:1.25rem;border-radius:0.5rem;border-width:1px;border-color:#E5E7EB;font-size:0.875rem;
line-height:1.25rem;font-weight:500;color:#111827;background-color:#ffffff;text-decoration:none !important;}.gradientjumbotron-button-secondary:hover{color:#1D4ED8;background-color:#F3F4F6;}
.gradientjumbotron-button-secondary:focus{z-index:10;outline-style:none;box-shadow:0 0 0 3px rgba(66,153,225,0.5);}.gradientjumbotron-gradient{
position:absolute;top:0;left:0;z-index:0;width:100%;height:100%;background:linear-gradient(180deg,#2563EB 0%,rgba(37,99,235,0) 100%);}
@media (min-width: 640px){.gradientjumbotron-description{padding-left:4rem;padding-right:4rem;}.gradientjumbotron-buttons{margin-top:0;flex-direction:row;
justify-content:center}.gradientjumbotron-button-secondary{margin-inline-start:1rem;}}
@media (min-width: 768px){.gradientjumbotron-title{font-size:3rem;line-height:1;}}
@media (min-width: 1024px){.gradientjumbotron-container{padding-top:4rem;padding-bottom:4rem;}.gradientjumbotron-title{font-size:3.75rem;line-height:1;}
.gradientjumbotron-description{padding-left:12rem;padding-right:12rem;font-size:1.25rem;line-height:1.75rem;}}
</style>

{% manifest %} 
  { 
    "type": "Functional", 
    "displayName": "GradientBackgroungJumbotron", 
    "description": "This component displays data using a gradient background jumbotron layout",
    "tables": [], 
    "params": [
      {
        "id": "title",
        "displayName": "Title",
        "description": "Define a title for the jumbotron component."
      },
      {
        "id": "description",
        "displayName": "Description",
        "description": "Define a description for the jumbotron component."
      },
      {
        "id": "buttonLabel1",
        "displayName": "Button label 1",
        "description": "Define a label for button 1 in the jumbotron component."
      },
      {
        "id": "buttonLabel2",
        "displayName": "Button Label 2",
        "description": "Define a label for button 2 in the jumbotron component."
      }
    ] 
  } 
{% endmanifest %} 
`