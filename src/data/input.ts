export const floatingFilledLabel = `
<div class="floatingfilled-container">
    <input type="text" id="floating_filled" class="floatingfilled-input" placeholder=" " />
    <label for="floating_filled" class="floatingfilled-label">{ { textLabel } }</label>
</div>
<style>
.floatingfilled-container{position:relative;}.floatingfilled-input{display:block;padding-left:0.625rem;padding-right:0.625rem;padding-bottom:0.625rem;
padding-top:1.25rem;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;border-width:0;border-bottom-width:2px;border-color:#D1D5DB;width:100%;
font-size:0.875rem;line-height:1.25rem;color:#111827;background-color:#F3F4F6;appearance:none}.floatingfilled-input:focus{outline-style:none;
box-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);border-color: #2563EB;}.floatingfilled-container input:focus{border-radius:0;}
.floatingfilled-label{position:absolute;top:1rem;z-index:10;left:0.625rem;transition:top 0.3s,font-size 0.3s,transform 0.3s;transform-origin:0;}.floatingfilled-input:focus~.floatingfilled-label,
.floatingfilled-input:not(:placeholder-shown)~.floatingfilled-label{top:0.75rem;font-size:0.75rem;transform:translateY(-1rem) scale(0.75);}.floatingfilled-input:focus~.floatingfilled-label{color:#2563EB;}
</style>

{ % manifest % } 
  { 
  "type": "Functional", 
  "displayName": "Floating Filled Label", 
  "description": "Floating ",
  "tables": [], 
  "params": [
    {
      "id": "textLabel",
      "displayName": "Text Label",
      "description": "Text for label"
    }
  ] 
  } 
{ % endmanifest % } 
`
export const floatingOutlinedLabel = `
<div class="floatingoutlined-container">
    <input type="text" id="floating_outlined" class="floatingoutlined-input" placeholder=" " />
    <label for="floating_outlined" class="floatingoutlined-label">{ { textLabel } }</label>
</div>
<style>
.floatingoutlined-container{position:relative;}.floatingoutlined-input{display:block;padding-left:0.875rem;padding-right:0.625rem;padding-bottom:0.625rem;
padding-top:1.25rem;border-radius:0.5rem;border:1px solid #D1D5DB;width:100%;font-size:0.875rem;line-height:1.25rem;color:#111827;background-color:transparent;
appearance:none}.floatingoutlined-input::placeholder{opacity:0;}.floatingoutlined-input:focus,.floatingoutlined-input:not(:placeholder-shown){--fo-ring-inset:1px;
--fo-ring-color:#2563EB;outline-style:none;box-shadow:var(--fo-ring-inset) 0 0 0 calc(0px + var(--fo-ring-inset)) var(--fo-ring-color);border-color: #2563EB;}
.floatingoutlined-label{position:absolute;top:1rem;z-index:10;left:0.5rem;padding-left:0.5rem;padding-right:0.5rem;font-size:0.875rem;line-height:1.25rem;
color: #6B7280;background-color: #ffffff;transition-duration: 300ms;}
.floatingoutlined-container:focus-within > .floatingoutlined-label,.floatingoutlined-input:not(:placeholder-shown) + .floatingoutlined-label{color:#2563EB;
background-color: #ffffff;transform: translateY(-1.5rem) translateX(-0.625rem) scaleX(.75) scaleY(.75);}
</style>

{ % manifest % } 
  { 
  "type": "Functional", 
  "displayName": "Floating Outlined Label", 
  "description": "",
  "tables": [], 
  "params": [
     {
      "id": "textLabel",
      "displayName": "Text Label",
      "description": "Text for label"
    }
  ] 
  } 
{ % endmanifest % }
`