chrome.experimental.devtools.console.onMessageAdded.addListener(function(message) {
  var template = $('#console-message').text();

  var items = message.text.split(':');
  var color = items[0];
  var text = items[1];

  var item = template.replace('{{text}}', text).replace('{{color}}', color);
  $('.console-group-messages').append(item);
});
