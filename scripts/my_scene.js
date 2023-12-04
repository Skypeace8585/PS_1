
// MyScene1クラス
// 他のJSファイルから呼び出された場合はシーンを返す
class MyScene extends Phaser.Scene {

    // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
    constructor() {
        super({ key: 'MyScene', active: true });
    }

    // シーンの事前読み込み処理
    preload() {
         // 画像の読み込み(使用する時の名前, パス)
        this.load.image('back', 'assets/background.png');
        this.load.image('taro', 'assets/taro.png');
        this.load.image('jiro', 'assets/jiro.png');
        this.load.image('hanako', 'assets/hanako.png');
    }

    // シーン初期化処理
    create() {
         // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.add.image(D_WIDTH/2, D_HEIGHT/2, 'back');
        // this.taro = this.physics.add.image(D_WIDTH/2, D_HEIGHT/2, 'taro');
        this.taro = this.add.image(D_WIDTH/2, D_HEIGHT/2, 'taro');
        this.jiro = this.add.image(D_WIDTH/4, D_HEIGHT/4, 'jiro');
        this.text = this.add.text(600, 400, 'My world').setFontSize(40).setColor('#ff0');
        // this.player_direction = 1;
        // this.taro.angle = 0;
        this.keys = {};
        this.keys.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keys.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keys.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.helloText = this.add.text(100, 50, '');
        this.heyText = this.add.text(100, 50, '');
        this.keys.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }
    
  // 毎フレーム実行される繰り返し処理
    update() {
        // if(this.taro.y >= D_HEIGHT - 100) this.player_direction = -1
        // if (this.taro.y <= 100) this.player_direction = 1;
        // if(this.taro.x >= D_WIDTH - 100) this.player_direction = -1;
        // if (this.taro.x <= 100) this.player_direction = 1;
        // if (this.player_direction == 1) {
        //     this.taro.x += 10;
        //     this.taro.y += 10;
        // } else {
        //     this.taro.x -= 10;
        //     this.taro.y -= 10;
        // }
        // this.taro.angle += 1;
        // this.taro.setAngle(this.taro.angle); 
        // this.taro.setVelocityX(100);
        // this.taro.setVelocityY(100);
        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown) {
            this.taro.x -= 50;
            this.jiro.x += 50;
        } else if (cursors.right.isDown) {
            this.taro.x += 50;
            this.jiro.x -= 50;
        }
        if(this.keys.keyA.isDown){
            this.helloText.setText('Hello!');
        }else if(this.keys.keyS.isDown){
            this.heyText.setText('Hey!');
        }else if(this.keys.keyD.isDown){
            this.helloText.setText('');
            this.heyText.setText('');
        }
        if(this.keys.keyW.isDown){
            let randx = Phaser.Math.Between(100, 400);
             this.hanako = this.add.image(randx, 100, 'hanako');
        }
    }
}