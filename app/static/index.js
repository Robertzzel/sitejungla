//initializari
var intrebari=[
    '<p>sunt un caine rau,</p> <p> eu rup lesa </p> nu ma poti dreasa.',

    '<p>Tu cand mergi la o plimbare</p> <p>Ori te cheama o labuta</p><p> Baga mana in buzunare</p> Ya de-acolo o punguta.',

    'Poate ai noroc si gasesti cu branza.',

    '<p>Juvenes dum sumus</p><p> Post jucundam juventutem</p><p> Post molestam senectutem</p><p> Nos habebit humus</p><p> Nos habebit humus</p> Vita nostra brevis est.',

    '<p style="text-decoration: line-through;">adjectiv</p>\n verb',

    'Am invatat ca nordul e in sus.',

    'obliCe.',

    'pare ca ai nevoie de ceva dulce'
];
var raspunsuri=['0','1','2','3','4','5','6','7'];
var btn= document.querySelector('#btn');
var msg= document.querySelector('h3');
var inp= document.querySelector('input');


//verific daca exista vectorul in memorie
var vec;
if(localStorage.getItem('vec'))
{
    vec=localStorage.getItem('vec').split(",");
}
else{
    vec=[0,0,0,0,0,0,0,0];
    localStorage.setItem('vec',vec);
}

//actualizare scris daca exista vectorul in memorie
for(let i=0;i<vec.length;i++)
{
    if(vec[i]==1)
    {
        msg.innerHTML=intrebari[i];
    }
}

//activarea butonului
btn.addEventListener('click',function(){
    rasp= inp.value;


    //intrbarea 0
    if(rasp == raspunsuri[0] && vec[0]==0)
    {
        vec=localStorage.getItem('vec').split(",");
        vec[0]=1;
        localStorage.setItem('vec',vec);
        msg.innerHTML=intrebari[0];
    }

    
    //intrbarea 1
    if(rasp == raspunsuri[1] && vec[1]==0)
    {
        vec=localStorage.getItem('vec').split(",");
        vec[1]=1;
        localStorage.setItem('vec',vec);
        msg.innerHTML=intrebari[1];
    }

    //intrbarea 2
    if(rasp == raspunsuri[2] && vec[2]==0)
    {
        vec=localStorage.getItem('vec').split(",");
        vec[2]=1;
        localStorage.setItem('vec',vec);
        msg.innerHTML=intrebari[2];
    }

    //intrbarea 3
    if(rasp == raspunsuri[3] && vec[3]==0)
    {
        vec=localStorage.getItem('vec').split(",");
        vec[3]=1;
        localStorage.setItem('vec',vec);
        msg.innerHTML=intrebari[3];
    }

    //intrbarea 4
    if(rasp == raspunsuri[4] && vec[4]==0)
    {
        vec=localStorage.getItem('vec').split(",");
        vec[4]=1;
        localStorage.setItem('vec',vec);
        msg.innerHTML=intrebari[4];
    }

    //intrbarea 5
    if(rasp == raspunsuri[5] && vec[5]==0)
    {
        vec=localStorage.getItem('vec').split(",");
        vec[5]=1;
        localStorage.setItem('vec',vec);
        msg.innerHTML=intrebari[5];
    }

    //intrbarea 6
    if(rasp == raspunsuri[6] && vec[6]==0)
    {
        vec=localStorage.getItem('vec').split(",");
        vec[6]=1;
        localStorage.setItem('vec',vec);
        msg.innerHTML=intrebari[6];
    }

    //intrbarea 7
    if(rasp == raspunsuri[7] && vec[7]==0)
    {
        vec=localStorage.getItem('vec').split(",");
        vec[7]=1;
        localStorage.setItem('vec',vec);
        msg.innerHTML=intrebari[7];

        let buton=document.createElement('button');
        buton.setAttribute('type','button');
        buton.setAttribute('id','reset');
        buton.setAttribute('class','btn btn-outline-warning btn-lg');
        buton.innerHTML='Resetare';
        document.querySelector('#div').appendChild(buton);


        var reset=document.querySelector('#reset');
        reset.addEventListener('click',function(){
            localStorage.clear();
            location.replace("http://localhost:5000");
        });
    }
});


vec=localStorage.getItem('vec').split(",");

if(vec[7]==1)
{

    let buton=document.createElement('button');
    buton.setAttribute('type','button');
    buton.setAttribute('id','reset');
    buton.setAttribute('class','btn btn-outline-warning btn-lg');
    buton.innerHTML='Resetare';
    document.querySelector('#div').appendChild(buton);

    var reset=document.querySelector('#reset');
    reset.addEventListener('click',function(){
         localStorage.clear();
         location.replace("http://localhost:5000/start");
    });
}

