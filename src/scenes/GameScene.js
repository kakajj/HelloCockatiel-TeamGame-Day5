let bg
let cloud1
let cloud2
let player
let keyA
let keyS
let keyD
let keyW
class GameScene extends Phaser.Scene{
    constructor(){
        super({
            key: 'GameScene'
        })
    }
    preload(){
        this.load.image('bg','src/assets/images/desert-backgorund-looped.png')
        this.load.image('cloud1','src/assets/images/clouds.png')
        this.load.image('cloud2','src/assets/images/clouds-transparent.png')
        this.load.spritesheet('player','src/assets/images/ship.png',{frameWidth: 16,frameHeight:24})
    }
    create(){
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)

        bg = this.add.tileSprite(0,0,512,1216,'bg').setOrigin(0,0)
        cloud1 = this.add.tileSprite(125,200,256,103,'cloud1')
        cloud2 = this.add.tileSprite(125,400,256,103,'cloud2')
        player = this.physics.add.sprite(125,500,'player').setScale(2.5)
        player.setCollideWorldBounds(true);
        this.anims.create({
            key: 'playerAni',
            frames: this.anims.generateFrameNumbers('player',{
                start: 0,
                end : 5 }),
                framerate:10,
                repeat:-1
        })
    }
    update(delta, time){
        bg.tilePositionY -=  1.25
        cloud1.tilePositionX -= 1.25
        cloud2.tilePositionX += 1.25
        if(keyA.isDown){
            player.setVelocityX(-160);
        }
        else if (keyD.isDown){
            player.setVelocityX(160);
            player.anims.play('playerAni',true);
        }
        else if (keyW.isDown) {
            player.setVelocityY(-160);
            player.anims.play('playerAni',true);
        }
        else if (keyS.isDown){
            player.setVelocityY(160);
            player.anims.play('playerAni',true);
        }
        else{
            player.setVelocityX(0);
            player.setVelocityY(0);
            player.anims.play('playerAni',false);

        }
    }
}
export default GameScene