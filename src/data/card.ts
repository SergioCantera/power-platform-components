export const defaultCard = `
<a href="#" class="defaultcard-link">
  <h5 class="defaultcard-title">{{ title }}</h5>
  <p class="defaultcard-subtitle">{{ subtitle }}</p>
</a>
<style>
.defaultcard-link{display: block; padding: 1.5rem;border-radius: 0.5rem;border-width: 1px;border-color: #E5E7EB;max-width: 24rem;
background-color: #ffffff;box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);}.defaultcard-link:hover{
background-color: #F3F4F6; text-decoration: none !important;}.defaultcard-title{margin-bottom: 0.5rem;font-size:1.5rem;line-height: 2rem;font-weight: 700;
letter-spacing: -0.025em;color: #111827;}.defaultcard-subtitle{font-weight: 400;color: #374151;}
</style>

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
<div class="cardwithbutton-container">
  <a href="#">
    <h5 class="cardwithbutton-title">{{ title }}</h5>
  </a>
  <p class="cardwithbutton-subtitle">{{ subtitle }}</p>
  <a href="#" class="cardwithbutton-button">
    {{ buttonText }}
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  </a>
</div>
<style>
.cardwithbutton-container{padding:1.5rem;border-radius:0.5rem;border-width: 1px;border-color: #E5E7EB;max-width: 24rem;background-color: #ffffff;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);}.cardwithbutton-container a:hover{text-decoration: none !important;}
.cardwithbutton-title{margin-bottom: 0.5rem;font-size: 1.5rem;line-height: 2rem;font-weight: 700;letter-spacing: -0.025em;color: #111827;}
.cardwithbutton-subtitle{margin-bottom: 0.75rem;font-weight: 400;color:#374151;}.cardwithbutton-button{display: inline-flex;padding-top: 0.5rem;
padding-bottom: 0.5rem; padding-left: 0.75rem;padding-right: 0.75rem;align-items: center;border-radius: 0.5rem;font-size: 0.875rem;line-height: 1.25rem;
font-weight: 500;text-align: center;color: #ffffff !important;background-color: #1D4ED8;}.cardwithbutton-button:hover{background-color: #1E40AF;}
.cardwithbutton-button:focus{box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);outline-style: none;}.cardwithbutton-button svg{width: 0.875rem;height: 0.875rem;margin-left:0.5rem;}
</style>
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
<div class="cardwithimage-container">
  <a href="#">
    <img class="cardwithimage-image" src={{ imgUrl }} alt="" />
  </a>
  <div class="p-5">
    <a href="#">
      <h5 class="cardwithimage-title">
        {{ title }}
      </h5>
    </a>
    <p class="cardwithimage-subtitle">
      {{ subtitle }}
    </p>
    <a href="#" class="cardwithimage-button">
      {{ buttonText }}
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
      </svg>
    </a>
  </div>
</div>
<style>
.cardwithimage-container{border-radius:0.5rem;border-width: 1px;border-color: #E5E7EB;max-width: 24rem;background-color: #ffffff;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);}.cardwithimage-container a:hover{text-decoration: none !important;}
.cardwithimage-image{border-top-left-radius: 0.5rem;border-top-right-radius: 0.5rem;}.cardwithimage-title{margin-bottom:0.5rem;font-size:1.5rem;
line-height:2rem;font-weight:700;letter-spacing:-0.025em;color:#111827;}.cardwithimage-subtitle{margin-bottom:0.75rem;font-weight:400;color: #374151;}
.cardwithimage-button{display:inline-flex;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;align-items:center;
border-radius:0.5rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;text-align:center;color:#ffffff !important;background-color:#1D4ED8;}
.cardwithimage-button:hover{background-color:#1E40AF;}.cardwithimage-button:focus{box-shadow:0 0 0 3px rgba(66,153,225,0.5);outline-style:none;}
.cardwithimage-button svg{width:0.875rem;height:0.875rem;}
</style>

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