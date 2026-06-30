# 🌍 Wanderlust

A full-stack travel listing web application inspired by Airbnb, where users can explore destinations, create listings, upload images, leave reviews, and manage their own properties. Wanderlust provides secure authentication, interactive maps, image uploads, and a clean responsive user experience.

---

# 🚀 Features

## 👤 User Authentication

- Register & Login
- Secure Password Hashing (Passport.js)
- Session-based Authentication
- Logout Functionality

---

## 🏡 Listings

- Create New Listings
- Edit Existing Listings
- Delete Listings
- View Listing Details
- Upload Property Images
- Responsive Listing Cards

---

## ⭐ Reviews

- Add Reviews
- Delete Reviews
- Rating System
- Review Validation

---

## 📍 Interactive Maps

- Display Listing Location
- Mapbox Integration
- Geocoding Support

---

## ☁ Cloud Storage

- Cloudinary Image Uploads
- Optimized Image Delivery

---

# 🛠 Tech Stack

## Frontend

- HTML5
- CSS3
- Bootstrap 5
- EJS

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Authentication

- Passport.js
- Express Session

## APIs & Services

- Cloudinary
- Mapbox Geocoding API

## Other Tools

- Joi Validation
- Method Override
- Connect Flash
- Git & GitHub

---

# 📂 Project Structure

```
Wanderlust/
│
├── controllers/
├── init/
├── models/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── routes/
├── utils/
├── views/
│
├── app.js
├── middleware.js
├── cloudConfig.js
└── schema.js
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/Subhrajit567/Wanderlust.git
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env` file in the root directory.

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_secret_key

CLOUD_NAME=your_cloudinary_name

CLOUD_API_KEY=your_api_key

CLOUD_API_SECRET=your_cloudinary_secret

MAP_TOKEN=your_mapbox_access_token
```

## Run the Application

```bash
npm start
```

or

```bash
nodemon app.js
```

Open:

```
http://localhost:8080
```

---

# 🔒 Authentication

- User Registration
- Login
- Logout
- Protected Routes
- Authorization Middleware

---

# 📷 Image Upload

Users can upload listing images using Cloudinary.

Supported formats:

- JPG
- PNG
- JPEG
- WEBP

---

# 📍 Map Integration

Each listing displays its location using Mapbox.

Features:

- Location Search
- Interactive Maps
- Geocoding

---

# 📖 Future Enhancements

- ❤️ Wishlist / Favorites
- 🔍 Advanced Search
- 📅 Booking System
- 💳 Online Payments
- 💬 Live Chat
- 📱 Progressive Web App
- 🌙 Dark Mode
- 📊 Admin Dashboard

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create your feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 👨‍💻 Author

**Subhrajit Sahoo**

- GitHub: https://github.com/Subhrajit567

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.
