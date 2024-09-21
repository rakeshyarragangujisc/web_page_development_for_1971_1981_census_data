document.addEventListener("DOMContentLoaded", function() {
    // Get the sidebar toggle button
    const sidebarToggle = document.getElementById("sidebarToggle");

    // Get the sidebar menu
    const sidebarMenu = document.getElementById("sidebarMenu");

    // Add click event listener to the button
    sidebarToggle.addEventListener("click", function() {
        // Check if the sidebar is already visible
        if (sidebarMenu.style.display === "block") {
            // Hide the sidebar
            sidebarMenu.style.display = "none";
        } else {
            // Show the sidebar
            sidebarMenu.style.display = "block";
        }
    });

    // Ensure the sidebar is hidden by default on page load
    sidebarMenu.style.display = "none";
});


