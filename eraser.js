// function Eraser() {}
//
// Eraser.prototype.elementInFocus = null;
//
// Eraser.prototype.init = function() {
//   this.bindHighlighters();
//   this.bindEraser();
// };
//
// Eraser.prototype.bindHighlighters = function() {
//   window.addEventListener('mouseover', this.emphasizer.bind(this));
//   window.addEventListener('mouseout', this.deEmphasizer.bind(this));
//   window.addEventListener('keydown', this.die.bind(this));
//
// };
//
// Eraser.prototype.emphasizer = function (event) {
//   event.target.style.outline = '1.5px solid black';
//   this.elementInFocus = event.target;
// };
//
// Eraser.prototype.deEmphasizer = function () {
//   event.target.style.outline = '';
// };
//
// Eraser.prototype.bindEraser = function() {
//   var _this = this;
//   window.addEventListener('click', function (event) {
//     event.preventDefault();
//     event.stopPropagation();
//     event.stopImmediatePropagation();
//     _this.makeTargetGoPoof(event);
//   });
// };
//
// Eraser.prototype.makeTargetGoPoof = function(event) {
//   event.target.style.display = 'none';
// };
//
// Eraser.prototype.die = function (event) {
//   if (event.keyCode === 27 || event.which === 27) {
//     window.removeEventListener('mouseover', this.emphasizer);
//     window.removeEventListener('mouseout', this.deEmphasizer);
//     this.elementInFocus.style.outline = '';
//     // debugger
//   }
// };
//
// window.addEventListener('load', function () {
//   new Eraser().init();
// });




// <============================BOOKMARKLET===================================>


javascript:(function() {
  var elementInFocus = null;
  window.addEventListener('click', eraser);
  window.addEventListener('mouseover', emphasizer);
  window.addEventListener('mouseout', deEmphasizer);
  window.addEventListener('keydown', existNoMore);
  function existNoMore(event) {
    if (event.keyCode === 27 || event.which === 27) {
      window.removeEventListener('click', eraser);
      window.removeEventListener('mouseover', emphasizer);
      window.removeEventListener('mouseout', deEmphasizer);
      window.removeEventListener('keydown', existNoMore);
      elementInFocus.style.outline = '';
    }
  }
  function emphasizer(event) {
    event.target.style.outline = '1.5px solid #e91010';
    elementInFocus = event.target;
  }
  function deEmphasizer(event) {
    event.target.style.outline = '';
  }
  function eraser(event) {
    if (event.target.tagName === 'A' || event.target.tagName === 'a') {
      debugger
      return false;
    }
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    event.target.style.display = 'none';
  }
})();
