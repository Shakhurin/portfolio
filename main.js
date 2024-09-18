window.onscroll = () => {
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  //BUTTONS COLOR
  let active_home = document.querySelector('.active-home');
  let active_about = document.querySelector('.active-about');
  let active_projects = document.querySelector('.active-projects');

  //active-home
  if (window.scrollY > 700) {
    active_home.style.color = '#323232';
  } else if (window.scrollY < 700) {
    active_home.style.color = '#0088ff';
  }
  //active-about
  if (window.scrollY < 700 || window.scrollY > 1400) {
    active_about.style.color = '#262626';
  } else if (window.scrollY > 700 && window.scrollY < 1500) {
    active_about.style.color = '#0088ff';
  }
  //active-projects
  if (window.scrollY < 1400 || window.scrollY > 2200) {
    active_projects.style.color = '#262626';
  } else if (window.scrollY > 1400 && window.scrollY < 2200) {
    active_projects.style.color = '#0088ff';
  }
};
