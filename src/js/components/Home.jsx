import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Carta } from "./Carta.jsx";
import { NavarComp } from "./NavbarComp.jsx";
import { JumbotronComp } from "./JumbotronComp.jsx";
import { FooterComp } from "./FooterComp.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<NavarComp/>
			<JumbotronComp/>

			<div className="container-fluid justify-content-center p-5">

				<div className="cards-container row justify-content-center">
					<Carta
						title="Kakashi Hatake"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut"
						image={"https://img.asmedia.epimg.net/resizer/v2/SUEB6JCL5ROUBLRMSBI6ASWKXM.jpg?auth=9642c9a8ce4b908490afcb618da11ecd0c84756e51ed48d668dc7af9ae87117b&width=360"}
					/>
					<Carta
						title="Naruto Uzumaki"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut"
						image={"https://i.pinimg.com/474x/30/f3/e5/30f3e595177b4b4285d51e9f7c5bbb28.jpg"}
					/>
					<Carta
						title="Sakura Haruno"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut"
						image={"https://comansi.com/wp-content/uploads/2022/11/Sakura-3.jpg"}
					/>
					<Carta
						title="Anko Mitarashi"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut"
						image={"https://albumizr.com/ia/2bb6bd785b14c57b9c99d4337b5fbd5e.jpg"}
					/>
				</div>
			</div>

		<FooterComp/>
		</>
	);
};

export default Home;