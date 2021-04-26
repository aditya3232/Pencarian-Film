// mendefinisikan custom element harus pakai dash (ex: card-1, app-bar) agar membedakan dari element HTML
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Searchform extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  <div class="container">
    <div class="row mt-3 justify-content-center">
      <div class="col-md-8">
        <h1 class="text-center">Search Movie</h1>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Movie Title..." id="search-input" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="search-button">Search</button>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div class="row" id="movie-list"></div>

    <br />
    <br />
    <br />
  </div>
    `;
  }
}

customElements.define('search-form', Searchform);
