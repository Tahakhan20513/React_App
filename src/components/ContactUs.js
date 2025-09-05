import React from 'react'

export default function ContactUs() {
  return (
    //  <div className='container my-4'>
    //     <div className="mt-5 p-4 bg-white rounded shadow-lg border">
    //       <h3 className="text-center text-primary mb-4 fw-bold">📞 Contact <span style={{ color: "#ff6600" }}>Us</span></h3>
    //       <p className="text-muted text-center">
    //         We’re here to help! Reach out for orders, queries, or support.
    //       </p>

    //       <div className="row text-center mt-4">
    //         <div className="col-md-4 mb-3">
    //           <div className="p-3 rounded bg-light h-100 shadow-sm hover-shadow">
    //             <i className="bi bi-envelope-fill fs-2 text-danger"></i>
    //             <h5 className="mt-2">Email</h5>
    //             <p className="mb-0">support@mobilehub.com</p>
    //           </div>
    //         </div>
    //         <div className="col-md-4 mb-3">
    //           <div className="p-3 rounded bg-light h-100 shadow-sm hover-shadow">
    //             <i className="bi bi-telephone-fill fs-2 text-success"></i>
    //             <h5 className="mt-2">Phone</h5>
    //             <p className="mb-0">+92 300 1234567</p>
    //           </div>
    //         </div>
    //         <div className="col-md-4 mb-3">
    //           <div className="p-3 rounded bg-light h-100 shadow-sm hover-shadow">
    //             <i className="bi bi-whatsapp fs-2 text-success"></i>
    //             <h5 className="mt-2">WhatsApp</h5>
    //             <p className="mb-0">+92 333 9876543</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //  </div>    

     <div className="container my-4">
      <div className="row bg-white rounded shadow-lg border p-4">
        
        {/* Left Column - Contact Info */}
        <div className="col-md-5 border-end">
          <h3 className="fw-bold mb-3">
            📞 Contact <span style={{ color: "#ff6600" }}>Us</span>
          </h3>
          <p className="text-muted">
            We’re here to help! Reach out for orders, queries, or support.
          </p>

          <div className="mt-4">
            <div className="mb-3 d-flex align-items-start">
              <i className="bi bi-envelope-fill fs-3 text-danger me-3"></i>
              <div>
                <h6 className="mb-1 fw-semibold">Email</h6>
                <p className="mb-0">support@mobilehub.com</p>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <i className="bi bi-telephone-fill fs-3 text-success me-3"></i>
              <div>
                <h6 className="mb-1 fw-semibold">Phone</h6>
                <p className="mb-0">+92 300 1234567</p>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <i className="bi bi-whatsapp fs-3 text-success me-3"></i>
              <div>
                <h6 className="mb-1 fw-semibold">WhatsApp</h6>
                <p className="mb-0">+92 333 9876543</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="col-md-7">
          <form className="mt-3 mt-md-0">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">First name</label>
                <input type="text" className="form-control" placeholder="First name" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
              </div>
              <div className="col-12">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="you@example.com" />
              </div>
              <div className="col-12">
                <label className="form-label">Phone number</label>
                <input type="text" className="form-control" placeholder="+92 ..." />
              </div>
              <div className="col-12">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Write your message here..."></textarea>
              </div>
              <div className="col-12 text-end">
                <button type="submit" className="productBtn px-4">
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>


  )
}

