const { Given, When, Then } = require('@cucumber/cucumber');
const AutoCompletePage = require('../../pageObjects/AutoCompletePage');

Given('User is on Widgets page and performs actions on Auto complete screens', async function(){
    const autoCompletePage = new AutoCompletePage(this.page);
    await autoCompletePage.widgetsButton.click();
    await autoCompletePage.autoCompleteButton.click();
    const colours = ['Blue', 'Black', 'Green', 'Red', 'Yellow']

    for(const colour of colours){
        await autoCompletePage.multipleColoursInput.fill(colour);
        await autoCompletePage.multipleColoursInput.press('Enter');
    }

    await autoCompletePage.singleColourInput.fill('Black');
    await autoCompletePage.singleColourInput.press('Enter');

    //await autoCompletePage.clearMultipleInput.click({multiple: true});

    const removeAllInput = await autoCompletePage.clearMultipleInput;
    const count = await removeAllInput.count();
    const selectedColours =[]

    for(let i=0; i<count; i++ ){
        const eachColour = await autoCompletePage.multipleColours.nth(0).textContent();
        selectedColours.push(eachColour)
        await removeAllInput.nth(0).click();
        
    }
    console.log(selectedColours);

    const expectedColours = colours.join(', ');
    const actualColours = selectedColours.join(', ');
     if( expectedColours === actualColours){
        console.log('✅ Success: Entered colours match selected colours')
     }
     else{
        console.log('❌ Failure: Arrays do not match')
     }
    
    

})