window.fetch("animales.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const table = document.getElementById("table");

        for (let i = 0; i < data.length; i++) {
            const tr = document.createElement("tr");
            const tdId = document.createElement("td");
            const tdTipo = document.createElement("td");
            const tdNombre = document.createElement("td");
            const tdObservacion= document.createElement("td");
            const tdUbicacion = document.createElement("td");
            const tdRasgos = document.createElement("td");
            const tdImagen = document.createElement("td"); 
            
            tdId.innerText = data[i].id;
            tdTipo.innerText = data[i].Tipo;
            tdNombre.innerText = data[i].Nombre;
            tdObservacion.innerText = data[i].Observacion;
            tdUbicacion.innerText = data[i].Ubicacion;
            tdRasgos.innerText = data[i].Rasgos;
            tdImagen.innerHTML =`<img style="width:70px;heigth:70px;" src="${data[i].Imagen}"/>`;
        
            tr.appendChild(tdId);
            tr.appendChild(tdTipo)
            tr.appendChild(tdNombre);
            tr.appendChild(tdObservacion);
            tr.appendChild(tdUbicacion);
            tr.appendChild(tdRasgos);
            tr.appendChild(tdImagen);
            table.appendChild(tr);
        }
    })