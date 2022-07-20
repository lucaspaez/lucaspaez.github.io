const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'Angular',
    'Python', 'Java', 'Git',
    'TypeScript', 'Nodejs', 'Cisco',
    'Mikrotik', 'MySQL', 'Networking',
    'DevOps', 'Linux', 'Electrónica',
];

var tagCloud = TagCloud('.contenido-esfera', myTags,{

    // radius in px
    radius: 170,
  
    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'normal',
  
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
  
    // interact with cursor move on mouse out
    keep: true
  
  });