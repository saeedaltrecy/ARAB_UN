# دليل استخدام Tailwind CSS في المشروع

## ✅ تم التثبيت بنجاح!

تم تثبيت Tailwind CSS بشكل صحيح في المشروع وربطه به.

## 📁 الملفات المُنشأة:

1. **package.json** - ملف إعدادات npm
2. **tailwind.config.js** - ملف إعدادات Tailwind CSS
3. **postcss.config.js** - ملف إعدادات PostCSS
4. **css/input.css** - ملف CSS المدخل (يحتوي على @tailwind directives)
5. **css/tailwind.css** - ملف CSS المترجم (يتم إنشاؤه تلقائياً)

## 🚀 الأوامر المتاحة:

### للتطوير (Development):

```bash
npm run dev
```

- يقوم ببناء Tailwind CSS مع watch mode
- يتحدث تلقائياً عند تغيير أي ملف HTML/JS/CSS

### للإنتاج (Production):

```bash
npm run build
```

- يقوم ببناء Tailwind CSS مع minify (تصغير الحجم)
- مناسب للنشر على السيرفر

## 📝 كيفية الاستخدام:

1. **أثناء التطوير**: قم بتشغيل `npm run dev` في terminal
2. **استخدم فئات Tailwind** في HTML كما هو معتاد
3. **عند النشر**: قم بتشغيل `npm run build` قبل النشر

## ⚙️ الإعدادات:

- **Content paths**: تم إعداد Tailwind لمسح جميع ملفات HTML و JS و CSS
- **Custom colors**: تم إضافة ألوان مخصصة (primary, ink) في tailwind.config.js
- **Fonts**: تم إضافة خط Cairo في input.css

## 🔄 التحديثات:

عند إضافة فئات Tailwind جديدة في HTML، قم بتشغيل `npm run dev` أو `npm run build` لتحديث ملف tailwind.css

## 📌 ملاحظات:

- ملف `css/tailwind.css` يتم إنشاؤه تلقائياً - لا تقم بتعديله يدوياً
- قم بتعديل `css/input.css` لإضافة CSS مخصص
- تم إزالة CDN من index.html واستبداله بالملف المترجم
