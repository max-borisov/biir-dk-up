// 'use strict';

$(function() {
  var team = consultants_json;
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
  var consultants = team.map(function(consultant) {
    return '<li><img src="images/faces/' + consultant.image + '" \
    alt="' + consultant.name + '" title="' + consultant.name + '" /></li>';
  }).join('');
  teamBox.html(consultants);
}
