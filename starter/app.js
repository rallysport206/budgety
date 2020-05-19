//BUDGET CONTROLLER
let budgetController = (function(){

    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

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

    let setupEventListeners = function () {
        let DOM = UICtl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };


    const ctrlAddItem = function(){

        // 1 get filed input data
        let input = UICtl.getInput();
        // 2 add the item to budget controller
        // 3 add the item to the UI
        // 4 calculate the budget
        // display the budget on the UI

    
    };

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init()
