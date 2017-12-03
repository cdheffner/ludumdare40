import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.cursor = game.input.keyboard.createCursorKeys()
    this.jump = {
      cursor: game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
      timer: 300
    }
    game.physics.enable(this, Phaser.Physics.ARCADE)
  }
  
  update () {
    (this.cursor.left.isDown) ? this.x -= 4
    : (this.cursor.right.isDown) ? this.x += 4
    : (this.cursor.up.isDown) ? this.y -= 4
    : (this.cursor.down.isDown) ? this.y += 4
    : null

    if(this.jump.cursor.isDown) {
      this.body.velocity.y = -250
    }
  }
}
