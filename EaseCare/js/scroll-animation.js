/* js/scroll-animation.js */

document.addEventListener("DOMContentLoaded", function () {
    // Get the scroll section element
    var scrollSection = document.querySelector(".scroll-section");

    // Add a scroll event listener with debouncing
    var isScrolling = false;

    window.addEventListener("scroll", function () {
        if (!isScrolling) {
            window.requestAnimationFrame(function () {
                // Calculate the position of the scroll section
                var scrollSectionPosition = scrollSection.getBoundingClientRect().top;

                // If the scroll section is in the viewport, add the 'show' class
                if (scrollSectionPosition < window.innerHeight / 1.5) {
                    scrollSection.classList.add("show");
                }

                // Reset the flag after the animation frame is processed
                isScrolling = false;
            });
            isScrolling = true;
        }
    });
});
