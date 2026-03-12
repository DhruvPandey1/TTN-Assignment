const fs=require('fs');


// const read=()=>{
//     console.log('Start');
//     fs.readFile('./file.txt', 'utf-8', function(err, content) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(content);
//     });

    

//     console.log('end')
// }

const readSync=()=>{
    console.log('start');

    const content=fs.readFileSync('./file.txt','utf-8');
    console.log(content);

    console.log('end');
}

// console.log('Reading async\n');
// read()

console.log('Reading sync\n')
readSync();