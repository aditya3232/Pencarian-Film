// app-bar mewarisi sifat HTML element
// didalam block class ada method connectedcallback(), dan render()
// connectedcallback() akan terpanggil ketika elemen telah diterapkan pada DOM
// render() akan merendering HTML & CSS nya
// customElements.define('app-bar', AppBar); mendefinisikan custom element agar dapat digunakan di DOM (di file HTML)
// agar app-bar.js tereksekusi, impor berkas ini di app.js
// import ini agar css bootstrap nya bisa di masukkan ke app-bar.js
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> MOVIE </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Search <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Movie.com <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;
  }
}

customElements.define('app-bar', AppBar);
