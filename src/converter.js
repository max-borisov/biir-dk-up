var fs = require('fs');
var result_filename = 'public/js/team.js_new';

var write_to_file = function (data, filename, fs) {
  fs.writeFile(filename, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('data > ' + filename);
  });
}

var reorder_consultants = function(consultants, name) {
  consultants.forEach(function(element, index, consultants) {
    if (element.name.indexOf(name) != -1) {
      consultants.splice(index, 1);
      consultants.unshift(element);
    }
  });
}

// var path = fs.realpathSync(__dirname + '/../../TeamSite/images/Faces');
var path = fs.realpathSync('public/images/faces');
var consultant_images = fs.readdirSync(path);
var consultants = consultant_images.map(function(consultant) {
  var obj = {};
  obj['name'] = consultant.replace('.png', '');
  obj['image'] = consultant;
  return obj;
});

reorder_consultants(consultants, 'Nicole Lajgaard');
reorder_consultants(consultants, 'Thomas Sillesen');
reorder_consultants(consultants, 'Esben Eskerod Ifversen');
reorder_consultants(consultants, 'Jonas Bojer Christensen');

consultants_json_string = JSON.stringify(consultants, null, 4);
consultants_json_string = 'var consultants_json = ' + consultants_json_string;
write_to_file(consultants_json_string, result_filename, fs);
