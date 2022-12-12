document.querySelector("button").onclick = myClick;

function myClick() {
    const a = document.querySelector('.valueA').value;
    const b = document.querySelector('.valueB').value;
    const c = document.querySelector('.valueC').value;
    console.log(a + ' ' + b + ' ' + c);
    D = b**2 - 4*a*c;
    console.log(D)
    if (D<0){
        D = "У уравнения нету корней";
        console.log(D);
    }
    if (D==0){
        x = - ( b / 2*a );
        D ="Уравнение имеет один корень: " + x;
        console.log(D);     
    }
    if (D>0){
        x1 = (-b + Math.sqrt(D)) / 2*a;
        x2 = (-b - Math.sqrt(D)) / 2*a;
        D = "Уравнение имеет два корня:<br> x1 = " + x1 + "<br>" + "x2 = " + x2
        console.log(D); 
    }
    document.querySelector('.out').innerHTML = D;
}

// версия через уведомлени (окошко браузера) находится ниже

// <!-- <script>
// //     "use strict"
// //     let a, b, c, D, x, x1, x2;
// //     // alert("Задайте коэфициенты для уравнение типа: ax^2+bx+c=0")
// //     const FirstRatio = prompt("Введите число a: ");
// //     a = FirstRatio;
// //     const SecondRatio = prompt("Введите число b: ");
// //     b = SecondRatio;
// //     const ThridRatio = prompt("Введите число c: ");
// //     c = ThridRatio;
// //     D = b**2 - 4*a*c;
// //     console.log(D)
// //     if (D<0){
// //         alert("У уравнения нету корней");
// //     }
// //     if (D==0){
// //         x = - ( b / 2*a );
// //         alert("Уравнение имеет один корень: " + x);     
// //     }
// //     if (D>0){
// //         x1 = (-b + Math.sqrt(D)) / 2*a;
// //         x2 = (-b - Math.sqrt(D)) / 2*a;
// //         alert("Уравнение имеет два кореня: x1 = " + x1 + " и x2 = " + x2); 
// //     }
// // </script> -->

