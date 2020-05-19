//BUDGET CONTROLLER
let budgetController = (function(){

})();

//UI CONTROLLER
let UIController = (function(){

    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return{
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    }
})();

//GLOBAL APP CONTROLLER
let controller =(function(budgetCtrl, UICtl){
    let DOM = UICtl.getDOMstrings();

    const ctrlAddItem = function(){

        // 1 get filed input data
        let input = UICtl.getInput();
        console.log(input);
        // 2 add the item to budget controller
        // 3 add the item to the UI
        // 4 calculate the budget
        // display the budget on the UI

    
    }
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }

    });

})(budgetController, UIController);

