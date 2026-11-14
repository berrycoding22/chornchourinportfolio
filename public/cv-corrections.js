(() => {
  const setText = (selector, text) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = text;
  };

  document.querySelector('meta[name="description"]')?.setAttribute(
    'content',
    'Chorn Chourin — IT Support & Computer Teacher at Our Teacher School, and freelance Graphic Designer & Video Editor in Phnom Penh, Cambodia.',
  );

  setText('.intro', "HI, I'M CHORN CHOURIN — FROM CAMBODIA");
  const roles = document.querySelectorAll('.role');
  ['IT Support', 'Computer Teacher', 'Graphic Designer & Video Editor', 'Social Media Manager', 'Web Developer'].forEach((title, index) => {
    const role = roles[index];
    if (role) role.lastChild.nodeValue = title;
  });

  const heroCopy = document.querySelector('.hero-copy');
  if (heroCopy?.firstChild) {
    heroCopy.firstChild.nodeValue = 'Providing IT support, teaching computer skills, and creating visual content for education. ';
  }

  setText('.portrait-meta strong', 'CHORN CHOURIN');
  document.querySelectorAll('.portrait-meta span').forEach((item, index) => {
    item.textContent = index === 0 ? 'IT SUPPORT · COMPUTER TEACHER' : 'CAMBODIA';
  });
  const seal = document.querySelector('.orbit-seal');
  if (seal) {
    seal.setAttribute('aria-label', 'IT Support, Computer Teacher, Graphic Designer and Video Editor');
    seal.querySelector('textPath').textContent = 'IT SUPPORT · COMPUTER TEACHER · GRAPHIC DESIGNER · VIDEO EDITOR · ';
  }

  const aboutParagraphs = document.querySelectorAll('.about-copy p');
  if (aboutParagraphs.length >= 3) {
    aboutParagraphs[0].textContent = 'Hi, I’m CHORN CHOURIN — an IT Support & Computer Teacher at Our Teacher School in Phnom Penh, Cambodia.';
    aboutParagraphs[1].textContent = 'I provide computer and IT support, teach computer skills, and work with programming, networking, graphic design, photography, and video editing.';
    aboutParagraphs[2].textContent = 'Bachelor’s Degree in Computer Science, Royal University of Phnom Penh (2022–2025).';
  }

  setText('.work-intro p', 'Professional experience, education work, technical support, creative media, and social media management.');
  const work = [
    {
      tag: 'EDUCATION · IT SUPPORT', art: 'OUR<br>TEACHER<span>SCHOOL</span>', title: 'Our Teacher School',
      subtitle: 'IT Support & Computer Teacher · 2023–Present',
      description: 'Providing computer and IT support and teaching computer skills at Our Teacher School in Phnom Penh.',
      skills: ['IT Support', 'Computer Teaching', 'Education'],
    },
    {
      tag: 'IT · SUPPORT', art: 'IT<span>SUPPORT</span>', title: 'IT Support & Computer Services',
      subtitle: 'Systems, software, printers & networking',
      description: 'Installing and configuring Windows and applications; troubleshooting computer, printer, and network issues; supporting Microsoft Office users.',
      skills: ['Windows', 'Networking', 'Microsoft Office'],
    },
    {
      tag: 'FREELANCE · CREATIVE', art: 'CREATIVE<span>MEDIA</span>', title: 'Graphic Design & Video Editing',
      subtitle: 'Freelancer · 2024–Present',
      description: 'Designing graphics for social media and marketing materials, and editing videos with CapCut PC for freelance clients.',
      skills: ['Photoshop', 'Canva', 'CapCut PC'],
    },
    {
      tag: 'WEB · PROGRAMMING', art: 'WEB<span>PROGRAMMING</span>', title: 'Web & Programming Skills',
      subtitle: 'Technical foundations and ongoing learning',
      description: 'Working with HTML5, CSS3, JavaScript, Bootstrap and Laravel alongside C, C++, C#, Java and Python.',
      skills: ['HTML5 & CSS3', 'JavaScript', 'Laravel'],
    },
    {
      tag: 'EDUCATION · MEDIA', art: 'SCHOOL<span>MEDIA</span>', title: 'School Media & Event Content',
      subtitle: 'Photography, video and visual materials',
      description: 'Photographing school activities, editing videos for announcements and social media, and designing posters, banners, and promotional materials.',
      skills: ['Photography', 'Video Editing', 'Graphic Design'],
    },
  ];

  document.querySelectorAll('.rail-card').forEach((card, index) => {
    const item = work[index];
    if (!item) return;
    setText(`.rail-card:nth-of-type(${index + 1}) .project-tag`, item.tag);
    const art = card.querySelector('.project-art');
    if (art) art.innerHTML = item.art;
    const heading = card.querySelector('h3');
    if (heading) heading.innerHTML = `<small>${String(index + 1).padStart(2, '0')}</small>${item.title}`;
    setText(`.rail-card:nth-of-type(${index + 1}) em`, item.subtitle);
    setText(`.rail-card:nth-of-type(${index + 1}) > p`, item.description);
    const pills = card.querySelector('.pills');
    if (pills) pills.innerHTML = item.skills.map(skill => `<span>${skill}</span>`).join('');
  });
  const behanceUrl = 'https://www.behance.net/chornchourin';
  const designCard = document.querySelectorAll('.rail-card')[2];
  if (designCard) {
    const designLink = designCard.querySelector('.rail-visual');
    if (designLink) {
      designLink.href = behanceUrl;
      designLink.target = '_blank';
      designLink.rel = 'noopener noreferrer';
      designLink.removeAttribute('data-project');
      designLink.setAttribute('aria-label', 'View Chorn Chourin design work on Behance');
      const visit = designLink.querySelector('.visit');
      if (visit) visit.innerHTML = 'VIEW<br>BEHANCE';
      designLink.classList.add('behance-card');
      const art = designLink.querySelector('.project-art');
      if (art) art.innerHTML = '<img class="behance-cover" src="images/behance-design-cover.png" alt="Chorn Chourin Behance design portfolio" loading="lazy">';
      designLink.addEventListener('click', event => event.stopImmediatePropagation(), true);
    }
  }

  const socialCard = document.querySelectorAll('.rail-card')[4];
  if (socialCard) {
    const visual = socialCard.querySelector('.rail-visual');
    visual?.classList.remove('code');
    visual?.classList.add('social-media');
    setText('.rail-card:nth-of-type(5) .project-tag', 'SOCIAL MEDIA · CAMPAIGNS');
    const art = socialCard.querySelector('.project-art');
    if (art) art.innerHTML = '<img class="social-boost-cover" src="images/social-media-boost.png" alt="Stylized social media campaign and page boost visual" loading="lazy">';
    const heading = socialCard.querySelector('h3');
    if (heading) heading.innerHTML = '<small>05</small>Social Media Management';
    setText('.rail-card:nth-of-type(5) em', 'Facebook, TikTok & YouTube');
    setText('.rail-card:nth-of-type(5) > p', 'Creating and managing Facebook Pages, planning content, preparing Facebook Page and post boost campaigns, and managing TikTok and YouTube channels.');
    const pills = socialCard.querySelector('.pills');
    if (pills) pills.innerHTML = '<span>Facebook Page</span><span>Page Boosting</span><span>TikTok & YouTube</span>';
  }
  setText('#project-detail .muted', 'This portfolio highlights professional experience and technical skills from my CV.');

  const skillCards = document.querySelectorAll('.skill-card');
  const skillContent = [
    ['Web & Programming', 'Web foundations and programming languages listed in my CV.', ['HTML5, CSS3 & JavaScript', 'C, C++, C#, Java & Python', 'Bootstrap & Laravel']],
    ['IT Support & Systems', 'Practical support for everyday systems, software, and networks.', ['Windows & Microsoft Office', 'Cisco, TCP/IP & Networking', 'Linux & Windows Server']],
    ['Creative & Social Media', 'Content, visual design, and channel management for school and freelance work.', ['Facebook Page Management & Boosting', 'TikTok & YouTube Management', 'Graphic Design & CapCut Editing']],
  ];
  skillCards.forEach((card, index) => {
    const item = skillContent[index];
    if (!item) return;
    setText(`.skill-card:nth-of-type(${index + 1}) h3`, item[0]);
    setText(`.skill-card:nth-of-type(${index + 1}) > p`, item[1]);
    card.querySelectorAll('.bar-row b').forEach((label, labelIndex) => {
      label.textContent = item[2][labelIndex] || label.textContent;
    });
  });

  const tickerLabels = [
    ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Laravel', 'Python', 'C / C++', 'C# / Java'],
    ['Facebook Page', 'Page Boosting', 'TikTok', 'YouTube', 'Content Planning', 'Graphic Design', 'CapCut PC'],
  ];
  document.querySelectorAll('.ticker-line').forEach((line, lineIndex) => {
    const labels = tickerLabels[lineIndex];
    if (!labels) return;
    line.querySelectorAll('.ticker-group').forEach(group => {
      group.querySelectorAll('.chip').forEach((chip, index) => {
        const label = chip.querySelector('span:last-child');
        if (label && labels[index]) label.textContent = labels[index];
        chip.querySelector('.tech-logo')?.remove();
      });
    });
  });

  const jobs = [
    ['2023–PRESENT', 'IT Support & Computer Teacher', 'Our Teacher School · Phnom Penh', 'Providing computer and IT support to teachers and staff, maintaining computers and printers, and teaching computer skills.', ['IT Support', 'Computer Teaching', 'Systems']],
    ['2024–PRESENT', 'Freelance Graphic Designer & Video Editor', 'Freelance / Remote · Phnom Penh', 'Designing digital graphics and marketing content, and editing videos with CapCut PC for freelance clients.', ['Graphic Design', 'Video Editing', 'CapCut PC']],
    ['2022–2025', 'Bachelor’s Degree in Computer Science', 'Royal University of Phnom Penh (RUPP)', 'Completed a Bachelor’s Degree in Computer Science at the Royal University of Phnom Penh.', ['Computer Science', 'Programming', 'RUPP']],
  ];
  document.querySelectorAll('.job').forEach((job, index) => {
    const item = jobs[index];
    if (!item) return;
    setText(`.job:nth-of-type(${index + 1}) time`, item[0]);
    setText(`.job:nth-of-type(${index + 1}) h3`, item[1]);
    setText(`.job:nth-of-type(${index + 1}) .place`, item[2]);
    setText(`.job:nth-of-type(${index + 1}) > p:not(.place)`, item[3]);
    const pills = job.querySelector('.pills');
    if (pills) pills.innerHTML = item[4].map(skill => `<span>${skill}</span>`).join('');
  });

  const serviceDescriptions = [
    'Computer, software, printer, network, and Microsoft Office support for day-to-day work.',
    'Patient computer learning and practical technology guidance for students and everyday users.',
    'HTML5, CSS3, JavaScript, Bootstrap, and Laravel foundations for web work.',
    'Graphic design, photography, and CapCut PC video editing for school and freelance content.',
  ];
  document.querySelectorAll('.service-row p').forEach((description, index) => {
    description.textContent = serviceDescriptions[index] || description.textContent;
  });
  const socialService = document.querySelectorAll('.service-row')[3];
  if (socialService) {
    setText('.service-row:nth-of-type(4) h3', 'Creative & Social Media');
    setText('.service-row:nth-of-type(4) p', 'Facebook Page setup and management, content planning, Page/Post boosting, and TikTok and YouTube channel management.');
  }

  const serviceOptions = document.querySelector('.service-options');
  if (serviceOptions && !serviceOptions.querySelector('input[value="Social Media Management"]')) {
    const label = document.createElement('label');
    label.innerHTML = '<input type="checkbox" name="service" value="Social Media Management"><span>Social media management</span>';
    serviceOptions.append(label);
  }
  const staticTicker = document.querySelector('.ticker');
  if (staticTicker) {
    staticTicker.innerHTML = ['Facebook Page', 'Content Planning', 'Page Boosting', 'TikTok Management', 'YouTube Management', 'Social Media Content']
      .map(skill => '<span class="chip">' + skill + '</span>').join('');
  }
  const elsewhere = document.querySelector('.footer-elsewhere');
  if (elsewhere && !elsewhere.querySelector('[href="https://www.behance.net/chornchourin"]')) {
    const link = document.createElement('a');
    link.href = behanceUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Behance';
    elsewhere.insertBefore(link, elsewhere.firstElementChild?.nextElementSibling || null);
  }
  setText('.footer-identity p', 'Providing IT support, teaching computer skills, and creating visual content for education.');
})();
