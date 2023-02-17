

let item  = [ {
    id : "1",
    contact_number : "https://wa.me/919892836253",
    sc : "linkedin.com/in/vinuta-bhat-401791245",
},
    {
        id : "2",
        contact_number : "https://wa.me/919909909999",
        sc : "linkedin.com/in/shreya-rangapure-2a3858231",

},
{
    id : "3",
    contact_number : "https://wa.me/919999990000",
    sc : "linkedin.com/in/vishalranka3",
},
{
    id : "4",
    contact_number : "https://wa.me/910892836253",
    sc : "linkedin.com/in/tanya-srinivas-ba3703252",
},
]

console.log("inside");

function call(a)
{
    a-=1;
    let p  = item[a].contact_number;
    // console.log(p);
    window.location.href = p;
}

function calla(a)
{
    a-=1;
    let l = item[a].sc;
    // console.log(l);
    window.location.href = l;
}

