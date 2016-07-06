$(function() {
  $.get('http://cv.biir.dk/jobs/' + jobs_lang, function(responce) {
    if (responce.jobs && responce.jobs.length > 0) {
      var vacancies = '<div class="vacancies-table">{vacancies}</div>';
      var jobs_list = responce.jobs.map(function(job) {
        return job_block_template()
          .replace('{title}', job['title'].replace(/\n/g, '<br />'))
          .replace('{description}', job['description'].replace(/\n/g, '<br />'))
          .replace('{tasks}', job['tasks'].replace(/\n/g, '<br />'))
          .replace('{qualification}', job['qualification'].replace(/\n/g, '<br />'));
      }).join('')

      var vacancies = vacancies.replace('{vacancies}', jobs_table_header() + jobs_list);
      $('.vacancies-container').html(vacancies);
    } else {
      var no_jobs_message = 'No open Jobs positions yet';
      $('.vacancies-container').html('<h3 class="text-center">' + no_jobs_message + '</h3>');
    }
  });
});

function job_block_template() {
  return '<div class="l-holder">\
            <div class="l-33-fl">\
              <h4 class="blue">{title}</h4>\
              <p>{description}</p>\
            </div>\
            <div class="l-33-fl">{tasks}</div>\
            <div class="l-33-fl">{qualification}</div>\
          </div>';
}

function jobs_table_header() {
  return '<div class="l-holder">\
            <div class="l-33-fl"><h4>Job</h4></div>\
            <div class="l-33-fl"><h4>Tasks</h4></div>\
            <div class="l-33-fl"><h4>Qualification</h4></div>\
          </div>';
}
