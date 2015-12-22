$('head').append('<style>            \
  .list-card-header-count {          \
    background-color: #2980b9;       \
    border-radius: 4px;              \
    color: white;                    \
    float: right;                    \
    font-size: 85%;                  \
    padding: 0 4px;                  \
  }                                  \
</style>');

function computeCountHeaders(first) {
  $('.js-list-content').each(function(i, item) {
    var $item = $(item);
    var count = $item.find('.list-card-details').length;
    if (first) {
      $item.find('h2').append("<span class='list-card-header-count'>" + count + "</span>");
    } else {
      $item.find('h2 .list-card-header-count').text(count);
    }
  });
};

computeCountHeaders(true);
setInterval(computeCountHeaders, 1000);
