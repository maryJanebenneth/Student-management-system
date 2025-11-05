class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="app-header">
        <h1> My App</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/Signin">Sign in</a>
          <a href="#">Logout</a>
        </nav>
      </header>
    `;
  }
}

customElements.define('my-header', MyHeader);