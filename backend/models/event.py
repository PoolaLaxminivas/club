from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class EventBase(BaseModel):
    title: str
    type: str  # "Hackathons", "Workshops", "Talks", "Coding Challenges"
    date: str
    description: str
    status: str  # "upcoming", "ongoing", "past"
    image: str

class EventCreate(EventBase):
    pass

class Event(EventBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "id": "123e4567-e89b-12d3-a456-426614174000",
                "title": "HackNova 2025",
                "type": "Hackathons",
                "date": "March 15-17, 2025",
                "description": "48-hour hackathon bringing together 200+ coders.",
                "status": "upcoming",
                "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
                "createdAt": "2025-01-01T00:00:00",
                "updatedAt": "2025-01-01T00:00:00"
            }
        }
