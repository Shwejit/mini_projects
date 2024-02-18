var index=0;
let v=document.querySelector('button');
// function colors()
// {
//     var clr=['blue','green','yellow','pink','grey','orange'];
//      document.getElementsByClassName("abc").style.background = clr[index++]

//      if(index>clr.length-1)
//      index=0;
// }
v.addEventListener('click',()=>{
    var clr=['blue','green','yellow','pink','grey','orange'];
    //  document.getElementsByClassName("abc")[0].style.background = clr[index++]
    document.querySelector('.abc').style.background = clr[index++];
     if(index>clr.length-1)
     index=0;
})