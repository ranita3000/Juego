window.onload = () => {


    var lenguage = document.querySelector('#translateButton');
    var spanish = document.querySelector('#es');
    var translateButton = document.querySelector('#en');
    var closemaintab = document.querySelector('.startgame');
    var firstpage = document.querySelector('.pantallainicio');
    var findcircle = document.querySelector('.encuentracirculo');

    const divs = document.querySelectorAll('div');
    const email = 'patriciagarcagil@gmail.com';

    async function translateText(text) {
        console.log('translateText function called with text:', text);
        try {
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=es|en&de=${encodeURIComponent(email)}`);
            const data = await response.json();
            return data.responseData.translatedText;
        } catch (error) {
            console.error('Error al traducir el texto:', error);
            return null;
        }

    }

    translateButton.addEventListener('click', async () => {
        lenguage.classList.add("close")
        firstpage.classList.add("opened")
        console.log('Translate button clicked.');

        for (const div of divs) {
            if (div.textContent.trim().length > 0) {
                const userInput = div.textContent.trim();
                if (userInput) {
                    try {
                        const translation = await translateText(userInput);
                        if (translation) {
                            const translatedDiv = document.createElement('div');
                            translatedDiv.textContent = translation;
                            div.parentNode.replaceChild(translatedDiv, div);
                        }
                    } catch (error) {
                        console.error('Error al traducir el texto:', error);
                    }
                }
            }
        }


    });















    spanish.addEventListener('click', function () {
        lenguage.classList.add("close")
        firstpage.classList.add("opened")

    });

    closemaintab.addEventListener('click', function () {
        firstpage.classList.remove("opened");
        findcircle.classList.add("opened");
    });

    var firstlevel = document.querySelector('.background1');
    var findtriangle = document.querySelector('.encuentratriangulo');
    var error = document.querySelector('.error');
    var circulo = document.querySelector('.circle');
    var circlelevel = document.querySelector('.circlelevel');
    var circlelevelstart = document.querySelector('#botoncirculo');

    circlelevelstart.addEventListener('click', function () {
        var contador = 10;
        findcircle.classList.remove("opened");
        firstlevel.classList.add("opened");

        comenzarContador = setInterval(function () {
            var contadorElemento = document.querySelector('#contador');
            contadorElemento.textContent = contador;

            if (contador > 0) {
                contador--;
            }
            if (contador === 0) {
                clearInterval(comenzarContador);
                firstlevel.classList.remove("opened");
                error.classList.add("opened");
            }
        }, 1000);

        circulo.addEventListener('click', function () {
            clearInterval(comenzarContador);
            firstlevel.classList.remove("opened");
            findtriangle.classList.add("opened");
        });

        circlelevel.addEventListener('click', function () {
            clearInterval(comenzarContador);
            firstlevel.classList.remove("opened");
            error.classList.add("opened");
        });
    });

    var returnmainpage = document.querySelector('.returnmain');
    returnmainpage.addEventListener('click', function () {
        error.classList.remove("opened");
        firstpage.classList.add("opened");
        clearInterval(comenzarContador); // Detener el contador al regresar a la página principal
    });


    var secondlevel = document.querySelector('.background2');
    var triangulo = document.querySelector('.triangle');
    var trianglelevel = document.querySelector('.trianglelevel');
    var findsquare = document.querySelector('.encuentracuadrado');
    var trianglelevelstart = document.querySelector('#botontriangulo');

    trianglelevelstart.addEventListener('click', function () {
        var contador2 = 10;

        findtriangle.classList.remove("opened")
        secondlevel.classList.add("opened")

        comenzarContador2 = setInterval(function () {
            var contadorElemento2 = document.querySelector('#contador2');
            contadorElemento2.textContent = contador2;

            if (contador2 > 0) {
                contador2--;
            }
            if (contador2 === 0) {
                clearInterval(comenzarContador2);
                secondlevel.classList.remove("opened")
                error.classList.add("opened")
            }
        }, 1000);

        triangulo.addEventListener('click', function () {
            clearInterval(comenzarContador2);
            secondlevel.classList.remove("opened")
            findsquare.classList.add("opened")


        });

        trianglelevel.addEventListener('click', function () {
            clearInterval(comenzarContador2);
            secondlevel.classList.remove("opened")
            error.classList.add("opened")

        });



    });



    var cuadrado = document.querySelector('.square');
    var squarelevel = document.querySelector('.squarelevel');
    var thirdlevel = document.querySelector('.background3');
    var squarelevelstart = document.querySelector('#botoncuadrado');

    squarelevelstart.addEventListener('click', function () {
        var contador3 = 10;
        findsquare.classList.remove("opened")
        thirdlevel.classList.add("opened")

        comenzarContador3 = setInterval(function () {
            var contadorElemento3 = document.querySelector('#contador3');
            contadorElemento3.textContent = contador3;

            if (contador3 > 0) {
                contador3--;
            }
            if (contador3 === 0) {
                clearInterval(comenzarContador3);
                secondlevel.classList.remove("opened")
                error.classList.add("opened")
            }
        }, 1000);

        squarelevel.addEventListener('click', function () {
            clearInterval(comenzarContador3);
            thirdlevel.classList.remove("opened")
            error.classList.add("opened")

        });

        cuadrado.addEventListener('click', function () {
            clearInterval(comenzarContador3);
            thirdlevel.classList.remove("opened")
            findcircle.classList.add("opened")

        });


    });



}
