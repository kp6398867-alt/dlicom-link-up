import './style.css'

import dilicom1 from './assets/characters/dilicom1.jpg';
import dilicom2 from './assets/characters/dilicom2.jpg';
import dilicom3 from './assets/characters/dilicom3.jpg';
import dilicom4 from './assets/characters/dilicom4.jpg';
import dilicom5 from './assets/characters/dilicom5.jpg';
import dilicom6 from './assets/characters/dilicom6.jpg';
import dilicomArtist from './assets/characters/dilicom-artist.jpg';
import dilicomBanner from './assets/characters/dilicom-banner.jpg';
import dlicomWinScreen from './assets/characters/dlicom-win-screen.png';
import dlicomLoseScreen from './assets/characters/dlicom-lose-screen.png';
// ========================================
// DLICOM - LINK-UP
// MAIN APPLICATION
// ========================================

document.querySelector('#app').innerHTML = `

<div class="game-wrapper">

<nav class="navbar">
  <div class="brand">
    <span class="brand-icon">D</span>
    <span>DLICOM</span>
  </div>

  <div class="nav-links">
    <a href="#about">ABOUT</a>
    <a href="#characters">CHARACTERS</a>
  </div>

  <div class="nav-status">
    <span class="status-dot"></span>
    GAME PRE-ALPHA
  </div>
</nav>

<main class="hero-section">

<img
  src="${dilicomBanner}"
  alt="Dlicom Official Banner"
  class="hero-banner"
>

  <div class="hero-content">

    <div class="eyebrow">
      ✦ YOUR WORLD. YOUR DLICOM.
    </div>

    <h1>
      THE<br>
      <span class="gradient-text">DLICOM</span><br>
      <span class="outline-text">LINK-UP</span>
    </h1>

    <p class="hero-description">
      Connect. Play. Make your mark.
      Your people, your characters, your space.
      Ready to own your social?
    </p>

    <div class="hero-buttons">

      <button id="play-button" class="play-button">
        PLAY NOW ↗
      </button>

      <a href="#characters" class="secondary-button">
        MEET THE DLICOM CREW ↓
      </a>

    </div>

    <div class="hero-stats">
      <div><strong>06</strong><span>CHARACTERS</span></div>
      <div><strong>08×08</strong><span>GAME BOARD</span></div>
      <div><strong>∞</strong><span>CONNECTIONS</span></div>
    </div>

  </div>

  <div class="hero-art">
    <div class="art-circle"></div>

    <div class="character-placeholder main-character">
  <img src="${dilicomArtist}" alt="Dlicom Creator">
  <small>THE DLICOM CREATOR</small>
</div>

    <div class="floating-tag tag-one">OWN YOUR SOCIAL!</div>
    <div class="floating-tag tag-two">MAKE IT YOURS!</div>
  </div>

</main>

<section class="crew-section" id="characters">

  <div class="section-heading">
    <div>
      <span class="eyebrow">WELCOME TO THE DLICOM WORLD</span>
      <h2>YOUR WORLD <span>STARTS HERE.</span></h2>
    </div>
    <span class="crew-count">06 CHARACTERS</span>
  </div>

  <div class="character-grid">

  <div class="crew-card">
    <div class="crew-avatar">
      <img src="${dilicom1}" alt="Peacock">
    </div>
    <h3>PEACOCK</h3>
    <span>THE SHOWSTOPPER</span>
  </div>

  <div class="crew-card">
    <div class="crew-avatar">
      <img src="${dilicom2}" alt="Bubble">
    </div>
    <h3>BUBBLE</h3>
    <span>THE WILD ONE</span>
  </div>

  <div class="crew-card">
    <div class="crew-avatar">
      <img src="${dilicom3}" alt="Neon">
    </div>
    <h3>NEON</h3>
    <span>THE SPEEDSTER</span>
  </div>

  <div class="crew-card">
    <div class="crew-avatar">
      <img src="${dilicom4}" alt="Shadow">
    </div>
    <h3>SHADOW</h3>
    <span>THE MYSTERY</span>
  </div>

  <div class="crew-card">
    <div class="crew-avatar">
      <img src="${dilicom5}" alt="Moon">
    </div>
    <h3>MOON</h3>
    <span>THE DREAMER</span>
  </div>

  <div class="crew-card">
    <div class="crew-avatar">
      <img src="${dilicom6}" alt="Fury">
    </div>
    <h3>FURY</h3>
    <span>THE TROUBLEMAKER</span>
  </div>

</div>

</section>

<footer>
  <div>DLICOM © 2026</div>
  <div>MADE FOR THE DLICOM COMMUNITY ✦</div>
</footer>


<!-- ACTUAL GAME SCREEN -->

<section id="game-screen" class="riot-game">
<div class="game-background-banner"></div>
  <div class="game-topbar">

    <button id="back-button" class="back-button">
      ← BACK
    </button>

    <div class="game-logo">
      DLICOM <span>LINK-UP</span>
    </div>

    <button id="restart-button" class="restart-button">
      ↻ RESTART
    </button>

  </div>


  <div class="game-heading">

    <span class="eyebrow">WELCOME TO DLICOM</span>

    <h1>MAKE YOUR <span>MOVE.</span></h1>

    <p>Match, connect and clear the board. Every move brings your crew closer to the top.</p>

  </div>

    <div class="game-dashboard">

  <div class="dashboard-card">
    <span>SCORE</span>
    <strong id="score">0000</strong>
  </div>

  <div class="dashboard-card">
    <span>MOVES LEFT</span>
    <strong id="moves">30</strong>
  </div>

  <div class="dashboard-card">
    <span>TARGET</span>
    <strong id="target">1500</strong>
  </div>

  <div class="dashboard-card">
    <span>BEST</span>
    <strong id="best-score">0000</strong>
  </div>

</div>


  <div class="board-container">

    <div class="board-top-label">
      <span>✦ THE DLICOM PLAY ZONE</span>
      <span>8 × 8 GRID</span>
    </div>

    <div id="game-board" class="riot-board"></div>

    <div class="board-instructions">
      SWAP TWO ADJACENT TILES. MAKE A MATCH. BUILD YOUR STREAK.
    </div>

  </div>


  <div class="game-message" id="game-message">
    READY, DLICOM? MAKE YOUR FIRST MOVE!
  </div>


  <div class="game-bottom">

    <span>PEACOCK</span>
    <span>BUBBLE</span>
    <span>NEON</span>
    <span>SHADOW</span>
    <span>MOON</span>
    <span>FURY</span>

  </div>


  <div id="game-over" class="game-over hidden">

    <div class="game-over-card">

      <span class="eyebrow">SESSION COMPLETE</span>
<img id="game-result-image" src="${dlicomLoseScreen}" alt="Dlicom game result">
      <h2>GAME <span>OVER!</span></h2>

      <p>Your final score</p>

      <strong id="final-score">0000</strong>

      <button id="play-again">
        PLAY AGAIN ↗
      </button>

    </div>

  </div>

</section>

</div>
`


