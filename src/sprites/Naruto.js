import Phaser from 'phaser'


export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    console.log(this)
  }
  
  
  update () {
    var sprite1 = this.animations.sprite

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        sprite1.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        sprite1.x += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        sprite1.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        sprite1.y += 4;
    }

  }
}
