
document.getElementById('Parallelogram-btn').addEventListener('click', function () {


        serial+=1;

    const geometryName = document.getElementById('name-Parallelogram').innerText;

    // get the value of Area:
    const areaOfGeometry = document.getElementById('Parallelogram-area').innerText;


    // get the height and base of triangle:
    const baseOfGeometry = document.getElementById('Parallelogram-base');
    const newBaseOfGeometryString = baseOfGeometry.value;
    newBaseOfGeometry = parseFloat(newBaseOfGeometryString);

    const heightOfGeometry = document.getElementById('Parallelogram-height');
    const newHeightOfGeometryString = heightOfGeometry.value;
    newHeightOfGeometry = parseFloat(newHeightOfGeometryString);

    // calculate the area:
    const newAreaOfGeometry = (newBaseOfGeometry * newHeightOfGeometry);
    // newAreaOfGeometry = areaOfGeometry;
       // validation:
       if (isNaN(newAreaOfGeometry)) {
        alert('Please enter a valid Number');
        return;
    }
   

    displayData(geometryName, newAreaOfGeometry);
});