import "./css/daftar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"


export default function Login() {
  return (
		<main id="masuk">
			<div className="container py-5 h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-12 col-md-8 col-lg-6 col-xl-6">
						<div
							className="card shadow-3 px-5"
							style={{ borderRadius: "1rem" }}>
							<div className="card-body p-5 text-center">
              <FontAwesomeIcon icon={faEnvelope} />
								<img
									src="React.svg"
									alt="Logo BijakCuan"
									style={{
										borderRadius: "2rem",
										height: "100px",
										width: "100px",
									}}
									className="mb-4"
								/>
								<h3 className="mb-1 fw-bold">Masuk</h3>
								<p className="mb-4 ">Kembali bertumbuh bersama BijakCuan</p>
								
                <div className="d-flex flex-column gap-4">
									<form
										className="form-outline d-flex flex-column gap-2">
										<input
											type="text"
											name="username"
											id="username"
											placeholder="Username/email"
                      className="mt-5"
											required
										/>
										<input
											type="password"
											name="password"
											id="password"
											placeholder="Password"
                      className="border radius = 10 px;"
											required
										/>
										<button type="submit" className="btn btn-primary mt-3">
											Masuk
										</button>
									</form>
								
									<p>
										Belum memiliki akun?{" "}
										<Link
											to="/daftar"
											className="text-dark text-decoration-underline">
											Daftar sekarang
										</Link>
									</p>
								</div>
					</div>
				</div>
        </div>
							</div>
						</div>
		</main>
	)
}
