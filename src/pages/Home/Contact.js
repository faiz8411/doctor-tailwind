import React from 'react';

const Contact = () => {
    return (
      <div class="hero min-h-screen bg-[url('/src/images/bg.png')]" style={{}}>
        <div class="hero-overlay bg-opacity-60 text-center">
          <h4 className="bg- success">contact us</h4>
          <h2 className="text-2xl">Stay connected with us</h2>
        </div>
        <div class="hero min-h-screen ">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
              <div class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email address</span>
                  </label>
                  <input
                    style={{ width: "450px", height: "48px" }}
                    type="text"
                    placeholder="email address"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">subject</span>
                  </label>
                  <input
                    style={{ width: "450px", height: "48px" }}
                    type="text"
                    placeholder="subject"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">your massage</span>
                  </label>
                  <textarea
                    style={{ width: "450px", height: "136px" }}
                    type="text"
                    placeholder="massage"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-primary uppercase">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;