import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Carta } from "./Carta.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-dark">
				<div className="container-fluid col-11 d-flex align-self-center">
					<a className="navbar-brand text-light" href="#">Start Bootstrap</a>
					<div className="justify-content-end">
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon text-light d-flex justify-content-center align-content-center"><i className="fa-solid fa-bars"></i></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item ">
									<a className="nav-link active text-light" aria-current="page" href="#">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-secondary" href="#">About</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-secondary" href="#">Services</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-secondary" href="#">Contact</a>
								</li>
							</ul>
						</div>

					</div>
				</div>
			</nav>

			<div className="container-fluid col-11 mt-3 mb-3">
				<div className="jumbotron bg-body-secondary mt-2 mb-2 p-3">
					<h1 className="display-4">A Warm Welcome!</h1>
					<p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					<a className="btn btn-primary btn-lg" href="#" role="button">Aprende más</a>
				</div>
			</div>
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
			<footer class="bg-dark text-white text-center py-5">
				<p class="mb-0">© 2025 Mi Sitio Web. Todos los derechos reservados.</p>
			</footer>

		</>
	);
};

export default Home;