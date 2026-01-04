
function Services() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 text-primary">
          Our Services
        </h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <h5 className="card-title">General Checkup</h5>
                <p className="card-text">
                  Regular health checkups by experienced doctors.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <h5 className="card-title">Specialist Doctors</h5>
                <p className="card-text">
                  Consult expert doctors from multiple specialties.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <h5 className="card-title">Emergency Care</h5>
                <p className="card-text text-muted">
                  24/7 emergency services with quick response.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;
