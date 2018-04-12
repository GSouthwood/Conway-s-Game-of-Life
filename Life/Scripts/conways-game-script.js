


function PlayGame(rows, columns) {
    var testOuput = [];
    for (var row = 1; row <= rows; row++) {

        for (var column = 1; column <= columns; column++) {
            var liveCount = 0;
            if (row == 1 && column == 1) {

                Row1Column1();
            }
            else if (row == 1 && column == columns) {

                Row1ColumnLast(columns, columns);
            }
            else if (row == rows && column == 1) {

                Column1RowLast(rows, rows);

            }
            else if (row == rows && column == columns) {
                ColumnLastRowLast(rows, rows, columns, columns);
            }
            else if (row == 1 && column != 1 && column != columns) {
                Row1(row, row, column, column, column);
            }
            else if (column == 1 && row != 1 && row != rows) {
                Col1(row, row, row, column, column);
            }
            else if (column == columns && row != 1 && row != rows) {

                ColLast(row, row, row, column, column);
            }
            else if (row == rows && column != 1 && column != columns) {

                RowLast(row, row, column, column, column);
            }
            else {
                Middle(row, row, row, column, column, column);
            }

        }
    }
    for (var i = 1; i <= rows * columns; i++) {
        if ($("td." + i).hasClass("change")) {
            if ($("td." + i).html() == "1") {
                $("td." + i).html("2");
            }
            else {
                $("td." + i).html("1");
            }
        }
    }
    for (var i = 1; i <= rows * columns; i++) {
        if ($("td." + i).hasClass("change")) {
            $("td." + i).removeClass("change");
        }
    }

    for (var i = 0; i < rows * columns; i++) {
        testOutput.push($("td." + i).html());
    }
    return testOuput;
}


//to get next state of first cell
function Row1Column1() {
    var liveCount = 0;

    if ($("td#row_1_column_2").html() == "1") {
        liveCount++;
    }
    if ($("td#row_2_column_2").html() == "1") {
        liveCount++;
    }
    if ($("td#row_2_column_1").html() == "1") {
        liveCount++;
    }
    if ($("td#row_1_column_1").html() == "1" && liveCount < 2) {
        $("td#row_1_column_1").removeClass("alive");
        $("td#row_1_column_1").addClass("dead");
        $("td#row_1_column_1").addClass("change");

    }
    else if ($("td#row_1_column_1").html() == "2" && liveCount == 3) {
        $("td#row_1_column_1").removeClass("dead");
        $("td#row_1_column_1").addClass("alive");
        $("td#row_1_column_1").addClass("change");
    }


}

//to get next state of last cell first row
function Row1ColumnLast(columns, columnsMinus1) {
    var liveCount = 0;
    columnsMinus1 -= 1;
    if ($("td#row_1_column_" + columnsMinus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_2_column_" + columnsMinus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_2_column_" + columns).html() == "1") {
        liveCount++;
    }
    if ($("td#row_1_column_" + columns).html() == "1" && liveCount < 2) {
        $("td#row_1_column_" + columns).removeClass("alive");
        $("td#row_1_column_" + columns).addClass("dead");
        $("td#row_1_column_" + columns).addClass("change");
    }
    else if ($("td#row_1_column_" + columns).html() == "2" && liveCount == 3) {
        $("td#row_1_column_" + columns).removeClass("dead");
        $("td#row_1_column_" + columns).addClass("alive");
        $("td#row_1_column_" + columns).addClass("change");
    }


}

//to get next state of first cell first column
function Column1RowLast(rows, rowsMinus1) {
    var liveCount = 0;
    rowsMinus1 -= 1;
    if ($("td#row_" + rowsMinus1 + "_column_2").html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowsMinus1 + "_column_1").html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rows + "_column_2").html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rows + "_column_1").html() == "1" && liveCount < 2) {
        $("td#row_" + rows + "_column_1").removeClass("alive");
        $("td#row_" + rows + "_column_1").addClass("dead");
        $("td#row_" + rows + "_column_1").addClass("change");
    }
    else if ($("td#row_" + rows + "_column_1").html() == "2" && liveCount == 3) {
        $("td#row_" + rows + "_column_1").removeClass("dead");
        $("td#row_" + rows + "_column_1").addClass("alive");
        $("td#row_" + rows + "_column_1").addClass("change");
    }


}

