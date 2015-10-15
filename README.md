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
    document.title +
    "&body=[link](" + location + ")" +
    encodeURIComponent("\n---\n" + s)
}
```

**Compressor**

[javascript compressor](http://javascriptcompressor.com/)

