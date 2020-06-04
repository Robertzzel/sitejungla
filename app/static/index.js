var intrebari=[
    'sunt un caine rau, '+"\n"+' eu rup lesa '+"\n"+' nu ma poti dreasa.',

    'Tu cand mergi la o plimbare'+"\n"+' Ori te cheama o labuta '+"\n"+' Baga mana in buzunare'+"\n"+' Ya de-acolo o punguta.',

    'Poate ai noroc si gasesti cu branza.',

    'Juvenes dum sumus'+"\n"+' Post jucundam juventutem'+"\n"+' Post molestam senectutem'+"\n"+' Nos habebit humus'+"\n"+' Nos habebit humus'+"\n"+' Vita nostra brevis est.',

    '<p style="text-decoration: line-through;">adjectiv</p>\n verb',

    'Am invatat ca nordul e in sus.',

    'obliCe.',

    'pare ca ai nevoie de ceva dulce'
];
var raspunsuri=[];
var btn= document.querySelector('#btn');
var msg= document.querySelector('h1');
var inp= document.querySelector('input');

var i1=0,
    i2=0,
    i3=0,
    i4=0,
    i5=0,
    i6=0,
    i7=0,
    i8=0,
    i0=0;

    
btn.addEventListener('click',function(){
    rasp= inp.value;

    //intrbarea 0
    if(rasp == "12" && i0==0)
    {
        i0=1;
        msg.innerHTML=intrebari[0];
    }

    //intrbarea 1
    if(rasp == "34" && i1==0)
    {
        i1=1;
        msg.innerHTML=intrebari[1];
    }
    //intrbarea 2
    if(rasp == "56" && i2==0)
    {
        i2=1;
        msg.innerHTML=intrebari[2];
    }
    //intrbarea 3
    if(rasp == "78" && i3==0)
    {
        i3=1;
        msg.innerHTML=intrebari[3];
    }
    //intrbarea 4
    if(rasp == "910" && i4==0)
    {
        i4=1;
        msg.innerHTML=intrebari[4];
    }
    //intrbarea 5
    if(rasp == "1112" && i5==0)
    {
        i5=1;
        msg.innerHTML=intrebari[5];
    }
    //intrbarea 6
    if(rasp == "1314" && i6==0)
    {
        i6=1;
        msg.innerHTML=intrebari[6];
    }
    //intrbarea 7
    if(rasp == "1516" && i7==0)
    {
        i7=1;
        msg.innerHTML=intrebari[7];
    }

});