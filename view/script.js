
$('#parseBtn').on('click', function() {
    var csvFile = document.getElementById('csvFile').files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var lines = e.target.result.split("\n");
        var headers = lines[0].split(",");
        var htmlHeader = '';
        var htmlBody = '';

        // Create table header
        htmlHeader += '<tr>';
        for (var j = 0; j < headers.length; j++) {
            htmlHeader += '<th>' + headers[j] + '</th>';
        }
        htmlHeader += '</tr>';

        // Create table body
        for (var i = 1; i < lines.length; i++) {
            var row = lines[i].split(",");
            htmlBody += '<tr>';
            for (var j = 0; j < row.length; j++) {
                htmlBody += '<td>' + row[j] + '</td>';
            }
            htmlBody += '</tr>';
        
        $('#headerList').html(htmlHeader);
        $('#numberList').html(htmlBody);
        $('#table').DataTable();
      }
  
    };
    reader.readAsText(csvFile);
});