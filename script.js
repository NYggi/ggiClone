document.addEventListener("DOMContentLoaded", function () {
    // Example: Product Slider
    const productCards = document.querySelectorAll('.product-card');
    let currentIndex = 0;

    function showProduct(index) {
        productCards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % productCards.length;
        showProduct(currentIndex);
    }, 5000);
});
