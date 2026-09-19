// ==========================================
// DRIVEWISE DRIVING SCHOOL
// MAIN JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("DriveWise Driving School website loaded successfully!");


    // ==========================================
    // 1. SET TODAY AS THE EARLIEST BOOKING DATE
    // ==========================================

    const dateInput = document.getElementById("date");

    if (dateInput) {

        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        const todayDate = `${year}-${month}-${day}`;

        dateInput.min = todayDate;
    }


    // ==========================================
    // 2. CONTACT / BOOKING FORM
    // ==========================================

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            // Get information from the form

            const name = document.getElementById("name").value.trim();

            const phone = document.getElementById("phone").value.trim();

            const email = document.getElementById("email").value.trim();

            const course = document.getElementById("course").value;

            const date = document.getElementById("date").value;

            const time = document.getElementById("time").value;


            // ==========================================
            // 3. BASIC VALIDATION
            // ==========================================

            if (
                name === "" ||
                phone === "" ||
                email === "" ||
                course === "" ||
                date === "" ||
                time === ""
            ) {

                alert("Please fill in all required fields.");

                return;
            }


            // ==========================================
            // 4. PHONE NUMBER CHECK
            // ==========================================

            if (phone.length < 10) {

                alert("Please enter a valid phone number.");

                return;
            }


            // ==========================================
            // 5. EMAIL CHECK
            // ==========================================

            if (!email.includes("@") || !email.includes(".")) {

                alert("Please enter a valid email address.");

                return;
            }


            // ==========================================
            // 6. CREATE SUCCESS MESSAGE
            // ==========================================

            const successMessage = document.createElement("div");

            successMessage.innerHTML = `
                <h3>Booking Request Received! 🎉</h3>

                <p>
                    Thank you, <strong>${name}</strong>.
                </p>

                <p>
                    Your request for the
                    <strong>${course}</strong>
                    course has been received.
                </p>

                <p>
                    Date:
                    <strong>${date}</strong>
                </p>

                <p>
                    Time:
                    <strong>${time}</strong>
                </p>

                <p>
                    We will contact you using
                    <strong>${phone}</strong>
                    to confirm your booking.
                </p>
            `;


            // ==========================================
            // 7. STYLE SUCCESS MESSAGE
            // ==========================================

            successMessage.style.backgroundColor = "#e8f5ef";

            successMessage.style.border = "2px solid #0b5d3b";

            successMessage.style.padding = "20px";

            successMessage.style.marginTop = "20px";

            successMessage.style.borderRadius = "8px";


            // ==========================================
            // 8. ADD SUCCESS MESSAGE TO PAGE
            // ==========================================

            contactForm.appendChild(successMessage);


            // ==========================================
            // 9. CLEAR FORM
            // ==========================================

            contactForm.reset();


            // ==========================================
            // 10. SCROLL TO SUCCESS MESSAGE
            // ==========================================

            successMessage.scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    // ==========================================
    // 11. CURRENT YEAR
    // ==========================================

    const currentYear = new Date().getFullYear();

    console.log("Current year:", currentYear);

});