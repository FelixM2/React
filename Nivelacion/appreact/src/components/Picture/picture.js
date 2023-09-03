import './picture.css';


const Picture = (props)=>{

            return (
                    <div className="picture7">
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzspQPQWwGqJbjAdeN7nPqZ7GkLrA49ZpWQ&usqp=CAU" className="img" style={{width:"220px"}} alt='img'>
                        
                         </img>   
                         <title className="title">
                        {props.title}
                         </title>
                    </div>

            )
}


export default Picture 
