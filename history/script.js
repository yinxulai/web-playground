window.onpopstate = (state) => console.log(state)

function pushState() {
  history.pushState({ foo: 'bars' }, "page222", "bar.html")
}

