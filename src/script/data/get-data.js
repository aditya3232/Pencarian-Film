// get-data menggunakan ajax untuk melakukan get dari wep api
// setelah data didapat maka akan menampilkan card berisi data film
// jika gagal akan menampilkan data error
// disini juga ada fungsi bisa mencet enter ketika search
import $ from 'jquery';

const searchMovie = () => {
  $('#movie-list').html('');
  $.ajax({
    url: 'http://www.omdbapi.com',
    type: 'get',
    dataType: 'json',
    data: {
      apikey: '7b9ce12a',
      s: $('#search-input').val(),
    },
    success: (result) => {
      if (result.Response === 'True') {
        const movies = result.Search;
        $.each(movies, (i, data) => {
          $('#movie-list').append(
            `
            <div class="col-md-4">
              <div class="card-deck">
                <div class="card mb-3">
                  <img src="${data.Poster}" class="card-img-top" >
                    <div class="card-body">
                      <h6 class="card-title">${data.Title}</h6>
                      <h7 class="card-subtitle mb-2 text-muted">${data.Year}</h7>
                    </div>
                </div>
              </div>
            </div>
          `
          );
        });
        $('#search-input').val('');
      } else {
        $('#movie-list').html(
          `
        <div class="col">
          <h1 class="text-center">${result.Error}</h1>
        </div>
        `
        );
      }
    },
  });
};

$('#search-button').on('click', () => searchMovie());

$('#search-input').on('keyup', (event) => {
  if (event.keyCode === 13) {
    searchMovie();
  }
});
