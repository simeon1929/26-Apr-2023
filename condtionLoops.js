// condition started 
console.log('Condition file');

let ax = 3
if(ax == 1) {
    console.log('condition true');
} else {
    console.log('False');
}

console.log('Number Condition');


if(10 < 5) {
    console.log('True 1');
}else {
    console.log('False');
}


// 5 steps walked

//let totalStep = 10

// for(initialaization, condition , afterthroug) {
//     Statement 
// }

for(let step = 0; step < 10 ; step ++ ) {
    
    if(step == 5) {
        console.log('YOUR  STEPS ARE AVAILABE');
    } else {
        console.log('Not avalibale');
    }
    console.log('Steps ' , step);
}



//form Value 

let btn = document.getElementById('btn')
// console.log(btn);

function countSlect (selectObject) {
    let numberSelect = 0
    for(let i = 0 ; i < selectObject.options.length ; i++) {
        //console.log([i]);
        if(selectObject.options[i].slected) {
            numberSelect++
        }
    }
    return numberSelect;
}

btn.addEventListener('click', (e)=>{
    const musicTypes = document.selectForm.musicTypes
    console.log(`You have selected ${countSlect(musicTypes)} option(s).`);
})

// function countSelected(selectObject) {
//     let numberSelected = 0;
//     for (let i = 0; i < selectObject.options.length; i++) {
//       if (selectObject.options[i].selected) {
//         numberSelected++;
//       }
//     }
//     return numberSelected;
//   }
  
//   const btn = document.getElementById("btn");
  
//   btn.addEventListener("click", () => {
//     const musicTypes = document.selectForm.musicTypes;
//     console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
//   });