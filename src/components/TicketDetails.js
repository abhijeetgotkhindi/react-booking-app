import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
const TicketDetails = () => {
     const location = useLocation();
     const ticketDetails = ` 
     Name: `+location.state.userName+`
     Email: `+location.state.userEmail+`
     Number: `+location.state.userNumber+`
     Show Timing: `+location.state.showTiming +` - `+ location.state.showSelected+`
     Seats: `+location.state.seatsSelected+`
     Total Amount: `+location.state.totalPrice;
  return (
    <>
      <div className="row m-4">
        <h1 className="text-center">Ticket Details</h1>
        <div className="col-md-4" >
            <QRCodeCanvas id="qrCode" value={ticketDetails} size={300} level={"H"} />
        </div>
      <div className="col-md-7">
      <table  className="table table-striped table-bordered">
              <tr style={{height: "50px"}}>
                <th>Show Timing</th>
                  <td>{location.state.showTiming} : {location.state.showSelected}</td>
</tr>
                  <tr style={{height: "50px"}}>
                <th> Selected Seats</th>
                  <td>{location.state.seatsSelected.toString()}</td>
                  </tr>
                  <tr style={{height: "50px"}}>
                <th>Total Amount</th>
                  <td>{location.state.totalPrice}</td>
                  </tr>
              <tr style={{height: "50px"}}>
                <th>Name</th>
                  <td>{location.state.userName}</td>
                   </tr>
              <tr style={{height: "50px"}}>
                <th>Email ID</th>
                  <td>{location.state.userEmail}</td>
                   </tr>
              <tr style={{height: "50px"}}>
                <th>Mobile No</th>
                  <td>{location.state.userNumber}</td>
              </tr>
          </table>
        </div>
      
      </div>
    </>
  );
};

export default TicketDetails;
