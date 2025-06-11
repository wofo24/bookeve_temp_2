# Bookeve Platform Wiki

## Overview

Bookeve is a platform designed for beauty professionals and artists to showcase their services and allow clients to book appointments. The platform provides personalized pages for each artist with their own subdomain (e.g., `artist-name.bookeve.in`).

## Tech Stack

- **Framework**: Next.js 15.2.4
- **Frontend**: React 19
- **Styling**: TailwindCSS 4.0.17
- **UI Components**: Radix UI components
- **Additional Libraries**:
  - Swiper (for carousels)
  - Lucide React (for icons)
  - Class Variance Authority (for component styling)

## Project Structure

```
bookeve_temp_2/
├── components/                 # React components
│   ├── RatingsReviews.tsx     # Ratings and reviews component
│   └── ui/                    # UI components
│       ├── Header.tsx         # Header component
│       └── shared/            # Shared UI components
│           ├── button.tsx
│           ├── card.tsx
│           ├── checkbox.tsx
│           ├── collapsible.tsx
│           ├── grid.tsx
│           ├── input.tsx
│           ├── label.tsx
│           ├── popover.tsx
│           ├── radio-group.tsx
│           ├── search-input.tsx
│           ├── select.tsx
│           └── tabs.tsx
├── pages/                     # Next.js pages
│   ├── _app.tsx              # App component
│   ├── [subdomain].tsx       # Dynamic subdomain page
│   ├── index.tsx             # Home page
│   └── testDomain.tsx        # Test artist page
├── public/                    # Static assets
│   ├── bg.png                # Background image
│   ├── profile-picture.png   # Profile picture
│   └── other assets...
├── styles/                    # CSS styles
│   └── globals.css           # Global styles
├── utils/                     # Utility functions and assets
│   ├── cn.tsx                # Class name utility
│   └── icons/                # Icon assets
│       ├── bookingsIcon.svg
│       ├── instagram.svg
│       ├── profilePicture.svg
│       ├── ratings.svg
│       └── index.tsx         # Icon exports
├── next.config.ts            # Next.js configuration
├── package.json              # Project dependencies
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.js        # Tailwind configuration
└── tailwind.css              # Tailwind styles
```

## Key Features

### 1. Artist Profiles

Each artist has their own profile page that showcases:

- Profile information (name, profession, description)
- Services offered with pricing
- Ratings and reviews
- Booking statistics
- Social media links

### 2. Subdomain Routing

The platform uses Next.js dynamic routing to provide each artist with their own subdomain:

- URL format: `[artist-name].bookeve.in`
- Configuration in `next.config.ts` handles subdomain routing

### 3. Service Listings

Artists can list their services with:

- Service name
- Price
- Duration
- Description
- Ratings
- Advance payment requirements

### 4. Ratings and Reviews System

The platform includes a comprehensive ratings and reviews system:

- Overall rating score
- Distribution of ratings (5-star to 1-star)
- Total number of ratings
- Customer feedback tags
- Review highlights

### 5. Filtering and Search

Users can filter services by:

- Location (at client's location or at salon)
- Service type
- Search functionality for finding specific services

## Pages

### Home Page (`index.tsx`)

A simple landing page with:

- Bookeve logo and title
- Link to the test artist page

### Artist Page (`testDomain.tsx`)

A comprehensive artist profile page for "Akanksha" that includes:

- Header with background image
- Profile section with image, name, and profession
- Booking and rating statistics
- Service offerings with details and pricing
- Filtering options for services
- Social media integration
- Ratings and reviews section
- Booking and cancellation policies

### Dynamic Subdomain Page (`[subdomain].tsx`)

A template page that displays content based on the subdomain:

- Shows a welcome message with the subdomain name
- Designed to be customized for each artist

## Components

### Header (`Header.tsx`)

- Displays the Bookeve logo
- Includes a mobile-responsive menu
- Features a background image

### RatingsReviews (`RatingsReviews.tsx`)

- Displays overall rating score
- Shows rating distribution
- Includes customer feedback tags in a carousel
- Decorative elements (laurel icons)

### Shared UI Components

The project includes various reusable UI components built with Radix UI:

- Button
- Card
- Checkbox
- Collapsible sections
- Grid layout
- Input fields
- Labels
- Popover
- Radio group
- Search input
- Select dropdown
- Tabs

## Configuration

### Next.js Configuration (`next.config.ts`)

Configures URL rewrites to handle subdomain routing:

```javascript
module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "*.bookeve.in" }],
        destination: "/[subdomain]",
      },
    ];
  },
};
```

### Tailwind Configuration (`tailwind.config.js`)

Configures Tailwind CSS for the project, including theme customization and plugins.

## Getting Started

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Future Development Opportunities

1. **User Authentication**: Implement login/signup for artists and clients
2. **Booking System**: Add functionality for clients to book appointments
3. **Payment Integration**: Integrate payment processing for service bookings
4. **Admin Dashboard**: Create an admin interface for artists to manage their profiles
5. **Notifications**: Add email/SMS notifications for booking confirmations
6. **Calendar Integration**: Add calendar integration for availability management
7. **Mobile App**: Develop a mobile application for the platform
