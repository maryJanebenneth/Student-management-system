class MyFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="app-footer">
        <p>&copy; ${year} My App — All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define('my-footer', MyFooter);