//to get next state of last cell last row
function ColumnLastRowLast(rows, rowsMinus1, columns, columnsMinus1) {
    var liveCount = 0;
    rowsMinus1 -= 1;
    columnsMinus1 -= 1;
    if ($("td#row_" + rowsMinus1 + "_column_" + columnsMinus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowsMinus1 + "_column_" + columns).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rows + "_column_" + columnsMinus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rows + "_column_" + columns).html() == "1" && liveCount < 2) {
        $("td#row_" + rows + "_column_" + columns).removeClass("alive");
        $("td#row_" + rows + "_column_" + columns).addClass("dead");
        $("td#row_" + rows + "_column_" + columns).addClass("change");
    }
    else if ($("td#row_" + rows + "_column_" + columns).html() == "2" && liveCount == 3) {
        $("td#row_" + rows + "_column_" + columns).removeClass("dead");
        $("td#row_" + rows + "_column_" + columns).addClass("alive");
        $("td#row_" + rows + "_column_" + columns).addClass("change");
    }


}

//for first row cells not including first and last of row
function Row1(row, rowPlus1, column, columnMinus1, columnPlus1) {
    var liveCount = 0;
    rowPlus1 += 1;
    columnMinus1 -= 1;
    columnPlus1 += 1;
    if ($("td#row_" + row + "_column_" + columnMinus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + row + "_column_" + columnPlus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowPlus1 + "_column_" + columnMinus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowPlus1 + "_column_" + column).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowPlus1 + "_column_" + columnPlus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + row + "_column_" + column).html() == "1" && liveCount < 2) {
        $("td#row_" + row + "_column_" + column).removeClass("alive");
        $("td#row_" + row + "_column_" + column).addClass("dead");
        $("td#row_" + row + "_column_" + column).addClass("change");
    }
    else if ($("td#row_" + row + "_column_" + column).html() == "1" && liveCount > 3) {
        $("td#row_" + row + "_column_" + column).removeClass("alive");
        $("td#row_" + row + "_column_" + column).addClass("dead");
        $("td#row_" + row + "_column_" + column).addClass("change");
    }
    else if ($("td#row_" + row + "_column_" + column).html() == "2" && liveCount == 3) {
        $("td#row_" + row + "_column_" + column).removeClass("dead");
        $("td#row_" + row + "_column_" + column).addClass("alive");
        $("td#row_" + row + "_column_" + column).addClass("change");
    }

}

//for first column of cells not including first and last cell
function Col1(row, rowPlus1, rowMinus1, column, columnPlus1) {
    var liveCount = 0;
    rowPlus1 += 1;
    rowMinus1 -= 1;
    columnPlus1 += 1;
    if ($("td#row_" + rowMinus1 + "_column_" + column).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowMinus1 + "_column_" + columnPlus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + row + "_column_" + columnPlus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowPlus1 + "_column_" + column).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowPlus1 + "_column_" + columnPlus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + row + "_column_" + column).html() == "1" && liveCount < 2) {
        $("td#row_" + row + "_column_" + column).removeClass("alive");
        $("td#row_" + row + "_column_" + column).addClass("dead");
        $("td#row_" + row + "_column_" + column).addClass("change");
    }
    else if ($("td#row_" + row + "_column_" + column).html() == "1" && liveCount > 3) {
        $("td#row_" + row + "_column_" + column).removeClass("alive");
        $("td#row_" + row + "_column_" + column).addClass("dead");
        $("td#row_" + row + "_column_" + column).addClass("change");
    }
    else if ($("td#row_" + row + "_column_" + column).html() == "2" && liveCount == 3) {
        $("td#row_" + row + "_column_" + column).removeClass("dead");
        $("td#row_" + row + "_column_" + column).addClass("alive");
        $("td#row_" + row + "_column_" + column).addClass("change");
    }
}