// ==========================================
// GAME STYLES
// ==========================================

const gameStyles = document.createElement('style')

gameStyles.textContent = `

.riot-game {
  display: none;
  min-height: 100vh;
  padding: 25px 20px 45px;
  background: #071326;
  color: white;
  font-family: inherit;
}

body.game-active .navbar,
body.game-active .hero-section,
body.game-active .crew-section,
body.game-active footer {
  display: none !important;
}

body.game-active .riot-game {
  display: block;
}

.game-topbar {
  max-width: 1050px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-button,
.restart-button {
  background: #10264a;
  border: 1px solid #35577f;
  color: white;
  padding: 12px 18px;
  cursor: pointer;
  font-weight: 800;
  letter-spacing: 1px;
}

.back-button:hover,
.restart-button:hover {
  border-color: #55d9ff;
  color: #55d9ff;
}

.game-logo {
  font-weight: 1000;
  font-size: 22px;
  letter-spacing: 2px;
}

.game-logo span {
  color: #55d9ff;
}

.game-heading {
  text-align: center;
  margin: 45px 0 25px;
}

.game-heading h1 {
  font-size: clamp(30px, 5vw, 48px);
  font-weight: 1000;
  font-style: italic;
  margin: 12px 0;
}

.game-heading h1 span {
  color: #55d9ff;
}

.game-heading p {
  color: #a8bfdf;
}

.game-dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  width: min(94vw, 510px);
  margin: 20px auto;
}

.dashboard-card {
  background: #10264a;
  border: 1px solid #29466f;
  padding: 12px 5px;
  min-width: 0;
  text-align: center;
  border-radius: 8px;
}

.dashboard-card span {
  display: block;
  color: #a8bfdf;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 2px;
}

.dashboard-card strong {
  display: block;
  color: #55d9ff;
  font-size: 27px;
  margin-top: 5px;
}

.board-container {
  width: min(94vw, 510px);
 margin: 15px auto;
  background: #10264a;
  border: 2px solid #55d9ff;
  padding: 12px;
  box-shadow: 0 0 35px #55d9ff15;
}

.riot-tile.empty {
  background: transparent;
  border: 1px dashed #29466f;
  pointer-events: none;
  opacity: 0.2;
}

.board-top-label {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1px;
  color: #55d9ff;
  margin-bottom: 12px;
}

.riot-board {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 5px;
  width: 100%;
}


 /* PREMIUM DLICOM COLLECTIBLE TILES */

.riot-tile {
  aspect-ratio: 1;
  position: relative;
  isolation: isolate;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid rgba(255, 255, 255, 0.22);
  border-radius: 12px;

  cursor: pointer;
  user-select: none;

  background: #20202a;

  box-shadow:
    inset 0 2px 3px rgba(255,255,255,0.25),
    inset 0 -5px 8px rgba(0,0,0,0.35),
    0 4px 0 rgba(0,0,0,0.45),
    0 7px 12px rgba(0,0,0,0.3);

  transition:
    transform .18s ease,
    border-color .18s ease,
    box-shadow .18s ease,
    filter .18s ease;
}

/* Glossy top highlight */

.riot-tile::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;

  background: linear-gradient(
    145deg,
    rgba(255,255,255,0.22) 0%,
    rgba(255,255,255,0.04) 35%,
    transparent 55%,
    rgba(0,0,0,0.18) 100%
  );
}

/* Inner collectible frame */

.riot-tile::after {
  content: "";
  position: absolute;
  inset: 4px;
  z-index: 3;
  pointer-events: none;

  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
}

/* Character artwork */

.riot-tile img {
  width: 100%;
  height: 100%;
  object-fit: contain;

  position: relative;
  z-index: 1;

  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;

  filter: drop-shadow(0 4px 3px rgba(0,0,0,0.4));

  transition: transform .2s ease, filter .2s ease;
  animation: dilicomFloat 3s ease-in-out infinite;
}

/* Hover effect */

.riot-tile:hover {
  transform: translateY(-3px) scale(1.04);
  z-index: 4;

  filter: brightness(1.15);

  box-shadow:
    inset 0 2px 3px rgba(255,255,255,0.3),
    0 6px 0 rgba(0,0,0,0.45),
    0 10px 18px rgba(0,0,0,0.4);
}

.riot-tile:hover img {
  filter: drop-shadow(0 5px 8px rgba(223,255,0,0.55));
  animation-play-state: paused;
  transform: scale(1.08);
}

/* Selected character */

.riot-tile.selected {
  border: 2px solid #55d9ff;
  transform: scale(1.08);
  z-index: 5;

  box-shadow:
    0 0 0 2px rgba(223,255,0,0.2),
    0 0 12px #55d9ff,
    0 0 25px rgba(223,255,0,0.45);
}

/* Match animation state */

.riot-tile.matching {
  animation: dilicomSmash 0.35s ease-out forwards;
  pointer-events: none;
}

@keyframes dilicomSmash {
  0% {
    transform: scale(1);
    opacity: 1;
    filter: brightness(1);
  }

  35% {
    transform: scale(1.3) rotate(8deg);
    opacity: 1;
    filter: brightness(2.5);
  }

  100% {
    transform: scale(0) rotate(-15deg);
    opacity: 0;
    filter: brightness(3);
  }
}

/* Individual character colours */

.riot-tile.type-0 {
  background: linear-gradient(145deg, #3d5bff, #173866);
  border-color: #55d9ff;
}

.riot-tile.type-1 {
  background: linear-gradient(145deg, #e65bff, #71328c);
  border-color: #f0a0ff;
}

.riot-tile.type-2 {
  background: linear-gradient(145deg, #55d9ff, #1762a8);
  border-color: #a5eaff;
}

.riot-tile.type-3 {
  background: linear-gradient(145deg, #173866, #08172d);
  border-color: #8ba6cc;
}

.riot-tile.type-4 {
  background: linear-gradient(145deg, #3d5bff, #243a9a);
  border-color: #a8baff;
}

.riot-tile.type-5 {
  background: linear-gradient(145deg, #ffc94a, #a86b19);
  border-color: #ffe0a0;
}

.board-instructions {
  text-align: center;
  font-size: 10px;
  letter-spacing: 1.5px;
  color: #a8bfdf;
  margin-top: 15px;
}

.game-message {
  text-align: center;
  color: #55d9ff;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 12px;
  min-height: 20px;
}

.game-bottom {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 35px;
  color: #829abd;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1px;
}

.game-over {
  position: fixed;
  inset: 0;
  background: #000000dd;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.game-over.hidden {
  display: none;
}

.game-over-card {
  background: linear-gradient(160deg, #07112b, #111a50 65%, #171044);
  border: 1px solid #5267ff;
  border-radius: 22px;
  padding: clamp(12px, 2.2vw, 26px);
  width: min(94vw, 980px);
  max-height: 94vh;
  overflow-y: auto;
  text-align: center;
  box-shadow: 0 24px 90px #0009;
}
#game-result-image {
  display: block;
  width: min(100%, 900px);
  max-height: 68vh;
  height: auto;
  object-fit: contain;
  margin: 0 auto 14px;
  border: 1px solid #5267ff;
  border-radius: 18px;
  box-shadow: 0 18px 70px #1428ff55;
  animation: resultImageEntrance 0.45s ease-out;
}

@keyframes resultImageEntrance {
  from { opacity: 0; transform: translateY(16px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.game-over-card h2 {
  display: none;
  font-size: 38px;
  font-style: italic;
}

.game-over-card h2 span {
  color: #55d9ff;
}

.game-over-card p {
  color: #a8bfdf;
  margin: 8px 0 0;
}

.game-over-card > strong {
  display: block;
  color: #55d9ff;
  font-size: 48px;
  margin: 15px;
}

.game-over-card button {
  background: #55d9ff;
  border: none;
  padding: 15px 30px;
  font-weight: 1000;
  cursor: pointer;
  margin-top: 15px;
}

@media(max-width: 550px) {

  .game-topbar {
    gap: 8px;
  }

  .game-logo {
    font-size: 15px;
  }

  .back-button,
  .restart-button {
    padding: 10px;
    font-size: 10px;
  }

  .dashboard-card {
  padding: 10px 4px;
  min-width: 0;
}

  .riot-board {
    gap: 3px;
  }

  .board-container {
    padding: 8px;
  }

}

@keyframes dilicomFloat {
  0%, 100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-5px) scale(1.03);
  }
}

`

