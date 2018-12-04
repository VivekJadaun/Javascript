function Eraser() {}

Eraser.prototype.init = function() {
  this.elementHighlighter();
  this.bindEraser();
};

Eraser.prototype.elementHighlighter = function() {
  window.addEventListener('mouseover', function (event) {
    // console.log(event.type, event.target);
    event.target.style.border = '1.5px solid black';
  });

  window.addEventListener('mouseout', function (event) {
    // console.log(event.type, event.target);
    event.target.style.border = 'none';
  });
};

Eraser.prototype.bindEraser = function() {
  var _this = this;
  window.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    _this.makeTargetGoPoof(event);
  });
};

Eraser.prototype.makeTargetGoPoof = function(event) {
  event.target.style.display = 'none';
};


window.addEventListener('load', function () {
  new Eraser().init();
});




// <============================BOOKMARKLET===================================>


javascript:(function() {
        window.addEventListener('click', eraser);
  window.addEventListener('mouseover', highlighter);
  window.addEventListener('mouseout', highlighter);
  window.addEventListener('keydown', function(event) {
          if (event.keyCode === 27 || event.which === 27) {
      // console.log(event);
    window.removeEventListener('keydown', eraser); 
      window.removeEventListener('keydown', highlighter);
    }
  }); 
  function highlighter (event) {
    if (event.target.style.border === 'none') {
      event.target.style.border = '1.5px solid red';
    } else {
      event.target.style.border = 'none';
    }
  }
  function eraser(event) {
    event.preventDefault();
    event.stopPropagation();
    event.target.style.display = 'none';
  }
})();