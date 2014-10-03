var isMobile = window.isMobile();

// header text
var headerHtml = '';


// append the proper table
var tableHtml = '';
tableHtml += '<table><tr><td><a id="nav-home" onClick="nav(\'landing\');">Home</a></td>';
tableHtml += '<td><a id="nav-about" onClick="nav(\'about\');">About</a></td>';

if (isMobile) {
    // break row
    tableHtml += '</tr></table><table><tr>';
}

tableHtml += '<td><a id="nav-works" onClick="nav(\'works\');">Works</a></td>';
tableHtml += '<td><a id="nav-gear" onClick="nav(\'gear\');">Gear</a></td>';
tableHtml += '<td><a id="nav-contact" onClick="nav(\'contact\');">Contact</a></td></tr></table>';

$('#nav').append(tableHtml);


// adjust the styling accordingly
var cssText = 'opacity:0.5;cursor:default;';
var section = document.getElementById('landing');
var navSection = document.getElementById('nav-home');
section.style.display = 'block';
navSection.style.cssText = cssText;

function nav(id) {
  var e = document.getElementById(id);
  if (e === section)
    return;

  section.style.display = 'none';
  navSection.style.cssText = 'cursor:pointer;';

  section = e;

  navSection = document.getElementById('nav-'+id);
  section.style.display = 'block';

  if (id === 'landing')
      navSection = document.getElementById('nav-home');

  navSection.style.cssText = cssText;
  return;
}
