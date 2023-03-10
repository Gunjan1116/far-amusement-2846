let cont=document.querySelector("#data");
const search=document.querySelector("#search");
const search_btn=document.querySelector("#search_btn")
search_btn.addEventListener("click",()=>{
  let value=search.value;
  //console.log(value);
  getSearchData(value);
})
async function getAlldata(){
    try {
      const res=await fetch("https://lazy-gold-gopher-wig.cyclic.app/homepageproduct/",{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
      })
      if(res.ok){
        const out=await res.json();
        console.log(out);
        render(out);
      }
    } catch (error) {
        console.log(error);
        console.log(error.message);
    }
}
getAlldata()
async function getSearchData(value){
  try {
    const res=await fetch(`https://lazy-gold-gopher-wig.cyclic.app/homepageproduct?q=${value}`,{
      method:"GET",
      headers:{
          'Content-Type':'application/json'
      }
    })
    if(res.ok){
      const out=await res.json();
      console.log(out);
      render(out);
    }
  } catch (error) {
      console.log(error);
      console.log(error.message);
  }
}
    
// title:{type:String,require:true},
//     imageLink:{type:String,require:true},
//     author:{type:String,require:true},
//     followers

function render(arr){
  cont.innerHTML=null;
    arr.forEach((el)=>{
        let div=document.createElement("div");
        let h3=document.createElement("h3");
        h3.innerText=el.title;
        let img=document.createElement("img");
        img.setAttribute("src",el.imageLink);
        img.setAttribute("width","70%")
        let h4=document.createElement("h4");
        h4.innerText=el.author;
        let p=document.createElement("p");
        p.innerText=el.followers;
        div.append(h3,img,h4,p);
        cont.append(div);
    })
}
const cart_btn=document.getElementById("cart");
cart_btn.addEventListener("click",()=>{
  window.location.href="cart.html";
})
const user_btn=document.getElementById("user");
user_btn.addEventListener("click",()=>{
  window.location.href="register.html";
})
    