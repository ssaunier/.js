(function() {
  var PROJECTS = [
    {
      id: '702849',
      pattern: function(distinctId) {
        return "http://kitt.lewagon.org/users/" + distinctId + "/avatar";
      },
      parseDistinctId: function(item) {
        if (typeof item === "undefined") {
          return window.location.hash.split("=")[1];
        } else {
          var anchor = $(item).find('a').attr('href')
          return anchor.split("=")[1];
        }
      }
    },
    {
      id: '633295',
      pattern: function(distinctId) {
        return "https://ondemand.lewagon.org/users/" + distinctId + "/avatar";
      },
      parseDistinctId: function(item) {
        if (typeof item === "undefined") {
          return $('[title=id]').parents('.mp_editable_property').find('.value_contents').text();
        } else {
          return $(item).parent().find('.prop_value_cell.1 div').text();
        }
      }
    }
  ];

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
          var id = project.parseDistinctId(item);
          replaceImage($(item).find('img'), project, id);
        });

        // User profile
        if ($('.avatar').length) {
          var id = project.parseDistinctId();
          replaceImage($('.avatar img'), project, id);
        }
      });
    }
  });
})();