document.head.appendChild(gameStyles)


// ==========================================
// GAME ENGINE
// ==========================================

const SIZE = 8
const TYPES = 6

const TARGET_SCORE = 1500
const TOTAL_MOVES = 30


const characters = [
  { name: 'PEACOCK', letter: 'P', image: dilicom1 },
  { name: 'BUBBLE', letter: 'B', image: dilicom2 },
  { name: 'NEON', letter: 'N', image: dilicom3 },
  { name: 'SHADOW', letter: 'S', image: dilicom4 },
  { name: 'MOON', letter: 'M', image: dilicom5 },
  { name: 'FURY', letter: 'F', image: dilicom6 }
]

let board = []
let score = 0
let movesLeft = TOTAL_MOVES
let selected = null
let playing = false
let busy = false

const boardElement = document.querySelector('#game-board')
const scoreElement = document.querySelector('#score')
const movesElement = document.querySelector('#moves')
const targetElement = document.querySelector('#target')
const bestElement = document.querySelector('#best-score')
targetElement.textContent = TARGET_SCORE
const messageElement = document.querySelector('#game-message')
const gameOverElement = document.querySelector('#game-over')

let bestScore = Number(localStorage.getItem('dilicomBest') || 0)

bestElement.textContent = String(bestScore).padStart(4, '0')


