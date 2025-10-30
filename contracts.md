# CodeNova Backend Implementation Contracts

## Overview
This document outlines the backend implementation plan for the CodeNova coding club website, including API contracts, database models, and frontend-backend integration strategy.

## Current Mock Data (mock.js)
- `clubInfo`: Club name, tagline, mission, vision
- `coreTeam`: Array of 4 core team members
- `members`: Array of 4 active members
- `events`: Array of 6 events (hackathons, workshops, talks, coding challenges)
- `projects`: Array of 4 student projects
- `socialLinks`: Social media and contact links
- Join form submissions stored in localStorage

## Database Models

### 1. Member Model
```
{
  _id: ObjectId,
  name: String (required),
  role: String (required), // "Club President", "Technical Lead", "Member", etc.
  type: String (required), // "core" or "active"
  github: String (required),
  linkedin: String (required),
  image: String (required),
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### 2. Event Model
```
{
  _id: ObjectId,
  title: String (required),
  type: String (required), // "Hackathons", "Workshops", "Talks", "Coding Challenges"
  date: String (required),
  description: String (required),
  status: String (required), // "upcoming", "ongoing", "past"
  image: String (required),
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### 3. Project Model
```
{
  _id: ObjectId,
  title: String (required),
  description: String (required),
  technologies: Array[String] (required),
  github: String (required),
  team: String (required),
  status: String (required), // "active", "completed"
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### 4. JoinSubmission Model
```
{
  _id: ObjectId,
  name: String (required),
  email: String (required),
  year: String (required),
  github: String,
  linkedin: String,
  reason: String,
  status: String (default: "pending"), // "pending", "approved", "rejected"
  createdAt: DateTime,
  updatedAt: DateTime
}
```

## API Endpoints

### Members
- `GET /api/members` - Get all members (both core and active)
- `GET /api/members/core` - Get core team members only
- `GET /api/members/active` - Get active members only
- `POST /api/members` - Create new member (admin only - for future)
- `PUT /api/members/:id` - Update member (admin only - for future)
- `DELETE /api/members/:id` - Delete member (admin only - for future)

### Events
- `GET /api/events` - Get all events
- `GET /api/events?type=Hackathons` - Get events by type (query param)
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create new event (admin only - for future)
- `PUT /api/events/:id` - Update event (admin only - for future)
- `DELETE /api/events/:id` - Delete event (admin only - for future)

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project (admin only - for future)
- `PUT /api/projects/:id` - Update project (admin only - for future)
- `DELETE /api/projects/:id` - Delete project (admin only - for future)

### Join Submissions
- `POST /api/join` - Submit join application
- `GET /api/join` - Get all submissions (admin only - for future)
- `GET /api/join/:id` - Get single submission (admin only - for future)
- `PUT /api/join/:id/status` - Update submission status (admin only - for future)

## Frontend-Backend Integration

### 1. Remove Mock Data
- Remove hardcoded data from components
- Replace with API calls using axios

### 2. API Service Layer
Create `/app/frontend/src/services/api.js`:
- Centralized API service with axios instance
- All API endpoints in one place
- Error handling

### 3. Component Updates

**Hero.jsx**
- No changes needed (uses clubInfo from mock - can keep static)

**About.jsx**
- No changes needed (uses clubInfo from mock - can keep static)

**Members.jsx**
- Replace mock data with `GET /api/members/core` and `GET /api/members/active`
- Add loading state
- Add error handling

**Events.jsx**
- Replace mock data with `GET /api/events`
- Add query param support for filtering
- Add loading state
- Add error handling

**Projects.jsx**
- Replace mock data with `GET /api/projects`
- Add loading state
- Add error handling

**JoinForm.jsx**
- Replace localStorage with `POST /api/join`
- Keep frontend validation
- Add better success/error messages
- Remove localStorage logic

### 4. Data Seeding
Create seed script to populate database with initial data from mock.js:
- Seed members (core + active)
- Seed events
- Seed projects

## Implementation Steps

1. **Backend Models** - Create Pydantic models in `/app/backend/models/`
2. **Backend Routes** - Create route handlers in `/app/backend/routes/`
3. **Seed Script** - Create `/app/backend/seed_data.py` to populate initial data
4. **Frontend API Service** - Create `/app/frontend/src/services/api.js`
5. **Frontend Integration** - Update components to use API service
6. **Testing** - Test all endpoints and frontend integration

## Notes
- Club info (name, tagline, mission, vision) and social links will remain static in mock.js since they rarely change
- Focus on GET endpoints first for display, POST for join form
- Admin endpoints (PUT, DELETE) are marked for future implementation
- All dates are stored as strings for simplicity
- Images use external URLs (Unsplash, DiceBear avatars)
