let greenCharacter = document.createElement('img')
newImage(greenCharacter, 'assets/green-character.gif', '100px', '100px')

let pineTree = document.createElement('img')
newImage(pineTree, 'assets/pine-tree.png', '450px', '200px')

let tree = document.createElement('img')
newImage(tree, 'assets/tree.png', '200px', '300px')

let pillar = document.createElement('img')
newImage(pillar, 'assets/pillar.png', '350px', '100px')

let crate = document.createElement('img')
newImage(crate, 'assets/crate.png', '150px', '200px')

let well = document.createElement('img')
newImage(well, 'assets/well.png', '500px', '425px')

let sword = document.createElement('img')
newItem(sword, 'assets/sword.png', '500px', '405px')

let shield = document.createElement('img')
newItem(shield, 'assets/shield.png', '165px', '100px')

let staff = document.createElement('img')
newItem(staff, 'assets/staff.png', '600px', '100px')

function newItem(name, source, left, bottom){
    name.src = source
    name.style.postion = 'fixed'
    name.style.left = left
    name.style.bottom = bottom
    document.body.append(name)
    name.addEventListener('dblclick', function(){
        name.remove()
    })
}

function newImage(name, source, left, bottom){
    name.src = source
    name.style.postion = 'fixed'
    name.style.left = left
    name.style.bottom = bottom
    document.body.append(name)
}
