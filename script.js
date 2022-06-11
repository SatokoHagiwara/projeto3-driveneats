function selectDish(element){
    let selectedFood = document.querySelector(".dish-container .selected");
    if (selectedFood !== null){
        selectedFood.classList.remove("selected");
    }
    element.classList.add("selected");    
}
function selectDrink(element){
    let selectedFood = document.querySelector(".drink-container .selected");
    if (selectedFood !== null){
        selectedFood.classList.remove("selected");
    }
    element.classList.add("selected");    
}
function selectDessert(element){
    let selectedFood = document.querySelector(".dessert-container .selected");
    if (selectedFood !== null){
        selectedFood.classList.remove("selected");
    }
    element.classList.add("selected");    
}

    