import React,{useState} from "react";

//create your first component
const Home = () => {
		const [saveText, setSaveText] = useState ([]);
	

	return (
		<div className="container text-center">
			<h1>TODOS</h1>
			<div className="container shadow p-3 mb-5 bg-white rounded">
			<input type="text" placeholder="¿Qué tienes que hacer?" className="col-8 border none"
			onKeyDown={(e)=>{ 
				if(e.key === "Enter")
				setSaveText([...saveText,e.target.value]);}}	
			/>

			<ul class="list-group">
			{saveText.map(elem=>{return <li class="container list-group-item col-8 bi bi-x-lg">{elem}<button type="button" class="btn-close" 
			onClick={ (e)=>{this.delete(li)
			}} aria-label="Close"></button></li>})}
			</ul>
			</div>
		</div>
	);
};

export default Home;


