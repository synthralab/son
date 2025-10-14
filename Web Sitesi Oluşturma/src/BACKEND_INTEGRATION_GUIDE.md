# Backend Entegrasyon Rehberi

Bu belge, sitedeki simüle edilmiş özellikleri gerçek backend servislere nasıl bağlayacağınızı açıklar.

## 1. İletişim Formu Entegrasyonu

### Seçenek A: EmailJS (En Kolay)
```typescript
// 1. EmailJS hesabı oluştur: https://www.emailjs.com/
// 2. npm install @emailjs/browser

import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    );
    
    toast.success("Mesajınız başarıyla gönderildi!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  } catch (error) {
    toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
  }
};
```

### Seçenek B: Formspree (Kod Gerektirmez)
```typescript
// 1. Formspree hesabı: https://formspree.io/
// 2. Form action URL'i al

<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* Form alanları */}
</form>
```

### Seçenek C: Kendi Backend'iniz (Node.js)
```typescript
// Frontend (Contact.tsx):
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      toast.success("Mesajınız başarıyla gönderildi!");
    }
  } catch (error) {
    toast.error("Bir hata oluştu.");
  }
};

// Backend (Node.js + Nodemailer):
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  
  await transporter.sendMail({
    from: email,
    to: 'info@creativehub.com',
    subject: `Yeni İletişim Mesajı: ${name}`,
    html: `
      <h3>Yeni İletişim Formu Mesajı</h3>
      <p><strong>İsim:</strong> ${name}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Mesaj:</strong> ${message}</p>
    `,
  });
  
  res.json({ success: true });
});
```

## 2. Newsletter Entegrasyonu

### Mailchimp Entegrasyonu
```typescript
// 1. Mailchimp hesabı: https://mailchimp.com/
// 2. API Key ve Audience ID al

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    
    if (response.ok) {
      toast.success("Başarıyla abone oldunuz!");
    }
  } catch (error) {
    toast.error("Bir hata oluştu.");
  }
};

// Backend:
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  
  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    });
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Subscription failed' });
  }
});
```

## 3. Canlı Destek Entegrasyonu

### Seçenek A: Crisp (Önerilen)
```typescript
// 1. Crisp hesabı: https://crisp.chat/
// 2. Website ID al

// public/index.html veya _document.tsx:
<script type="text/javascript">
  window.$crisp=[];
  window.CRISP_WEBSITE_ID="YOUR_WEBSITE_ID";
  (function(){
    d=document;
    s=d.createElement("script");
    s.src="https://client.crisp.chat/l.js";
    s.async=1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
</script>

// LiveChat.tsx dosyasını kaldırabilirsiniz, Crisp kendi widget'ını ekler
```

### Seçenek B: Tawk.to (Ücretsiz)
```typescript
// 1. Tawk.to hesabı: https://www.tawk.to/
// 2. Property ID al

<script type="text/javascript">
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
  })();
</script>
```

### Seçenek C: Intercom
```typescript
// 1. Intercom hesabı: https://www.intercom.com/
// 2. App ID al

// React bileşeni:
import { useEffect } from 'react';

function IntercomChat() {
  useEffect(() => {
    (window as any).Intercom('boot', {
      app_id: 'YOUR_APP_ID',
    });
  }, []);
  
  return null;
}
```

## 4. Kariyer Başvuruları

### File Upload ile Başvuru
```typescript
// CareerDetailPage.tsx güncelleme:
const handleApply = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('resume', resumeFile); // PDF/DOC
  formData.append('coverLetter', coverLetter);
  formData.append('jobId', job.id);
  
  try {
    const response = await fetch('/api/careers/apply', {
      method: 'POST',
      body: formData,
    });
    
    if (response.ok) {
      toast.success("Başvurunuz alındı!");
    }
  } catch (error) {
    toast.error("Başvuru gönderilemedi.");
  }
};

// Backend:
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/api/careers/apply', upload.single('resume'), async (req, res) => {
  const { name, email, coverLetter, jobId } = req.body;
  const resumePath = req.file.path;
  
  // E-posta gönder veya veritabanına kaydet
  await sendApplicationEmail({
    name,
    email,
    jobId,
    resumePath,
    coverLetter,
  });
  
  res.json({ success: true });
});
```

## 5. Analytics Entegrasyonu

### Google Analytics
```typescript
// 1. Google Analytics hesabı oluştur
// 2. Tracking ID al (G-XXXXXXXXXX)

// public/index.html:
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Hotjar (Heatmaps & Recordings)
```typescript
// 1. Hotjar hesabı: https://www.hotjar.com/
// 2. Site ID al

<script>
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:YOUR_SITE_ID,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## 6. Blog Yorumları (Opsiyonel)

### Disqus Entegrasyonu
```typescript
// npm install disqus-react

import { DiscussionEmbed } from 'disqus-react';

function BlogDetailPage() {
  const disqusConfig = {
    url: window.location.href,
    identifier: post.id,
    title: post.title,
  };
  
  return (
    <>
      {/* Blog içeriği */}
      <DiscussionEmbed
        shortname='creativehub'
        config={disqusConfig}
      />
    </>
  );
}
```

## 7. Performans Monitoring

### Sentry (Error Tracking)
```typescript
// npm install @sentry/react

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
});

// App.tsx'te wrap et:
export default Sentry.withProfiler(App);
```

## Önerilen Servisler Özeti

| Özellik | Ücretsiz Seçenek | Premium Seçenek |
|---------|------------------|-----------------|
| İletişim Formu | Formspree, EmailJS | SendGrid, AWS SES |
| Newsletter | Mailchimp (2000 abone) | ConvertKit, Mailchimp Pro |
| Canlı Destek | Tawk.to, Crisp Basic | Intercom, Zendesk |
| Analytics | Google Analytics | Mixpanel, Amplitude |
| Error Tracking | Sentry (5K events) | Sentry Pro |
| Email Gönderimi | EmailJS | SendGrid, Postmark |

## Deployment Önerileri

1. **Vercel/Netlify**: Frontend hosting (ücretsiz)
2. **Railway/Render**: Backend hosting (ücretsiz tier)
3. **Supabase**: Database + Auth (ücretsiz tier)
4. **Cloudflare**: CDN + DNS (ücretsiz)

## Güvenlik Notları

- API anahtarlarını asla frontend'de göstermeyin
- Environment variables kullanın (.env)
- CORS ayarlarını doğru yapın
- Rate limiting ekleyin (spam önleme)
- CAPTCHA ekleyin (Google reCAPTCHA v3)
