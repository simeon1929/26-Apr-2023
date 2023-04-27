let body = document.querySelector('body')
console.log('body');

// String template string 

let firsrName = 'Simeon'
let newAge = 20
let text = 'old'

let nameReuslt = firsrName + ' is ' + newAge + ' '+ text 
console.log(nameReuslt);

// template string 

let FatherName = 'Simeon'
let wifeName = 'Beulah'
let fistBaby = 'Evania'
let secondBaby = 'Abram'

let result = `Father name is ${ FatherName} , Mother name ${ wifeName} and first child name ${ fistBaby} and second baby name ${secondBaby} `
 console.log('Template string : ', result);

 let html = `<table>
 <tr>
     <td>Father Name </td><td>${FatherName}</td>
     <td>Mother Name </td><td> ${wifeName }</td>
     <td>First Baby name </td><td></td>
     <td>Second Baby name </td><td></td>
 </tr>
</table>
 `

 console.log(html);

