function addCar(){
	let Car   = document.getElementById('Car').value
	let Price = document.getElementById('name').value
	let Image  = document.getElementById('image').value 
	let Car = {
		"Name": name
		"Price":Price
		"Image":Image
	}
	var tableRef = document.getElementById('mehra55').getElementsByTagName('tbody')[0]
	var newRow   =tableRef.insertRow(tableRef.rows.length);
	newRow.innerHTML = createRows(tableRef.rows.length,car)
}


function createRows(index, item){
	return`
	<tr>
		<td>${index}</td>
		<td>${item.car}</td>
		<td>${item.price}</td>
		<td><img src="${item.image}" width="150px" height="100px"></img></td>
		<td></td>
	</tr>
	`
}


function clearRows(){
	var tableRef = document.getElementById('mehra55').getElementsByTagName('tbody')[0];
	tableRef.innerHTML = ""
}