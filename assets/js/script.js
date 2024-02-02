
// Animation Gif 
function handleClick(event) {
  var img = event.target;
  img.src = img.src;
}

var elementIds = ['insertionGif', 'selectionGif', 'bubbleGif', 'shellGif', 'mergeGif', 'quickGif'];

elementIds.forEach(function (id) {
  document.getElementById(id).addEventListener('click', handleClick);
});



// Highlight certain number 
function applyHighlighting(selector, highlightNumber) {
  var highlightElements = document.querySelectorAll(selector);

  highlightElements.forEach(function (element) {
    var bubbleContent = element.innerHTML;

    bubbleContent = bubbleContent.replace(/\d+/g, function (match) {
      if (match === highlightNumber.toString()) {
        return '<span class="highlight">' + match + '</span>';
      } else {
        return '<span>' + match + '</span>';
      }
    });

    element.innerHTML = bubbleContent;
  });
}

applyHighlighting('.highlight-12', 12);
applyHighlighting('.highlight-3', 3);
applyHighlighting('.highlight-7', 7);
applyHighlighting('.highlight-10', 10);
applyHighlighting('.highlight-4', 4);

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}