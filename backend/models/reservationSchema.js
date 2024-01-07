

import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters!!"],
        maxLength: [30, "First name cannot exceed 30 charcters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters!!"],
        maxLength: [30, "Last name cannot exceed 30 charcters!"],
    },
    email: {
        type: String,
        required: true,
        validator: [validator.isEmail, "Provide a valid email"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone number must contain only 11 digits!!"],
        maxLength: [11, "Last name can't exceed 30 charcters!"]
    },
    time: {
        type: String,
        required: true,
    }, 
    date: {
        type: String,
        required: true
    }

});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;