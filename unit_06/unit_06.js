//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {

    let out1 = '';

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            out1 += '*';
            // console.log(out1);
        }
        out1 += '_';
    }

    document.querySelector('.out-1').innerHTML = out1;

}

document.querySelector('.b-1').onclick = t1;



//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифру и перенос строки br, внутренний - *_, и после этого внешний - знак переноса.</p>
function t2() {

    let out2 = '';

    for (i = 1; i <= 3; i++) {
        out2 += `${i}<br>`;

        for (j = 0; j < 3; j++) {
            out2 += '*_';
        }

        out2 += '<br>';
    }

    document.querySelector('.out-2').innerHTML = out2;

}

document.querySelector('.b-2').onclick = t2;



//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// <p>Решить задачу с помощью вложенных циклов. Внутренний цикл выводит *_,  внешний цикл выводит перенос строки br.</p>
function t3() {
    let out3 = '';

    for (i = 0; i < 4; i++) {
        for (j = 0; j < 3; j++) {
            out3 += '*_';
        }
        out3 += '<br>';
    }

    document.querySelector('.out-3').innerHTML = out3;

}

document.querySelector('.b-3').onclick = t3;



//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *
function t4() {

    let out4 = '';

    for (i = 1; i <= 3; i++) {
        out4 += `${i}_`;

        for (j = 1; j <= 5; j++) {
            out4 += `${j}*`;
        }
    }

    document.querySelector('.out-4').innerHTML = out4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 101010
// 101010
// 101010

// <p>Вложенный цикл в зависимости от четного или нет k (счетчика цикла) рисует или 0 или 1. Внешний цикл - br.</p>
function t5() {

    let out5 = '';

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 6; j++) {
            // console.log('j=' + j);
            if (j % 2 == 0) {
                // console.log(j % 2 == 0);
                out5 += '1';
                // console.log('out =' + out5);

            }
            else {
                // console.log(j % 2);
                out5 += '0';
                // console.log('out =' + out5);
            }
        }
        out5 += '<br>';

    }

    document.querySelector('.out-5').innerHTML = out5;

}

document.querySelector('.b-5').onclick = t5;



//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 10x01x
// 10x01x
// 10x01x


function t6() {

    let out6 = '';

    for (i = 0; i < 3; i++) {

        for (j = 0; j < 6; j++) {

            if (j == 0 || j == 4) {
                out6 += '1';
            }
            else if (j == 1 || j == 3) {
                out6 += '0';
            }
            else {
                out6 += 'x';
            }
        }

        out6 += '<br>';
    }

    document.querySelector('.out-6').innerHTML = out6;

}

document.querySelector('.b-6').onclick = t6;



//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *
// **
// ***
// ****

function t7() {

    let out7 = '';

    for (i = 0; i < 4; i++) {
        for (j = 0; j <= i; j++) {
            out7 += '*';
        }
        out7 += '<br>';
    }

    document.querySelector('.out-7').innerHTML = out7;

}

document.querySelector('.b-7').onclick = t7;



//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *****
// ****
// ***
// **
// *

function t8() {
    let out8 = '';
    for (i = 0; i < 5; i++) {
        for (j = 5; j > i; j--) {
            out8 += '*';
        }
        out8 += '<br>';
    }

    document.querySelector('.out-8').innerHTML = out8;

}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

function t9() {

    let out9 = '';
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= i; j++) {
            out9 += `${j}_`;
        }
        out9 += '<br>';
    }

    document.querySelector('.out-9').innerHTML = out9;

}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_


function t10() {
    let out10 = '';

    for (i = 0; i <= 4; i++) {
        for (j = 1; j <= 10; j++) {
            if (j == 10) {
                out10 += (i + 1) * 10 + '_';

            }
            else { out10 += `${i}${j}_`; }
        }
        out10 += '<br>';
    }
    document.querySelector('.out-10').innerHTML = out10;

}

document.querySelector('.b-10').onclick = t10;