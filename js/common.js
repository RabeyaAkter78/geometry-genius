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
document.getElementById('first-card').addEventListener('mouseenter',function(){
// console.log('color generator');

})