// ==========================================
// BOARD GENERATION
// ==========================================

function randomType() {
  return Math.floor(Math.random() * TYPES)
}

// Get the original character type from a normal or special tile

function createBoard() {

  board = []

  for (let row = 0; row < SIZE; row++) {

    board[row] = []

    for (let col = 0; col < SIZE; col++) {

      let type

      do {
        type = randomType()
      } while (
        (col >= 2 &&
          board[row][col - 1] === type &&
          board[row][col - 2] === type) ||

        (row >= 2 &&
          board[row - 1][col] === type &&
          board[row - 2][col] === type)
      )

      board[row][col] = type
    }
  }
}


// ==========================================
// RENDER BOARD
// ==========================================

function renderBoard() {

  boardElement.innerHTML = ''

  for (let row = 0; row < SIZE; row++) {

    for (let col = 0; col < SIZE; col++) {

      const type = board[row][col]

      const tile = document.createElement('button')

      tile.className = 'riot-tile'

      if (type === null) {

        tile.classList.add('empty')
        tile.disabled = true

      } else {

  const characterType = getTileType(type)

tile.classList.add(`type-${characterType}`)

// Identify special tiles
if (isSpecialTile(type)) {
  const specialKind = Math.floor(type / 10)

  tile.classList.add('special-tile')

  if (specialKind === 1) {
    tile.classList.add('special-horizontal')
  } else if (specialKind === 2) {
    tile.classList.add('special-vertical')
  }
}

// Display character artwork
const characterImage = document.createElement('img')

characterImage.src = characters[characterType].image
characterImage.alt = characters[characterType].name
characterImage.draggable = false

tile.appendChild(characterImage)

}

      if (
        selected &&
        selected.row === row &&
        selected.col === col
      ) {
        tile.classList.add('selected')
      }

      tile.dataset.row = row
      tile.dataset.col = col

      boardElement.appendChild(tile)
    }
  }
}


