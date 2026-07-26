const observer = new IntersectionObserver(entries =>
    {
    entries.forEach(entry => 
        {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.soft-skills li, .hard-skills li').forEach(el => 
    {
    el.classList.add('scroll-animate');
    observer.observe(el);
});