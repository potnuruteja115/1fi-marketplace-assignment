<p align="center">
  <img src="client/src/assets/hero.png" alt="1Fi Marketplace Banner" width="100%">
</p>

---

<h1 align="center">1Fi MARKETPLACE</h1>

<p align="center">
<b>SDE Intern Assignment • Full-Stack Marketplace Experience</b>
</p>

A responsive marketplace experience built as part of the **1Fi SDE Intern Assignment**, featuring product discovery, product variants, dynamic pricing, EMI plan selection, and an end-to-end order confirmation flow.

---

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Express.js-REST_API-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/Git-GitHub-F05032?style=for-the-badge&logo=git&logoColor=white">
</p>

---

<h1 align="center">🛍️ 1Fi Marketplace</h1>

<p align="center">
<b>Browse • Customize • Choose EMI • Confirm</b>
</p>

---

# 💡 About This Project

This project implements a **1Fi Marketplace** experience where users can browse products, view product details, select variants, explore dynamically generated EMI plans, and proceed through an order confirmation flow.

The application is designed with a clear separation between the **React frontend** and **Express.js backend**, with product and EMI data handled through REST APIs.

---

# 🎯 Project Objectives

- 🛍️ Build a functional marketplace experience
- 📱 Display products with images and relevant details
- 🎨 Support multiple product color variants
- 💾 Support multiple storage variants
- 💰 Display variant-specific pricing
- 🧮 Generate EMI plans dynamically
- 💳 Allow users to select an EMI plan
- ✅ Provide an order confirmation flow
- 🔄 Fetch application data through APIs
- ⚡ Handle loading and error states
- 📱 Build a responsive user interface
- 🧩 Use reusable React components
- 🏗️ Maintain clean frontend/backend separation

---

# 🛠 Tech Stack

<p align="center">

<img src="https://skillicons.dev/icons?i=react,vite,nodejs,express,js,css,git,github,vscode"/>

</p>

<p align="center">

React • Vite • JavaScript • Node.js • Express.js • REST APIs • CSS • Git • GitHub

</p>

---

# ✨ Key Features

## 🛍️ 1Fi Marketplace

- Product listing
- Product images
- Product names
- Brand information
- Product descriptions
- Pricing information
- Multiple products

---

## 🎨 Product Variants

Users can customize the selected product using:

- Color
- Storage capacity
- Variant-specific images
- Variant-specific pricing
- MRP information

---

## 📱 Available Products

### Apple iPhone 15

- Black
- Blue
- Pink
- 128GB
- 256GB

### Samsung Galaxy S24

- Black
- Violet
- 128GB
- 256GB

### OnePlus 13

- Black Eclipse
- Arctic Dawn
- Midnight Ocean
- 128GB
- 256GB

---

# 💳 EMI Plans

EMI plans are generated dynamically by the backend based on the selected product variant.

Available tenures:

```text
3 Months
6 Months
9 Months
12 Months

# Application Flow 

             1Fi Marketplace
                    │
                    ▼
             Product Listing
                    │
                    ▼
             Product Details
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
       Select Color      Select Storage
          │                   │
          └─────────┬─────────┘
                    ▼
             Variant Selected
                    │
                    ▼
             Fetch EMI Plans
                    │
                    ▼
             Select EMI Plan
                    │
                    ▼
             Proceed to Order
                    │
                    ▼
            Confirmation Page
                    │
                    ▼
             Confirm Order
                    │
                    ▼
             Order Confirmed

  # Architecture Flow
┌─────────────────────────────┐
│       React Frontend        │
│                             │
│  Marketplace                │
│  Product Details            │
│  EMI Selection              │
│  Confirmation                │
└──────────────┬──────────────┘
               │
               │ HTTP / REST API
               ▼
┌─────────────────────────────┐
│       Express Backend       │
│                             │
│  Product Routes             │
│  Product Controller         │
│  EMI Calculation            │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       Product Data          │
│                             │
│  Products                   │
│  Variants                   │
│  Prices                     │
│  Images                     │
└─────────────────────────────┘
