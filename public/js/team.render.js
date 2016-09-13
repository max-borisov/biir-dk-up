// 'use strict';

$(function() {
  var teamBox = $('.team-box .team-list');
  var url = 'http://cv.biir.dk/biir/members';
  $.get(url, function(team) {
    window.team = team;
    renderTeam(team, teamBox);
  })

  $('#search-f').keyup(function() {
    var name = this.value.trim();
    if (!name) return;
    searchTeam = searchTeamMembers(window.team, name);
    renderTeam(searchTeam, teamBox);
  });
})

var searchName = '';
function searchTeamMembers(team, name) {
  searchName = name;
  var fullName = '';
  return team.filter(function (item) {
    fullName = item.name;
    return fullName.search(new RegExp(searchName, 'i')) >= 0
  })
}

function renderTeam(team, teamBox) {
  var image, alt;
  var consultants = team.map(function(consultant) {
    return '<li><img src="' + consultant.photo + '" \
    alt="' + consultant.name + '" title="' + consultant.name + '" /></li>';
  }).join('');
  teamBox.html(consultants);
}
