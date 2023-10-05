beforeEach(() => {
    cy.visit('https://hitech.ibos.io');

    // Enter username and password
    cy.log('Before selecting #basic_email');
    //cy.get("#basic_email").eq(0).click({force:true}).type("demo@ibos.io");
    cy.get('#basic_email', { timeout: 10000 }).should('exist').type('demo@ibos.io');
    cy.log('After selecting #basic_email');

    cy.get("#basic_password").eq(0).click({ force: true }).type("teamRMG");
    // Click the submit button
    cy.get("button[type='submit']").click({ force: true });
    cy.wait(1000);
    // Example: Assert that an element with ID 'my-element' contains the text 'Hello, World!'
    cy.get('.ant-message-notice-content').should('have.text', 'Login successful');
    cy.wait(1000);

});

describe('Merchandising/Configuration', () => {


    // beforeEach(() => {
    //             cy.visit('https://hitech.ibos.io/Merchandising/Dashboard');
    // });

    //     it('Create', () => {

    //         cy.viewport(1920, 1080)

    // // Generate a random number between min (inclusive) and max (exclusive)
    //         function getRandomNumber1(min, max) {
    //         return Math.floor(Math.random() * (max - min)) + min;
    //         }
    //         const randomNumber1 = getRandomNumber1(1, 100);


    // // Generate a random alphabetic name of a specified length
    //         function generateRandomName(length) {
    //         const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //         let randomName = '';

    //         for (let i = 0; i < length; i++) {
    //         const randomIndex = Math.floor(Math.random() * alphabet.length);
    //         randomName += alphabet.charAt(randomIndex);
    //         }

    //         return randomName;
    //         }

    // // Usage example: Generate a random name of 8 characters
    //         const randomName = generateRandomName(8);
    //         cy.log(`Random Name: ${randomName}`);


    // // Generate a random number between min (inclusive) and max (exclusive)
    //         function getRandomNumber2(min, max) {
    //             return Math.floor(Math.random() * (max - min)) + min;
    //             }
    //             const randomNumber2 = getRandomNumber2(1, 100);


    //         cy.get(':nth-child(1) > .text-center').click({force:true});
    //         cy.wait(1000);
    // // Open the 2nd level menu (Menu 2) by clicking its parent <li> element
    //         cy.contains("Configuration").click();
    // //cy.wait(1000);

    //         cy.contains('Party/Person').click({force:true});
    //         cy.wait(1000);

    //         cy.get(':nth-child(3) > .custom_button > .ant-btn > span').click({force:true});

    // //cy.get('#RMGForm_partnerType').click({ force: true }).contains('Buyer').click({ force: true });
    //         cy.get('#RMGForm_partnerType').click({force:true});
    //         cy.contains('Buyer').click({force:true});

    // //cy.get('#RMGForm_partnerName').click({force:true});
    // // Type text into an input field and simulate Enter key press
    // //cy.get('#RMGForm_partnerName').type('Avishek({randomNumber2})');
    //         cy.get('#RMGForm_partnerName').type(randomName.toString());
    //         cy.get('#RMGForm_partnerName').should('have.value', randomName.toString());

    //         cy.get('#RMGForm_partnerCode').type(randomNumber1.toString());
    //         cy.get('#RMGForm_partnerCode').should('have.value', randomNumber1.toString());

    //         cy.get('#RMGForm_payableGL').click({force:true});
    //         cy.contains('Buyer Receivable').click({force:true});

    //         cy.get('#RMGForm_buyingHouse').click({force:true});
    //         cy.contains('AVS Fashion').click({force:true});

    //         cy.get('.mt-6 > .custom_button > .ant-btn > span').click({force:true});

    //         cy.get(':nth-child(2) > .ant-btn').click({force:true});

    //         cy.wait(1000);

    //         })


    //     it('Garments Item Color', () => {

    //         cy.viewport(1920, 1080)

    //     // Generate a random alphabetic name of a specified length
    //         function generateRandomName(length) {
    //         const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //         let randomName = '';

    //         for (let i = 0; i < length; i++) {
    //         const randomIndex = Math.floor(Math.random() * alphabet.length);
    //         randomName += alphabet.charAt(randomIndex);
    //         }

    //         return randomName;
    //         }

    //     // Usage example: Generate a random name of 8 characters
    //         const randomName = generateRandomName(8);
    //         cy.log(`Random Name: ${randomName}`);

    //         cy.get(':nth-child(1) > .text-center').click({force:true});
    //         cy.wait(1000);
    //     // Open the 2nd level menu (Menu 2) by clicking its parent <li> element
    //         cy.contains("Configuration").click();
    //         cy.wait(1000);

    //         cy.contains('Garments Item Color').click({force:true});
    //         cy.wait(1000);

    //         cy.get('.ant-btn > :nth-child(2)').click({force:true});
    //         cy.wait(1000);

    //         cy.get('#RMGForm_colorName').type(randomName.toString());
    //         cy.get('#RMGForm_colorName').should('have.value', randomName.toString());

    //         cy.get(':nth-child(2) > .ant-btn').click({force:true});


    //         })


    it('Season', () => {

        cy.viewport(1920, 1080)

        cy.get(':nth-child(1) > .text-center').click({ force: true });
        cy.wait(1000);
        // Open the 2nd level menu (Menu 2) by clicking its parent <li> element
        cy.contains("Configuration").click();
        cy.wait(1000);

        cy.contains('Season').click({ force: true });
        cy.wait(1000);

        cy.get('.ant-btn > :nth-child(2)').click({ force: true });
        cy.wait(1000);

         //Business Year Wise
        //New Code Here

        // const getList = (name)=> {
        //     const getAllList = document.querySelectorAll('.ant-select-dropdown');
        //     getAllList.forEach((item) => { 
        //     const getList = item.querySelectorAll(`#${name}`); 
        //       if(getList.length){
        //         const mainList = item.querySelectorAll('.ant-select-item');
        //         return mainList
        //         }
        //     })
        // }

        // cy.get('#RMGForm_seasonType').click({ force: true });
        // const season = getList('RMGForm_seasonType_list');
        // cy.wait(1000);
        // // Use .eq(index) to select an item from the season array by index
        // cy.get(season).eq(1).click({ force: true });


        const getList = (name) => {
            const getAllList = document.querySelectorAll('.ant-select-dropdown');
            let mainList = [];
          
            getAllList.forEach((item) => {
              const getList = item.querySelectorAll(`#${name}`);
              if (getList.length) {
                mainList = Array.from(item.querySelectorAll('.ant-select-item'));
              }
            });
          
            return mainList;
          }
          
          cy.get('#RMGForm_seasonType').click({ force: true });
          cy.wait(1000);
          
          // Use .eq(index) to select an item from the season array by index
          const season = getList('RMGForm_seasonType_list');
          cy.get(season[1]).click({ force: true }); // Click the second item (index 1)


        //cy.get('season[1]').click({force: true});
        cy.get('#RMGForm_yearType').click({ force: true });
        cy.get('.ant-select-item-option').eq(1).click({ force: true });
        cy.wait(1000);
        cy.get('#RMGForm_businessYear').click({ force: true });
        cy.get('.ant-select-item-option').eq(1).click({ force: true });
        cy.wait(1000);

        //  //OR Financial Year Wise
        // cy.get('#RMGForm_seasonType').click({force:true});
        // cy.get('WINTER').click({force:true});
        // cy.wait(1000);
        // cy.get('#RMGForm_yearType').click({force:true});
        // cy.contains('Financial Year').click({force:true});
        // cy.wait(1000);
        // cy.get('#RMGForm_financialYear').click({force:true});
        // cy.contains('2020-2021').click({force:true});
        // cy.wait(1000);


        cy.get(':nth-child(2) > .ant-btn > span').click({ force: true });

    })

    // cy.get(':nth-child(1) > .text-center').click({force:true});
    // cy.get('[href="/Merchandising/PriceQuotation"] > .list_item > .item').click({force:true});
    // cy.wait(1000);
    // cy.get('.ant-btn').click({force:true});
    // cy.get('#RMGForm_buyer').click({force:true});
    // //cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click({force:true});
    // cy.contains('Louis Vuitton').click({force:true});
    // // Use cy.get() to select the dropdown element by its ID
    // //cy.get('#dropdown').select('Test Partner'); // Select by option text

    // // Use cy.get() to select the input field by its ID and type the random number
    // cy.get('#RMGForm_orderNo').type(randomNumber1.toString());

    // // Optionally, assert that the input field contains the entered value
    // cy.get('#RMGForm_orderNo').should('have.value', randomNumber1.toString());

    // cy.get('#RMGForm_currency').click({force:true});
    // cy.contains('BDT').click({force:true});

    // cy.get('#RMGForm_costingFor').click({force:true});
    // cy.contains('PCS').click({force:true});

    // // cy.get('#season').click({force:true});
    // // cy.contains('').click({force:true});

    // cy.get('#RMGForm_region').click({force:true});
    // cy.contains('Bangladesh').click({force:true});

    // cy.get('#RMGForm_exportItem').click({force:true});
    // cy.contains('Long Sleeve Shirt').click({force:true});

    // cy.get('#RMGForm_exportItem').click({force:true});
    // cy.contains('Long Sleeve Shirt').click({force:true});

    // // Use cy.get() to select the input field by its ID and type the random number
    // cy.get('#RMGForm_estOrderQty').type(randomNumber2.toString());

    // // Optionally, assert that the input field contains the entered value
    // cy.get('#RMGForm_estOrderQty').should('have.value', randomNumber2.toString());

    // cy.get('#RMGForm_orderUom').click({force:true});
    // cy.wait(1000);
    // cy.contains('PCS').click({force:true});
    // cy.wait(2000);

})
//})
