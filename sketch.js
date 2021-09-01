const w = 5000
const s = 25
const d = w / s

function setup() {
  createCanvas(w, w, SVG)

  // 04 Light Blue
  background(15, 180, 225)

  // // 03 Light Red
  // background(245, 67, 65)

  // // O2 Light Gold
  // background(233, 203, 130)

  // // 01 Light Green
  // background("#52b788")

}

function draw() {
  for (let y = 0; y <= height; y += d) {
    for (let x = 0; x < width; x += d * 2) {
      push()
      drawDiamond(x, y, d)
      pop()
    }
  }
  // save("hishi_01.svg")
  // print("saved svg")
  // noLoop()
}

function drawDiamond(x, y, r) {
  push()
  translate(x, y)

  // 04 Deep Blue
  stroke(7, 160, 220)

  // // 03 Deep Red
  // stroke(200,18,17)

  // // 02 Dark Gold
  // stroke(240,213,136)

  // // 01 Dark Green
  // stroke("#344e41")

  strokeWeight(d / 10)
  noFill()

  beginShape()
  for (let i = 0; i < 4; i++) {
    let R = i % 2 === 0
      ? r
      : r / 2
    vertex(R * cos(PI / 2 * i), R * sin(PI / 2 * i))
  }
  endShape(CLOSE)

  pop()
}