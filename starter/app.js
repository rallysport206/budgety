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

    return {
        addItem: function(type, des, val) {
            let newItem, ID;
            
            //create new ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else {
                ID = 0;
            }   

            //create new item based on 'inc' or 'exp type
            if (type === 'exp'){
                newItem = new Expense(ID, des, val);
            }   else if (type === 'inc') {
                newItem = new Income(ID, des, val );
            }
            // Push it into our data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;

        },
        testing: function() {
            console.log(data);
            
        }
    };

})();

//UI CONTROLLER
let UIController = (function(){

    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };

    return {
        getInput: function() {
            return{
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        addListItem: function(obj, type) {
            let html, newHtml, element;
            // create HTML string with placeholder text
            if (type === 'inc'){ 
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- 900.00</div><div class="item__percentage">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            };

            // replace text with data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert data in HTML
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
        },
        clearFields: function(){
            let fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) {
                current.value = '';
            });

            fieldsArr[0].focus();
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
        let input, newItem;
        // 1 get filed input data
        input = UICtl.getInput();
        // 2 add the item to budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3 add the item to the UI
        UICtl.addListItem(newItem, input.type);

        // clear fields
        UICtl.clearFields();
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
