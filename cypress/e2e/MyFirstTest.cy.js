// describe('First Phase', () => {


//     before(() => {
//         cy.visit('https://hitech.ibos.io');
//     });
//     it('Go_To', () => {
//         // Enter username and password
//         cy.log('Before selecting #basic_email');
//         //cy.get("#basic_email").eq(0).click({force:true}).type("demo@ibos.io");
//         cy.get('#basic_email', { timeout: 10000 }).should('exist').type('demo@ibos.io');
//         cy.log('After selecting #basic_email');
//         cy.get("#basic_password").eq(0).click({force:true}).type("teamRMG");
//         // Click the submit button
//         cy.get("button[type='submit']").click({force:true});
//         cy.wait(2000);
        
//         })
//     })


describe('2nd Phase', () => {


    before(() => {
                cy.visit('https://hitech.ibos.io/Merchandising/Dashboard');
    });
    
    it('Go_To', () => {

        cy.viewport(1920, 1080)

        // Generate a random number between min (inclusive) and max (exclusive)
        function getRandomNumber1(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
        }
        const randomNumber1 = getRandomNumber1(1, 100);

        // Generate a random number between min (inclusive) and max (exclusive)
        function getRandomNumber2(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
            }
            const randomNumber2 = getRandomNumber2(1, 100);


         // Enter username and password
         cy.log('Before selecting #basic_email');
         //cy.get("#basic_email").eq(0).click({force:true}).type("demo@ibos.io");
         cy.get('#basic_email', { timeout: 10000 }).should('exist').type('demo@ibos.io');
         cy.log('After selecting #basic_email');
         cy.get("#basic_password").eq(0).click({force:true}).type("teamRMG");
         // Click the submit button
         cy.get("button[type='submit']").click({force:true});
         cy.wait(2000);
         // Example: Assert that an element with ID 'my-element' contains the text 'Hello, World!'
         cy.get('.ant-message-notice-content').should('have.text', 'Login successful');

        cy.get(':nth-child(1) > .text-center').click({force:true});
        cy.get('[href="/Merchandising/PriceQuotation"] > .list_item > .item').click({force:true});
        cy.wait(1000);
        cy.get('.ant-btn').click({force:true});
        cy.get('#RMGForm_buyer').click({force:true});
        //cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click({force:true});
        cy.contains('Louis Vuitton').click({force:true});
        // Use cy.get() to select the dropdown element by its ID
        //cy.get('#dropdown').select('Test Partner'); // Select by option text

        // Use cy.get() to select the input field by its ID and type the random number
        cy.get('#RMGForm_orderNo').type(randomNumber1.toString());

        // Optionally, assert that the input field contains the entered value
        cy.get('#RMGForm_orderNo').should('have.value', randomNumber1.toString());

        cy.get('#RMGForm_currency').click({force:true});
        cy.contains('BDT').click({force:true});

        cy.get('#RMGForm_costingFor').click({force:true});
        cy.contains('PCS').click({force:true});

        // cy.get('#season').click({force:true});
        // cy.contains('').click({force:true});

        cy.get('#RMGForm_region').click({force:true});
        cy.contains('Bangladesh').click({force:true});
        
        cy.get('#RMGForm_exportItem').click({force:true});
        cy.contains('Long Sleeve Shirt').click({force:true});

        cy.get('#RMGForm_exportItem').click({force:true});
        cy.contains('Long Sleeve Shirt').click({force:true});
        
        // Use cy.get() to select the input field by its ID and type the random number
        cy.get('#RMGForm_estOrderQty').type(randomNumber2.toString());

        // Optionally, assert that the input field contains the entered value
        cy.get('#RMGForm_estOrderQty').should('have.value', randomNumber2.toString());

        cy.get('#RMGForm_orderUom').click({force:true});
        cy.wait(1000);
        cy.contains('PCS').click({force:true});
        cy.wait(2000);


        
     
         })
    })