
let btn = document.querySelector("button");
let url2="https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async ()=>{
let link = await getimage();

let img = document.querySelector("#result");
img.setAttribute("src",link);
 })






// btn.addEventListener("click", async ()=>{
//     let fact = await getfacts();
//     console.log(fact);

//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })
// let url1 ="https://catfact.ninja/fact";


// async function getfacts(){
//     try{
//         let res = await fetch(url);
//     let data=await res.json();
//     console.log(data.fact);
// }
// catch(e){
//     console.log("error : ",e);
// }

//     }
    
async function getimage(){
    try{
        let res=await  axios.get(url2);
         return (res.data.message);
    }
    catch(e){
        console.log("ERROR-",e);
        return "No Image found"
    }
}