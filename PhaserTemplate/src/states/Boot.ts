module PhaserTemplate {
    export class Boot extends Phaser.State {
        init() {
            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            
            Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);  // For Canvas, modern approach
            Phaser.Canvas.setSmoothingEnabled(this.game.context, false);  // Also for Canvas, legacy approach
            //PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST; // For WebGL
        }

        preload() {
            this.load.image('preloadBar', 'assets/images/loader.png');
            this.load.image('logo', 'assets/images/bloodcake.png');
        }

        create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.state.start('Preloader');
        }
    }
}