// ==========================================
// FIND MATCHES
// ==========================================

function findMatches() {

  const matches = new Set()

  // Horizontal matches

  for (let row = 0; row < SIZE; row++) {

    for (let col = 0; col < SIZE - 2; col++) {

      const type = board[row][col]

      if (
        type !== null &&
        type === board[row][col + 1] &&
        type === board[row][col + 2]
      ) {

        let next = col

        while (
          next < SIZE &&
          board[row][next] === type
        ) {
          matches.add(`${row},${next}`)
          next++
        }
      }
    }
  }


  // Vertical matches

  for (let col = 0; col < SIZE; col++) {

    for (let row = 0; row < SIZE - 2; row++) {

      const type = board[row][col]

      if (
        type !== null &&
        type === board[row + 1][col] &&
        type === board[row + 2][col]
      ) {

        let next = row

        while (
          next < SIZE &&
          board[next][col] === type
        ) {
          matches.add(`${next},${col}`)
          next++
        }
      }
    }
  }

  return matches
}


// ========================================
// DETECT LINE BLASTER CREATION
// ========================================

function findLineBlasterCandidate() {

  // Check horizontal matches of 4 or more
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col <= SIZE - 4; col++) {

      const type = getTileType(board[row][col])

      if (
        board[row][col] !== null &&
        board[row][col + 1] !== null &&
        board[row][col + 2] !== null &&
        board[row][col + 3] !== null &&
        getTileType(board[row][col + 1]) === type &&
        getTileType(board[row][col + 2]) === type &&
        getTileType(board[row][col + 3]) === type
      ) {
        return {
          row,
          col: col + 1,
          kind: 1
        }
      }
    }
  }

  // Check vertical matches of 4 or more
  for (let col = 0; col < SIZE; col++) {
    for (let row = 0; row <= SIZE - 4; row++) {

      const type = getTileType(board[row][col])

      if (
        board[row][col] !== null &&
        board[row + 1][col] !== null &&
        board[row + 2][col] !== null &&
        board[row + 3][col] !== null &&
        getTileType(board[row + 1][col]) === type &&
        getTileType(board[row + 2][col]) === type &&
        getTileType(board[row + 3][col]) === type
      ) {
        return {
          row: row + 1,
          col,
          kind: 2
        }
      }
    }
  }

  return null
}

