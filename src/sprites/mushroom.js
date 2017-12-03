import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor ({ game, x, y, asset }) {
        super(game, x, y, asset)
        this.anchor.setTo(0.5)
    }

    update () {
        var sprite = this.animations.sprite
        game.physics.startSystem(Phaser.Physics.ARCADE);

        sprite.body.setSize(100, 50, 50, 25);
        sprite.body.immovable = true;
    }
}