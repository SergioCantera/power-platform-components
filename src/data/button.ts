export const defaultButton = `
<button 
  type="button" 
  class="default-button"
  style="width:{ { width } }px; height:{ { height } }px;"
  >{ { buttonText } }
  </button>
<style>
  .default-button{--pp-text-opacity: 1;--pp-bg-opacity: 1;--pp-ring-offset-shadow: 1rem 0 0 0 1px rgb(0 0 0 / 1);
  --pp-ring-inset: 1rem;--pp-ring-offset-width: 1px;--pp-ring-offset-color: rgb(0 0 0 / 1);
  --pp-ring-shadow: 1rem 0 0 0 5px rgb(164 202 254 / 1);--pp-ring-color: rgb(164 202 254 / 1);--pp-ring-opacity: 1;
  --pp-shadow: 0 0 #0000;opacity: var(--pp-text-opacity);color: rgb(255 255 255 / var(--pp-text-opacity, 1));
    background-color: rgb(26 86 219 / var(--pp-bg-opacity, 1));font-weight: 500;border-radius: .5rem;font-size: .875rem;
    line-height: 1.25rem;padding-left: 1.25rem;padding-right: 1.25rem;padding-top: .625rem;padding-bottom: .625rem;
    margin-inline-end: .5rem;margin-bottom: .5rem;}
  .default-button:hover{background-color: rgb(30 66 159 / var(--pp-bg-opacity, 1));}
  .default-button:focus{--pp-ring-color: rgb(164 202 254 / var(--pp-ring-opacity, 1));
    --pp-ring-offset-shadow: var(--pp-ring-inset) 0 0 0 var(--pp-ring-offset-width) var(--pp-ring-offset-color);
    --pp-ring-shadow: var(--pp-ring-inset) 0 0 0 calc(4px + var(--pp-ring-offset-width)) var(--pp-ring-color);
    outline: 2px solid transparent;outline-offset: 2px;box-shadow: var(--pp-ring-offset-shadow),var(--pp-ring-shadow),var(--pp-shadow, 0 0 #0000);}
  .default-button:is(.dark *){background-color: rgb(28 100 242 / var(--pp-bg-opacity, 1));}
  .default-button:hover:is(.dark *){background-color: rgb(26 86 219 / var(--pp-bg-opacity, 1));}
  .default-button:focus:is(.dark *){background-color: rgb(30 66 159 / var(--pp-bg-opacity, 1));}
</style>
{ % manifest % } 
  { 
  "type": "Functional", 
  "displayName": "DefaultButton", 
  "description": "Use these default button styles. Change to multiple colors to indicate an action or link within your website",
  "tables": [], 
  "params": [
    {
      "id": "buttonText",
      "displayName": "Button Text",
      "description": "Button Text"
    },
    {
      "id": "width",
      "displayName": "Width",
      "description": "Width in pixels (px)"
    },
    {
      "id": "height",
      "displayName": "Height",
      "description": "Height in pixels (px)"
    }
  ] 
  } 
{ % endmanifest % }
`

