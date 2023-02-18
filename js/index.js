//  for triangle:
// set addEventListener on btn:
let serial=0;
document.getElementById('triangle-btn').addEventListener('click', function () {

    serial+=1;
    const geometryName = document.getElementById('name-triangle').innerText;

    // get the value of Area:
    const areaOfGeometry = document.getElementById('triangle-area').innerText;

    // get the height and base of triangle:
    const baseOfGeometry = document.getElementById('triangle-base');
    const newBaseOfGeometryString = baseOfGeometry.value;
    newBaseOfGeometry = parseFloat(newBaseOfGeometryString);

    const heightOfGeometry = document.getElementById('triangle-height');
    const newHeightOfGeometryString = heightOfGeometry.value;
    newHeightOfGeometry = parseFloat(newHeightOfGeometryString);




    // calculate the area:
    const newAreaOfGeometry =(newBaseOfGeometry * newHeightOfGeometry);
    // newAreaOfGeometry = areaOfGeometry;

    // validation:
if (isNaN(newAreaOfGeometry)) {
    alert('Please enter a valid Number');
    return;
}


    // // clear the inout area:
    // baseOfGeometry = '';
    // heightOfGeometry = '';

    // console.log(geometryName, newBaseOfGeometry, newHeightOfGeometry, newAreaOfGeometry);

    displayData(geometryName,newAreaOfGeometry);
});

function displayData (geometryName,newAreaOfGeometry){
    const container = document.getElementById("table-container");

    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${geometryName}</td>
    <td>${newAreaOfGeometry}</td>
    `;
    
    container.appendChild(tr);
    

}