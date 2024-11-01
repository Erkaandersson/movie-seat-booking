/* eslint-disable react/prop-types */
import { useState } from "react";
import React from "react";


//Tar selectedMoviePrice som prop och visar totalpris för valda platser.
const SeatMap = ({ selectedMoviePrice }) => {

    const defaultSeats = [
    [
        { status: "available" }, { status: "available" }, { status: "available" },
        { status: "available" }, { status: "available" }, { status: "available" },
        { status: "available" }, { status: "available" }
    ],
    [
        { status: "available" }, { status: "available" }, { status: "available" },
        { status: "occupied" }, { status: "occupied" }, { status: "available" },
        { status: "available" }, { status: "available" }
    ],
    [
        { status: "available" }, { status: "available" }, { status: "available" },
        { status: "available" }, { status: "available" }, { status: "available" },
        { status: "occupied" }, { status: "occupied" }
    ],
    [
        { status: "available" }, { status: "available" }, { status: "available" },
        { status: "available" }, { status: "available" }, { status: "available" },
        { status: "available" }, { status: "available" }
    ],
    [
        { status: "available" }, { status: "available" }, { status: "available" },
        { status: "occupied" }, { status: "occupied" }, { status: "available" },
        { status: "available" }, { status: "available" }
    ],
]

    const [seats] = useState(defaultSeats);
    const [selectedSeats, setSelectedSeats] = useState([]);

// Hanterar valda platser, kollar om platserna är upptagan eller ej (går ej klicka på platser med status occupied)

    const HandleClickedSeat= (rowIndex, seatIndex) => {
        const seat = seats[rowIndex][seatIndex];
        if (seat.status === "occupied") {
            return;
        }
        const seatId = `${rowIndex}-${seatIndex}`;
        const isSelected = selectedSeats.includes(seatId);

        if (isSelected) {
            setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }

    };
    //Uträkning för totalpris för valda platser.
        const totalPrice = selectedSeats.length * selectedMoviePrice;

    //renderar platserna som i originalprojektet. 
    return (
        
        <div className="container">  
                    <ul className="showcase">
                <li>
                    <div className="seat"></div>
                    <small>N/A</small>
                </li>
                <li>
                    <div className="seat selected"></div>
                    <small>Selected</small>
                </li>
                <li>
                    <div className="seat occupied"></div>
                    <small>Occupied</small>
                </li>
            </ul>
            <div className="screen"/>
            {seats.map((row, rowIndex) => (
            <div key={rowIndex} className="row"> 
            {row.map((seat, seatIndex) => (
                <div
                key={`${rowIndex}-${seatIndex}`} 
                className={`seat ${seat.status} ${selectedSeats.includes(`${rowIndex}-${seatIndex}`) ? 'selected' : ''}`}
                onClick={() => HandleClickedSeat(rowIndex, seatIndex)}
                />
            ))}
            </div>
        ))}
            <div className="total-price">
                Total Price: {totalPrice.toLocaleString("sv-SE", { style: "currency", currency: "SEK" })}
            </div>
        </div>
    );
};
export default SeatMap;