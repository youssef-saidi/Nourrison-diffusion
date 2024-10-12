"use strict";
// author: Seif Gharres
window.addEventListener("DOMContentLoaded", () => {
    const handleSwiperActions = (swiper) => {
        const container = swiper.querySelector(".swiper-container");
        const leftBtn = swiper.querySelector(".swiper-left-btn");
        const rightBtn = swiper.querySelector(".swiper-right-btn");
        if (container && leftBtn && rightBtn) {
            const swipeLeft = () => {
                const { clientWidth, scrollLeft, scrollWidth } = container;
                let newScrollTo = 0;
                // increment newScrollTo by clientWidth until get previous scrollToWidth
                while (newScrollTo < scrollLeft - clientWidth) {
                    newScrollTo += clientWidth;
                }
                container.scrollTo(newScrollTo, 0);
                disableAndEnableBtns({
                    scrollLeft: newScrollTo,
                    scrollWidth,
                    clientWidth,
                });
            };
            const swipeRight = () => {
                const { clientWidth, scrollLeft, scrollWidth } = container;
                let newScrollTo = 0;
                // increment newScrollTo by clientWidth until get next scrollToWidth
                while (newScrollTo <= scrollLeft) {
                    newScrollTo += clientWidth;
                }
                container.scrollTo(newScrollTo, 0);
                disableAndEnableBtns({
                    scrollLeft: newScrollTo,
                    scrollWidth,
                    clientWidth,
                });
            };
            const disableAndEnableBtns = ({ scrollLeft, scrollWidth, clientWidth } /* = container */ ) => {
                if (clientWidth === scrollWidth) {
                    // container should not be a swiper
                    leftBtn.remove();
                    rightBtn.remove();
                } else if (scrollLeft <= 0) {
                    // start
                    leftBtn.disabled = true;
                    rightBtn.disabled = false;
                } else if (scrollLeft + clientWidth >= scrollWidth) {
                    // end
                    leftBtn.disabled = false;
                    rightBtn.disabled = true;
                } else {
                    // middle
                    leftBtn.disabled = false;
                    rightBtn.disabled = false;
                }
            };
            leftBtn.addEventListener("click", swipeLeft);
            rightBtn.addEventListener("click", swipeRight);
            container.addEventListener("scroll", () => disableAndEnableBtns(container));
            disableAndEnableBtns(container);
        }

    };
    // add swipers actions
    const swipers = document.querySelectorAll(".swiper");
    swipers.forEach((swiper) => handleSwiperActions(swiper));





});