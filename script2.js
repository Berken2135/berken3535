function img(anything){
    document.querySelector('.slide').src=anything;
}
function change(change){
    const line=document.querySelector('.home');
    line.addEventListener('click',function(){
    line.style.background=change      
    })
           
}

// const arttırma=document.querySelector('.arttırma')

// function arttırma(arttırma){
//     arttırma.addEventListener('click',function(){
//         if(arttırma+1){
//             print("{} tane ürün aldınız teşekkürler")
//         }else{
//             print('geçersiz ürün adedi girdiniz')
//         }
//     })
// }