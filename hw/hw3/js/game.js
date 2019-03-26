const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const QUARTER_WIDTH = WIDTH / 4;
const QUARTER_HEIGHT = HEIGHT / 4;
const HALF_WIDTH = WIDTH / 2;
const HALF_HEIGHT = HEIGHT / 2;
const THREE_QUARTER_WIDTH = 3 * (WIDTH / 4);
const THREE_QUARTER_HEIGHT = 3 * (HEIGHT / 4);
const MONEY_HEIGHT = 75;

const GRAY = '#4f4f4f';
const YELLOW = '#ffff00';

const CARD_VALUES = {
    '0': 10n,
    '2': 2n,
    '3': 3n,
    '4': 4n,
    '5': 5n,
    '6': 6n,
    '7': 7n,
    '8': 8n,
    '9': 9n,
    'e': 1n,
    'k': 11n,
    'n': 12n,
    'g': 13n
}

let p;
let graphics;
let frames;
let locations = {};
let multipliers = {};
let title;
let speedUpgradeText;
let suitUpgradeText;
let generalUpgradeText;

let money = 0n;
let generalMultiplier = 1n;
let suitMultipliers = {
    'c': 1n,
    'd': 2n,
    'h': 4n,
    's': 8n
};
let speed = 500;

function onCardComplete(cv_key, sm_key) {
    getMultipliers(cv_key, sm_key);
}

function getMultipliers(cv_key, sm_key) {
    let bonus;

    $.ajax({
        type: "GET",
        url: "api/randomMultiplierBonus.php",
        dataType: "json",
        success: function (data, status) {
            addMoney(CARD_VALUES[cv_key] * suitMultipliers[sm_key] * BigInt(data) * generalMultiplier);
            makeNextCard();
        }
    })
}

function addMoney(amount) {
    money += amount;
    title.text = money;
}

function makeNextCard() {
    p.add.image(HALF_WIDTH, HALF_HEIGHT, 'cards', Phaser.Math.RND.pick(frames)).setInteractive();
}

function preload() {
    this.load.atlas('cards', './assets/cards.png', './assets/cards.json');
    this.load.image('table', './assets/table.jpg');
}

function create() {
    p = this;

    this.add.image(HALF_WIDTH, HALF_HEIGHT, 'table');

    graphics = this.add.graphics();

    frames = this.textures.get('cards').getFrameNames();
    frames.splice(40, 1);
    frames.splice(0, 1);

    // console.log(frames);

    for (let i = 0; i < frames.length; i++) {
        const frameName = frames[i];

        if (i < 13) {
            locations[frameName] = { x: QUARTER_WIDTH, y: QUARTER_HEIGHT }
            multipliers[frameName] = 'c';
        }
        else if (i < 26) {
            locations[frameName] = { x: THREE_QUARTER_WIDTH, y: QUARTER_HEIGHT }
            multipliers[frameName] = 'd';
        }
        else if (i < 39) {
            locations[frameName] = { x: QUARTER_WIDTH, y: THREE_QUARTER_HEIGHT }
            multipliers[frameName] = 's';
        }
        else {
            locations[frameName] = { x: THREE_QUARTER_WIDTH, y: THREE_QUARTER_HEIGHT }
            multipliers[frameName] = 'h';
        }
    }

    title = this.add.text(0, 0, money.toString(), {fontFamily: 'Arial', fontSize: MONEY_HEIGHT - 7, color: '#00ff00'});
    console.log(title);
    generalUpgradeText = this.add.text(0, 1 * MONEY_HEIGHT, '-' + values.generalMultiplierCost, {fontFamily: 'Arial', fontSize: MONEY_HEIGHT - 7, color: YELLOW});
    generalUpgradeText['active'] = false;

    makeNextCard();

    this.input.on('gameobjectdown', function (pointer, gameObject) {
        if (gameObject.plus) {
            
        }
        else if (!gameObject.done) {
            const frameName = gameObject.frame.name
            const location = locations[frameName];

            this.tweens.add({
                targets: gameObject,
                x: { value: location.x, duration: speed, ease: 'linear' },
                y: { value: location.y, duration: speed, ease: 'linear' },
                onComplete: () => {
                    gameObject.done = true;
                    onCardComplete(frameName[frameName.length - 1], frameName[0]);
                }
            });
        }
    }, this);
    
    this.input.on('pointerdown', function(pointer) {
        if (pointer.x >= 0 && pointer.x < generalUpgradeText.width && pointer.y >= MONEY_HEIGHT && pointer.y < MONEY_HEIGHT + generalUpgradeText.height) {
            const cost = values.generalMultiplierCost;
            console.log(cost);
            if (money >= cost) {
                addMoney(-1n * cost);
                values.generalMultiplierCost *= values.generalMultiplier;
                generalUpgradeText.text = '-' + values.generalMultiplierCost;
                speed -= 20;
            }
        }
    }, this);
}

function update() {
    graphics.clear();
    graphics.fillStyle(0x000000, 0.5);
    graphics.fillRect(0, 0, WIDTH, MONEY_HEIGHT);
    graphics.fillRect(0, 1 * MONEY_HEIGHT, generalUpgradeText.width, MONEY_HEIGHT);
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: WIDTH,
    height: HEIGHT,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);