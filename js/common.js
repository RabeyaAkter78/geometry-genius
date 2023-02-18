// common function:
function displayData(geometryName, newAreaOfGeometry) {
    const container = document.getElementById("table-container");

    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${geometryName}</td>
    <td>${newAreaOfGeometry}</td>
    <td><button class= "bg-blue-500  rounded w-30 ">convert m<sup>2</sup></td>
    `;

    container.appendChild(tr);


};

// random color generator:
const firstCard = document.getElementById('first-card')
firstCard.addEventListener('mouseenter', function () {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color = "rgb(" + r + "," + g + "," + b + ")"
    firstCard.style.backgroundColor = color;
})
firstCard.addEventListener('mouseleave', function () {


    firstCard.style.backgroundColor = "white";
})