export const buttonPill = `
<button
  type="button"
  class="button-pill"
  style="width:{ { width } }px; height:{ { height } }px;"
  >
  { { buttonText } }
</button>
<style>
  .button-pill{--pp-text-opacity: 1;--pp-bg-opacity: 1;--pp-ring-offset-shadow: 1rem 0 0 0 1px rgb(0 0 0 / 1);--pp-ring-inset: 1rem;
    --pp-ring-offset-width: 1px;--pp-ring-offset-color: rgb(0 0 0 / 1);--pp-ring-shadow: 1rem 0 0 0 5px rgb(164 202 254 / 1);
    --pp-ring-color: rgb(164 202 254 / 1);--pp-ring-opacity: 1;--pp-shadow: 0 0 #0000;opacity: var(--pp-text-opacity);color: rgb(255 255 255 / var(--pp-text-opacity, 1));
    background-color: rgb(26 86 219 / var(--pp-bg-opacity, 1));font-weight: 500;border-radius: 9999px;font-size: .875rem;
    line-height: 1.25rem;padding-left: 1.25rem;padding-right: 1.25rem;padding-top: .625rem;padding-bottom: .625rem;
    margin-inline-end: .5rem;margin-bottom: .5rem; text-align:center;}
  .button-pill:hover{background-color: rgb(30 66 159 / var(--pp-bg-opacity, 1));}
  .button-pill:focus{--pp-ring-color: rgb(164 202 254 / var(--pp-ring-opacity, 1));
    --pp-ring-offset-shadow: var(--pp-ring-inset) 0 0 0 var(--pp-ring-offset-width) var(--pp-ring-offset-color);
    --pp-ring-shadow: var(--pp-ring-inset) 0 0 0 calc(4px + var(--pp-ring-offset-width)) var(--pp-ring-color);
    outline: 2px solid transparent;outline-offset: 2px;box-shadow: var(--pp-ring-offset-shadow),var(--pp-ring-shadow),var(--pp-shadow, 0 0 #0000);}
  .button-pill:is(.dark *){background-color: rgb(28 100 242 / var(--pp-bg-opacity, 1));}
  .button-pill:hover:is(.dark *){background-color: rgb(26 86 219 / var(--pp-bg-opacity, 1));}
  .button-pill:focus:is(.dark *){background-color: rgb(30 66 159 / var(--pp-bg-opacity, 1));}
</style>
{ % manifest % } 
  { 
  "type": "Functional", 
  "displayName": "ButtonPill", 
  "description": "The button pills can be used as an alternative style by using fully rounded edges",
  "tables": [], 
  "params": [
    {
      "id": "buttonText",
      "displayName": "Button Text",
      "description": "Button Text"
    },
    {
      "id": "width",
      "displayName": "Width",
      "description": "Width in pixels (px)"
    },
    {
      "id": "height",
      "displayName": "Height",
      "description": "Height in pixels (px)"
    }
  ] 
  } 
{ % endmanifest % }
`

export const gradientButton = `
<button
  type="button"
  class="gradient-button"
  style="width:{ { width } }px; height:{ { height } }px;"
  >
  { { buttonText } }
</button>
<style>
  .gradient-button{--pp-text-opacity: 1;--pp-bg-opacity: 1;--pp-ring-offset-shadow: 1rem 0 0 0 1px rgb(0 0 0 / 1);--pp-ring-inset: 1rem;
    --pp-ring-offset-width: 1px;--pp-ring-offset-color: rgb(0 0 0 / 1);--pp-ring-shadow: 1rem 0 0 0 5px rgb(164 202 254 / 1);
    --pp-ring-color: rgb(164 202 254 / 1);--pp-ring-opacity: 1;--pp-shadow: 0 0 #0000;--pp-gradient-from:#7E3AF2;--pp-gradient-to:#3F83F8;
    --pp-gradient-stops: var(--pp-gradient-from),var(--pp-gradient-to);--pp-gradient-from-position: 0%;--pp-gradient-to-position: 100%;opacity: var(--pp-text-opacity);color: rgb(255 255 255 / var(--pp-text-opacity, 1));
    --pp-gradient-from: #7E3AF2 var(--pp-gradient-from-position);--pp-gradient-to: rgb(126 58 242 / 0) var(--pp-gradient-to-position);
    --pp-gradient-stops: var(--pp-gradient-from), var(--pp-gradient-to);--pp-gradient-to: #3F83F8 var(--pp-gradient-to-position);
    background-image:linear-gradient(to bottom right,var(--pp-gradient-stops));background-image:linear-gradient(to right,var(--pp-gradient-stops));
    font-weight:500;border-radius:.5rem;font-size:.875rem;line-height:1.25rem;padding-left:1.25rem;padding-right:1.25rem;padding-top:.625rem;padding-bottom:.625rem;
    text-align:center;margin-inline-end:.5rem;margin-bottom:.5rem;}
  .gradient-button:hover{background-image:linear-gradient(to bottom left,var(--pp-gradient-stops));}
  .gradient-button:focus{--pp-ring-offset-shadow: var(--pp-ring-inset) 0 0 0 var(--pp-ring-offset-width) var(--pp-ring-offset-color);
    --pp-ring-shadow: var(--pp-ring-inset) 0 0 0 calc(4px + var(--pp-ring-offset-width)) var(--pp-ring-color);
    box-shadow:var(--pp-ring-offset-shadow),var(--pp-ring-shadow),var(--pp-shadow, 0 0 #0000);outline:2px solid transparent;outline-offset:2px;
    --pp-ring-opacity: 1;--pp-ring-color: rgb(164 202 254 / var(--pp-ring-opacity, 1))}
  .gradient-button:focus:is(.dark *){--pp-ring-opacity: 1;--pp-ring-color: rgb(30 66 159 / var(--pp-ring-opacity, 1))}
</style>
{ % manifest % } 
  { 
  "type": "Functional", 
  "displayName": "GradientButton", 
  "description": "These buttons use a style that includes two contrasted colors creating an impressive mesh gradient effect",
  "tables": [], 
  "params": [
    {
      "id": "buttonText",
      "displayName": "Button Text",
      "description": "Button Text"
    },
    {
      "id": "width",
      "displayName": "Width",
      "description": "Width in pixels (px)"
    },
    {
      "id": "height",
      "displayName": "Height",
      "description": "Height in pixels (px)"
    }
  ] 
  } 
{ % endmanifest % }
`

