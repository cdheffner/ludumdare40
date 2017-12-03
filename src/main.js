import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'

import config from './config'

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.tilemap('platformer', '../assets/tilemaps/platform.json', null, Phaser.Tilemap.TILED_JSON)
    game.load.image('tiles', '../assets/tilemaps/platformer_tiles.png')

}

var map
var layer
var sprite1;
var sprite2;

function create() {
  game.stage.backgroundColor = '#2d2d2d';

  map = game.add.tilemap('platformer')
  map.addTilesetImage('platformer_tiles', 'tiles')

  layer = map.createLayer('Tile Layer 1')

  layer.resizeWorld()

  layer.wrap = true

    sprite2 = game.add.sprite(game.world.centerX, game.world.centerY, 'mushroom');
    sprite2.anchor.setTo(0.5, 0.5);
    sprite2.scale.setTo(2, 2);

    sprite2.animations.add('run');
    sprite2.animations.play('run', 10, true);

    game.physics.startSystem(Phaser.Physics.ARCADE);


    sprite1 = game.add.sprite(150, 200, 'atari');
    sprite1.name = 'cat';


    game.physics.enable([sprite1,sprite2], Phaser.Physics.ARCADE);

    //  This adjusts the collision body size to be a 100x50 box.
    //  50, 25 is the X and Y offset of the newly sized box.

    sprite1.body.setSize(100, 50, 50, 25);
    sprite1.body.immovable = true;

    // sprite2.body.velocity.x = -100;

}

function update() {

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        sprite2.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        sprite2.x += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        sprite2.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        sprite2.y += 4;
    }

    game.physics.arcade.collide(sprite1, sprite2, collisionHandler, null, this);

}

function collisionHandler (obj1, obj2) {

    game.stage.backgroundColor = '#992d2d';

}

function render() {

}
