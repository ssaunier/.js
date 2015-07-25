(function() {
  var PROJECTS = [
    {
      id: '702849',
      pattern: function(distinctId) {
        return "http://kitt.lewagon.org/users/" + distinctId + "/avatar";
      }
    }
  ];

  function parseDistinctId(anchor) {
    return anchor.split("=")[1];
  }

  function replaceImage($element, project, id) {
    if (id) {
      $element.attr('src', project.pattern(id));
    }
  }

  PROJECTS.forEach(function(project) {
    if (window.location.pathname.indexOf(project.id) != -1) {
      $(document).ready(function() {
        // People list
        $('.avatar_cell').each(function(i, item) {
          var id = parseDistinctId($(item).find('a').attr('href'));
          replaceImage($(item).find('img'), project, id);
        });

        // User profile
        if ($('.avatar').length) {
          var id = parseDistinctId(window.location.hash);
          replaceImage($('.avatar img'), project, id);
        }
      });
    }
  });
})();

