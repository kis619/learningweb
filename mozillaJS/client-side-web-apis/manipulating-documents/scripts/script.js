const link = document.querySelector('a');

link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkParagraph = document.querySelector('p');
linkParagraph.appendChild(text);

const copy = linkParagraph.cloneNode(linkParagraph);
sect.appendChild(copy);
// sect.removeChild(copy);
copy.remove();

para.setAttribute('class', 'highlight');