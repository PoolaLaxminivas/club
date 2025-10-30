from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
import uuid

class JoinSubmissionBase(BaseModel):
    name: str
    email: EmailStr
    year: str
    github: Optional[str] = None
    linkedin: Optional[str] = None
    reason: Optional[str] = None

class JoinSubmissionCreate(JoinSubmissionBase):
    pass

class JoinSubmission(JoinSubmissionBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    status: str = "pending"  # "pending", "approved", "rejected"
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "id": "123e4567-e89b-12d3-a456-426614174000",
                "name": "John Doe",
                "email": "john@example.com",
                "year": "2nd Year",
                "github": "https://github.com/johndoe",
                "linkedin": "https://linkedin.com/in/johndoe",
                "reason": "I want to learn and grow",
                "status": "pending",
                "createdAt": "2025-01-01T00:00:00",
                "updatedAt": "2025-01-01T00:00:00"
            }
        }
