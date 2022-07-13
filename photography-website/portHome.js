const slidersLeft = document.querySelectorAll('.info-left');
const slidersRight = document.querySelectorAll('.info-right');
const slidersUp = document.querySelectorAll('.slideup')

window.onbeforeunload = function() {  //function forces page to scroll to top when refreshing the page
    window.scrollTo(0, 0);
}

const appearOptions = {
    threshold: 0.75, //ensures that observer doesn't act open anything UNTIL element is fully within the page
    //rootMargin:  (this would allow you to adjust how far you need to scroll on top of it already needing to be within the screen bounds)
    rootMargin: "0px 0px -100px 0px"
};
const appearOptionsSmallElement = {
    threshold: .25
};

//----ADDS THE CLASSES WITH THE APPROPRIATE ANIMATIONS ONCE THE ELEMENTS INTERSECT THE VIEW WINDOW----//

const appearOnScreenLeft = new IntersectionObserver(function(entries, appearOnScreenLeft) {  //function allows you to attatch an observer to any element by doing 'element.observe(name)'
    entries.forEach(entry => {  //going through each entry that the observer has recognized
        if(!entry.isIntersecting) {  
            return;  //prevents classes from being added to elements so that intersections don't load elements on page load; allows us to see the animations we put in place at the proper time
        } else {
            entry.target.classList.add('appearLeft');   //adds a class that will apply the appropriate animation to the right element
            appearOnScreenLeft.unobserve(entry.target);  //tells page to stop looking once something has done its job
        }
    })
}, appearOptions);

const appearOnScreenRight = new IntersectionObserver(function(entries, appearOnScreenRight) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appearRight');
            appearOnScreenRight.unobserve(entry.target);
        }
    })
}, appearOptions);

const appearUp = new IntersectionObserver(function(entries, appearUp) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }  else {
            entry.target.classList.add('appearUp');
            appearUp.unobserve(entry.target);
        }
    })
}, appearOptionsSmallElement);

//----APPLYING OBSERVERS TO EACH ELEMENT UNDER SPECIFIED CLASSES----//

slidersLeft.forEach(sl => {             //collection of elements that will be used to add the appropriate classes
    appearOnScreenLeft.observe(sl);
})

slidersRight.forEach(sr => {
    appearOnScreenRight.observe(sr);    //collection of elements that will be used to add the appropriate classes
})

slidersUp.forEach(su => {
    appearUp.observe(su);
})