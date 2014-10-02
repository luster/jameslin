
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
