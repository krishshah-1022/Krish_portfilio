document.getElementById("theme-toggle").addEventListener("click", () => {
  const root = document.documentElement;
  const isLight = document.body.classList.toggle("light-mode");

  if (isLight) {
    root.style.setProperty('--bg', '#ffffff');
    root.style.setProperty('--bg-alt', '#f5f5f5');
    root.style.setProperty('--fg', '#000000');
    root.style.setProperty('--card-bg', '#e0e0e0');
    root.style.setProperty('--gray', '#444444');

    document.querySelector('.video-btn').style.border = '2px solid black';
    document.querySelector('.video-btn').style.color = 'black';

    // Light mode: card title color and remove underline
    document.querySelectorAll('.project-card h4').forEach(h => h.style.color = 'black');
    document.querySelectorAll('.project-card a').forEach(a => {
      a.style.setProperty('text-decoration', 'none', 'important');
    });

  } else {
    root.style.setProperty('--bg', '#0e0e0e');
    root.style.setProperty('--bg-alt', '#1c1f26');
    root.style.setProperty('--fg', '#ffffff');
    root.style.setProperty('--card-bg', '#2a2d35');
    root.style.setProperty('--gray', '#aaaaaa');

    document.querySelector('.video-btn').style.border = '2px solid white';
    document.querySelector('.video-btn').style.color = 'white';

    // Dark mode: card title color and remove underline
    document.querySelectorAll('.project-card h4').forEach(h => h.style.color = '#ffffff');
    document.querySelectorAll('.project-card a').forEach(a => {
      a.style.setProperty('text-decoration', 'none', 'important');
    });
  }
});
