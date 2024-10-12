"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const handleProductGalleryActions = (product) => {
        const gallery = document.getElementById(product.dataset.galleryId),
            openGalleryBtn = product.querySelector(".open-gallery-btn"),
            closeGalleryBtn = gallery && gallery.querySelector(".close-gallery-btn");
        if (gallery && openGalleryBtn && closeGalleryBtn) {
            // functions
            const openGallery = () => {
                gallery.classList.add("show");
                document.documentElement.style.overflowY = "hidden";
            };
            const closeGallery = () => {
                gallery.classList.remove("show");
                document.documentElement.style.overflowY = "auto";

            };
            // elements events
            openGalleryBtn.addEventListener("click", openGallery);
            closeGalleryBtn.addEventListener("click", closeGallery);
        }
    };
    // add products with gallery actions
    const products = document.querySelectorAll("[data-gallery-id]");
    products.forEach((product) => handleProductGalleryActions(product));
});