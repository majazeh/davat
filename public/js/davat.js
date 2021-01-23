document.querySelector('#aside-open').addEventListener('click', function(event) {
    document.querySelector('body').classList.toggle('aside-open')
})

document.querySelector('#content').addEventListener('click', function(event) {
    if (document.querySelector('body').classList.contains('aside-open')) {
        document.querySelector('body').classList.remove('aside-open')
    }
})