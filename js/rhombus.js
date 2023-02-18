
document.getElementById('rhombus-btn').addEventListener('click', function () {
    serial += 1;

    const geometryName = document.getElementById('rhombus-name').innerText;

    // get the value of Area:
    const areaOfGeometry = document.getElementById('rhombus-area').innerText;


    // get the height and base of triangle:
    const baseOfGeometry = document.getElementById('inputField-1');
    const newBaseOfGeometryString = baseOfGeometry.value;
    newBaseOfGeometry = parseFloat(newBaseOfGeometryString);

    const heightOfGeometry = document.getElementById('inputField-2');
    const newHeightOfGeometryString = heightOfGeometry.value;
    newHeightOfGeometry = parseFloat(newHeightOfGeometryString);

    // calculate the area:
    const newAreaOfGeometry = 0.5 * (newBaseOfGeometry * newHeightOfGeometry).toFixed(2);
    // newAreaOfGeometry = areaOfGeometry;
    // validation:

    if (isNaN(newAreaOfGeometry)) {
        alert('Please enter a valid Number');
        return;
    }


    displayData(geometryName, newAreaOfGeometry);
     // clear input field
     baseOfGeometry.value = '';
     heightOfGeometry.value = '';
});