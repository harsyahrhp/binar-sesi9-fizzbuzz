// function kurang(param1,param2){
//     let hasil = param1 - param2
//     return hasil;
// }

// const pengurangan1 = kurang(10, 2);
// console.log(pengurangan1);

// const pengurangan12 = kurang("11", "3");
// console.log(pengurangan12);

// const pengurangan13 = kurang("5", "1");
// console.log(pengurangan13);

// const pengurangan14 = kurang("7", "1");
// console.log(pengurangan14);

// function cekstring(str){
//     hasil = str.length
//     return hasil
// }

// const cek = cekstring("nama saya harsya");
// console.log(cek);

function average(a,b,c,d,e,f,g,h,j,k){
    let tambah = a+b+c+d+e+f+g+h+j+k
    let jumlah = average.length
    let hasil = tambah/jumlah
    console.log('jumlah',jumlah)
    return hasil
}

const angka = average(1,2,3,4,5,6,7,8,9,10);
console.log(angka);

function cek(tes){
        return typeof tes
    }
  
    const a = cek("haha");
    console.log(a)

    const b = cek(10);
    console.log(b)