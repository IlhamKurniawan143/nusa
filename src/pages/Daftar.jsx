import "./css/daftar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGoogle} from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Button } from "react-bootstrap"

export default function Daftar() {
	return (
		<main id="Daftar">
			<div className="container py-5 h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-12 col-md-8 col-lg-6 col-xl-6">
						<div
							className="card shadow-3 px-5"
							style={{
								borderRadius: "3rem",
								height: "40rem",
								backgroundColor: "green",
							}}>
							<div className="card-body p-5 ">

								<h3 className="mb-1 fw-bold text-center" >Daftar</h3>
								<br /><br />
								<div className="d-flex flex-column gap-4">
									<form
										className="form-outline d-flex flex-column gap-2">Alamat Email / Nama Pengguna*
										<input
											type="text"
											name="username"
											id="username"
											placeholder="   Alamat Email / Nama Pengguna"
											style={{
												borderRadius: "30px",
												height: "3rem",
												width: "27rem",
											}}
											required
										/>
										
										Kata Sandi
										<input
											type="password"
											name="password"
											id="password"
											placeholder="   Password"
											style={{
												borderRadius: "30px",
												height: "3rem",
												width: "27rem",
											}}
											required
										/>
										Konfirmasi Ulang
										<input
											type="password"
											name="password"
											id="password"
											placeholder="   Masukkan ulang password"
											style={{
												borderRadius: "30px",
												height: "3rem",
												width: "27rem",
											}}
											required
										/>
										<br /><br />
										<Button href="/daftar" variant="secondary" size="lg" style={{
												marginTop: "20p"
											}}>
											Mendaftar
										</Button>
									</form>
									-------------------Atau Lanjutkan Dengan------------------
									<FontAwesomeIcon icon={faFacebook} style={{
												height: "35px",
											}}/>
									<FontAwesomeIcon icon={faGoogle} style={{
												height: "35px",
											}}/>
									<FontAwesomeIcon icon={faTwitter} style={{
												height: "35px",
											}}/>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
