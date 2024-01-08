import ErrorHandler from "../error/error.js";
import Reservation from "../models/reservationSchema.js";


export const sendReservation = async (req, res, next) => {
    const {firstName, lastName, email, phone, date, time} = req.body;
    try {
        if (!firstName || !lastName || !email || !phone || !date || !time) {
            throw new ErrorHandler("Please fill the entire reservation form!! ⚠️⚠️⚠️", 400);
        }

        await Reservation.create({firstName, lastName, email, phone, date, time });
        return res.status(200).json({
            success: true,
            message: "Reservation sent successfully 🎉🎉🎉",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validatorErrors = Object.values(error.errors).map((err) => err.message);
            return next(new ErrorHandler(validatorErrors.join(" , "), 400));
        } else {
            return next(new ErrorHandler("Internal Server Error", 500));
        }
    }
}
