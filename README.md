Shopping List App

A simple Shopping List app made with HTML, CSS, and JavaScript.
The user can add items, delete items, and the list is saved automatically using Local Storage.

Features

Add new shopping items

Delete individual items

Mark items as completed

Data saved in browser using Local Storage

List remains after page refresh

How to Run

Download or clone this project.

Open index.html in your browser.

Start adding items to your shopping list!

No installation or extra setup required.

How It Works (Simple)

When the user adds an item, JavaScript creates a new list element (<li>).

Items are stored in an array.

The array is converted to JSON and saved in Local Storage using:

localStorage.setItem("shoppingList", JSON.stringify(items));

When the page loads, the app:

Gets saved data from Local Storage

Converts it back to an array using JSON.parse()

Displays saved items automatically

When an item is deleted or marked complete, Local Storage updates instantly.

Tech Used

HTML

CSS

JavaScript (Vanilla JS)

Local Storage API

Project Structure
shopping-list/
│── index.html
│── style.css
│── script.js
Possible Improvements

Add edit item feature

Add item categories (e.g., Fruits, Vegetables, Dairy)

Add quantity input

Add “Clear All” button

Add dark mode

Sync with database instead of Local Storage
