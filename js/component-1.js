(function(Vue){
  var globalData = { counter: 0 }
  Vue.component('component-1', {
    template: '#component-1',
    data: function () {
      return {
        globalCounter:globalData,
        scopedCounter:0
      }
    }
  });
})(window.Vue)
