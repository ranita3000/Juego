window.onload = () => {



    var introduccion = document.querySelector('#introduccion');
    var nextslide = document.querySelector('#botonintroduccion');
    var closemaintab = document.querySelector('.startgame');
    var firstpage = document.querySelector('.pantallainicio');
    var findcircle = document.querySelector('.encuentracirculo');
    var introduccion2 = document.querySelector('#introduccion2');
    var openmainpage = document.querySelector('#botonintroduccion2');

    closemaintab.addEventListener('click', function () {
        firstpage.classList.add("close");
        introduccion.classList.add("opened")
    });

    nextslide.addEventListener('click', function () {
        introduccion.classList.remove("opened")
        introduccion2.classList.add("opened")

    });


    openmainpage.addEventListener('click', function() {
        introduccion2.classList.remove("opened")
        findcircle.classList.add("opened")
    });



    

    

    var firstlevel = document.querySelector('.background1');
    var findtriangle = document.querySelector('.encuentratriangulo');
    var error = document.querySelector('.error');
    var circulo = document.querySelector('.circle');
    var circlelevel = document.querySelector('.circlelevel');
    var circlelevelstart = document.querySelector('#botoncirculo');

    circlelevelstart.addEventListener('click', function () {
        var contador = 7;
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
        firstpage.classList.remove("close");
        clearInterval(comenzarContador); // Detener el contador al regresar a la página principal
    });


    var secondlevel = document.querySelector('.background2');
    var triangulo = document.querySelector('.triangle');
    var trianglelevel = document.querySelector('.trianglelevel');
    var findsquare = document.querySelector('.encuentracuadrado');
    var trianglelevelstart = document.querySelector('#botontriangulo');

    trianglelevelstart.addEventListener('click', function () {
        var contador2 = 7;

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


    var findrighttriangle = document.querySelector('.encuentratriangulorectangulo');
    var cuadrado = document.querySelector('.square');
    var squarelevel = document.querySelector('.squarelevel');
    var thirdlevel = document.querySelector('.background3');
    var squarelevelstart = document.querySelector('#botoncuadrado');

    squarelevelstart.addEventListener('click', function () {
        var contador3 = 7;
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
                thirdlevel.classList.remove("opened")
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
            findrighttriangle.classList.add("opened")

        });


    });


    var triangulorectangulo = document.querySelector('.righttriangle');
    var righttrianglelevel = document.querySelector('.righttrianglelevel');
    var fourthlevel = document.querySelector('.background4');
    var righttrianglelevelstart = document.querySelector('#botontriangulorectangulo');
    var findisoscelestriangle = document.querySelector('.encuentratrianguloisosceles')

    righttrianglelevelstart.addEventListener('click', function () {
        var contador4 = 7;
        findrighttriangle.classList.remove("opened")
        fourthlevel.classList.add("opened")

        comenzarContador4 = setInterval(function () {
            var contadorElemento4 = document.querySelector('#contador4');
            contadorElemento4.textContent = contador4;

            if (contador4 > 0) {
                contador4--;
            }
            if (contador4 === 0) {
                clearInterval(comenzarContador4);
                fourthlevel.classList.remove("opened")
                error.classList.add("opened")
            }
        }, 1000);

        righttrianglelevel.addEventListener('click', function () {
            clearInterval(comenzarContador4);
            fourthlevel.classList.remove("opened")
            error.classList.add("opened")

        });

        triangulorectangulo.addEventListener('click', function () {
            clearInterval(comenzarContador4);
            fourthlevel.classList.remove("opened")
            findisoscelestriangle.classList.add("opened")

        });


    });

    var trianguloisosceles = document.querySelector('.isoscelestriangle');
    var isoscelestrianglelevel = document.querySelector('.isoscelestrianglelevel');
    var fifthlevel = document.querySelector('.background5');
    var isoscelestrianglelevelstart = document.querySelector('#botontrianguloisosceles');
    var findcircle2 = document.querySelector('.encuentracirculo2');

    isoscelestrianglelevelstart.addEventListener('click', function () {
        var contador5 = 7;
        findisoscelestriangle.classList.remove("opened")
        fifthlevel.classList.add("opened")

        comenzarContador5 = setInterval(function () {
            var contadorElemento5 = document.querySelector('#contador5');
            contadorElemento5.textContent = contador5;

            if (contador5 > 0) {
                contador5--;
            }
            if (contador5 === 0) {
                clearInterval(comenzarContador5);
                fifthlevel.classList.remove("opened")
                error.classList.add("opened")
            }
        }, 1000);

        isoscelestrianglelevel.addEventListener('click', function () {
            clearInterval(comenzarContador5);
            fifthlevel.classList.remove("opened")
            error.classList.add("opened")

        });

        trianguloisosceles.addEventListener('click', function () {
            clearInterval(comenzarContador5);
            fifthlevel.classList.remove("opened")
            findcircle2.classList.add("opened")

        });


    });

    var circulo2 = document.querySelector('.circle2');
    var circlelevel2 = document.querySelector('.circlelevel2');
    var sixthlevel = document.querySelector('.background6');
    var circle2levelstart = document.querySelector('#botoncirculo2');
    var findtriangle2 = document.querySelector('.encuentratriangulo2');
    

    circle2levelstart.addEventListener('click', function () {
        var contador6 = 10;
        findcircle2.classList.remove("opened")
        sixthlevel.classList.add("opened")

        comenzarContador6 = setInterval(function () {
            var contadorElemento6 = document.querySelector('#contador6');
            contadorElemento6.textContent = contador6;

            if (contador6 > 0) {
                contador6--;
            }
            if (contador6 === 0) {
                clearInterval(comenzarContador6);
                sixthlevel.classList.remove("opened")
                error.classList.add("opened")
            }
        }, 1000);

        circlelevel2.addEventListener('click', function () {
            clearInterval(comenzarContador6);
            sixthlevel.classList.remove("opened")
            error.classList.add("opened")

        });

        circulo2.addEventListener('click', function () {
            clearInterval(comenzarContador6);
            sixthlevel.classList.remove("opened")
            findtriangle2.classList.add("opened")

        });


    });

    var triangulo2 = document.querySelector('.triangle2');
    var trianglelevel2 = document.querySelector('.trianglelevel2');
    var seventhlevel = document.querySelector('.background7');
    var triangle2levelstart = document.querySelector('#botontriangulo2');
    var findsquare2 = document.querySelector('.encuentracuadrado2');
    

    triangle2levelstart.addEventListener('click', function () {
        var contador7 = 10;
        findtriangle2.classList.remove("opened")
        seventhlevel.classList.add("opened")

        comenzarContador7 = setInterval(function () {
            var contadorElemento7 = document.querySelector('#contador7');
            contadorElemento7.textContent = contador7;

            if (contador7 > 0) {
                contador7--;
            }
            if (contador7 === 0) {
                clearInterval(comenzarContador7);
                seventhlevel.classList.remove("opened")
                error.classList.add("opened")
            }
        }, 1000);

        trianglelevel2.addEventListener('click', function () {
            clearInterval(comenzarContador7);
            seventhlevel.classList.remove("opened")
            error.classList.add("opened")

        });

        triangulo2.addEventListener('click', function () {
            clearInterval(comenzarContador7);
            seventhlevel.classList.remove("opened")
            findsquare2.classList.add("opened")

        });


    });

    var cuadrado2 = document.querySelector('.square2');
    var squarelevel2 = document.querySelector('.squarelevel2');
    var eightlevel = document.querySelector('.background8');
    var square2levelstart = document.querySelector('#botoncuadrado2');
    var findsrighttriangle2 = document.querySelector('.encuentratriangulorectangulo2');
    

    square2levelstart.addEventListener('click', function () {
        var contador8 = 10;
        findsquare2.classList.remove("opened")
        eightlevel.classList.add("opened")

        comenzarContador8 = setInterval(function () {
            var contadorElemento8 = document.querySelector('#contador8');
            contadorElemento8.textContent = contador8;

            if (contador8 > 0) {
                contador8--;
            }
            if (contador8 === 0) {
                clearInterval(comenzarContador8);
                eightlevel.classList.remove("opened")
                error.classList.add("opened")
            }
        }, 1000);

        squarelevel2.addEventListener('click', function () {
            clearInterval(comenzarContador8);
            eightlevel.classList.remove("opened")
            error.classList.add("opened")

        });

        cuadrado2.addEventListener('click', function () {
            clearInterval(comenzarContador8);
            eightlevel.classList.remove("opened")
            findsrighttriangle2.classList.add("opened")

        });


    });

    var triangulorectangulo2 = document.querySelector('.righttriangle2');
    var righttrianglelevel2 = document.querySelector('.righttrianglelevel2');
    var ninthlevel = document.querySelector('.background9');
    var righttriangle2levelstart = document.querySelector('#botontriangulorectangulo2');
    var findisoscelestriangle2 = document.querySelector('.encuentratrianguloisosceles2')

    righttriangle2levelstart.addEventListener('click', function () {
        var contador9 = 10;
        findsrighttriangle2.classList.remove("opened")
        ninthlevel.classList.add("opened")

        comenzarContador9 = setInterval(function () {
            var contadorElemento9 = document.querySelector('#contador9');
            contadorElemento9.textContent = contador9;

            if (contador9 > 0) {
                contador9--;
            }
            if (contador9 === 0) {
                clearInterval(comenzarContador9);
                ninthlevel.classList.remove("opened")
                error.classList.add("opened")
            }
        }, 1000);

        righttrianglelevel2.addEventListener('click', function () {
            clearInterval(comenzarContador9);
            ninthlevel.classList.remove("opened")
            error.classList.add("opened")

        });

        triangulorectangulo2.addEventListener('click', function () {
            clearInterval(comenzarContador9);
            ninthlevel.classList.remove("opened")
            findisoscelestriangle2.classList.add("opened")

        });


    });

    var trianguloisosceles2 = document.querySelector('.isoscelestriangle2');
    var isoscelestrianglelevel2 = document.querySelector('.isoscelestrianglelevel2');
    var tenthlevel = document.querySelector('.background10');
    var isoscelestriangle2levelstart = document.querySelector('#botontrianguloisosceles2');
    var end = document.querySelector('.end');

    isoscelestriangle2levelstart.addEventListener('click', function () {
        var contador10 = 10;
        findisoscelestriangle2.classList.remove("opened")
        tenthlevel.classList.add("opened")

        comenzarContador10 = setInterval(function () {
            var contadorElemento10 = document.querySelector('#contador10');
            contadorElemento10.textContent = contador10;

            if (contador10 > 0) {
                contador10--;
            }
            if (contador10 === 0) {
                clearInterval(comenzarContador10);
                tenthlevel.classList.remove("opened")
                error.classList.add("opened")
            }
        }, 1000);

        isoscelestrianglelevel2.addEventListener('click', function () {
            clearInterval(comenzarContador10);
            tenthlevel.classList.remove("opened")
            error.classList.add("opened")

        });

        trianguloisosceles2.addEventListener('click', function () {
            clearInterval(comenzarContador10);
            tenthlevel.classList.remove("opened")
            end.classList.add("opened")

        });


    });

    
    var backtobeginning = document.querySelector('#endbutton');

    backtobeginning.addEventListener('click', function() {
        end.classList.remove("opened")
        firstpage.classList.add("opened")

    });





}











