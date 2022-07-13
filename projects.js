const projectTiles = document.querySelectorAll('.project');

const appearOptions = {
    threshold: 0.4
}
const appearToLeft = new IntersectionObserver(function(entities, appearToLeft) {
    entities.forEach(entity => {
        if(!entity.isIntersecting) {
            return;
        } else {
            entity.target.classList.add('appearLeft');
            appearToLeft.unobserve(entity.target);
        }
    })
}, appearOptions);

projectTiles.forEach(pt => {
    appearToLeft.observe(pt);
})