// Add image to the webpage

function newImage(url, left, bottom) {
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
}
// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

let width = window.innerWidth;
let height = window.innerHeight;
let skyStartheight = height / 2;

function createBgImage(url, width, height, startHeight) {
    for (let i = 0; i <= width; i += 100) {
        for (let j = startHeight; j <= height; j += 100) {
            newImage(url, i, j);
        }
    }
}

// adding sky
createBgImage('assets/sky.png', width, height, skyStartheight);
// Adding grass
createBgImage('assets/grass.png', width, skyStartheight, 0);

// for (let i = 0; i <= width; i += 100) {
//     for (let j = 0; j <= skyStartheight; j += 100) {
//         newImage('assets/grass.png', i, j);
//     }
// }

newImage('assets/green-character.gif', 100, 100);
newImage('assets/pine-tree.png', 450, 200);
newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100);
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);
// /grass image
// newImage('assets/grass.png', '0px', '0px');
// newImage('assets/grass.png', '0px', '100px');
// newImage('assets/grass.png', '0px', '200px');
// newImage('assets/grass.png', '0px', '300px');
// newImage('assets/grass.png', '0px', '400px');


console.log('innerWidth', window.innerWidth, 'inner height', window.innerHeight);
// adding image to the webpage that can be removed
function newItem(url, left, bottom) {
    let imageItem = document.createElement('img')
    imageItem.src = url
    imageItem.style.position = 'fixed'
    imageItem.style.left = left
    imageItem.style.bottom = bottom
    document.body.append(imageItem)
    // Image removed when clicked on it
    // imageItem.addEventListener('click', function(){
    //     imageItem.remove()
    // })
    // Image removed when double clicked on it
    imageItem.addEventListener('dblclick', function () {
        imageItem.remove()
    })
}
newItem('assets/sword.png', '500px', '405px');
newItem('assets/shield.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');




