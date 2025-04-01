let selectedSeats = [];

document.querySelectorAll('.seat').forEach(seat => {
  seat.addEventListener('click', function() {
    const seatId = this.getAttribute('data-seat');
    if (selectedSeats.includes(seatId)) {
      selectedSeats = selectedSeats.filter(seat => seat !== seatId);
      this.classList.remove('selected');
    } else {
      selectedSeats.push(seatId);
      this.classList.add('selected');
    }
  });
});

function bookTicket() {
  const movie = document.getElementById('movie').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const seats = selectedSeats.join(', ');

  if (seats.length === 0) {
    alert("Please select at least one seat.");
    return;
  }

  const summary = `
    Movie: ${movie} <br>
    Date: ${date} <br>
    Showtime: ${time} <br>
    Seats: ${seats} <br>
    Total: $${selectedSeats.length * 10}
  `;
  document.getElementById('summary').innerHTML = summary;
}
