function ScrollIndicator () {}

ScrollIndicator.prototype.element = null;

ScrollIndicator.prototype.init = function() {
  this.createHolder();
  this.bindScrollHandler();
  this.bindEraser();
};

ScrollIndicator.prototype.bindScrollHandler = function() {
  window.addEventListener('scroll', this.indicatePercentage.bind(this, event)); 
};

ScrollIndicator.prototype.bindEraser = function() {
  var _this = this;
  this.element.addEventListener('click', function(event) {
    _this.element.remove();
  });
};

ScrollIndicator.prototype.indicatePercentage = function(_, event) {
  this.element.textContent = this.calculateScrollPercentage();
};

ScrollIndicator.prototype.calculateScrollPercentage = function() {
  var current_height = (window.pageYOffset || window.scrollY) + document.documentElement.clientHeight; 
  var total_height = document.documentElement.scrollHeight;

  return String((current_height / total_height * 100).toPrecision(4)).concat(' %');
};

ScrollIndicator.prototype.createHolder = function(text) {
  this.element = document.createElement('span'); 
  this.element.dataset.id = 'scroll-indicator';
  this.element.style.position = 'fixed'; 
  this.element.style.top = '0'; 
  this.element.style.right = '0'; 
  this.element.style.backgroundColor = 'white'; 
  this.element.style.color = 'red';
  this.element.textContent = this.calculateScrollPercentage();
  document.body.appendChild(this.element);
};


window.addEventListener('load', function () {
  new ScrollIndicator().init();
});















// <=========================== BOOKMARKLET ===========================================>

javascript:(function() {
  var element = document.createElement('span'); 
  element.dataset.id = 'scroll-indicator'; 
  document.body.appendChild(element); 
  window.addEventListener('scroll', myFunction);
  element.addEventListener('click', function (e) {
    document.querySelectorAll('[data-id=\'scroll-indicator\']').forEach(function (element) {
      element.remove();
    });
  });
  function myFunction(e) {
    var element = document.querySelector('[data-id=\'scroll-indicator\']'); 
    if (element) {
      element.style.position = 'fixed'; 
      element.style.top = '0'; 
      element.style.right = '0';
      element.style.zIndex = '999999';
      element.style.cursor = 'pointer';
      element.style.backgroundColor = 'white'; 
      element.style.color = 'red';
      element.textContent=String(((window.pageYOffset + document.documentElement.clientHeight) / document.documentElement.scrollHeight * 100).toPrecision(4)).concat(' %');
    }
  }
})();