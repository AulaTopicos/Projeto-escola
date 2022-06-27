

header = $('.item-template').html();
output = Mustache.render(header, alunoJson);
$(".mytable").append(output);

