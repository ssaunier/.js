function setHeaderStyle() {
  try {
    $('head').append('<style>                 \
      .list-card-header-count {               \
        background-color: #2980b9;            \
        border-radius: 4px;                   \
        color: white;                         \
        float: right;                         \
        font-size: 85%;                       \
        padding: 0 4px;                       \
      }                                       \
      .list-total-count, .list-almost-count { \
        background-color: rgba(0, 0, 0, 0.1); \
        border-radius: 4px;                   \
        color: #f2d600;                       \
        font-size: 12px;                      \
        padding: 6px;                         \
        position: relative;                   \
        top: 5px;                             \
      }                                       \
      .list-almost-count {                    \
        font-weight: bold;                    \
        margin-left: 1em;                     \
      }                                       \
    </style>');
  } catch(err) {}
}

function computeCountHeaders(first) {
  try {
    var total = 0;
    var almost = 0;
    $('.js-list-content').each(function(i, item) {
      var $item = $(item);
      var count = $item.find('.list-card-details').length;
      total += count;

      if ($item.find('.list-header-name').text().match(/^GO|^ACOMPTE|^CONTRAT/)) {
        almost += count;
      }

      if (first) {
        $item.find('h2').append("<span class='list-card-header-count'>" + count + "</span>");
      } else {
        $item.find('h2 .list-card-header-count').text(count);
      }
    });
    if (first) {
      $('.board-header-btns').append("<span class='list-total-count'>" + total + "</span>");
      $('.board-header-btns').append("<span class='list-almost-count'>" + almost + "</span>");
    } else {
      $('.board-header-btns').find('.list-total-count').text(total);
      $('.board-header-btns').find('.list-almost-count').text(almost);
    }
  } catch(err) {}
};

setTimeout(setHeaderStyle, 1);
setTimeout(function() { computeCountHeaders(true); }, 1);
setInterval(computeCountHeaders, 1000);
