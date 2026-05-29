# Security Checklist — Srupa Labs

## Langkah Wajib Setelah Setup

### 1. Firebase API Key — Restrict Domain

Firebase Web API Key **bukan secret** (dirancang untuk client-side),
tapi tetap harus dibatasi agar tidak disalahgunakan oleh pihak lain.

**Langkah:**
1. Buka [Google Cloud Console → Credentials](https://console.cloud.google.com/apis/credentials)
2. Cari API Key dengan nama "Browser key (auto created by Firebase)" atau yang terkait
3. Klik → Edit → **Application restrictions** → pilih **HTTP referrers**
4. Tambahkan domain yang diizinkan:
   ```
   https://srupalabs.com/*
   https://www.srupalabs.com/*
   http://localhost/*
   ```
5. Klik Save

---

### 2. Google Drive API Key — Restrict Domain + API

Drive API Key lebih sensitif karena dipakai di admin panel.

**Langkah:**
1. Buka [Google Cloud Console → Credentials](https://console.cloud.google.com/apis/credentials)
2. Temukan `AIzaSyBZqjo8vXLyg...` (Drive API Key)
3. **Application restrictions** → HTTP referrers → tambahkan domain admin saja
4. **API restrictions** → Restrict key → pilih **Google Drive API** saja
5. Klik Save

---

### 3. Firebase Security Rules — Proteksi Firestore

Pastikan Firestore Rules hanya mengizinkan read untuk koleksi publik:

```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Publik: hanya read
    match /cms_posters/{document} {
      allow read: if true;
      allow write: if request.auth != null; // Hanya user login
    }
    // Semua koleksi lain: butuh auth
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

Deploy rules:
```bash
firebase deploy --only firestore:rules
```

---

### 4. Admin Panel — Pindahkan ke Subdomain Terpisah

File `b9mq3-panel-v2.html` idealnya dipindah ke:
- Subdomain terpisah: `admin.srupalabs.com`
- Atau di-host di Vercel/Netlify dengan password protection
- Hapus file dari repo publik setelah dipindah

---

### 5. Cek .gitignore

Pastikan `firebase-config.js` tidak ikut ter-commit:
```bash
git status
# firebase-config.js seharusnya tidak muncul di "Changes to be committed"
```

Jika sudah terlanjur ter-commit sebelumnya:
```bash
git rm --cached firebase-config.js
git commit -m "remove: firebase-config.js from tracking"
```
