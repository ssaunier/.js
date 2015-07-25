My collection of custom executed JS.

Works thanks to [defunkt/dotjs](https://github.com/defunkt/dotjs) and [dotjs Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/dotjs/)

## Mixpanel Avatar Replacer

In the [mixpanel.com.js](mixpanel.com.js) file, you'll find the code to replace Mixpanel default gravatar with your **own avatars** from **your** application. Just declare your Mixpanel projects in the file like this:

```js
var PROJECTS = [
  {
    id: '123456',  // Your mixpanel project id, look in the URL!
    pattern: function(distinctId) {
      return "http://yourapp.com/users/" + distinctId + "/avatar";
    }
  }
];
```

Your app (at `yourapp.com`) should respond to the `/users/:id/avatar` route (again that's the exemple) with an image or a redirection to an image.
