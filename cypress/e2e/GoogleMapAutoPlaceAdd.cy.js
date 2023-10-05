describe('Login to Google and Go to Google Maps', () => {
  it('should log into Google', () => {
    cy.viewport(1920, 1080)
    // Visit the Google login page
    cy.visit('https://accounts.google.com');

    // Enter your email and click "Next" (replace with your actual email)
    cy.get('input[type="email"]').type('avishek@ibos.io{enter}');

    // Enter your password and click "Next" (replace with your actual password)
    cy.get('input[type="password"]').type('aVishek@143{enter}');

    // In your Cypress support file (e.g., commands.js)
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Handle the uncaught exception here
      return false; // Prevent Cypress from failing the test
    });

    cy.origin('https://www.google.com', () => {
      // Visit Google Maps
      cy.visit('https://www.google.com/maps');

      // Type your search query into the Google Maps search bar
      cy.get('#searchboxinput').type('23.7525255,90.3816032{enter}');
      cy.wait(10000);
      cy.contains('Add a missing place').click({force:true});
      // Find the input field using attributes
      //cy.get('input[aria-label="Place name"]').click({force:true}).type('Dhaka');
      //cy.get('#i5').type('Dhaka').click({force:true}).type('Dhaka');
      //cy.get('input[id="i5"]').type('Dhaka');
      //cy.get('input[jsname="YPqjbf"]').type('Dhaka');
      //cy.get('input[type="text"]').type('Dhaka');
  
});
});
});