//for last column
function ColLast(row, rowPlus1, rowMinus1, column, columnMinus1) {
    var liveCount = 0;
    rowPlus1 += 1;
    rowMinus1 -= 1;
    columnMinus1 -= 1;
    if ($("td#row_" + rowMinus1 + "_column_" + column).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowMinus1 + "_column_" + columnMinus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + row + "_column_" + columnMinus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowPlus1 + "_column_" + column).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowPlus1 + "_column_" + columnMinus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + row + "_column_" + column).html() == "1" && liveCount < 2) {
        $("td#row_" + row + "_column_" + column).removeClass("alive");
        $("td#row_" + row + "_column_" + column).addClass("dead");
        $("td#row_" + row + "_column_" + column).addClass("change");
    }
    else if ($("td#row_" + row + "_column_" + column).html() == "1" && liveCount > 3) {
        $("td#row_" + row + "_column_" + column).removeClass("alive");
        $("td#row_" + row + "_column_" + column).addClass("dead");
        $("td#row_" + row + "_column_" + column).addClass("change");
    }
    else if ($("td#row_" + row + "_column_" + column).html() == "2" && liveCount == 3) {
        $("td#row_" + row + "_column_" + column).removeClass("dead");
        $("td#row_" + row + "_column_" + column).addClass("alive");
        $("td#row_" + row + "_column_" + column).addClass("change");
    }
}

//for last row
function RowLast(row, rowMinus1, column, columnMinus1, columnPlus1) {
    var liveCount = 0;
    rowMinus1 -= 1;
    columnPlus1 += 1;
    columnMinus1 -= 1;
    if ($("td#row_" + rowMinus1 + "_column_" + column).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowMinus1 + "_column_" + columnMinus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowMinus1 + "_column_" + columnPlus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + row + "_column_" + columnPlus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + row + "_column_" + columnMinus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + row + "_column_" + column).html() == "1" && liveCount < 2) {
        $("td#row_" + row + "_column_" + column).removeClass("alive");
        $("td#row_" + row + "_column_" + column).addClass("dead");
        $("td#row_" + row + "_column_" + column).addClass("change");
    }
    else if ($("td#row_" + row + "_column_" + column).html() == "1" && liveCount > 3) {
        $("td#row_" + row + "_column_" + column).removeClass("alive");
        $("td#row_" + row + "_column_" + column).addClass("dead");
        $("td#row_" + row + "_column_" + column).addClass("change");
    }
    else if ($("td#row_" + row + "_column_" + column).html() == "2" && liveCount == 3) {
        $("td#row_" + row + "_column_" + column).removeClass("dead");
        $("td#row_" + row + "_column_" + column).addClass("alive");
        $("td#row_" + row + "_column_" + column).addClass("change");
    }
}

//for all cells in the middle of the grid
function Middle(row, rowMinus1, rowPlus1, column, columnMinus1, columnPlus1) {
    var liveCount = 0;
    rowMinus1 -= 1;
    rowPlus1 += 1;
    columnPlus1 += 1;
    columnMinus1 -= 1;
    if ($("td#row_" + rowMinus1 + "_column_" + columnMinus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowMinus1 + "_column_" + column).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowMinus1 + "_column_" + columnPlus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + row + "_column_" + columnPlus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + row + "_column_" + columnMinus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowPlus1 + "_column_" + columnMinus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowPlus1 + "_column_" + column).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + rowPlus1 + "_column_" + columnPlus1).html() == "1") {
        liveCount++;
    }
    if ($("td#row_" + row + "_column_" + column).html() == "1" && liveCount < 2) {
        $("td#row_" + row + "_column_" + column).removeClass("alive");
        $("td#row_" + row + "_column_" + column).addClass("dead");
        $("td#row_" + row + "_column_" + column).addClass("change");
    }
    else if ($("td#row_" + row + "_column_" + column).html() == "1" && liveCount > 3) {
        $("td#row_" + row + "_column_" + column).removeClass("alive");
        $("td#row_" + row + "_column_" + column).addClass("dead");
        $("td#row_" + row + "_column_" + column).addClass("change");
    }
    else if ($("td#row_" + row + "_column_" + column).html() == "2" && liveCount == 3) {
        $("td#row_" + row + "_column_" + column).removeClass("dead");
        $("td#row_" + row + "_column_" + column).addClass("alive");
        $("td#row_" + row + "_column_" + column).addClass("change");
    }
}

function PlayAgain() {
    location.reload();
}