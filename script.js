window.addEventListener('scroll', event => {
    let Links = document.querySelectorAll('nav div ul li a');
    let fromTop = window.scrollY;
   
    Links.forEach(link => {
      let section = document.querySelector(link.hash);
     
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  
window.addEventListener('scroll', event => {
    let Links = document.querySelectorAll('min-nav li a');
    let fromTop = window.scrollY;
   
    Links.forEach(link => {
      let section = document.querySelector(link.hash);
     
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });


function btnLeft(){
    document.getElementById("btn-left").classList.add("active-btn")
    document.getElementById('btn-right').classList.remove('active-btn')
}
function btnRight(){
    document.getElementById("btn-left").classList.remove("active-btn")
    document.getElementById('btn-right').classList.add('active-btn')
}

let Btn = $(".nav-btn");

let product = [
    {
        id:1,
        name:"Vegie Muffen",
        title:"There are many things are needed to start the Fast Food Business.",
        price:20,
        img: './images/card1.png'
    },
    {
        id:2,
        name:"Vegie Muffen",
        title:"There are many things are needed to start the Fast Food Business.",
        price:21,
        img: "./img/eat-2.png"
    },
    {
        id:3,
        name:"Vegie Muffen",
        title:"There are many things are needed to start the Fast Food Business.",
        price:25,
        img: "./img/eat-3.png"
    },
    {
        id:4,
        name:"Vegie Muffen",
        title:"There are many things are needed to start the Fast Food Business.",
        price:30,
        img: "./img/eat-1.png"
    },
    {
        id:5,
        name:"Vegie Muffen",
        title:"There are many things are needed to start the Fast Food Business.",
        price:35,
        img: "./img/eat-5.png"
    },
    {
        id:6,
        name:"Vegie Muffen",
        title:"There are many things are needed to start the Fast Food Business.",
        price:40,
        img: "./img/eat-6.png"
    }
]

let NewProduct = []

function RenderMap(){
    if(NewProduct.length == 0){
        $(".nav-btn").attr("disabled",true)
    }else{
        $(".nav-btn").attr("disabled",false)
    }
    let a = product.map(item =>
        `
        <div class="cardMenu mb-5">
         <img src=${item.img} />
         <div class="textMenu">
              <div class="d-flex justify-content-between">
                  <h4>${item.name}</h4>
                   <h4>${item.price} $</h4>
              </div>
               <p>${item.title}</p>
               <div class="d-flex justify-content-between">
                    ${
                        NewProduct.some((a) => a.id == item.id) ?
                        `<button class="active-btn danger" onclick="Remove(${item.id})"><i class="bi bi-dash"></i></button>`:
                           ` <button class="active-btn" onclick="AddCard(${item.id})"><i class="bi bi-plus"></i></button>` 
                    }
                   <span> &starf;&starf;&starf;&starf;&starf; </span>
               </div>
            </div>
        </div>
        `)
        $('.foods').html(a)
        $(".cartspan").html(NewProduct.length)

}

const AddCard=(id)=>{

    product.filter(item =>{
        if( item.id == id){
            return NewProduct.push(item)
        }
    })
    RenderMap()
}

RenderMap()

const Modal=()=>{
    $(".Result").addClass('d-block')
    let a = NewProduct.map(item =>
        `
        <tr>
            <td><img src=${item.img} /></td>
            <td><h4>${item.name}</h4></td>
            <td><h4>${item.price} $</h4></td>
            <td><button onclick="Delete(${item.id})" class="btn btn-danger">Delete</button></td>
        </tr>
        `
        )
        let b = NewProduct.reduce((x,y)=>{
            return x += y.price
        },0)
        
        $('table').html(a);
        $('#total').html(b);
        

}
const Cencel=()=>{
    $(".Result").removeClass('d-block')
}

const Submit=()=>{
    Cencel();
    NewProduct = [];
    RenderMap();
    Alert()
}

const Alert=()=>{
    $(".alert").css('transform','scale(1)')
    let son = 0;
    let sanoq = setInterval(() => {
        son++
        if(son == 2){
            $(".alert").css('transform','scale(0)');
            clearInterval(sanoq)
            
        }
    }, 1000);
}



const Remove=(id)=>{
    NewProduct.filter((item,index) =>{
        if(item.id == id){
            NewProduct.splice(index, 1)
        }
    })
    
    RenderMap()
}

const Delete=(id)=>{
    Remove(id)
    Modal()
}

RenderMap()