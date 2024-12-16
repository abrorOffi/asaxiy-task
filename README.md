
# Shaxsiy Moliyaviy Boshqaruv Paneli  

ReactJS va Bootstrap yordamida yaratilgan moliyaviy boshqaruv tizimi. Ushbu dastur foydalanuvchilarga moliyaviy tranzaksiyalarni boshqarish, real vaqt rejimida valyuta kurslarini ko'rish va ma'lumotlarni grafiklar orqali tahlil qilish imkonini beradi.  

---

## Xususiyatlar  

1. **Valyuta Konvertori**  
   - Miqdorlarni turli valyutalar o'rtasida real vaqt rejimida aylantirish.  
   - [ExchangeRate-API](https://www.exchangerate-api.com/) bilan integratsiya qilingan.  

2. **Tranzaksiya Boshqaruvi**  
   - Daromad yoki xarajatlarni qo'shish va boshqarish.  
   - Miqdor, kategoriya, sana va izoh kabi ma'lumotlarni kiritish.  

3. **Dashboard (Asosiy Panel)**  
   - Jami daromad, xarajatlar va balansni grafiklar orqali tahlil qilish (kelajakda qo'shiladi).  

4. **Responsiv Dizayn**  
   - Tailwind css yordamida zamonaviy dizayn.  
   - Mobil va kompyuter qurilmalari uchun to'liq moslashgan.  

---

## Texnologiyalar  

- **Frontend:** ReactJS  
- **Stil:** Tailwind css  
- **State Boshqaruvi:** React Hooks  
- **API Integratsiyasi:** ExchangeRate-API  
- **Grafik Vizualizatsiya:** Chart.js (kelajakda qo'shiladi)  

---

## Loyihani Boshlash  

Quyidagi ko'rsatmalarni bajarib, loyihani lokal kompyuteringizda ishga tushiring:  

### Talablar  

- Kompyuteringizda Node.js o'rnatilgan bo'lishi kerak.  
- Kod muharriri (masalan, Visual Studio Code).  

### O'rnatish  

1. Repozitoriyani klonlash:  
   ```bash
   git clone https://github.com/yourusername/financial-dashboard.git
   cd financial-dashboard
   ```  

2. Kerakli kutubxonalarni o'rnatish:  
   ```bash
   npm install
   ```  

3. Dastur serverini ishga tushirish:  
   ```bash
   npm run dev
   ```  

4. Brauzeringizda `http://localhost:5173` manzilini oching.  

---

## Papka Tuzilishi  

```
financial-dashboard/  
├── public/  
├── src/  
│   ├── components/  
│   │   ├── CurrencyConverter/ 
│   |   |   ├── CurrencySelect.jsx
|   |   |   ├── index.jsx
│   │   ├── TransactionForm.jsx 
│   │   ├── TransactionList.jsx  
│   │   ├── Dashboard.jsx  
│   ├── constants/  
│   │   ├── currencies.jsx
│   ├── hooks/  
│   │   ├── useExchangeRate.js
│   ├── utils/  
│   │   ├── api.js
│   │   ├── format.js
│   │   ├── localStorage.js
│   ├── App.jsx  
│   ├── index.css  
│   ├── main.jsx 
├── package.json  
├── README.md  
```

---

## Kelajakdagi Yaxshilanishlar  

1. Grafiklar yordamida moliyaviy ma'lumotlarni vizualizatsiya qilish (masalan, ustun diagramma, doira diagramma).  
2. Tranzaksiyalarni kategoriya yoki sana bo‘yicha filtr qilish.  
3. Animatsiyalarni yaxshilash va foydalanuvchi tajribasini oshirish.  
4. Ma'lumotlarni saqlash uchun backend baza integratsiyasi.  

---

## Muammolar va Ularning Yechimlari  

- **API Integratsiyasi:** ExchangeRate-API ishlashiga ishonch hosil qiling va endpointni to'g'ri sozlang.  
- **Responsiv Dizayn:** Bootstrap o'rniga tailwind css dan foydalandim.  

---

## Litsenziya  

Ushbu loyiha ochiq manbali va [MIT Litsenziyasi](LICENSE) asosida taqdim etiladi.  

---

## Muallif  

Loyihani yaratdi: **Abror Abdukayumov**  
Menga abrorkhandeveloper@gmail.com orqali murojaat qilishingiz yoki GitHub orqali loyihaga hissa qo'shishingiz mumkin.  
