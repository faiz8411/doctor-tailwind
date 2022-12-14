import React from 'react';

const Contact = () => {
    return (
      <div className="hero min-h-screen bg-[url('/src/images/bg.png')]" style={{}}>
        <div className="hero-overlay bg-opacity-60 text-center">
          <h4 className="text-success text-xl">contact us</h4>
          <h2 className="text-2xl">Stay connected with us</h2>
        </div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email address</span>
                  </label>
                  <input
                    style={{ width: "450px", height: "48px" }}
                    type="text"
                    placeholder="email address"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">subject</span>
                  </label>
                  <input
                    style={{ width: "450px", height: "48px" }}
                    type="text"
                    placeholder="subject"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">your massage</span>
                  </label>
                  <textarea
                    style={{ width: "450px", height: "136px" }}
                    type="text"
                    placeholder="massage"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary uppercase">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;