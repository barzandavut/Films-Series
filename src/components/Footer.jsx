export default function Footer() {
  return (
    <footer className="bg-dark py-5">
      <div className="container text-light">
        <div className="row gy-4 gy-lg-0 justify-content-center">
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-start align-items-center text-center mb-0 mb-lg-0">
            <h4 className="fs-4 fw-bold">Eylem's Film Series</h4>
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-start align-items-center">
            <div className="kms">
              <h5 className="fs-5 pb-3">Kurumsal</h5>
              <ul className="list-unstyled">
                <li>Hakkımda</li>
                <li>İletişim</li>
                <li>Site Yönetimi</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-start align-items-center text-center link-icon">
            <div className="sosyal-medya">
              <p className="fs-5 pb-3">Bizi Takip Edin</p>
              <div className="d-flex gap-4 links">
                <a href="#">
                  <i className="bi bi-youtube text-danger"></i>
                </a>
                <a href="#">
                  <i className="bi bi-x text-light"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram text-danger"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center pt-3">
          <div className="text-light-natural opacity-50 mt-4">
            Copyright © Eylem's Film Series 2025. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
