import { React, useState} from "react";
import { useLocation } from "react-router-dom";
import { ToggleButtonGroup, ButtonToolbar, ToggleButton} from "react-bootstrap";
import "../styles.css";
import seats from "../seat.json";
import { Link, Outlet } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
const MovieBookingDetails = () => {
  const [totalPrice,setTotalPrice] = useState(0);
  const [seatsSelected,setSeatsSelected] = useState([]);
  const [showSelected,setShowSelected] = useState("");
  const [showTiming,setShowTiming] = useState("");  
  const [showTicket,setShowTicket] = useState(`
  Name: N/A
  Email: N/A
  Number: N/A
  Show Timing: N/A
  Seats: N/A
  Total Amount: N/A
  `); 
  const [userName,setUserName] = useState(""); 
  const [userEmail,setUserEmail] = useState(""); 
  const [userNumber,setUserNumber] = useState("");
  const location = useLocation();
  const handleSeatSelect= (e) => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("sold")) {
        e.target.classList.toggle("selected");
        if(e.target.classList.contains("selected")){
          setTotalPrice(totalPrice + parseInt(e.target.getAttribute('data-value')));
          setSeatsSelected([...seatsSelected, e.target.innerText]);
        }else{          
          setTotalPrice(totalPrice - parseInt(e.target.getAttribute('data-value')));
          setSeatsSelected(seatsSelected => {
            return seatsSelected.filter(seatsSelected => seatsSelected !== e.target.innerText)
          })
        }
    }
  }  

  const handleShowSelect = (e) => {
        setShowSelected(e.target.value);
  }

  const handleShowTiming = (e) => {
      setShowTiming(e.target.value);
  }

  const handleTicketSubmit = () => {
      const ticketDetails = `
      Name: `+userName+`
      Email: `+userEmail+`
      Number: `+userNumber+`
      Show Timing: `+showTiming +` - `+ showSelected+`
      Seats: `+seatsSelected+`
      Total Amount: `+totalPrice+`
      `;
      setShowTicket(ticketDetails);
      alert(ticketDetails);
  }

  const movieBookingDetails = location.state.booking;
  return (
    <>
      <div className="row book-main mt-4">
        <div className="movie-container mb-3">
          <img
            src={movieBookingDetails.image}
            className="card-img-top"
            id="card-img"
            alt={movieBookingDetails.title}
          />
        </div>
        <ul className="showcase">
          <li>
            <div className="seat"></div>
            <small>Available</small>
          </li>
          <li>
            <div className="seat selected"></div>
            <small>Selected</small>
          </li>
          <li>
            <div className="seat sold"></div>
            <small>Sold</small>
          </li>
        </ul>
        <ul className="showcase">
          <li><small>A-C Sofa (THB 600)</small></li>
          <li><small>D-G Superior (THB 300)</small></li>
          <li><small>H-I Regular (THB 200)</small></li>
        </ul>
        <ul className="showcase">
          <li className="show"><input type="date" id="showtiming" onChange={handleShowTiming}/></li>
        {Object.keys(movieBookingDetails.shows).map(key => (
            <li key={key}>
              <input  onChange={handleShowSelect} type="radio" name="showTiming" value={movieBookingDetails.shows[key]} id={movieBookingDetails.shows[key]} className="btn-check btn-time" />
              <label htmlFor={movieBookingDetails.shows[key]} className="btn btn-primary">{movieBookingDetails.shows[key]}</label>
             </li>
          ))}         
        </ul>
        <div className="container">
          {Object.keys(seats).map(key => (
          <div key={key} className="row" style={{ margin: "auto", width: "fit-content" }}>
            {Object.keys(seats[key]).map(keys => (          
              <div key={keys} onClick={handleSeatSelect} className={seats[key][keys].status} data-value={seats[key][keys].price} title={seats[key][keys].price}>{seats[key][keys].seat}</div>
            ))}
            </div>
        ))}  
        
          <div className="screen"></div>       
        </div>
        <div className="text">
          <table  className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Show Timing</th>
                <th> Selected Seats</th>
                <th>Total Amount</th>
              </tr>
              <tr>
                <th>Name</th>
                <th>Email ID</th>
                <th>Mobile No</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{showTiming} : {showSelected}</td>
                  <td>{seatsSelected.toString()}</td>
                  <td>{totalPrice}</td>
                </tr>
                <tr>
                  <td><input onKeyUp={e => setUserName(e.target.value)}  className="input-group" type="text" name="name" id="name" /></td>
                  <td><input onKeyUp={e => setUserEmail(e.target.value)} className="input-group" type="email" name="email" id="email" /></td>
                  <td><input onKeyUp={e => setUserNumber(e.target.value)} className="input-group" type="text" name="number" id="number" /></td>
                </tr>
              </tbody>
          </table>
          
          <div className="text-center">
                      <Link
                       className="col-md-4 btn btn-primary"
              to="/ticketdetails"               
              state={{ userName: userName,userEmail:userEmail,userNumber:userNumber,showTiming:showTiming,showSelected:showSelected,seatsSelected:seatsSelected,totalPrice:totalPrice}}
              style={{ textDecoration: "none" }}
            >Confirm</Link>
                    </div>
        </div>
      </div>
    </>
  );
};

export default MovieBookingDetails;
