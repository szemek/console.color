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

  var items = message.text.split(':');
  var color = items[0];

  if(COLORS.indexOf(color) != -1) {
    var text = message.text.substr(message.text.indexOf(':') + 1);
    var item = template.replace('{{text}}', text).replace('{{color}}', color);
    $('.console-group-messages').append(item);
  }
});