// ==========================================
// CLEAR MATCHES
// ==========================================

function getTileType(tile) {
  return tile % 10
}

function isSpecialTile(tile) {
  return tile >= 10
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Display normal Dlicom character
async function resolveMatches() {

  while (true) {

    const matches = findMatches()

    if (matches.size === 0) break

    score += matches.size * 10

    updateScore()

    messageElement.textContent =
      `${matches.size} DLICOM CHARACTERS CLEARED!`

    // Play smash animation
    for (const position of matches) {

      const [row, col] = position.split(',').map(Number)

      const tile = boardElement.querySelector(
        `[data-row="${row}"][data-col="${col}"]`
      )

      if (tile) {
        tile.classList.add('matching')
      }
    }

    await sleep(350)

    // Remove matched characters
    for (const position of matches) {

      const [row, col] = position.split(',').map(Number)

      board[row][col] = null
    }

    renderBoard()

    // Drop characters down
    for (let col = 0; col < SIZE; col++) {

      let emptyRow = SIZE - 1

      for (let row = SIZE - 1; row >= 0; row--) {

        if (board[row][col] !== null) {

          board[emptyRow][col] = board[row][col]

          if (emptyRow !== row) {
            board[row][col] = null
          }

          emptyRow--
        }
      }

      // Refill empty spaces
      for (let row = emptyRow; row >= 0; row--) {
        board[row][col] = randomType()
      }
    }

    renderBoard()

    await sleep(200)
  }

  messageElement.textContent = 'KEEP THE CONNECTION GOING!'
}


// ==========================================
// SWAP TILES
// ==========================================

async function swapTiles(first, second) {

  if (busy || !playing) return

  const adjacent =
    Math.abs(first.row - second.row) +
    Math.abs(first.col - second.col) === 1

  if (!adjacent) return

  busy = true

  const temp = board[first.row][first.col]

  board[first.row][first.col] =
    board[second.row][second.col]

  board[second.row][second.col] = temp

  selected = null

  renderBoard()

  await sleep(150)

  const matches = findMatches()

  if (matches.size === 0) {

    const temp = board[first.row][first.col]

    board[first.row][first.col] =
      board[second.row][second.col]

    board[second.row][second.col] = temp

    renderBoard()

    messageElement.textContent =
      'NO MATCH! TRY ANOTHER MOVE.'

  } else {

  movesLeft--

  movesElement.textContent = movesLeft

  await resolveMatches()

  if (score >= TARGET_SCORE || movesLeft <= 0) {
    endGame()
  }

}

  busy = false
}


// ==========================================
// TILE CLICK
// ==========================================

boardElement.addEventListener('click', async (event) => {

  const tile = event.target.closest('.riot-tile')

  if (!tile || !playing || busy) return

  const row = Number(tile.dataset.row)
  const col = Number(tile.dataset.col)

  const current = { row, col }

  if (!selected) {

    selected = current

    renderBoard()

    return
  }

  if (
    selected.row === row &&
    selected.col === col
  ) {

    selected = null

    renderBoard()

    return
  }

  const previous = selected

  const adjacent =
    Math.abs(previous.row - row) +
    Math.abs(previous.col - col) === 1

  if (!adjacent) {

    selected = current

    renderBoard()

    return
  }

  await swapTiles(previous, current)

})


// ==========================================
// SCORE
// ==========================================

function updateScore() {

  scoreElement.textContent =
    String(score).padStart(4, '0')

}


// ==========================================
// TIMER
// ==========================================


// ==========================================
// GAME OVER
// ==========================================

function endGame() {

  playing = false

  const won = score >= TARGET_SCORE
  const gameTitle = gameOverElement.querySelector('h2')
  const gameLabel = gameOverElement.querySelector('.eyebrow')
  const gameDescription = gameOverElement.querySelector('p')

  const resultImage = document.querySelector('#game-result-image')

  if (won) {
    resultImage.src = dlicomWinScreen
    resultImage.alt = 'Dlicom victory screen: Damn you won!'
    gameLabel.textContent = 'YOU OWNED THAT ROUND!'
    gameTitle.innerHTML = 'YOU <span>WIN!</span>'
    gameDescription.textContent = `"THAT'S THE DLICOM WAY. ONE MORE ROUND?"`
  } else {
    resultImage.src = dlicomLoseScreen
    resultImage.alt = 'Dlicom game over screen: Oops, you lost!'
    gameLabel.textContent = 'ROUND COMPLETE'
    gameTitle.innerHTML = 'GAME <span>OVER!</span>'
    gameDescription.textContent = `"EVERY MOVE COUNTS. READY TO TOP YOUR SCORE?"`
  }

  document.querySelector('#final-score').textContent =
    String(score).padStart(4, '0')

  if (score > bestScore) {

    bestScore = score

    localStorage.setItem('dilicomBest', bestScore)

    bestElement.textContent =
      String(bestScore).padStart(4, '0')
  }

  gameOverElement.classList.remove('hidden')
}


// ==========================================
// START / RESTART GAME
// ==========================================

function startGame() {

  score = 0
  movesLeft = TOTAL_MOVES
  selected = null

  playing = true
  busy = false

  gameOverElement.classList.add('hidden')

  scoreElement.textContent = '0000'
  movesElement.textContent = TOTAL_MOVES
  targetElement.textContent = TARGET_SCORE

  messageElement.textContent =
    'READY, DLICOM? MAKE YOUR FIRST MOVE!'

  createBoard()
  renderBoard()

}


// ==========================================
// NAVIGATION
// ==========================================

const playButton = document.querySelector('#play-button')

const backButton = document.querySelector('#back-button')

const restartButton = document.querySelector('#restart-button')

const playAgainButton = document.querySelector('#play-again')


playButton.addEventListener('click', () => {

  document.body.classList.add('game-active')

  startGame()

  window.scrollTo(0, 0)

})


backButton.addEventListener('click', () => {

  playing = false


  document.body.classList.remove('game-active')

  window.scrollTo(0, 0)

})


restartButton.addEventListener('click', () => {

  startGame()

})


playAgainButton.addEventListener('click', () => {

  startGame()

})


// ==========================================
// INITIALIZATION
// ==========================================

console.log('DLICOM LINK-UP INITIALIZED')
