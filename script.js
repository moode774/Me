// إضافة الاحتفالات
const confetti = new ConfettiGenerator({
    target: 'confetti-canvas',
    max: 80,
    size: 1.5,
    animate: true,
    colors: [[255, 107, 139], [124, 92, 255], [255, 217, 61]]
});
confetti.render();

// معالجة إرسال الأمنيات
const wishInput = document.getElementById('wishInput');
const sendWishButton = document.getElementById('sendWishButton');
const wishesContainer = document.getElementById('wishesContainer');

sendWishButton.addEventListener('click', () => {
    const wishText = wishInput.value.trim();
    if (!wishText) return;

    // إضافة الأمنية للعرض
    const newWish = document.createElement('div');
    newWish.classList.add('wish');
    newWish.textContent = wishText;
    wishesContainer.insertBefore(newWish, wishesContainer.firstChild);

    // إرسال عبر رابط تلجرام
    const botToken = '8160235911:AAH2f7QbITF9xcrzm916qf0bW1_-760Xvq4'; // توكن البوت الصحيح
    const chatId = '7119515650';
    const message = encodeURIComponent(`أمنية جديدة: ${wishText}`);
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;

    // فتح الرابط في نافذة جديدة
    window.open(telegramUrl, '_blank');

    // مسح حقل الإدخال
    wishInput.value = '';
});
