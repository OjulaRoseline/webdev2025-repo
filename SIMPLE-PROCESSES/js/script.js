
        document.addEventListener('DOMContentLoaded' ,function(){
            const paragraph = document.getElementById('paraJs')
            const buttonClick = document.getElementById('clickEffect')
            buttonClick.addEventListener('click', function(){
                 paragraph.innerHTML = "Content changed courtsey of JavaScript"
            const newDiv = document.createElement("div")
            newDiv.setAttribute("class","center-box")
            const image = document.createElement("img")
            image.src = "assets/unamed.jpg"
            image.alt ="my local image"
            newDiv.appendChild(image)
            document.getElementById('mainContent').appendChild(newDiv)
                 buttonClick.disabled = true
            })
        })
