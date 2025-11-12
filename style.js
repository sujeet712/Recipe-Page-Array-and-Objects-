let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: [
        "Pasta",
        "Oil",
        "Onions",
        "Salt",
        "Tomato Pasta Sauce",
        "Cheese",
    ],
};


// Set Title
let recipeTitleElement = document.getElementById("recipeTitle");
recipeTitleElement.textContent = recipeObj.title;

// Set Image
let imgElement = document.getElementById("img");
imgElement.src = recipeObj.imgSrc;

// Add Ingredients List
let listContainerElement = document.getElementById("ingredientListContainer");
listContainerElement.textContent = ""; // clears old list

for (let listitem of recipeObj.ingredients) {
    let listitemEl = document.createElement("li");
    listitemEl.textContent = listitem;
    listitemEl.classList.add("text-white", "texl-xl");
    listContainerElement.appendChild(listitemEl);
}

// code 2


// document.getElementById("recipeTitle").textContent = recipeObj.title;
// document.getElementById("img").src = recipeObj.imgSrc;
// let ingredientListContainer = document.getElementById("ingredientListContainer");
 
// for (let i = 0; i < recipeObj.ingredients.length; i++) {
//     let listItem = document.createElement("li");
//     listItem.textContent = recipeObj.ingredients[i];
//     listItem.classList.add("text-white", "text-base");
//     ingredientListContainer.appendChild(listItem);
// }
// recipeObj.ingredients.forEach(function(eachIngredient) {
//     let listItemE1 = document.createElement("li");
//     listItemE1.textContent = eachIngredient;
//     listItemE1.classList.add("text-white", "text-[18px]", "font-roboto", "p-[5px]");
//     listContainerElement.appendChild(listItemE1);
// });



// let h1Element = document.createElement("h1");
// h1Element.textContent = "Tomato Pasta";
// // h1Element.classList.add("text-3xl","text-[orange]", "font-[Roboto]");
// let recipeTitleElement = document.getElementById("recipeTitle");
// recipeTitleElement.appendChild(h1Element);

// let imgElement = document.getElementById("img");
// imgElement.src = recipeObj.imgSrc;
// let imageContainerElement = document.getElementById("imageContainer");
// imageContainerElement.appendChild(imgElement);

// let listContainerElement = document.getElementById("ingredientListContainer");
// listContainerElement.textContent = ""; // clear existing

// for (let ingredient of recipeObj.ingredients) {
//     let li = document.createElement("li");
//     li.textContent = ingredient;
//     // li.classList.add("text-white", "text-[20px]", "font-roboto", "p-[5px]");
//     listContainerElement.appendChild(li);
// }
// let listItemE1 = document.createElement("li");
// listItemE1.textContent = "Milk";
// // let listContainerElement = document.getElementById("ingredientListContainer");
// listContainerElement.appendChild(listItemE1);
