function filterItems(searchTerm) {

    let filteredItems = [];

    for (let i = 0; i < shoppingList.length; i++) {

        if (shoppingList[i].toLowerCase().includes(searchTerm.toLowerCase())) {
            filteredItems.push(shoppingList[i]);
        }
    }

    console.log("Search Results:");
    console.log(filteredItems);

    return filteredItems;
}
console.log(item + " was added to the shopping list.");
console.log(item + " is already in the shopping list.");
console.log(removedItem + " was removed from the shopping list.");
console.log("Current Shopping List:");
console.log("Search Results:", filteredItems);