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

sendWishButton.addEventListener('click', async () => {
    const wishText = wishInput.value.trim();
    if (!wishText) return;

    // إضافة الأمنية للعرض
    const newWish = document.createElement('div');
    newWish.classList.add('wish');
    newWish.textContent = wishText;
    wishesContainer.insertBefore(newWish, wishesContainer.firstChild);

    // إرسال عبر Telegram API
    const botToken = '8160235911:AAH2f7QbITF9xcrzm916qf0bW1_-760Xvq4'; // توكن البوت الصحيح
    const chatId = '7119515650'; // معرف المستخدم أو المجموعة
    const message = `أمنية جديدة: ${wishText}`;
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });

        if (response.ok) {
            console.log('تم إرسال الرسالة بنجاح!');
        } else {
            console.error('فشل الإرسال:', await response.text());
        }
    } catch (error) {
        console.error('حدث خطأ أثناء الإرسال:', error);
    }

    // مسح حقل الإدخال
    wishInput.value = '';
});
