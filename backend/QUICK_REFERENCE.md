# ⚡ Quick Reference Guide

## 🚀 Start Here

```bash
# 1. Install
npm install

# 2. Configure .env with MongoDB URI

# 3. Start
npm start

# 4. Visit
http://localhost:8050
```

---

## 📍 What's Where

| What | Where |
|------|-------|
| Contact Form UI | `public/index.html` |
| 404 Error Page | `public/404.html` |
| MongoDB Schema | `models/Contact.js` |
| Business Logic | `controllers/contactController.js` |
| API Routes | `routes/contactRoutes.js` |
| Response Handlers | `utils/responseHandler.js` |
| Error Definitions | `utils/errorHandler.js` |
| Error Middleware | `utils/globalErrorMiddleware.js` |
| Main App | `server.js` |

---

## 🔌 API Routes

```javascript
POST   /api/contact           // Create
GET    /api/contact           // Read All
GET    /api/contact/:id       // Read One
DELETE /api/contact/:id       // Delete
GET    /api/health            // Health Check
GET    /                      // Contact Form
GET    /*                     // 404 Page
```

---

## 📤 Response Functions

### Success
```javascript
sendSuccess(res, 201, 'Message', data)
// Returns: { success: true, message, data, timestamp }
```

### Error
```javascript
sendError(res, 500, 'Error message')
// Returns: { success: false, message, timestamp }
```

### Validation Error
```javascript
sendValidationError(res, 'Validation Error', { field: 'error' })
// Returns: { success: false, message, errors, timestamp }
```

### Not Found
```javascript
sendNotFound(res, 'Not found message')
// Returns: { success: false, message, timestamp }
```

---

## ✅ Form Fields

| Field | Required | Rules |
|-------|----------|-------|
| firstname | ✓ | Min 2 chars |
| email | ✓ | Valid email |
| message | ✓ | Min 5 chars |
| lastname | ✗ | Any |
| phone | ✗ | Min 10 digits |

---

## 📝 HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request (Validation) |
| 404 | Not Found |
| 500 | Server Error |

---

## 🧪 Test Endpoints

### Health Check
```bash
curl http://localhost:8050/api/health
```

### Create Contact
```bash
curl -X POST http://localhost:8050/api/contact \
  -H "Content-Type: application/json" \
  -d '{"firstname":"John","email":"j@example.com","message":"Hello"}'
```

### Get All
```bash
curl http://localhost:8050/api/contact
```

### Get One
```bash
curl http://localhost:8050/api/contact/ID
```

### Delete
```bash
curl -X DELETE http://localhost:8050/api/contact/ID
```

---

## 🎯 Error Messages

```javascript
INVALID_FIRSTNAME: 'First name is required and must be at least 2 characters'
INVALID_EMAIL: 'Please provide a valid email address'
INVALID_MESSAGE: 'Message is required and must be at least 5 characters'
INVALID_PHONE: 'Phone number must be at least 10 digits if provided'
CONTACT_NOT_FOUND: 'Contact not found'
INTERNAL_SERVER_ERROR: 'An unexpected error occurred'
```

---

## 🔄 Error Handling Flow

```
Validation Error (400)
    ↓
sendValidationError() with field errors
    ↓
{ success: false, message, errors: { field: 'error' } }

Success (200/201)
    ↓
sendSuccess() with data
    ↓
{ success: true, message, data }

Not Found (404)
    ↓
sendNotFound()
    ↓
{ success: false, message }

Server Error (500)
    ↓
Global Middleware catches
    ↓
sendError()
    ↓
{ success: false, message }
```

---

## 💻 JavaScript Example

```javascript
const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const data = {
    firstname: document.getElementById('firstname').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  try {
    const res = await fetch('http://localhost:8050/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (json.success) {
      alert('✓ Message sent!');
      form.reset();
    } else {
      alert('✗ Error: ' + JSON.stringify(json.errors));
    }
  } catch (e) {
    alert('✗ Network error');
  }
});
```

---

## 🐍 Python Example

```python
import requests

data = {
    'firstname': 'John',
    'email': 'john@example.com',
    'message': 'Hello world'
}

res = requests.post(
    'http://localhost:8050/api/contact',
    json=data
)

print(res.json())
```

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| README.md | Complete API docs |
| ERROR_HANDLING_GUIDE.md | Diagrams & flow |
| IMPLEMENTATION_SUMMARY.md | What's built |
| EXAMPLES.sh | Usage examples |
| COMPLETION_CHECKLIST.md | Features list |
| INDEX.md | Doc index |
| PROJECT_SUMMARY.md | Overview |
| QUICK_REFERENCE.md | This file |

---

## ⚙️ Configuration

Edit `.env`:
```env
MONGODB_URI=mongodb://localhost:27017/db
PORT=8050
NODE_ENV=development
```

Edit `server.js` for CORS:
```javascript
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

---

## 🎨 Customization

### Change Error Message
Edit `utils/errorHandler.js`:
```javascript
const ErrorMessages = {
  INVALID_FIRSTNAME: 'Your custom message'
};
```

### Change Response Format
Edit `utils/responseHandler.js`:
```javascript
const sendSuccess = (res, code, msg, data) => {
  // Customize here
};
```

### Add New Validation
Edit `controllers/contactController.js`:
```javascript
if (/* your condition */) {
  return sendValidationError(res, 'Error', { 
    field: 'error message' 
  });
}
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port in use | Change PORT in .env |
| DB not connecting | Check MONGODB_URI |
| CORS error | Check origin in server.js |
| 404 on form | Check public/index.html exists |
| Validation not working | Check validation logic in controller |

---

## 📊 Response Structure

```javascript
{
  "success": boolean,           // true/false
  "message": "User message",    // Always present
  "data": {},                   // On success
  "errors": { field: "error" }, // On validation error
  "timestamp": "ISO-8601"       // Always present
}
```

---

## 🔑 Key Files

**Must Know:**
- `server.js` - Main app file
- `controllers/contactController.js` - Business logic
- `utils/responseHandler.js` - Response handling
- `utils/globalErrorMiddleware.js` - Error handling

**Important:**
- `models/Contact.js` - Data schema
- `routes/contactRoutes.js` - Routes
- `public/index.html` - Form UI
- `.env` - Configuration

---

## ✨ Features

✅ Global error handling  
✅ Beautiful UI  
✅ Form validation  
✅ MongoDB integration  
✅ Reusable code  
✅ Complete docs  
✅ Beautiful 404 page  
✅ Timestamps on all responses  

---

**Quick Links:**
- [Full README](README.md)
- [Visual Guide](ERROR_HANDLING_GUIDE.md)
- [Examples](EXAMPLES.sh)
- [Implementation Details](IMPLEMENTATION_SUMMARY.md)

---

**Everything you need in one page! 🚀**
