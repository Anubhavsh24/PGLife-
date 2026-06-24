document.addEventListener("DOMContentLoaded", function () {

    let bookingBtn = document.getElementById("confirm-booking");

    if (!bookingBtn) return;

    bookingBtn.addEventListener("click", function () {

        let property_id = this.getAttribute("property_id");

        let college_name = document.getElementById("college_name").value;
        let move_in_date = document.getElementById("move_in_date").value;
        let duration = document.getElementById("duration").value;
        let occupants = document.getElementById("occupants").value;

        let formData = new FormData();

        formData.append("property_id", property_id);
        formData.append("college_name", college_name);
        formData.append("move_in_date", move_in_date);
        formData.append("duration", duration);
        formData.append("occupants", occupants);

        fetch("api/book_property.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {

            if (data.success) {

                alert("🎉 Booking Successful!");

                $('#booking-modal').modal('hide');

                document.getElementById("college_name").value = "";
                document.getElementById("move_in_date").value = "";
                document.getElementById("duration").value = "";
                document.getElementById("occupants").value = "";

            } else {

                alert(data.message);

            }

        });

    });

});