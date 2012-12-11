
// This function is used fro 
// delete selected row from Detail Table
// set deleted item to Edit text Boxes
function DeleteRow() {

    //    // Here I have used DataTables.TableTools plugin for getting selected row items
    //    var oTT = TableTools.fnGetInstance('childList'); // Get Table instance
    //    var sRow = oTT.fnGetSelected(); // Get Selected Item From Table


    //    // Set deleted row item to editable text boxes
    //    $('#Name').val($.trim(sRow[0].cells[0].innerHTML.toString()));
    //    $('#Price').val(jQuery.trim(sRow[0].cells[1].innerHTML.toString()));

    //    $('#childList').dataTable().fnDeleteRow(sRow[0]);

    alert("Hello");

    // Add a click handler for the delete row
    var oTable = $('#childList').dataTable();


    alert(oTable);

    var anSelected = $('#childList').dataTable().fnGetSelected();

    alert(anSelected);

    alert(anSelected[0]);
    oTable.fnDeleteRow(anSelected[0]);

    alert("Hello");

}

// this function is used to add item to list table
function Add() {

    // Adding item to table
    $('#childList').dataTable().fnAddData([$('#Name').val(), $('#Price').val(), null]);

    // Making Editable text empty
    $('#Name').val("");
    $('#Price').val("");

}

$(function () {

    // here i have used datatables.js (jQuery Data Table)
    $('#childList').dataTable({
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": false,
        "bSort": false,
        "bInfo": false,
        "aoColumns": [{ "sName": "PRODUCTNAME" }, { "sName": "PRICE" },
                      { "sName": "PRODELETE",
                          "bSearchable": false,
                          "bSortable": false,
                          "fnRender": function () {
                              return '<button class="button" onclick="DeleteRow()">Delete</button>';
                          }

                      }
            ]
    });

    var oTable = $('#childList').dataTable();

    //add Product
    $('#proAdd').click(function () {

        Add();
        return false;

    });

});