function retrieveData(e){
    var inputAttribute = document.getElementById("attr").value;
    fetch(`http://localhost:5000/get?inputAttribute=${inputAttribute}`).then(response => {
       return response.json();
    }).then(data => {
        $(function() {
            var iter='';
            var count = 1;
            $.each(JSON.parse(data), function(i, item) {
                iter += '<tr>'; 
                iter += '<td>' + count + '</td>'; 
                iter += '<td>' + inputAttribute + '</td>'; 
                iter += '<td>' + item.TABLE_NAME + '</td>'; 
                iter += '<td>' + item.TABLE_TYPE + '</td>'; 
                iter += '</tr>'; 
                count+=1;
            });
            $('#resultBody').empty().append(iter); 
        });
    });  
}