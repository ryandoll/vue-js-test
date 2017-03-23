
var templates = document.querySelectorAll('[data-type="vue-template"]'), i;
for (i = 0; i < templates.length; ++i) {
  document.body.appendChild(templates[i]);
}

var vueApp = new Vue({
  el: '#vueApp'
});
