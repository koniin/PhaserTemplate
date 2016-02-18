module PhaserTemplate {
    export class Play extends Phaser.State {
        background: Phaser.Sprite;
        music: Phaser.Sound;

        create() {
            this.background = this.add.sprite(0, 0, 'bkg');

            this.music = this.add.audio('music', 1, false);
            this.music.play();
        }
    }
} 