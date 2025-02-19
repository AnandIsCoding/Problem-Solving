//     *
//    **
//   ***
//  ****
// *****

let totalrow = 5, spaces = totalrow-1, stars = 1, startrow = 1

while(startrow <= totalrow){
    for(let i=0;i<spaces;i++){
        process.stdout.write(' ')
    }
    for(let i=0;i<stars;i++){
        process.stdout.write("*")
    }
    console.log()
    spaces--
    stars++
    startrow++
}


//   determine startrow and totalrow
//   determine firstrow spaces count and stars count
//   while (startrow <= totalrow) print krna h spaces (spaces ko for loop 0 to < spaces count), phir stars ko for loop ka use kr k print
//    determine if scaces increase than increase , and if stars increase or decrease -- , ++ accordingly