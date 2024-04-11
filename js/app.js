window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById('navbar').classList.add('scrolled');
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
}

AOS.init({
    duration:800,
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_phone: phone,
        reply_to: email,
        message_html: message
    }).then(function(response) {
        console.log('Email terkirim!', response);
        alert('Pesan Anda telah terkirim. Terima kasih!');
    }, function(error) {
        console.log('Gagal mengirim email:', error);
        alert('Maaf, pesan Anda gagal terkirim.');
    });
});

