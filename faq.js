const template = document.createElement("template")
template.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
<link rel="stylesheet" href="/faq.css">
<div class="question-answer">
  <div class="question">
    <h3 class="title-question">
      Do you do a web3 developer ?
    </h3>
    <button class="question-btn">
      <span class="up-icon">
        <i class="fas fa-chevron-up"></i>
      </span>
      <span class="dowm-icon">
        <i class="fas fa-chevron-down"></i>
      </span> 
    </button>
  </div>
  <div class="answer">
    <p>Lorem ipsum dolor sit amet
      consectetur adipisicing elit. 
      Quisquam assumenda sapiente 
      mollitia excepturi quos id 
      magnam obcaecati non est? 
      Maiores?</p>
  </div>
</div>
`

export class bitamg extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.shadowRoot.querySelector(".title-question").innerHTML =
      this.getAttribute("title-question")
    this.shadowRoot.querySelector(".answer").innerHTML = this.getAttribute("answer")
   let btn =  this.shadowRoot.querySelector(".question-btn")
   let answer = this.shadowRoot.querySelector(".answer")
  let upIconn = this.shadowRoot.querySelector(".up-icon")
  let downIconn = this.shadowRoot.querySelector(".dowm-icon")
   btn.addEventListener("click" , ()=> {
    console.log("mmd");
   
    if(answer.style.display === "block") {
        downIconn.style.display="block"
        answer.style.display = "none" 
        upIconn.style.display = "none"
    } else {
        downIconn.style.display="none "
        upIconn.style.display = "block"
        answer.style.display = "block"
    }
   })
} }
