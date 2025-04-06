export function tabs() {
    const categoryButtons = document.querySelectorAll('.blog__categories-link');
    const blogContents = document.querySelectorAll('.blog__content');

    if (!categoryButtons.length || !blogContents.length) return;

    function showCategory(category) {
        blogContents.forEach(content => {
            const match = content.getAttribute('data-content-category') === category;
            content.style.display = match ? 'flex' : 'none';
        });
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('blog__categories-link--active'));
            button.classList.add('blog__categories-link--active');

            const selectedCategory = button.getAttribute('data-category');
            showCategory(selectedCategory);
        });
    });

    const initialActive = document.querySelector('.blog__categories-link--active');
    if (initialActive) {
        showCategory(initialActive.getAttribute('data-category'));
    }
}
