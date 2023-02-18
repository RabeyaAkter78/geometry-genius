
document.getElementById('rectangle-btn').addEventListener('click', function () {
    serial+=1;

    const geometryName = document.getElementById('name-rectangle').innerText;

    // get the value of Area:
    const areaOfGeometry = document.getElementById('rectangle-area').innerText;

    // get the Length and Width of triangle:
    const WidthOfGeometry = document.getElementById('rectangle-w');
    const newWidthOfGeometryString = WidthOfGeometry.value;
    newWidthOfGeometry = parseFloat(newWidthOfGeometryString);

    const LengthOfGeometry = document.getElementById('rectangle-l');
    const newLengthOfGeometryString = LengthOfGeometry.value;
    newLengthOfGeometry = parseFloat(newLengthOfGeometryString);

    // calculate the area:
    const newAreaOfGeometry =(newWidthOfGeometry * newLengthOfGeometry);
    // newAreaOfGeometry = areaOfGeometry;

       // validation:
if (isNaN(newAreaOfGeometry)) {
    alert('Please enter a valid Number');
    return;
}

    displayData(geometryName,newAreaOfGeometry);
});