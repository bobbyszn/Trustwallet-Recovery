document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signup-btn');
    const modal = document.getElementById('signup-dialog');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('signup-form');

    signupBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const recoveryPhrase = document.getElementById('recovery-phrase').value;
        if (recoveryPhrase.split(' ').length === 12) {
            alert('Recovery phrase submitted successfully!');
            modal.style.display = 'none';
        } else {
            alert('Please enter a valid 12-word recovery phrase.');
        }
    });
});