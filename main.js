document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('subscribe-message');
    message.textContent = 'Thank you for subscribing!';
    this.reset();
});

function showDetails(nftName) {
    alert(`Details for ${nftName}`);
}
