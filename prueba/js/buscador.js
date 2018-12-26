var json_data;
$(document).ready(function () {

    $.ajax({
        url: 'data-1.json',
        dataType: 'json',
        success: function (data) {
            json_data = data;
            showHouses();
            showSavedHouses();
            chargeCities();
            chargeTypeHouses();
        },
        statusCode: {
            404: function () {
                alert('There was a problem with the server.  Try again soon!');
            }
        }
    });
});
function showHouses() {
//    var items = [];
    $.each(json_data, function (key, val) {

        var house = "";
        house = '<div class="row">\n\
                    <div class="form-group">\n\
                    <b>Dirección:</b> ' + val.Direccion +
                '<br><b>Ciudad:</b>' + val.Ciudad +
                '<br><b>Teléfono:</b>' + val.Telefono +
                '<br><b>Codigo Postal:</b>' + val.Codigo_Postal +
                '<br><b>Tipo:</b>' + val.Tipo +
                '<br><b>Precio:</b>' + val.Precio +
                '<button type="button" class="btn btn-success" onclick="save_house(' + val.Id + ', \'' + val.Direccion + '\',\'' + val.Ciudad + '\',\'' + val.Telefono + '\',\'' + val.Codigo_Postal + '\',\'' + val.Tipo + '\',\'' + val.Precio + '\')">Guardar</button>\n\
                </div>';
//        items.push('<li id="' + key + '">' + house + '</li>');
        $('#houses-list').append(house);
    });
//    $('<ul/>', {
//        'class': 'houses-list',
//        html: items.join('')
//    }).appendTo($("#houses-list"));
}

function showSavedHouses() {
    $('#houses-list-saved').html("");
    $.ajax({
        url: "back/list_houses.php",
        type: 'GET',
        data: {},
        success: function (data) {
            console.log(data);
            $('#houses-list-saved').append(data);
        }
    });
}


function chargeCities() {
    var uniqueCities = [];
    $.each(json_data, function (key, val) {

        if (uniqueCities.indexOf(val.Ciudad) === -1) {
            uniqueCities.push(val.Ciudad);
            $('#selectCiudad').append($('<option>', {
                value: val.Ciudad,
                text: val.Ciudad
            }));
        }

    });
}

function chargeTypeHouses() {
    var uniqueTypes = [];
    $.each(json_data, function (key, val) {

        if (uniqueTypes.indexOf(val.Tipo) === -1) {
            uniqueTypes.push(val.Tipo);
            $('#selectTipo').append($('<option>', {
                value: val.Tipo,
                text: val.Tipo
            }));
        }

    });
}

function search() {
    var selectedCity = $("#selectCiudad").val();
    var selectedType = $("#selectTipo").val();
    var results = $(json_data).filter(function (i, n) {
        return n.Ciudad === selectedCity && n.Tipo === selectedType;
    });
    $("#houses-list").html("");
    $.each(results, function (key, val) {

        var house = "";
        house = '<div class="row">\n\
                    <div class="form-group">\n\
                    <b>Dirección:</b> ' + val.Direccion +
                '<br><b>Ciudad:</b>' + val.Ciudad +
                '<br><b>Teléfono:</b>' + val.Telefono +
                '<br><b>Codigo Postal:</b>' + val.Codigo_Postal +
                '<br><b>Tipo:</b>' + val.Tipo +
                '<br><b>Precio:</b>' + val.Precio +
                '<button type="button" class="btn btn-success" onclick="save_house(' + val.Id + ', \'' + val.Direccion + '\',\'' + val.Ciudad + '\',\'' + val.Telefono + '\',\'' + val.Codigo_Postal + '\',\'' + val.Tipo + '\',\'' + val.Precio + '\')">Guardar</button>\n\
                </div>';
//        items.push('<li id="' + key + '">' + house + '</li>');
        $('#houses-list').append(house);
    });
}


function save_house(id, direccion, ciudad, telefono, codigo_postal, tipo, precio) {
    $.ajax({
        url: "back/save_houses.php",
        type: 'POST',
        data: {
            id: id,
            direccion: direccion,
            ciudad: ciudad,
            telefono: telefono,
            codigo_postal: codigo_postal,
            tipo: tipo,
            precio: precio
        },
        success: function (data) {
            console.log(data);

            if ($.isEmptyObject(data.error)) {
                alert('Bien almacenado!');
////                $('#confirmMenuModal').modal('hide');
////                modalResponse('confirmMenuModalResponse', data.success, 'show');
            } else {
                alert('Error');
//                printErrorMsg(data.error);
            }
//            $("#btn-edit-modal").attr("disabled", false);
        }
    });
}