// 'use strict';

$(function() {
  var team = teamJSON.BiirTeam.Employee;
  var teamBox = $('.team-box .team-list');
  renderTeam(team, teamBox);

  $('#search-f').keyup(function() {
    var name = this.value.trim();
    if (!name) return;
    searchTeam = searchTeamMembers(team, name);
    renderTeam(searchTeam, teamBox);
  });
})

var searchName = '';
function searchTeamMembers(team, name) {
  searchName = name;
  var fullName = '';
  return team.filter(function (item) {
    fullName = item.fname + ' ' + item.sname;
    return fullName.search(new RegExp(searchName, 'i')) >= 0
  })
}

function renderTeam(team, teamBox) {
  var image, alt;
  employees = team.map(function(employee) {
    image = employee.image.replace(/\s/g, '-');
    alt = employee.fname + ' ' + employee.sname;
    return '<li><img src="images/faces/' + image + '" alt="' + alt + '" /></li>';
  }).join('');
  teamBox.html(employees);
}
