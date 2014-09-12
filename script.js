var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {preload: preload, create: create});
var pretractor;
//var tractor;

function preload() {
	game.load.spritesheet('pretractor', 'assets/tractor02.png', 82/*whith*/,110/*height*/);
	//game.load.spritesheet('tractor', 'assets/tractor.png', 82/*whith*/,110/*height*/);
}

function create() {
	pretractor = game.add.sprite(100, 100, 'pretractor');
	pretractor.animations.add('walk');
	//tractor.inputEnabled = true;
	

	pretractor.animations.play('walk', 10/*속도조절*/, true); /*항상 움직임*/	
	//pretractor.events.onInputDown.add(tractorClick, this);

}

function tractorClick() {
	pretractor.animations.play('walk', 7, false);
	//tractor.animations.play('walk', 7, false);
}