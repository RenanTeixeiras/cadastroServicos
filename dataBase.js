




//Banco de dados Servicos
if(window.openDatabase){
   db = window.openDatabase('dbServicos','1.0','data',1*1024*1024);
   db.transaction(function(query){
       query.executeSql('CREATE TABLE IF NOT EXISTS servicos (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT)')
   });

}
function gravarDadosServicos() {
    if (pegarValoresServicos() == ""){
        console.log('Campo Vazio')
        alert('Não é possível salvar um campo vazio! ')
    } else {
        db.transaction(function(query){
            query.executeSql('INSERT INTO servicos (titulo) VALUES (?)',[pegarValoresServicos()],
            function(query, result) {}.null);
        });

    }
}

function pegarValoresServicos(){
    var servico = document.getElementById('serviço').value
    console.log(servico)
    return servico
}

function resetarValoresServicos() {
    db.transaction(function(query){
        query.executeSql('DROP TABLE servicos');
    });
    db.transaction(function(query){
        query.executeSql('CREATE TABLE IF NOT EXISTS servicos (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT)')
    });
}

function mostrarDadosServicos() {
   db.transaction(function(query) {
        query.executeSql('SELECT * FROM servicos', [],
        function (query,results) {
        for(var i=0, item = null; i < results.rows.length; i++){
            item = results.rows.item(i);
            document.getElementById('servicos').innerHTML += '<option>' + item['id'] +' - ' + item['titulo'] + '</option>';
        }
    });
});
}
//Banco de dados Obras
if(window.openDatabase){
    datab = window.openDatabase('dbObras','1.0','data',1*1024*1024);
    datab.transaction(function(query){
        query.executeSql('CREATE TABLE IF NOT EXISTS obras (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT)')
    });
 
 }
 function gravarDadosObras() {
    if (pegarValoresObras() == ""){
        console.log('Campo vazio')
        alert('Não é possível salvar um campo vazio! ')
    } else {
        datab.transaction(function(query){
            query.executeSql('INSERT INTO obras (titulo) VALUES (?)',[pegarValoresObras()])
        });

    }
 }
 
 function pegarValoresObras(){
     var obra = document.getElementById('obra').value
     console.log(obra)
     return obra
 }
 
 function resetarValoresObras() {
     datab.transaction(function(query){
         query.executeSql('DROP TABLE obras');
     });
     datab.transaction(function(query){
         query.executeSql('CREATE TABLE IF NOT EXISTS obras(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT)')
     });
 }
 function mostrarDadosObras() {
    datab.transaction(function(query) {
         query.executeSql('SELECT * FROM obras', [],
         function (query,results) {
         for(var i=0, item = null; i < results.rows.length; i++){
             item = results.rows.item(i);
             document.getElementById('obras').innerHTML += '<option id="' + item['id']+ '">' + item['id'] +' - ' + item['titulo'] + '</option>';
         }
     });
 });
 }
 function quantidadeExecutada() {
    quantidadeExct = document.getElementById('quantidade').value
    return quantidadeExct
 }

 function testarOption(){
    teste = document.getElementById('1').value
    console.log(teste)
 }
 //tabela para servicos já executados
 if(window.openDatabase){
    datab2 = window.openDatabase('dbExecutados','1.0','data',1*1024*1024);
    datab2.transaction(function(query){
        query.executeSql('CREATE TABLE IF NOT EXISTS Executados (id INTEGER PRIMARY KEY AUTOINCREMENT, servico TEXT, obra TEXT, metragem INTEGER)')
    });
}
function gravarDadosExecutados() {
    datab2.transaction(function(query){
        query.executeSql('INSERT INTO Executados (servico,obra,metragem) VALUES (?,?,?)',[pegarValoresServExecutados(),pegarValoresObrasExecutadas(),pegarMetragem()])
    });
}
function pegarValoresServExecutados(){
    var Servexecutados = document.getElementById('servicos').value
    console.log(Servexecutados)
    return Servexecutados
}
function pegarValoresObrasExecutadas(){
    var Obraexecutadas = document.getElementById('obras').value
    console.log(Obraexecutadas)
    return Obraexecutadas
}
function pegarMetragem() {
    metragem = document.getElementById('quantidade').value
    qtdExecutada = parseInt(metragem)
    console.log(qtdExecutada)
    return qtdExecutada
}
function ExibirExecutadosNoSite(){
    datab2.transaction(function(query) {
        query.executeSql('SELECT * FROM Executados', [],
        function (query,results) {
        for(var i=0, item = null; i < results.rows.length; i++){
            item = results.rows.item(i);
            document.getElementById('tabela').innerHTML += '<tr>'+'<th>' + item ['id']+ ' - ' + item['servico'] +' - ' + item['obra'] +' - ' + item['metragem'] + 'm²' + '</th>'+ '</tr>';
            console.log('Show!!')
        }
    });
});
}
// function atualizarMetragem () {
//     qtd = parseInt(document.getElementById('quantidade').value)
//     idExecutado = document.getElementById('idDoExecutado').value
//     datab2.transaction(function(query){
//         query.executeSql('SELECT metragem FROM Executados',[],
//         function (query,results){
//             for(var i=0, item = null; i < results.rows.length; i++){
//                 item = results.rows.item(i);
//                 console.log(item['metragem'])
//                 query.executeSql('UPDATE Executados SET metragem = ? WHERE id = ?' ,[(parseInt(item['metragem'])+ qtd),idExecutado])
//             }
//         })
//     })

// }
function resetarValoresExecutados() {
    datab2.transaction(function(query){
        query.executeSql('DROP TABLE Executados');
    });
    datab2.transaction(function(query){
        query.executeSql('CREATE TABLE IF NOT EXISTS Executados(id INTEGER PRIMARY KEY AUTOINCREMENT, servico TEXT, obra TEXT, metragem INTEGER)')
    });
}
// function totalTudo() {
//     datab2.transaction(function(query) {
//          query.executeSql('SELECT * FROM Executados', [],
//          function (query,results) {
//          for(var i=0, item = null; i < results.rows.length; i++){
//              item = results.rows.item(i);
//              document.getElementById('TotalServicosExecutados').innerHTML += '<tr>' + '<th>'+ item['servico']+'</th>' + '<th>' + parseInt(item['metragem']) + '</th>'+'</tr>';
//          }
//      });
//  });
//  }

//Manipulando css
function novoCadastro() {
    document.getElementById('cadastro').innerHTML = '<link rel="stylesheet" href="style2.css">'
}
function retornar() {
    document.getElementById('cadastro').innerHTML = '<link rel="stylesheet" href="style.css">'
}
function novoRealizado(){
    document.getElementById('cadastro').innerHTML = '<link rel="stylesheet" href="style3.css">'
}
function mostrarServicosRealizados() {
    datab2.transaction(function(query) {
         query.executeSql('SELECT * FROM Executados', [],
         function (query,results) {
         for(var i=0, item = null; i < results.rows.length; i++){
             item = results.rows.item(i);
             document.getElementById('servRealizados').innerHTML += '<option>' + item['id'] +' - ' + item['servico'] +' - ' + item['obra'] +' - ' + item['metragem'] + 'm²' + '</option>';
         }
     });
 });
 }