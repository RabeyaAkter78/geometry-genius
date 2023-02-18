// common function:
function displayData(geometryName, newAreaOfGeometry) {
    const container = document.getElementById("table-container");

    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${geometryName}</td>
    <td>${newAreaOfGeometry}</td>
    `;

    container.appendChild(tr);


}

