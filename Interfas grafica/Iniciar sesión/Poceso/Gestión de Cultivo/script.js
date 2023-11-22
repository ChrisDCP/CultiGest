import GuardarGestion  from "../../../js/firebase";

 
const formplanta = document.querySelector("plant-form");

formplanta.addEventListener('submit', (e) =>{
    e.preventDefault();

    const nombre = document.querySelector('nombre');
    const area = document.querySelector('Area');
    const plaga = document.querySelector('plaga');
    const fertilidad = document.querySelector('fertilidad');
    const desempenio = document.querySelector('desempenio');

    GuardarGestion(nombre.value, area.value, plaga.value, fertilidad.value,desempenio.value);
})

   /*var nombre = document.getElementById('nombre').value;
    var agua = document.getElementById('agua').value;
    var plaga = document.getElementById('plaga').value;
    var fertilidad = document.getElementById('fertilidad').value;
    var desempenio = document.getElementById('desempenio').value;

    var plantList = document.getElementById('plant-list');
    var nuevaPlanta = document.createElement('div');
    nuevaPlanta.className = 'planta';
    nuevaPlanta.innerHTML = '<strong>Nombre:</strong> ' + nombre + '<br>' +
                            '<strong>Aria de cultibo:</strong> ' + agua + '<br>' +
                            '<strong>Plaga:</strong> ' + plaga + '<br>' +
                            '<strong>Fertilidad:</strong> ' + fertilidad + '<br>' +
                            '<strong>Desempeño:</strong> ' + desempenio + '<hr>';

    plantList.appendChild(nuevaPlanta);



    // Limpiar los campos del formulario después de agregar la planta
    document.getElementById('nombre').value = '';
    document.getElementById('agua').value = '';
    document.getElementById('plaga').value = '';
    document.getElementById('fertilidad').value = '';
    document.getElementById('desempenio').value = 'bueno';
}*/



