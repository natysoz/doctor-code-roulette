let isRunning = false
const spinRoulette = () => {
    const userInputElement = document.querySelector('#user-number')
    if(!userInputElement.value || isRunning){
        return
    }
    const ballElement = document.querySelector('.ball-container')
    ballElement.style.transition = 'unset'
    ballElement.style.transform = 'rotate(' + 0 + 'deg)'
    isRunning = true
    const button = document.querySelector('button')
    button.style.backgroundColor = 'gray'
    button.innerHTML = 'No more bets'
    setTimeout(() => {
        ballElement.style.transition = 'all 2s ease'

        /* Generate Random slot from 0 - 36 */
        // const slotNumber = 3
        const slotNumber = getRandomIntInclusive(0, 36)

        /* Handle different zeroes */
        if (slotNumber === 0) {
            const randomZero = getRandomIntInclusive(0, 1)
            if (randomZero === 0) {
                ballElement.style.transform = 'rotate(' + 360 + 'deg)'
            }
            if (randomZero === 1) {
                ballElement.style.transform = 'rotate(' + 540 + 'deg)'
            }
        }
        /* Handle all numbers exclude 0 */
        if (slotNumber) {
            const slotDegree = 360 / 38
            const minSpin = 360
            const spin = slotNumber * slotDegree + minSpin
            ballElement.style.transform = 'rotate(' + spin + 'deg)'
        }

        /* find the content of the slot */
        const luckyNumber = rouletteNumbers.find(
            (_, index) => index === slotNumber
        )
        /* Handle Lucky number hit */
        setTimeout(() => {
            const userInputElement = document.querySelector('#user-number')
            document.querySelector('#lucky-number').innerHTML = luckyNumber.n
            if (parseInt(userInputElement.value) === luckyNumber.n) {
                alert('Win!')
            }
            isRunning = false
            button.innerHTML = 'Spin!'
            button.style.backgroundColor = '#4caf50'
        }, 2000)
    }, 200)
}

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rouletteNumbers = [
    {
        n: 0,
        c: 'green',
    },
    {
        n: 28,
        c: 'black',
    },
    {
        n: 9,
        c: 'red',
    },
    {
        n: 26,
        c: 'black',
    },
    {
        n: 30,
        c: 'red',
    },
    {
        n: 11,
        c: 'black',
    },
    {
        n: 7,
        c: 'red',
    },
    {
        n: 20,
        c: 'black',
    },
    {
        n: 32,
        c: 'red',
    },
    {
        n: 17,
        c: 'black',
    },
    {
        n: 5,
        c: 'red',
    },
    {
        n: 22,
        c: 'black',
    },
    {
        n: 34,
        c: 'red',
    },
    {
        n: 15,
        c: 'black',
    },
    {
        n: 3,
        c: 'red',
    },
    {
        n: 24,
        c: 'black',
    },
    {
        n: 36,
        c: 'red',
    },
    {
        n: 31,
        c: 'black',
    },
    {
        n: 1,
        c: 'red',
    },
    {
        n: 0,
        c: 'green',
    },
    {
        n: 27,
        c: 'red',
    },
    {
        n: 10,
        c: 'black',
    },
    {
        n: 25,
        c: 'red',
    },
    {
        n: 26,
        c: 'black',
    },
    {
        n: 12,
        c: 'red',
    },
    {
        n: 8,
        c: 'black',
    },
    {
        n: 19,
        c: 'red',
    },
    {
        n: 31,
        c: 'black',
    },
    {
        n: 18,
        c: 'red',
    },
    {
        n: 6,
        c: 'black',
    },
    {
        n: 21,
        c: 'red',
    },
    {
        n: 33,
        c: 'black',
    },
    {
        n: 16,
        c: 'red',
    },
    {
        n: 4,
        c: 'black',
    },
    {
        n: 23,
        c: 'red',
    },
    {
        n: 35,
        c: 'black',
    },
    {
        n: 14,
        c: 'red',
    },
    {
        n: 2,
        c: 'black',
    },
]
