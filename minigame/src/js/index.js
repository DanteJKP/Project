const canvas = document.querySelector("canvas")
const board = canvas.getContext("2d")

canvas.width = DISPLAY_PIXEL.WIDTH * ASPECT_RATIO.WIDTH
canvas.height = DISPLAY_PIXEL.HEIGHT *  ASPECT_RATIO.HEIGHT

const playerProperty = {
    width: 50,
    height:50,
    speed: 1,
    color: "tomato",
    position: {
        x:0 ,
        y:0
    }
}
const enemyProperty = {
    width: 100,
    height:100,
    speed: 1,
    color: "black",
    position: {
        x:canvas.width - 50,
        y:canvas.height - 50
    }
}

const ground = new Ground(canvas.width, canvas.height , '/src/assets/bg.jpg')
const player = new Player(playerProperty)
const enemy = new Player(enemyProperty)


function animate() {
    ground.create()
    player.create()
    enemy.create()

    player.uptade ()
    

    window.requestAnimationFrame(animate)
}

window.addEventListener("keydown" , function(callback) {
    switch (callback.key) {
        case "ArrowUp" :
        player.jump ()
        break
        case "ArrowLeft" :
        player.moveLeft ()
        break
        case "ArrowRight" :
        player.moveRight ()
        default:
        break
    }
})

animate()