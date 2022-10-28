# Hides three gifts

This is a simple game where you have to find three gifts in a grid. There are three levels in this game. You can select the level and start playing. There are three types of boxes in the grid. One is gift box, one is danger box and one is miss box. If you click on the gift box then you will get one star. If you click on the danger box then you will lose the game. If you click on the miss box then you will get nothing. You have to find three gifts in the grid to win the game. If you find three gifts then you will get three stars.

# Demo

## https://sauravhathi.github.io/hides-three-gifts/

![image](https://user-images.githubusercontent.com/84177920/198501831-0a3eb329-8121-4cc3-b3f1-89745e669115.png)

## Technologies

- HTML
- CSS
- JavaScript

HTML is used to create the structure of the game. CSS is used to style the game. JavaScript is used to add the functionality to the game.

CSS is used to style the game. JavaScript is used to add the functionality to the game.

JavaScript is used to add the functionality to the game.

# Functions

## randomizeGrid(gridSize)

This function will return an array of random values. The length of the array will be the square of the gridSize. There will be three gift boxes, one danger box and the rest will be miss boxes.

## changeGrid()

This function will change the grid according to the selected option in the select box. It will call the randomizeGrid function and then create the grid according to the array returned by the randomizeGrid function.

## clrGrid()

This function will clear the grid.

## Features

- The user can select the grid size from the dropdown list
- The user can click on each cell of the grid to find the gifts
- If the user clicks on a cell which has a gift then the gift will be displayed in the cell
- If the user clicks on a cell which has a danger then the game will be reset and the user will lose the game
- If the user clicks on a cell which has a miss then nothing will be displayed in the cell
- The user has to find all the gifts in the grid to win the game
- The user will get 3 stars if he finds all the gifts in the first attempt
- The user will get 2 stars if he finds all the gifts in the second attempt
- The user will get 1 star if he finds all the gifts in the third attempt
- The user will get 0 star if he finds all the gifts in the fourth attempt

# How to run the project

- Clone the project `git clone https://github.com/sauravhathi/hides-three-gifts.git`
- Open the `index.html` file in the browser



