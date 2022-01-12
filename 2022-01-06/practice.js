function addCar(){
	let name    = document.getElementById('name').value
	let price   = document.getElementById('price').value
    let color   = document.getElementById('color').value
    let img_url = document.getElementById('image').value
    let car     ={
    	"name":name,
    	"price":price,
    	"color":color,
    	"image":img_url
    } 
    var tableRef     = document.getElementById('mehraSahab').getElementsByTagName('tbody')[0]
    var newRow       = tableRef.insertRow(tableRef.rows.length);
    newRow.innerHTML = createRows(tableRef.rows.length, car);
}

function createRows(index, item){
    return `
	<tr>
		<td>${index}</td>
		<td>${item.name}</td>
		<td>${item.price}</td>
		<td>${item.color}</td>
		<td><img src="${item.image}" width="150px" height="100px"></img></td>
	`
}

function clearRows(){
	var tableRef = document.getElementById('mehraSahab').getElementsByTagName('tbody')[0];
	tableRef.innerHTML = ""
}