import Phaser from 'phaser'


export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    console.log(this)
  }
  
  
  update () {

    (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) ? this.x -= 4
    : (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) ? this.x += 4
    : (game.input.keyboard.isDown(Phaser.Keyboard.UP)) ? this.y -= 4
    : (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) ? this.y += 4
    : null
  }
}
