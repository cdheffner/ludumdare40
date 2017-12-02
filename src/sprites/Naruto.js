import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(1)
    this.game.physics.arcade.enable(this)
  }

  update () {
    this.angle += 10
  }
}
