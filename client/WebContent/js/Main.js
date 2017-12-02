import Phaser from 'phaser-ce'
import PIXI from '../../../node_modules/phaser-ce/build/custom/pixi.js'
import p2 from '../../../node_modules/phaser-ce/build/custom/p2.js'

window.onload = function () {
	var game = new Phaser.Game(800, 600, Phaser.AUTO);
    // Add the States your game has.
    // game.state.add("Boot", Boot);
    // game.state.add("Menu", Menu);
    // game.state.add("Preload", Preload);
    game.state.add("Level", Level);
    game.state.start("Level");
};
