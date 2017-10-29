$(document).ready(function(){
    $('button').click(function(){
        $('table').append("<tr><td>"+$("[name=first_name]").val()+"</td><td>"+$("[name=last_name]").val()+"</td><td>"+$("[name=email]").val()+"</td><td>"+$("[name=number]").val()+"</td></tr>")
    })
})