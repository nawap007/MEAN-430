const fs = require('fs');

// fs.open('./input.txt', 'r', (err, fd) => {
//     fs.fstat(fd, (err, stats) => {
//         console.log(stats.birthtime);
//         console.log(stats.size);
//         console.log(stats.gid);
//     });
//     fs.close(fd, (err) => {
//         if (err)
//             console.log(err);
//         else
//             console.log('file has been created!');
//     });
// });

// fs.rename('./input.txt', './input1.txt', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('file has been renamed');
// });

// fs.unlink('./input1.txt', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('file has been deleted');
// });

// fs.mkdir('./data', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('dir has been created');
// });

fs.rmdir('./data', (err) => {
    if (err)
        console.log(err);
    else
        console.log('dir has been created');
});