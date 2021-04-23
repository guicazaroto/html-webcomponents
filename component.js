class Circle extends HTMLElement {
  constructor () {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    const root = document.createElement('span')
    const style = document.createElement('style')

    root.setAttribute('class', 'root')
    root.textContent = this.getAttribute('text')
    root.style.backgroundColor = this.getAttribute('color') || 'orange'

    style.textContent = `
      .root {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
    `
    

    shadow.appendChild(style)
    shadow.appendChild(root)
  }
}

customElements.define('my-circle', Circle)