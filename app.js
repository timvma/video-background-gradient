let videoController = document.querySelectorAll('.video__controller')
    
videoController.forEach(c=> {
    let bg = c.nextElementSibling
    c.addEventListener('play', ()=> {
        bg.play()
        if(!bg.classList.contains('video__controller--movie'))
            bg.classList.add('video__controller--movie')
        
            bg.currentTime = c.currentTime


    })

    c.addEventListener('pause', ()=> {
        bg.pause()
        bg.currentTime = c.currentTime
    })

    c.addEventListener('timeupdate', function() {
        //bg.currentTime = c.currentTime
    });
})