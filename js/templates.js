var BUBULICIOUS = BUBULICIOUS||{};
BUBULICIOUS.TEMPLATES = {
  maskTemplate: function() {
    return '<div id="bubulicious-mask"></div>'
  },
  bubbleTemplate: function(content) {
    var markupBuilder = ['<div class="bubulicious-bubble">'];
    markupBuilder.push(content);
    markupBuilder.push('</div>');
    return markupBuilder.join();
  },
  indicatorTemplate: function(options) {
    var span = document.createElement('SPAN');
    span.className = options.classNames;
    if (options.skew) {
      span.setAttribute('style', '-webkit-transform: skew('+ options.skew +'deg); ' +
        'text-shadow: -'+ Math.round(options.skew/10) +'px '+ Math.round(options.skew/3) +'px '+
        Math.round(options.skew/3) +'px rgba(80,80,80,0.5), -'+ Math.round(options.skew/9) +'px '+
        Math.round(options.skew/5) +'px 1px rgba(255,255,255,0.5); ' +
        'left: '+ (options.left||0) + 'px;' +
        'top: '+ (options.top||0) + 'px;');
    }
//    span.style += options.injectedStyles;
    span.innerText = options.text||'';
    return span;
  }
};

function bubbleMe(el) {
  var span = document.createElement('SPAN');
  span.setAttribute('style', 'opacity:0');
  el.appendChild(span);
  var leftOffset = span.offsetLeft;
  var topOffset = span.offsetTop + span.offsetHeight;
  el.removeChild(span);

  var bbl = document.createElement('DIV');
  bbl.className = 'bubulicious-bubble';
  bbl.setAttribute('style', 'position: fixed; top: '+topOffset+'px; left:'+(leftOffset-400)+'px;');
  bbl.innerHTML = '<p>This is a very cool title</p>';
  document.body.appendChild(bbl);

  var arrow = BUBULICIOUS.TEMPLATES.indicatorTemplate({
    classNames: 'bubulicious-icon icon-undo2',
    text: '\ue967',
    skew: 15,
    left: leftOffset,
    top: topOffset - 60
  });
  document.body.appendChild(arrow);

  var mask = document.createElement('DIV');
  mask.id = 'bubulicious-mask';
  document.body.appendChild(mask);
}

document.body.addEventListener('click', function(e) {
  var currentNode = e.target;
  var found = false;
  while (currentNode !== document.body && !found) {
    if (e.target.classList.contains('bubulicious-bubble')) {
      found = true;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  console.log(found);
});


//document.body.appendChild(BUBULICIOUS.TEMPLATES.indicatorTemplate({
//  classNames: 'bubulicious-icon icon-undo2',
//  text: '\ue967',
//  skew: 15
//}));
//
//document.body.appendChild(BUBULICIOUS.TEMPLATES.indicatorTemplate({
//  classNames: 'bubulicious-icon icon-minus',
//  text: '\uea0b',
//  skew: 15
//}));
//
//document.body.appendChild(BUBULICIOUS.TEMPLATES.indicatorTemplate({
//  classNames: 'bubulicious-icon icon-arrow-up',
//  text: '\uea32',
//  skew: 15
//}));
//
//document.body.appendChild(BUBULICIOUS.TEMPLATES.indicatorTemplate({
//  classNames: 'bubulicious-icon icon-arrow-up2',
//  text: '\uea3a',
//  skew: 15
//}));
//
//document.body.appendChild(BUBULICIOUS.TEMPLATES.indicatorTemplate({
//  classNames: 'bubulicious-icon icon-circle-up',
//  text: '\uea41',
//  skew: 15
//}));
