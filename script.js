// responsive menu bar
function toggleMenu() {
    var menu = document.getElementById("menu");
    var github = document.getElementById("github");
    if (menu.classList.contains("hidden") && github.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        github.classList.remove("hidden");

    } else {
        menu.classList.add("hidden");
        github.classList.add("hidden");
    }
}

// randomizeGrid function will return an array of random values of gift, miss and danger based on the grid size selected by the user in the dropdown list
function randomizeGrid(gridSize) {
    let gridContainer = document.getElementById('grid-container');
    let gridArray = [];
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            gridArray.push('empty');
        }
    }
    let giftCount = 0;
    while (giftCount < 3) {
        let random = Math.floor(Math.random() * gridArray.length);
        if (gridArray[random] == 'empty') {
            gridArray[random] = 'gift';
            giftCount++;
            console.log(giftCount);
        }
    }

    let dangerCount = 0;
    while (dangerCount < 1) {
        let random = Math.floor(Math.random() * gridArray.length);
        if (gridArray[random] == 'empty') {
            gridArray[random] = 'danger';
            dangerCount++;
        }
    }

    let missCount = 0;
    while (missCount < (gridArray.length - 4)) {
        let random = Math.floor(Math.random() * gridArray.length);
        if (gridArray[random] == 'empty') {
            gridArray[random] = 'miss';
            missCount++;
        }
    }

    return gridArray;
}

// changeGrid function will create a grid based on the grid size selected by the user in the dropdown list
// It will also call the randomizeGrid function to get the random values of gift, miss and danger
// It will also add event listener to each cell of the grid

function changeGrid() {
    clrGrid();
    let matrix = document.getElementById('matrix');

    let gridSize = matrix.options[matrix.selectedIndex].value;

    if (gridSize == 'select') {
        return;
    }

    let gridContainer = document.getElementById('grid-container');

    // 3x3 grid style
    if (gridSize == 3) {
        gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
        // 4x4 grid style
    } else if (gridSize == 4) {
        gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
        // 6x6 grid style
    } else if (gridSize == 6) {
        gridContainer.style.gridTemplateColumns = 'repeat(6, 1fr)';
    }

    let gridArray = randomizeGrid(gridSize);

    for (let i = 0; i < gridArray.length; i++) {
        let div = document.createElement('div');
        div.classList.add('border', 'border-black', 'h-20', 'w-20', 'flex', 'justify-center', 'items-center', 'text-2xl', 'cursor-pointer', 'div');
        div.addEventListener('click', function () {
            if (gridArray[i] == 'gift') {
                div.innerHTML = '<img src="giftbox.png" alt="gift" class="h-10 w-10 mirror flip" />';

            } else if (gridArray[i] == 'miss') {
                div.innerHTML = '<img src="miss.png" alt="miss" class="h-10 w-10 mirror flip" />';
            } else if (gridArray[i] == 'danger') {
                div.innerHTML = '<img src="danger.png" alt="danger" class="h-10 w-10 mirror flip" />';
                // if danger is found then reset the game
                // alert('You lost the game');
                // window.location.reload();
            }

            let giftCount = 0;
            let dangerCount = 0;
            let giftImages = document.querySelectorAll('img');
            for (let i = 0; i < giftImages.length; i++) {
                if (giftImages[i].src.includes('giftbox.png')) {
                    giftCount++;
                    console.log(giftCount);
                }
                if (giftImages[i].src.includes('danger.png')) {
                    dangerCount++;
                    console.log(dangerCount);
                }
            }

            // if all the gifts are found then reset the game and alert the user that he won the game
            if (dangerCount == 1) {
                alert('You won the game with ' + giftCount + ' stars');

                sleep().then(() => {
                    window.location.reload();
                }
                );
            }

            // if all the gifts are found then reset the game and alert the user that he won the game
            if (giftCount == 3) {
                alert('You won the game with 3 stars');

                sleep().then(() => {
                    window.location.reload();
                });
            }

        });
        gridContainer.appendChild(div);
    }

}

// clrGrid function will clear the grid
function clrGrid() {
    let gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';
}

// sleep function will be used to delay the reload of the page
function sleep(){
    return new Promise(resolve => setTimeout(resolve, 2000));
}
