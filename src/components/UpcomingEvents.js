import React from "react";
import { connect, useSelector } from "react-redux";
const UpcomingEvents = () => {
  const upcomingeventsList = useSelector((state) => state.upcomingevents);
  return (
    <>
      <div className="row m-4">
        <h1 className="text-center">Near By Events</h1>
        {upcomingeventsList.map((events) => (
          <div key={events.id} className="col-md-4 g-4 pull-left">
              <div className="card">
                <div className="col">
                  <div className="card h-100">
                    <img
                      src={events.image_url}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{events.title}</h5>
                      <p className="card-text">{events.address},{events.full_address}</p>
                      <p className="card-text">Price: {events.price}</p>
                      <p className="card-text">Date: {events.full_date} </p>
                    </div>
                    <div className="card-footer text-center">
                      <span className="col-md-8 btn btn-primary">Book</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  upcomingevents: state.events,
  //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
});

const mapDispatchToProps = (dispatch) => ({
  events: () => dispatch({ type: "UPCOMING_EVENTS" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingEvents);