export const buttonWithIcon = `
<button
  type="button"
  class="button-with-icon"
  >
  <svg
    class="icon-button"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 18 21"
  >
    <path
      d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
    ></path>
  </svg>
  { { buttonText } }
</button>
<style>
  .button-with-icon{--pp-text-opacity: 1;--pp-bg-opacity: 1;--pp-ring-offset-shadow: 1rem 0 0 0 1px rgb(0 0 0 / 1);
  --pp-ring-inset: 1rem;--pp-ring-offset-width: 1px;--pp-ring-offset-color: rgb(0 0 0 / 1);
  --pp-ring-shadow: 1rem 0 0 0 5px rgb(164 202 254 / 1);--pp-ring-color: rgb(164 202 254 / 1);--pp-ring-opacity: 1;
  --pp-shadow: 0 0 #0000;opacity: var(--pp-text-opacity);color: rgb(255 255 255 / var(--pp-text-opacity, 1));
    background-color: rgb(26 86 219 / var(--pp-bg-opacity, 1));font-weight: 500;border-radius: .5rem;font-size: .875rem;
    line-height: 1.25rem;padding-left: 1.25rem;padding-right: 1.25rem;padding-top: .625rem;padding-bottom: .625rem;
    text-align:center;margin-inline-end: .5rem;display:inline-flex;align-items:center;}
  .button-with-icon:hover{background-color: rgb(30 66 159 / var(--pp-bg-opacity, 1));}
  .dbutton-with-icon:focus{--pp-ring-color: rgb(164 202 254 / var(--pp-ring-opacity, 1));
    --pp-ring-offset-shadow: var(--pp-ring-inset) 0 0 0 var(--pp-ring-offset-width) var(--pp-ring-offset-color);
    --pp-ring-shadow: var(--pp-ring-inset) 0 0 0 calc(4px + var(--pp-ring-offset-width)) var(--pp-ring-color);
    outline: 2px solid transparent;outline-offset: 2px;box-shadow: var(--pp-ring-offset-shadow),var(--pp-ring-shadow),var(--pp-shadow, 0 0 #0000);}
  .button-with-icon:is(.dark *){background-color: rgb(28 100 242 / var(--pp-bg-opacity, 1));}
  .button-with-icon:hover:is(.dark *){background-color: rgb(26 86 219 / var(--pp-bg-opacity, 1));}
  .button-with-icon:focus:is(.dark *){background-color: rgb(30 66 159 / var(--pp-bg-opacity, 1));}
  .icon-button{width:.875rem;height:.875rem;margin-inline.end:.5rem;}
</style>

{ % manifest % } 
  { 
  "type": "Functional", 
  "displayName": "ButtonWithIcon", 
  "description": "Use the following examples to add a SVG icon inside the button either on the left or right side.",
  "tables": [], 
  "params": [
    {
      "id": "buttonText",
      "displayName": "Button Text",
      "description": "Button Text"
    },
    {
      "id": "width",
      "displayName": "Width",
      "description": "Width in pixels (px)"
    },
    {
      "id": "height",
      "displayName": "Height",
      "description": "Height in pixels (px)"
    }
  ] 
  } 
{ % endmanifest % }
`