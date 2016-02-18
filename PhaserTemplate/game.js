window.onload = function () {
    var game = new PhaserTemplate.Game();
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PhaserTemplate;
(function (PhaserTemplate) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 426, 240, Phaser.CANVAS, '', null, false, false);
            this.state.add('Boot', PhaserTemplate.Boot, false);
            this.state.add('Preloader', PhaserTemplate.Preloader, false);
            this.state.add('MainMenu', PhaserTemplate.MainMenu, false);
            this.state.add('Play', PhaserTemplate.Play, false);
            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    PhaserTemplate.Game = Game;
})(PhaserTemplate || (PhaserTemplate = {}));
var PhaserTemplate;
(function (PhaserTemplate) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.init = function () {
            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            Phaser.Canvas.setImageRenderingCrisp(this.game.canvas); // For Canvas, modern approach
            Phaser.Canvas.setSmoothingEnabled(this.game.context, false); // Also for Canvas, legacy approach
            //PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST; // For WebGL
        };
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', 'assets/images/loader.png');
            this.load.image('logo', 'assets/images/bloodcake.png');
        };
        Boot.prototype.create = function () {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.state.start('Preloader');
        };
        return Boot;
    })(Phaser.State);
    PhaserTemplate.Boot = Boot;
})(PhaserTemplate || (PhaserTemplate = {}));
var PhaserTemplate;
(function (PhaserTemplate) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.create = function () {
            this.logo = this.add.sprite(this.world.centerX, -300, 'gametitle');
            this.logo.anchor.setTo(0.5, 0.5);
            this.add.tween(this.logo).to({ y: this.world.centerY }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
            this.input.onDown.addOnce(this.fadeOut, this);
        };
        MainMenu.prototype.fadeOut = function () {
            var tween = this.add.tween(this.logo).to({ y: this.world.height + 200 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        };
        MainMenu.prototype.startGame = function () {
            this.game.state.start('Play', true, false);
        };
        return MainMenu;
    })(Phaser.State);
    PhaserTemplate.MainMenu = MainMenu;
})(PhaserTemplate || (PhaserTemplate = {}));
var PhaserTemplate;
(function (PhaserTemplate) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.apply(this, arguments);
        }
        Play.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'bkg');
            this.music = this.add.audio('music', 1, false);
            this.music.play();
        };
        return Play;
    })(Phaser.State);
    PhaserTemplate.Play = Play;
})(PhaserTemplate || (PhaserTemplate = {}));
var PhaserTemplate;
(function (PhaserTemplate) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
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
        };
        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
            this.game.input.onDown.add(this.gofull, this);
        };
        Preloader.prototype.startMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
        };
        Preloader.prototype.gofull = function () {
            if (this.game.scale.isFullScreen) {
                this.game.scale.stopFullScreen();
            }
            else {
                this.game.scale.startFullScreen(false);
            }
        };
        return Preloader;
    })(Phaser.State);
    PhaserTemplate.Preloader = Preloader;
})(PhaserTemplate || (PhaserTemplate = {}));
//# sourceMappingURL=game.js.map