console.log("asdsad")


const root = document.getElementById('root')

/*
const Avatar = (params)=>{
    console.log(params)
    const src = `https://randomuser.me/api/portraits/lego/${params.id}.jpg`
    return `<picture>
                 <img src="${src}" alt="img"></img>
                 Lego
             </picture>`

}

root.innerHTML = Avatar({id:3,name:"fede"})

root.innerHTML += Avatar({id:4,name:"Pejo"})

root.innerHTML += Avatar({id:5,name:"marcos"})

root.querySelectorAll('img').forEach((img)=>{
    console.log(img)

    img.addEventListener('click',()=>{

        img.classList.toggle('disabled')
    })
})
*/

const r = React.createElement

const Avatar = ()=>{
const src = `https://randomuser.me/api/portraits/lego/3.jpg`

return r('picture',{},[r('img',{src,alt:'lego1'}),'pepe'])
}

/*
const JSX = ()=>{
const src = `https://randomuser.me/api/portraits/lego/3.jpg`

return (<picture>
    <img src={src} alt='lego1'/>
    Mauricio
</picture>)
}

console.log("asfdasfa")
ReactDOM.render(r(Avatar),root)

ReactDOM.render(r(JSX),root)
*/