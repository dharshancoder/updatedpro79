menu_list_array["Pepe paneer ","Mexican green wave","Delux veggie","non veg supreme","Chicken Dominato"]
function getmenu(){
    var htmldata;
    htmldata ="<ol class ='menulist'>";
    menu_list_array.sort();
    for(var i="0";i<menu_list_array.length;i++){
        htmldata = htmldata +'li' +menu_list_array[i] +'li';
    }
        htmldata = htmldata +<ol>
}