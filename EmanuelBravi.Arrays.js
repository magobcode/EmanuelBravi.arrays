
   function enviar () {
        alert('Enviando...');
    }
    //String
    const Distribution = [
        {Business: 'Andreani', Rating: 6,},
        {Business: 'OCASA' , Rating: 10,},
        {Business: 'CorreoARG', Rating: 8,},
        {Business: 'Carolo.srl', Rating: 2,},
        {Business: 'Traverso', Rating: 4,},
        {Business: 'Fedex', Rating: 9,},
        {Business: 'Express', Rating: 7,},
    ]
    // Metodo sobre String
    const Business = Distribution.filter( p => p.Rating >= 7)
    //funcion para Mostrar String
    function Empresas(Distribution) {
        for (const item of Distribution) 
        document.write('<li>'+'Empresa: '+item.Business + '   Calificacion: '+item.Rating+ '</li>' );
    }
    
 const procesarPaquetes = ( totalPaquetes ) => {
    for (let i = 0; i < totalPaquetes; i++) {
        const destino = prompt('Dame el destino del paquete - (BS - COR - ROS)')
        if (destino == 'BS' ) {
            alert('ESCOGISTE BUENOS AIRES COMO DESTINO')
        
        }
        else if (destino == 'COR') {
            alert('ESCOGISTE CORDOBA COMO DESTINO')
            
        }
        else if (destino == 'ROS'){
            alert('ESCOGISTE ROSARIO COMO DESTINO')
        }
        else{
            alert('DESTINO NO VALIDO')
            continue
        }   
        const peso = parseInt(prompt('Ingrese el peso del paquete (MAX.300kg)' ))
        if (peso <= 0 || peso > 300 ) {
            alert('Peso no válido')
            continue
        }
        }
                         
    let paso2 = prompt('¿Desea que su Envio lo realice una Empresa con una valoracion mayor a 5? Responda con SI o NO')
     if (paso2 == 'SI') {
        document.write('Estas son las empresas que trabajan junto a nosotros con las mejores reseñas: ')
        Empresas(Business)
        document.write('te notificaremos cual de ellas es la responsable del envio. Gracias!.')
     }else if (paso2 == 'NO'){   
       document.write('Estas son las empresas que trabajan junto a nosotros: ')
       Empresas(Distribution)
       document.write('te notificaremos cual de ellas es la responsable del envio. Gracias!.')
     }else{
        alert('El comando ingresado es invalido')
     }
    enviar(); 
    }
 const totalPaquetes = parseInt(prompt('¿Cuantos paquetes quieres enviar? (MAX.5)'))
 if ( totalPaquetes >= 1 && totalPaquetes <= 5 ) {
    procesarPaquetes( totalPaquetes )
} else {
    alert('la cantidad ingresada es incorrecta o excede el limite');
}


let valoracion = prompt('valora nuestro servicio - 10) PERFECTO - 7) BUENO - 4) REGULAR - 1) MALO.')
switch (valoracion) {
    case '10':
        alert('Nos alegra, haberte complacido')
        break;
    case '7':
        alert('quedamos algo confomes con tu experiencia pero esperamos mejorar')
        break;
    case '4':
        alert('ups, ¿porque no termino de gustarte el servicio?')
        break;
    case '1':
        alert('lamentamos mucho tu experiencia, ¿en que fallamos?')
        break;
 
    default:
        alert('COMANDO INVALIDO')
        break;
 }