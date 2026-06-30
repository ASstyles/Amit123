(function () {
  "use strict";

  var grid = document.getElementById("resource-grid");
  var year = document.getElementById("year");
  var team = window.CIRCUIT_TEAM || [];

  function track(name, details) {
    if (typeof window.trackCircuitEvent === "function") window.trackCircuitEvent(name, details || {});
  }

  function resourceCard(member) {
    var avatar = member.photo
      ? '<span class="resource-avatar"><img src="' + member.photo + '" alt="" loading="lazy"></span>'
      : '<span class="prop-icon">' + window.propIcon(member.icon) + '</span>';

    return '<article class="resource-card">' +
      avatar +
      '<div class="resource-copy">' +
        '<p class="section-kicker">' + member.category + '</p>' +
        '<h2>' + member.resourceTitle + '</h2>' +
        '<p>' + member.shortIntro + '</p>' +
        '<div class="button-row">' +
          '<a class="button button-primary button-small" href="' + member.resourceFile + '" download data-track="resource_downloaded" data-member-id="' + member.id + '">Download PDF</a>' +
          '<a class="button button-ghost button-small" href="member.html?id=' + encodeURIComponent(member.id) + '" data-track="member_profile_selected" data-member-id="' + member.id + '">Meet ' + member.name.split(" ")[0] + '</a>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  if (grid) {
    grid.innerHTML = team.map(resourceCard).join("");
    grid.addEventListener("click", function (event) {
      var tracked = event.target.closest("[data-track]");
      if (!tracked) return;
      track(tracked.dataset.track, { member_id: tracked.dataset.memberId || "" });
    });
  }

  if (year) year.textContent = new Date().getFullYear();
})();
