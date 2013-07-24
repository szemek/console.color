var COLORS = [
  'aqua',
  'black',
  'blue',
  'fuchsia',
  'gray',
  'gray',
  'green',
  'lime',
  'maroon',
  'navy',
  'olive',
  'purple',
  'red',
  'silver',
  'teal',
  'white',
  'yellow'
];

chrome.experimental.devtools.console.onMessageAdded.addListener(function(message) {
  var template = $('#console-message').text();

  var items = message.text.split(':', number_of_splits = 2);
  var color = items[0];
  var text = items[1];

  if(COLORS.indexOf(color) != -1) {
    var item = template.replace('{{text}}', text).replace('{{color}}', color);
    $('.console-group-messages').append(item);
  }
});
