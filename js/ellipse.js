
document.getElementById('btn-ellipse').addEventListener('click', function () {
    serial += 1;
    const geometryName = document.getElementById('name-ellipse').innerText;

    // get the value of Area:
    const areaOfGeometry = document.getElementById('ellipse-area').innerText;

    // get the BAxis and AAxis of triangle:
    const AAxisOfGeometry = document.getElementById('ellipse-a');
    const newAAxisOfGeometryString = AAxisOfGeometry.value;
    newAAxisOfGeometry = parseFloat(newAAxisOfGeometryString);

    const BAxisOfGeometry = document.getElementById('ellipse-b');
    const newBAxisOfGeometryString = BAxisOfGeometry.value;
    newBAxisOfGeometry = parseFloat(newBAxisOfGeometryString);

    // calculate the area:
    const newAreaOfGeometry =( 3.1316 *(newAAxisOfGeometry * newBAxisOfGeometry)).toFixed(2);
    // newAreaOfGeometry = areaOfGeometry;

    // validation:
    if (isNaN(newAreaOfGeometry)) {
        alert('Please enter a valid Number');
        return;
    }

    displayData(geometryName, newAreaOfGeometry);
});