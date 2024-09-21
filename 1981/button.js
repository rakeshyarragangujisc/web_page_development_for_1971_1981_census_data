document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('#sidebarToggle');

    toggleButton.addEventListener('click', function() {
        // Toggle sidebar visibility
        if (sidebar.style.display === "none" || sidebar.style.display === "") {
            sidebar.style.display = "block";
        } else {
            sidebar.style.display = "none";
        }
    });

    // Ensure sidebar is hidden initially
    sidebar.style.display = "none";
});
