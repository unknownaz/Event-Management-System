const eventPrices = {
    cultural_festival: 5000,
    concert: 8000,
    conference: 15000,
    seminar: 12000
};

function updatePrice() {
    const eventSelect = document.getElementById('event');
    const ticketsInput = document.getElementById('tickets');
    const totalPriceElement = document.getElementById('total-price');

    const event = eventSelect.value;
    const tickets = ticketsInput.value;

    const totalPrice = eventPrices[event] * tickets;
    totalPriceElement.textContent = `Total Price: PKR ${totalPrice.toFixed(2)}`;
}