import "./css/daftar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import Form from 'react-bootstrap/Form';

export default function Login() {
  return (
    <main id="masuk">
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

                <h3 className="mb-1 fw-bold text-center" >NusaTech</h3>
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
                    {['radio'].map((type) => (
                      <div key={`Ingat-${type}`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`Ingat-${type}`}
                          label={`Ingat ${type}`}
                        />
                      </div>
                    ))}
                    <Button variant="primary" size="lg" disabled>
                      Masuk
                    </Button>
                    <Button href="/daftar" variant="secondary" size="lg" disabled>
                      Daftar
                    </Button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
