const tenthWidth = window.innerWidth / 10
const fifthHeight = window.innerHeight / 5
const shadowOffset = 10
const allowedGuesses = 7
const yourPreviousGuessesString = 'Your previous guesses:'
const winsTrackerString = 'Win: '
const lossesTrackerString = 'Lose: '
let actualNumber = 0
let guessedNumberObject = null
let guessedNumberString = '0'
let previousGuessesObject = null
let previousGuesses = ''
let hintObject = null
let hintString = ' '
let numberOfGuesses = 0
let gameStatus = ''
let wins = 0
let losses = 0
let winsTrackerObject = null
let lossesTrackerObject = null
let fireworksParticles = null
let fireworksTimer = null

function preload() {
  this.load.atlas('flares', './assets/particles/flares.png', './assets/particles/flares.json')

  for (let i = 0; i < 10; i++) {
    loadButton(i.toString(), this)
  }

  this.load.image('ButtonShadow', './assets/Number_Blocks_01/Shadow.png')

  this.load.image('Arrow', './assets/icons/arrow-right.png')
  this.load.image('Cross', './assets/icons/cross-256.png')
  this.load.image('First', './assets/icons/first.png')
  this.load.image('Arrow Shadow', './assets/icons/Arrow Shadow.png')
  this.load.image('Cross Shadow', './assets/icons/Cross Shadow.png')
  this.load.image('First Shadow', './assets/icons/First Shadow.png')
}

function create() {
  pickActualNumber()

  guessedNumberObject = this.add.text(window.innerWidth / 2, fifthHeight, null, {
    color: '#00ff00',
    align: 'center',
    fontSize: 128
  })

  previousGuessesObject = this.add.text(window.innerWidth / 2, fifthHeight / 2, 'Your previous guesses:', {
    color: '#ffff00',
    align: 'center',
    fontSize: 32
  })

  hintObject = this.add.text(tenthWidth, fifthHeight, hintString, {
    align: 'center',
    fontSize: 80
  })

  hintObject.y -= (previousGuessesObject.getBounds().height - hintObject.getBounds().height) / 2

  winsTrackerObject = this.add.text(7 * tenthWidth, fifthHeight, winsTrackerString + wins.toString(), {
    align: 'center',
    fontSize: 64
  })

  lossesTrackerObject = this.add.text(7 * tenthWidth, fifthHeight + winsTrackerObject.getBounds().height, lossesTrackerString + losses.toString(), {
    align: 'center',
    fontSize: 64
  })

  fireworksParticles = this.add.particles('flares', {
    frame: 'white',
    speed: 1000,
    tint: [0xff00ff],
    lifespan: 10000,
    quantity: 250,
    gravityY: 2500,
    on: false
  })

  fireworksParticles.setVisible(false)

  fireworksTimer = this.time.addEvent({
    delay: 1000,
    callback: showFirework,
    callbackScope: this,
    loop: true
  })

  setTextObjectCenter(guessedNumberObject, guessedNumberString)
  setTextObjectCenter(previousGuessesObject, yourPreviousGuessesString)

  setNumberButton(this.add.sprite(1 * window.innerWidth / 5 - tenthWidth, window.innerHeight / 2, '1_yellow'), this, '1')
  setNumberButton(this.add.sprite(2 * window.innerWidth / 5 - tenthWidth, window.innerHeight / 2, '2_yellow'), this, '2')
  setNumberButton(this.add.sprite(3 * window.innerWidth / 5 - tenthWidth, window.innerHeight / 2, '3_yellow'), this, '3')
  setNumberButton(this.add.sprite(4 * window.innerWidth / 5 - tenthWidth, window.innerHeight / 2, '4_yellow'), this, '4')
  setNumberButton(this.add.sprite(5 * window.innerWidth / 5 - tenthWidth, window.innerHeight / 2, '5_yellow'), this, '5')
  setNumberButton(this.add.sprite(1 * window.innerWidth / 5 - tenthWidth, window.innerHeight / 2 + fifthHeight, '6_yellow'), this, '6')
  setNumberButton(this.add.sprite(2 * window.innerWidth / 5 - tenthWidth, window.innerHeight / 2 + fifthHeight, '7_yellow'), this, '7')
  setNumberButton(this.add.sprite(3 * window.innerWidth / 5 - tenthWidth, window.innerHeight / 2 + fifthHeight, '8_yellow'), this, '8')
  setNumberButton(this.add.sprite(4 * window.innerWidth / 5 - tenthWidth, window.innerHeight / 2 + fifthHeight, '9_yellow'), this, '9')
  setNumberButton(this.add.sprite(5 * window.innerWidth / 5 - tenthWidth, window.innerHeight / 2 + fifthHeight, '0_yellow'), this, '0')

  setIconButton(this.add.sprite(2 * window.innerWidth / 5 - tenthWidth, window.innerHeight / 2 + 1.85 * fifthHeight, 'First'), this, 'First Shadow', () => {
    numberOfGuesses = 0
    previousGuesses = ''
    hintObject.text = ''
    gameStatus = ''
    setTextObjectCenter(previousGuessesObject, yourPreviousGuessesString)
    pickActualNumber()
    hintObject.setColor('#ffffff')
    fireworksParticles.visible = false

    clearInput()
    console.log("Reset game.")
  })

  setIconButton(this.add.sprite(3 * window.innerWidth / 5 - tenthWidth, window.innerHeight / 2 + 1.85 * fifthHeight, 'Arrow'), this, 'Arrow Shadow', () => {
    numberOfGuesses += 1;

    if (gameStatus == '') {
      if (Number(guessedNumberString) > actualNumber) {
        if (numberOfGuesses < allowedGuesses) {
          hintObject.text = 'TOO HIGH'
        }
        else {
          playerLoses()
        }
      }
      else if (Number(guessedNumberString) < actualNumber) {
        if (numberOfGuesses < allowedGuesses) {
          hintObject.text = 'TOO LOW'
        }
        else {
          playerLoses()
        }
      }
      else if (Number(guessedNumberString) == actualNumber) {
        playerWins()
      }

      previousGuesses += ' ' + guessedNumberString
      setTextObjectCenter(previousGuessesObject, yourPreviousGuessesString + previousGuesses)
    }

    clearInput()
    console.log("Submitted guess.")
  })

  setIconButton(this.add.sprite(4 * window.innerWidth / 5 - tenthWidth, window.innerHeight / 2 + 1.85 * fifthHeight, 'Cross'), this, 'Cross Shadow', () => {
    clearInput()
    console.log("Cleared input.")
  })
}

