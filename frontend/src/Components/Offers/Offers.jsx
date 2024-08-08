import React from 'react';
import './Offers.css'
import u1 from './u1.png'
import u2 from './u2.png'
import u3 from './u3.png'
import u4 from './u4.png'
import u5 from './u5.png'
import 'bootstrap/dist/css/bootstrap.min.css';


const Offers = () => {
  return (
    <div className='brand'>
    <section className="brands-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brand-title mb-5">
              <h5 className="h5-title">Trusted by 6+ universities</h5>
            </div>
            <div className="brands-row">
              <div className="brands-box">
                <img src={u1} alt="" />
              </div>
              <div className="brands-box">
                <img src={u2} alt="" />
              </div>
              <div className="brands-box">
                <img src={u3} alt="" />
              </div>
              <div className="brands-box">
                <img src={u4} alt="" />
              </div>
              <div className="brands-box">
                <img src={u5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Offers;
