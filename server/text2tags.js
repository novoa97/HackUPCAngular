function myFunction (tags) {
  const url = 'https://api.infojobs.net/api/1/dictionary/mandatory-fields?value='
  for (var i = 0, len = tags.length; i < len; i++) {
    fetch(url + tags[i])
      .then((res) => res.json())
      .then(function (myJson) {
        console.log(myJson)
      })
  }
}
myFunction(['java', 'python'])
