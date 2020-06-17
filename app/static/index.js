//functii

function crearebtn(mesaj,parinte)
{
    let buton=document.createElement('button');
    buton.setAttribute('type','button');
    buton.setAttribute('id','reset');
    buton.setAttribute('class','btn btn-outline-warning btn-lg');
    buton.innerHTML= mesaj;
    document.querySelector(parinte).appendChild(buton);
}


//initializari
var intrebari=[
    '<p>sunt un caine rau,</p> <p> eu rup lesa </p> nu ma poti dresa.',

    '<p>Tu cand mergi la o plimbare</p> <p>Ori te cheama o labuta</p><p> Baga mana in buzunare</p> Ya de-acolo o punguta.',

    'Poate ai noroc si gasesti cu branza.',

    '<p>Juvenes dum sumus</p><p> Post jucundam juventutem</p><p> Post molestam senectutem</p><p> Nos habebit humus</p><p> Nos habebit humus</p> Vita nostra brevis est.',

    '<p style="text-decoration: line-through;">adjectiv</p>\n verb',

    'Am invatat ca nordul e in sus.',

    'obliCe.',

    'pare ca ai nevoie de ceva dulce'
];
var raspunsuri=['0','nasul','Sailor','10 ani','Crengi','mar, sunca, paine','18 11','ce spun romanii'];
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

    //actualizez in vectorul din memorie la raspunsurile trimise
   for(let i=0;i<7;i++)
   {
       if(rasp == raspunsuri[i] && vec[i]==0)
        {
            vec=localStorage.getItem('vec').split(",");
            vec[i]=1;
            localStorage.setItem('vec',vec);

            inp.value=""

            //animatie
            $("h3").fadeOut("slow",function(){
                msg.innerHTML=intrebari[i];
                $("h3").fadeIn();
            });
        }
   }

    //intrbarea 7
    if(rasp == raspunsuri[7] && vec[7]==0)
    {
        vec=localStorage.getItem('vec').split(",");
        vec[7]=1;
        localStorage.setItem('vec',vec);

        //animatie
        $("h3").fadeOut("slow",function(){
            msg.innerHTML=intrebari[7];
            $("h3").fadeIn();
        });
        

        crearebtn('Resetare','#div');

        //resetare memorie
        var reset=document.querySelector('#reset');
        reset.addEventListener('click',function(){
            localStorage.clear();
            location.replace("https://ziuasorinei.herokuapp.com");
        });
    }
});

//nu stiam cum sa fac sa se creeze butonul cand dau refresh
vec=localStorage.getItem('vec').split(",");

if(vec[7]==1)
{

    crearebtn('Resetare','#div');

    var reset=document.querySelector('#reset');
    reset.addEventListener('click',function(){
         localStorage.clear();
         location.replace("https://ziuasorinei.herokuapp.com");
    });
}

