const botToken = '8160235911:AAH2f7QbITF9xcrzm916qf0bW1_-760Xvq4'; // توكن البوت
const chatId = '7119515650'; // معرف المستخدم أو المجموعة
const message = "اختبار رسالة من JavaScript";

fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        chat_id: chatId,
        text: message,
    }),
})
.then(response => response.json())
.then(data => {
    console.log('تم الإرسال بنجاح:', data);
})
.catch(error => {
    console.error('خطأ في الإرسال:', error);
});