function update() {
  let numberOfColors = Math.floor(Math.random() * 3) + 1
  colors = []

  for (let i = 0; i < numberOfColors; i++) {
    colors[i] = Math.floor(Math.random() * 0xffffff)
  }
}

function pickActualNumber() {
  actualNumber = Math.floor(Math.random() * 100)
  console.log(actualNumber)
}

function loadButton(name, scene) {
  scene.load.image(name + '_blue', './assets/Number_Blocks_01/' + name + '_blue.png')
  scene.load.image(name + '_red', './assets/Number_Blocks_01/' + name + '_red.png')
  scene.load.image(name + '_yellow', './assets/Number_Blocks_01/' + name + '_yellow.png')
}

function setTextObjectCenter(textObject, string) {
  textObject.text = string
  textObject.x = x = window.innerWidth / 2 - textObject.getBounds().width / 2
}

function setGuessedNumber() {
  guessedNumberObject.text = guessedNumberString
  guessedNumberObject.x = window.innerWidth / 2 - guessedNumberObject.getBounds().width / 2
}

function setNumberButton(button, scene, name) {
  button.setDepth(1).setInteractive()

  let buttonParticles = scene.add.particles('flares').createEmitter({
    frame: 'white',
    speed: 1000,
    tint: [0xffc516],
    lifespan: 2000,
    quantity: 100,
    on: false
  })

  button.lifted = true
  button.name = name

  button.on('pointerdown', function (pointer) {
    if (button.lifted) {
      this.y += shadowOffset
      button.lifted = false
    }
  }).on('pointerup', function (pointer) {
    if (!button.lifted) {
      this.y -= shadowOffset
      button.lifted = true

      if (guessedNumberString.length < 2 && gameStatus == '') {
        if (guessedNumberString[0] == '0') {
          guessedNumberString = button.name
        }
        else {
          guessedNumberString += button.name
        }
        setGuessedNumber()
        buttonParticles.emitParticleAt(button.x, button.y)
      }
    }
  }).on('pointerout', function (pointer) {
    if (!button.lifted) {
      this.y -= shadowOffset
      button.lifted = true
    }
  })

  scene.add.sprite(button.x, button.y + shadowOffset, 'ButtonShadow').setDepth(0)
}

function setIconButton(button, scene, shadowName, clickFunction) {
  button.setDepth(1).setInteractive()
  button.setScale(0.5)
  button.lifted = true
  
  button.on('pointerdown', function (pointer) {
    if (button.lifted) {
      this.y += shadowOffset
      button.lifted = false
    }
  }).on('pointerup', function (pointer) {
    if (!button.lifted) {
      this.y -= shadowOffset
      button.lifted = true
      clickFunction()
    }
  }).on('pointerout', function (pointer) {
    if (!button.lifted) {
      this.y -= shadowOffset
      button.lifted = true
    }
  })

  scene.add.sprite(button.x, button.y + shadowOffset, shadowName).setDepth(0).setScale(0.5)
}

function clearInput() {
  guessedNumberString = '0'
  setGuessedNumber()
}

function playerWins() {
  wins += 1
  gameStatus = 'win'
  hintObject.text = 'YOU WIN'
  hintObject.setColor('#ff00ff')
  winsTrackerObject.text = winsTrackerString + wins.toString()
  fireworksParticles.setVisible(true)
}

function playerLoses() {
  losses += 1
  gameStatus = 'lose'
  hintObject.text = 'YOU LOSE'
  hintObject.setColor('#ff0000')
  lossesTrackerObject.text = lossesTrackerString + losses.toString()
}

function showFirework() {
  let x = Math.random() * window.innerWidth
  let y = Math.random() * window.innerHeight
  fireworksParticles.emitParticleAt(x, y)

  fireworksTimer.delay = Math.random() * 1000 + 500
}