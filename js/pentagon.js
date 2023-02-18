
document.getElementById('pentagon-btn').addEventListener('click', function () {
    serial += 1;

    const geometryName = document.getElementById('name-pentagon').innerText;

    // get the value of Area:
    const areaOfGeometry = document.getElementById('pentagon-area').innerText;

    // get the Base and Width of triangle:
    const WidthOfGeometry = document.getElementById('pentagon-p');
    const newWidthOfGeometryString = WidthOfGeometry.value;
    newWidthOfGeometry = parseFloat(newWidthOfGeometryString);

    const BaseOfGeometry = document.getElementById('pentagon-b');
    const newBaseOfGeometryString = BaseOfGeometry.value;
    newBaseOfGeometry = parseFloat(newBaseOfGeometryString);

    // calculate the area:
    const newAreaOfGeometry = 0.5*(newWidthOfGeometry * newBaseOfGeometry).toFixed(2);
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