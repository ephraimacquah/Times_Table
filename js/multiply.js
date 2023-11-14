function fillTable() {
    if(validateForm()) {
        clearTable();
        var times_table = document.getElementById("times_table");
        var x_min = Number(document.getElementById("x_begin").value);
        var x_max = Number(document.getElementById("x_end").value);
        var y_min = Number(document.getElementById("y_begin").value);
        var y_max = Number(document.getElementById("y_end").value);
        var curr_row;
        var curr_cell;
        times_table.insertRow(0).insertCell(0).innerHTML = "X";
        for(var i = 1; i <= y_max - y_min + 1; i++) {
            var th = document.createElement("th");
            th.innerHTML = i + y_min - 1;
            th.style.backgroundColor = "bisque";
            th.style.color = "brown";
            curr_row = times_table.insertRow(i);
            curr_row.appendChild(th);
        }

        for(i = 1; i <= x_max - x_min + 1; i++) {
            var th = document.createElement("th");
            th.innerHTML = i - 1 + x_min;
            th.style.backgroundColor = "bisque";
            th.style.color = "brown";
            times_table.rows[0].appendChild(th); 
        }

        for(i = 1; i <= y_max - y_min + 1; i++) {
            curr_row = times_table.rows[i];
            for(var j = 1; j <= x_max - x_min + 1; j++) {
                curr_cell = curr_row.insertCell(j);
                curr_cell.style.color = "brown";
                curr_cell.style.backgroundColor = "cornsilk";
                curr_cell.innerHTML = (i + y_min - 1) * (j + x_min - 1);
            }
        }
        document.getElementById("x_begin").value = '';
        document.getElementById("x_end").value = '';
        document.getElementById("y_begin").value = '';
        document.getElementById("y_end").value = '';
    }
}

function validateForm(){
  let x = document.forms["form"]["x_begin"].value;
  if (x > document.forms["form"]["x_end"].value) {
    document.getElementById("error").style.color = "brown";
    document.getElementById("error").style.textAlign = "center";
    document.getElementById("error").innerHTML = "Column Maximum Value must be greater than Column Minimum Value";
    return false;
  }
  x = document.forms["form"]["y_begin"].value;
  if(x > document.forms["form"]["y_end"].value){
    document.getElementById("error").style.color = "brown";
    document.getElementById("error").style.textAlign = "center";
    document.getElementById("error").innerHTML = "Row Maximum Value must be greater than Row Minimum Value";
    return false;
  }
  return true;
}

function clearTable() {
    table =  document.getElementById("times_table")
    len = table.rows.length;
    for(var i = 0; i < len; i++) {
        table.deleteRow(0);
     }
}