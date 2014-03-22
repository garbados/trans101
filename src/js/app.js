function get_lang () {
  return location.search.slice(1) || 'en';
}

function load_resources (done, language) {
  language = language || get_lang();
  var url = 'docs/' + language + '.json';
  $.ajax({
    url: url,
    method: 'GET',
    success: done,
    error: load_resources.bind(null, done, 'en')
  });
}

function render_template (contents) {
  $('#title').html(JST['templates/title.hbs'](contents));
  $('#contents').html(JST['templates/doc.hbs'](contents));
  $('#toc').tocify({
    hashGenerator: function (text, elem) {
      return elem.attr('id') || text;
    }
  }).data('toc-tocify');

  scrollTo(document.getElementById(location.hash), 0);
}

load_resources(render_template);