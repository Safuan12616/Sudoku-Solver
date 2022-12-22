export function drawBoard() {
    const sudokuBoard = document.querySelector("#puzzle")
    const squares = 81

    for (let i=0; i<squares; i++) {
        const inputElement = document.createElement("input")
        
        inputElement.setAttribute('type', 'number')
        inputElement.setAttribute('min', '1')
        inputElement.setAttribute('max', '9')

        sudokuBoard.appendChild(inputElement)
    }
}
