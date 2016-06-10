# gitmarks

Bookmarks text selections as issues

### What

1. Browse and select text
1. Click bookmark
1. Add labels
1. Manage and Search bookmarks

### How

1. Fork https://github.com/petrosh/gitmarks
1. Make a commit to build gh-pages: <a href="../../edit/gh-pages/README.md">edit `README.md`</a>
1. Browse to `https://<yourusername>.github.io/gitmarks`
1. Drag the bookmarklet on your toolbar

### Bookmarks

Manage bookmarks in the repository <a href="../../issues">issues page</a>.

### Bookmarklet

Bookmarklets add one-click functions to a browser or web page.

**Bookmarks**

```js
javascript:(function(s){
  // ...
})();
```

**Function**

```js
function (s) {
  try {
    s = document.selection.createRange().text
  } catch(_) {
    s = document.getSelection()
  }
  location.href = "https://github.com/petrosh/gitmarks/issues/new?title=" +
  encodeURIComponent(document.title) +
  "&body=" + encodeURIComponent(location) +
  String.fromCharCode(37) + "0A---" + String.fromCharCode(37) + "0A" +
  encodeURIComponent(s)
}
```
