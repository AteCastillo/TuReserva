import React from 'react';
import "./DateTime.css"

export const DateTimePicker = () => {
    return(
        <div className="datetime">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/css/bootstrap-responsive.css" />
        <div >
          <div className="row justify-content-center mx-0">
            <div className="col-lg-10">
              <div className="card border-0">
                <form autoComplete="off">
                  <div className="card-header bg-dark">
                    <div className="mx-0 mb-0 row justify-content-sm-center justify-content-start px-1"> <input type="text" id="dp1" className="datepicker" placeholder="Pick Date" name="date" readOnly /><span className="fa fa-calendar" /> </div>
                  </div>
                  <div className="card-body p-3 p-sm-5">
                    <div className="row text-center mx-0">
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">9:00</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">9:30</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">9:45</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">10:00</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">10:30</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">10:45</div>
                      </div>
                    </div>
                    <div className="row text-center mx-0">
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">11:00</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">11:30</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">11:45</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">12:00</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">12:30</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">12:45</div>
                      </div>
                    </div>
                    <div className="row text-center mx-0">
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">1:00</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">1:30</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">1:45</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">2:00</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">2:30</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">2:45</div>
                      </div>
                    </div>
                    <div className="row text-center mx-0">
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">3:00</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">3:30</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">4:15</div>
                      </div>
                      <div className="col-md-2 col-4 my-1 px-2">
                        <div className="cell py-1">5:00</div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}