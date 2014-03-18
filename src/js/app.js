function get_lang () {
  return location.search.slice(1);
}

function load_resources (done, language) {
  language = language || get_lang();
  var url = '/docs/' + language + '.html';
  $.ajax({
    url: url,
    method: 'GET',
    success: done,
    error: load_resources(done, 'en')
  });
}

function render_template (contents) {
  $('#contents').html(contents);
  $('#toc').tocify({

  }).data('toc-tocify');

  scrollTo(document.getElementById(location.hash), 0);
}

load_resources(render_template);