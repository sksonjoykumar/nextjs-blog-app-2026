# Full Stack Next.js Blog Application

A modern full-stack blog application built with **Next.js (App Router)** that supports authentication, blog management, comments, search, and pagination. The project follows best practices for scalability, security, and performance.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- User **Sign Up & Login**
- Secure authentication using **JWT (JOSE)**
- Password hashing with **bcryptjs**
- Protected routes with **Next.js Middleware**

### 📝 Blog Management
- Create, update, and delete blog posts
- Rich text editor for writing blogs
- Image upload support
- Author-based access control

### 💬 Comments System
- Users can add comments on blog posts
- Authenticated user validation

### 🔍 Search & Pagination
- Blog search by title or content
- Pagination for better performance and UX
- Latest blogs section

### 🎨 UI & UX
- Fully responsive UI
- Modern component-based design using **Radix UI**
- Theme switching (Light / Dark)
- Toast notifications with **Sonner**

### 🛡️ Security & Performance
- API rate limiting and protection using **Arcjet**
- Server-side validation with **Zod**
- Optimized database queries with Mongoose

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16 (App Router)**
- **React 19**
- **Tailwind CSS**
- **Radix UI**
- **Lucide Icons**
- **React Hook Form**
- **Zod Validation**
- **Next Themes**

### Backend
- **Next.js API Routes**
- **MongoDB**
- **Mongoose**
- **JWT (JOSE)**
- **bcryptjs**

### Utilities & Tools
- **UploadThing** – Image uploads
- **Arcjet** – Security & API protection
- **Sonner** – Toast notifications

---

## 📦 Dependencies

Key libraries used in this project:

- next
- react
- mongoose
- jose
- bcryptjs
- react-hook-form
- zod
- uploadthing
- radix-ui
- tailwindcss

---

## ⚙️ Environment Variables

Create a `.env.local` file and add:

```env
MONGODB_URI=
JWT_SECRET=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
ARCJET_KEY=

## 🧑‍💻 Installation & Setup
# Clone the repository
git clone https://github.com/sksonjoykumar/nextjs-blog-app-2026.git

# Install dependencies
npm install

# Run development server
npm run dev

## 📌 Project Structure
app/
 ├── api/
 ├── (auth)/
 ├── blog/
 ├── components/
 ├── lib/
 ├── models/
 ├── middleware.js

