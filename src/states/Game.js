/* globals __DEV__ */
import Phaser from 'phaser'
import Naruto from '../sprites/Naruto'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'YOUR MOTHERS HOUSE'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.map = this.game.add.tilemap('platformer')
    this.map.addTilesetImage('Platformer-Tiles', 'tiles')

    this.layer = this.map.createLayer('terrain')
    this.layer.resizeWorld()
    this.layer.wrap = true

    this.naruto = new Naruto({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'naruto'
    })

    this.game.add.existing(this.naruto)
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.naruto, 32, 32)
    }
  }
}
