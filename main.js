  document.addEventListener('DOMContentLoaded', function() {

    const date = new Date();
    let year = date.getFullYear();
    document.getElementById("date").innerHTML = year;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    });
    const targets = document.querySelectorAll('.heading');
    targets.forEach(target => observer.observe(target));
    const targettxt = document.getElementById('start-text');
    observer.observe(targettxt);
  });