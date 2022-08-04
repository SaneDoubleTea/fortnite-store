document.querySelectorAll('.btn--form').forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.preventDefault()
        let temp = document.querySelectorAll("div[data-count]")
        let eTarget = e.target.closest('.payment-form-step').dataset.count
        if(eTarget  == temp[temp.length - 1].dataset.count) {
            temp[temp.length - 1].style.display = 'none'
        }
        else {
            temp[eTarget - 1].style.display = 'none'
            temp[eTarget].style.display = 'block'
        }
    })
})