module PhaserTemplate {
    export class MainMenu extends Phaser.State {
        logo: Phaser.Sprite;

        create() {
            this.logo = this.add.sprite(this.world.centerX, -300, 'gametitle');
            this.logo.anchor.setTo(0.5, 0.5);

            this.add.tween(this.logo).to({ y: this.world.centerY }, 2000, Phaser.Easing.Elastic.Out, true, 2000);

            this.input.onDown.addOnce(this.fadeOut, this);
        }

        fadeOut() {
            var tween = this.add.tween(this.logo).to({ y: this.world.height + 200 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        }

        startGame() {
            this.game.state.start('Play', true, false);
        }
    }
}