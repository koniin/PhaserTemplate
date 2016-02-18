module PhaserTemplate {
    export class Game extends Phaser.Game {
        constructor() {
            super(426, 240, Phaser.CANVAS, '', null, false, false);
            
            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Play', Play, false);

            this.state.start('Boot');
        }
    }
} 