// const generateFibonacci = require('./functions/math/fibonnaci');

const hoy = new Date();
const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];


//const dias = ['1','2','3'];
console.log(typeof(meses));
//const anios = ['2017','2018','2019','2020','2021','2022']
const anioActual = hoy.getFullYear();
const anioRef = 2017;
const anios=[];

for (i=anioRef; i <= anioActual;i++){
    //console.log(i);
    var a = i.toString();
    anios.push(a);
}
console.log(anios);
console.log(typeof(anios));
const fs = require('fs');
    for ( const anio of anios){
        for (const mes of meses){
            var mesValor = meses.indexOf(mes);
            var mesValMasUno = mesValor+1;
            var diaMes = new Date(anio,mesValMasUno, 0).getDate();
            for (var dia = 1; dia <= diaMes; dia++){
                var path = './'+`${anio}`+'/'+`${mes}`+'/';
                fs.mkdirSync(path,{recursive:true});
                var filepath = `${path}`+`${dia}`+'/';
                var text_file = `El día número es: ${dia} del mes ${mes} del año ${anio}`;
                fs.writeFile(filepath,text_file, (err)=>{
                    if(err) throw err;
                    
                });
                
            }
    }
}


// // for (const dia of dias){
// //     var filepath = `${path}`+`${dia}`+'/';
// //     console.log(filepath);
// //     var text_file = "Hola mundo";
// //     fs.writeFile(filepath,text_file, (err)=>{
// //         if(err) throw err;
// //         console.log('si creo');
// //     });
// // }