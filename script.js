
let NombreAnimacion = document.getElementById('NombreAnimacion');

let typewriter = new Typewriter(NombreAnimacion, {
    loop: true
});

typewriter.typeString('Lessly Alvarado')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora en proceso')
    .pauseFor(2500)
    .deleteAll()
    .start();