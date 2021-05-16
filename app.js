let items = document.querySelectorAll('.content-item')
let hint = document.querySelectorAll('.content-item__hint')
let spanList = document.querySelectorAll('.stock')
let cercle = document.querySelector('.cercle')
let price = document.querySelector('#price')
if (window.outerWidth < 425) {
    items[items.length - 1].style.display = 'none'
} else {
    hint[0].style.backgroundColor = '#099CE8'
    hint[0].style.color = '#fff'
    hint[1].classList.remove('hint-blue')
    hint[1].classList.add('hit-orange')
    hint[1].textContent = 'Круглый год'
    price.textContent = '900 ₽'
    spanList.forEach(item => {
        item.style.display = 'none'
    })
    cercle.style.display = 'none'
}


let more = document.querySelectorAll('.more')
let lastItem = document.querySelectorAll('.last-item')

more.forEach((elem, indx) => {
    foo(elem, indx)
})

function foo(elem, index) {
    elem.addEventListener('click', function() {
        let buttonsItem = document.createElement('div')
        buttonsItem.classList.add('content-item__buttons')
        for (let i = 0; i < 5; i++) {
            let button = document.createElement('button')
            button.classList.add('button__item')
            button.textContent = '12:00'
            buttonsItem.append(button)
        }
        buttonsItem.insertAdjacentHTML('beforeend', `<button class="button__item close" type="button">Закрыть</button>`)
        lastItem[index].append(buttonsItem)
        closeMore(index)
        this.style.display = 'none'
    })
}

function closeMore(index) {
    let closeList = document.querySelectorAll('.close')
    closeList.forEach((item) => {
        item.addEventListener('click', () => {
            lastItem[index].lastChild.remove()
            more[index].style.display = 'block'
        })
    })
} 