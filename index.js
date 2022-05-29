let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");


btn1.onclick = function () {
    Swal
    .fire({
        title: "Cantidad",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            let cantidad = resultado.value;
            $.ajax({
                url: 'laptop.php',
                type: 'post',
                data: {cant:cantidad}
            })
            //console.log(cantidad);
        }
    });
}

btn2.onclick = function () {
    Swal
    .fire({
        title: "Cantidad",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            let cantidad = resultado.value;
            $.ajax({
                url: 'teclado.php',
                type: 'post',
                data: {cant:cantidad}
            })
            //console.log(cantidad);
        }
    });
}

btn3.onclick = function () {
    Swal
    .fire({
        title: "Cantidad",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            let cantidad = resultado.value;
            $.ajax({
                url: 'mouse.php',
                type: 'post',
                data: {cant:cantidad}
            })
            //console.log(cantidad);
        }
    });
}
