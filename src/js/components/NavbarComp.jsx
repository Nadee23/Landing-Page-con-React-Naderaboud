export const NavarComp = () => {
    return (
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
    )
};