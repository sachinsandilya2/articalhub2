document.addEventListener('DOMContentLoaded', () => {
    function addArticle() {
        console.log('Add Article button clicked');
        // Existing code...
    }

    console.log('Script loaded');
    document.querySelectorAll('.add-article-btn').forEach(button => {
        button.addEventListener('click', addArticle);
    });
});
