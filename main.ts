sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.gameOver(true)
})
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    c 5 5 5 5 5 1 f 5 5 5 c . . . . 
    c 5 5 5 5 5 f f 5 5 5 5 c . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 d c . . 
    c 5 3 3 3 5 5 5 5 5 d d d c . . 
    . b 5 5 5 5 5 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c c . 
    . c b b c 5 5 b b d d d d c d c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 5 5 b d d d c . 
    . . c c c c c b 5 5 b c c c . . 
    . . c b b b c d 5 5 b c . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let Zairmag = sprites.create(img`
    . . . . . 3 3 b 3 3 e e e 3 . . 
    . . . . 3 1 1 d e e e e e e 3 . 
    . . . 3 d 1 1 e e e e e e e e 3 
    . . 3 d d 1 1 e e e e e e e 3 3 
    . 3 1 1 d 1 1 e e e e e e e . . 
    . 3 1 1 1 d 1 1 1 e e e e e 3 . 
    . b d 1 1 1 d 1 1 1 e e e 1 3 . 
    . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
    . 4 4 d 1 1 1 1 1 1 d d d b b . 
    . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
    4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
    4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
    4 5 5 d 5 5 d b b b d d 3 . . . 
    4 5 5 5 d d d d 4 4 b 3 . . . . 
    . 4 5 5 5 4 4 4 . . . . . . . . 
    . . 4 4 4 . . . . . . . . . . . 
    `, SpriteKind.Food)
Zairmag.setPosition(140, 100)
info.startCountdown(15)
game.onUpdateInterval(1000, function () {
    Zairmag.setPosition(randint(0, 100), randint(0, 100))
})
