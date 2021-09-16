dishes_array=[];

function add_data()
{
    var add_item = document.getElementById("topping").value;

    dishes_array.push(add_item);

    console.log(dishes_array);

    document.getElementById("display_menu2").innerHTML = dishes_array;
}
function show()
{
    var name_1 = document.getElementById("dishes_array").value;
    console.log(dishes_array);
    document.getElementById("dishes_array").innerHTML = htmldata;
}
function sort()
{
    dishes_array.sort();
    console.log(dishes_array);
	document.getElementById("display_menu3").innerHTML = dishes_array;  
}
function search()
{
    document.getElementById("topping").value;
    
}
function add_data2()
{
    var add_item = document.getElementById("topping").value;

    dishes_array.push(add_item);

    console.log(dishes_array);

    document.getElementById("display searched name").innerHTML = dishes_array;
}