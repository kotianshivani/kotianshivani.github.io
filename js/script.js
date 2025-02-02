function showSection(sectionId) {
    'use strict';
    
    // Get the selected section and button
    const selectedSection = document.getElementById(sectionId);
    const selectedButton = document.querySelector(`.nav-button[onclick*="${sectionId}"]`);
    
    // If section is already visible, hide it
    if (selectedSection.style.display === 'block') {
        selectedSection.style.display = 'none';
        selectedSection.classList.remove('active');
        selectedButton.classList.remove('active');
        return;
    }
    
    // Hide all sections and remove active states
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
        section.style.display = 'none';
        section.classList.remove('active');
    });
    
    const buttons = document.querySelectorAll('.nav-button');
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
    
    // Show the selected section
    selectedSection.style.display = 'block';
    selectedSection.classList.add('active');
    selectedButton.classList.add('active');
} 