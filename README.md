### console.color

Chrome extension to display prefixed logs in color. Uses [chrome.experimental.* APIs](http://developer.chrome.com/extensions/experimental.html). Supports basic 17 colors.
### Manual installation

1. Clone this repo
2. Go to Tools -> Extensions in Google Chrome
3. Check Developer mode and click Load unpacked extension
4. Choose the cloned repo directory
5. Enable the experimental API in your browser. Go to [chrome://flags](chrome://flags), find "Experimental Extension APIs", click its "Enable" link, and restart Chrome.

### Demo

```html
<!doctype html>
<html>
  <head>
  </head>
  <body>
    <script>
      console.log("aqua: Hello world");
      console.log("black: Hello world");
      console.log("blue: Hello world");
      console.log("fuchsia: Hello world");
      console.log("gray: Hello world");
      console.log("gray: Hello world");
      console.log("green: Hello world");
      console.log("lime: Hello world");
      console.log("maroon: Hello world");
      console.log("navy: Hello world");
      console.log("olive: Hello world");
      console.log("purple: Hello world");
      console.log("red: Hello world");
      console.log("silver: Hello world");
      console.log("teal: Hello world");
      console.log("white: Hello world");
      console.log("yellow: Hello world");
    </script>
  </body>
</html>
```
