let videoController = document.querySelectorAll('.video__controller')
    
videoController.forEach(c=> {
    let bg = c.nextElementSibling
    console.log(bg)
    
    c.addEventListener('play', ()=> {
        
        bg.play()
        if(!bg.classList.contains('video__controller--movie'))
            bg.classList.add('video__controller--movie')
    })
    c.addEventListener('pause', ()=> {
        bg.pause()
    })
    c.addEventListener('timeupdate', function() {
        bg.currentTime = c.currentTime
    });
})