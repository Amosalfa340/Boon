function toggleMenu() {
    var nav = document.getElementById("mainNav");
    if (nav.style.display === "block" || nav.style.display === "") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    
}// Get the "Create Account" button
const createAccountBtn = document.querySelector('.create-account-btn');

// Add a click event listener to the button
createAccountBtn.addEventListener('click', function(event) {
    // Your custom logic here, for example:
    console.log('Create Account button clicked!');
});
}
// Get all "Read More" links
const readMoreLinks = document.querySelectorAll('.read-more');

// Loop through each link and add a click event listener
readMoreLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();
        
        // Your custom logic here, for example:
        console.log('Read More clicked for:', this.parentNode.querySelector('h2').textContent);
    });
});
// Get all "Learn More" buttons
const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

// Loop through each button and add a click event listener
learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        // Prevent default button behavior
        event.preventDefault();
        
        // Your custom logic here, for example:
        console.log('Learn More button clicked for:', this.parentNode.querySelector('h2').textContent);
    });
});
document.getElementById('calculate').addEventListener('click', function() {
    var amount = parseFloat(document.getElementById('amount').value);
    var plan = document.getElementById('investment').value;
    var interestRate = getInterestRate(plan);
    
    var profit = (amount * interestRate).toFixed(8); // Assuming interest rate is in decimal format
    
    document.getElementById('result').innerText = 'Projected profit: ' + profit + ' BTC';
});

function getInterestRate(plan) {
    // Define interest rates for each investment plan
    var interestRates = {
        'beginner': 0.015, // 1.5% daily
        'basic': 0.015,    // 1.5% daily
        'pro': 0.015,      // 1.5% daily
        'ultimate': 0.015  // 1.5% daily
    };

    return interestRates[plan];
}
<script>
    document.addEventListener("DOMContentLoaded", function() {
        var form = document.querySelector('form');

        form.addEventListener('submit', function(event) {
            var nameInput = document.getElementById('name');
            var emailInput = document.getElementById('email');
            var messageInput = document.getElementById('message');

            if (!isValidName(nameInput.value)) {
                alert('Please enter a valid name.');
                event.preventDefault();
                return;
            }

            if (!isValidEmail(emailInput.value)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
                return;
            }

            if (!isValidMessage(messageInput.value)) {
                alert('Please enter a message.');
                event.preventDefault();
                return;
            }

            alert('Form submitted successfully!');
        });

        function isValidName(name) {
            return /^[a-zA-Z\s]+$/.test(name);
        }

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        function isValidMessage(message) {
            return message.trim() !== '';
        }
    });
</script>