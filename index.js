const sliders = document.querySelectorAll('.text');
console.log(sliders.entries.length);
const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px 0px 0px"
}

const appearUp = new IntersectionObserver(function(entities, appearUp) {
    entities.forEach(entity => {
        if(!entity.isIntersecting) {
            return;
        }  else {
            entity.target.classList.add('fadeInUp');
            appearUp.unobserve(entity.target);
        }
    })
}, appearOptions);

sliders.forEach(u => {
    appearUp.observe(u);
});