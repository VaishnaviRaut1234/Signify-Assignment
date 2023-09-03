// script.js

function selectPlan(planId) {
    const plan = document.getElementById(planId);
    const selectedPlan = document.getElementById('selected-plan');
    
    // Clear the previously selected plan
    const previousSelectedPlan = selectedPlan.querySelector('.selected');
    if (previousSelectedPlan) {
        previousSelectedPlan.classList.remove('selected');
    }

    // Highlight the selected plan
    plan.classList.add('selected');
    
    // Display the selected plan in the designated area
    selectedPlan.innerHTML = `<p>You've selected: ${plan.querySelector('h2').textContent}</p>`;
}
