module PhaserTemplate {
    export class Preloader extends Phaser.State {
        preloadBar: Phaser.Sprite;
        logotopleft: Phaser.Sprite;
        logotopright: Phaser.Sprite;
        preload() {
            //  Set-up our preloader sprite
            this.logotopleft = this.add.sprite(0, 0, 'logo');
            //this.logotopleft.anchor.set(0.5, 0.5);

            this.logotopright = this.add.sprite(this.world.width, 0, 'logo');
            this.logotopright.anchor.set(1, 0);

            //this.logo.scale.set(3);

            this.preloadBar = this.add.sprite(this.world.centerX, this.world.height, 'preloadBar');
            this.preloadBar.anchor.set(0.5, 1.0);
            this.load.setPreloadSprite(this.preloadBar);
 
            //  Load our actual games assets
            this.load.image('gametitle', 'assets/images/logo.png');
            this.load.audio('music', 'assets/sound/defaultloop.wav', true);
            this.load.image('bkg', 'assets/images/bkg.png');
        }

        create() {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);

            this.game.input.onDown.add(this.gofull, this);
        }

        startMainMenu() {
            this.game.state.start('MainMenu', true, false);
        }

        gofull() {
            if (this.game.scale.isFullScreen) {
                this.game.scale.stopFullScreen();
            }
            else {
                this.game.scale.startFullScreen(false);
            }
        }
    }
}