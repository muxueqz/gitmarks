# gitmarks
Bookmarks text selections as issues

**Bookmarks**

```js
javascript:( ... function ... )()
```

**Function**

```js
function(s) {
  try {
    s = document.selection.createRange().text
  } catch (_) {
    s = document.getSelection()
  }
  location.href = "https://github.com/petrosh/gitmarks/issues/new?title=" + 
    encodeURIComponent(document.title) +
    "&body=[link](" + encodeURIComponent(location) + ")" +
    encodeURIComponent("\n---\n" + s)
}
```

**Compressor**

[javascript compressor](http://javascriptcompressor.com/)

