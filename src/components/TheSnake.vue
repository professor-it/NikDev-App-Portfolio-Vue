<template>
  <div class="snake__wrapper">
    <canvas width="780" height="400" id="canvas"></canvas>
    <div class="dpnone">
      <div class="dpnone__title">Добро пожаловать!</div>
      <div class="dpnone__title2">Хочешь получить скидку на услуги?</div>
      <div class="dpnone__desc">Тогда заходи на эту страницу, с компьютера или ноутбука, и получи возможность <br>
        выиграть скидку, сыграв в игру знакомую каждому ☻
      </div>
      <div class="dpnone__desc">Не упусти свой шанс!</div>
    </div>
  </div>
</template>

<script>
	import {onMounted} from '@vue/runtime-core'

	export default {
		setup() {
			class createSnake {
				constructor(gameContext, gameDiv, gameBack) {
					this.gameContext = gameContext
					this.gameDiv = gameDiv
					this.gameBack = gameBack
					this.snakeX = 2
					this.snakeY = this.snakeX
					this.vel = 1
					this.velX = this.vel
					this.velY = 0
					this.permision = false
					this.snakeTrail = [{'x': this.snakeX, 'y': this.snakeY}]
				}

				setTrail() {


					let i = this.snakeTrail.length - 1

					for (i; i >= 0; i--) {
						if (i != 0) {
							this.snakeTrail[i] = this.snakeTrail[i - 1]
						} else {
							this.snakeTrail[0] = {'x': this.snakeX, 'y': this.snakeY}
						}
					}

				}

				clearSnake() {
					while (this.snakeTrail.length > 1) {
						this.snakeTrail.pop()
					}
				}

				lose() {

					for (let i = 0; i < this.snakeTrail.length; i++) {

						if (i != 0 && this.snakeTrail[0].x == this.snakeTrail[i].x &&
							this.snakeTrail[0].y == this.snakeTrail[i].y) {

							this.velX = this.velY = 0

							this.gameBack.lose = true
							this.gameBack.oldScore = this.gameBack.score
							this.gameBack.score = 0
							this.clearSnake()

							document.getElementById('restart').style.display = 'block'

							return true
						} else {
							//nada
						}
					}
					return false
				}

				draw() {
					this.moveSnake()
					this.setTrail()
					this.lose()

					for (let i = 0; i < this.snakeTrail.length; i++) {
						if (i == 0) {
							this.gameContext.fillStyle = '#c32285'
						} else {
							this.gameContext.fillStyle = '#2ecc71'
						}
						this.gameContext.fillRect(this.snakeTrail[i].x * this.gameDiv,
							this.snakeTrail[i].y * this.gameDiv, this.gameDiv - 2, this.gameDiv - 2)
					}
				}

				setVel(theKeyCode) {

					let setXY = (x, y) => {
						this.velX = x
						this.velY = y
					}
					if (!this.gameBack.lose) {

						if ((theKeyCode == 65) && this.permision) {//left
							setXY(-this.vel, 0)
							this.permision = !this.permision
						} else if ((theKeyCode == 87) && !this.permision) {//up
							setXY(0, -this.vel)
							this.permision = !this.permision
						} else if ((theKeyCode == 68) && this.permision) {//right
							setXY(this.vel, 0)
							this.permision = !this.permision
						} else if ((theKeyCode == 83) && !this.permision) {//down
							setXY(0, this.vel)
							this.permision = !this.permision
						} else {
							//none
						}

					} else if (theKeyCode == 13) {
						this.gameBack.lose = false
						this.velX = this.vel
						this.permision = false
						document.getElementById('restart').style.display = 'none'
					}

				}

				moveSnake() {
					this.snakeX += this.velX
					this.snakeY += this.velY

					if (this.snakeX > 38) {
						this.snakeX = 0
					} else if (this.snakeX < 0) {
						this.snakeX = 38
					}

					if (this.snakeY > 19) {
						this.snakeY = 0
					} else if (this.snakeY < 0) {
						this.snakeY = 19
					}
				}

			}

			class createApple {
				constructor(snake, gameContext, gameDiv, gameBack) {
					this.snake = snake
					this.gameContext = gameContext
					this.gameDiv = gameDiv
					this.gameBack = gameBack
					this.appleX = 35
					this.appleY = 15
				}

				gotEat() {
					if (this.appleX == this.snake.snakeTrail[0].x &&
						this.appleY == this.snake.snakeTrail[0].y) {

						this.snake.snakeTrail.push({'x': '', 'y': ''})

						this.gameBack.score += 10

						this.appleX = Math.floor(Math.random() * 38)
						this.appleY = Math.floor(Math.random() * 19)
					} else {

					}
				}

				draw() {
					this.gotEat()
					this.gameContext.fillStyle = 'red'
					this.gameContext.beginPath()
					this.gameContext.arc((this.appleX * this.gameDiv) + (this.gameDiv / 2),
						(this.appleY * this.gameDiv) + (this.gameDiv / 2), this.gameDiv / 2.5, 0, 2 * Math.PI)
					this.gameContext.fill()
				}
			}

			class createGameBack {
				constructor(gameContext, gameWindow) {
					this.gameContext = gameContext
					this.gameWindow = gameWindow
					this.score = 0
					this.lose = true
					this.oldScore = 0
				}

				draw() {
					this.gameContext.fillStyle = '#101010'
					this.gameContext.fillRect(0, 0, this.gameWindow.width, this.gameWindow.height)

					this.gameContext.fillStyle = '#fff'
					this.gameContext.font = '14px Arial'
					this.gameContext.fillText(this.score, 745, 390)

					if (this.lose) {
						if (this.oldScore == 0) {
							this.gameContext.fillStyle = '#fff'
							this.gameContext.font = 'bold 30px Arial'
							this.gameContext.textAlign = 'center'
							this.gameContext.fillText('Хочешь получить скидку?', 390, 100)

							this.gameContext.fillStyle = '#fff'
							this.gameContext.font = '18px Arial'
							this.gameContext.textAlign = 'center'
							this.gameContext.fillText('Тогда набери 450 баллов в змейке', 390, 150)
							this.gameContext.fillText('и получи скидку на услуги в 10%', 390, 175)
							this.gameContext.fillText('Также ты можешь получить Супер-Промокод', 390, 230)
							this.gameContext.fillText('но для этого ты потратишь немало усилий.', 390, 255)
							this.gameContext.fillText('Удачи!', 390, 280)

							this.gameContext.fillStyle = '#fff'
							this.gameContext.font = '16px Arial'
							this.gameContext.textAlign = 'center'
							this.gameContext.fillText('Ты готов? Тогда жми Enter!', 390, 350)
						}
						if (this.oldScore > 0 && this.oldScore < 850) {
							this.gameContext.fillStyle = '#fff'
							this.gameContext.font = 'bold 30px Arial'
							this.gameContext.textAlign = 'center'
							this.gameContext.fillText('Конец игры', 390, 150)

							this.gameContext.fillStyle = '#fff'
							this.gameContext.font = '20px Arial'
							this.gameContext.textAlign = 'center'
							this.gameContext.fillText(`Ваш счет: ${this.oldScore}`, 390, 185)

							this.gameContext.fillStyle = '#fff'
							this.gameContext.font = '15px Arial'
							this.gameContext.textAlign = 'center'
							this.gameContext.fillText('Хочешь попробовать ещё раз? Жми Enter!', 390, 350)
						}
						if (this.oldScore >= 450 && this.oldScore < 850) {
							this.gameContext.fillStyle = '#fff'
							this.gameContext.font = 'bold 30px Arial'
							this.gameContext.textAlign = 'center'
							this.gameContext.fillText('Конец игры', 390, 130)

							this.gameContext.fillStyle = '#fff'
							this.gameContext.font = '16px Arial'
							this.gameContext.textAlign = 'center'
							this.gameContext.fillText(`Ваш счет: ${this.oldScore}`, 390, 160)
							this.gameContext.fillText(`Поздравляем! Ваш Промокод на скидку в 10%`, 390, 200)
							this.gameContext.fillText(`Укажите его при оформлении заказа воспользовавшись"`, 390, 225)
							this.gameContext.fillText(`одним из способов связи на странице "Контакты"`, 390, 250)

							this.gameContext.fillStyle = '#d72792'
							this.gameContext.font = 'Bold 26px Arial'
							this.gameContext.textAlign = 'center'
							this.gameContext.fillText(`B1sbee`, 390, 290)

							this.gameContext.fillStyle = '#fff'
							this.gameContext.font = '15px Arial'
							this.gameContext.textAlign = 'center'
							this.gameContext.fillText('Хочешь получить мега-промокод? Жми Enter!', 390, 350)
							this.gameContext.fillText('Но помни, это будет сложно!', 390, 372)
						}
						if (this.oldScore >= 850) {
							this.gameContext.fillStyle = '#fff'
							this.gameContext.font = 'bold 30px Arial'
							this.gameContext.textAlign = 'center'
							this.gameContext.fillText('Поздравляем!', 390, 130)

							this.gameContext.fillStyle = '#fff'
							this.gameContext.font = '16px Arial'
							this.gameContext.textAlign = 'center'
							this.gameContext.fillText(`Ваш счет: ${this.oldScore}`, 390, 160)
							this.gameContext.fillText(`Ваш Супер-промокод на скидку в 30%`, 390, 200)
							this.gameContext.fillText(`Укажите его при оформлении заказа воспользовавшись"`, 390, 225)
							this.gameContext.fillText(`одним из способов связи на странице "Контакты"`, 390, 250)

							this.gameContext.fillStyle = '#c32285'
							this.gameContext.font = 'Bold 26px Arial'
							this.gameContext.textAlign = 'center'
							this.gameContext.fillText(`Mercy`, 390, 290)
						}
						this.gameContext.fillStyle = '#fff'
						this.gameContext.font = 'bold 14px Arial'
						this.gameContext.textAlign = 'center'
						this.gameContext.fillText('Управление', 80, 300)

						this.gameContext.font = '12px Arial'
						this.gameContext.textAlign = 'center'
						this.gameContext.fillText('W', 80, 335)
						this.gameContext.fillText('S', 80, 375)
						this.gameContext.fillText('A', 58, 355)
						this.gameContext.fillText('D', 102, 355)
					}
				}
			}


			onMounted(() => {
				const app = document.getElementById('canvas')
				app.style.letterSpacing = '2px'
				const gameContext = app.getContext('2d')
				const gameDiv = 20

				const gameBack = new createGameBack(gameContext, app)
				const snake = new createSnake(gameContext, gameDiv, gameBack)
				const apple = new createApple(snake, gameContext, gameDiv, gameBack)

				setInterval(function () {
					gameBack.draw()
					snake.draw()
					apple.draw()

				}, 98)

				//Controls
				document.addEventListener('keydown', () => {
					snake.setVel(event.keyCode)
				})
			})
		}
	}
</script>

<style scoped lang="scss">
  .snake__wrapper {
    background-color: #101010;
    height: 403px;
    text-align: center;
    position: relative;

    .dpnone {
      display: none;
    }

    #canvas {
      border-bottom: 3px solid #2d9687;
    }
  }

  @media (min-width: 320px) and (max-width: 1023px) {
    .snake__wrapper {
      height: auto;

      #canvas {
        display: none;
      }

      .dpnone {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
        background-color: #101010;
        border-bottom: 3px solid #2d9687;
        margin-top: 70px;
        padding-bottom: 30px;
        letter-spacing: 1px;

        &__title {
          font-size: 20px;
        }

        &__title2 {
          margin: 15px 0;
          font-size: 20px;
          color: #ff2bab;
        }

        &__desc {
          font-size: 14px;
          color: #38d2bb;
          line-height: 20px;
        }
      }
    }
  }
</style>