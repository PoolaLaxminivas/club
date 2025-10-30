from pydantic import BaseModel, Field
from typing import List
from datetime import datetime
import uuid

class ProjectBase(BaseModel):
    title: str
    description: str
    technologies: List[str]
    github: str
    team: str
    status: str  # "active", "completed"

class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "id": "123e4567-e89b-12d3-a456-426614174000",
                "title": "EduAI Platform",
                "description": "AI-powered learning platform",
                "technologies": ["React", "Python", "TensorFlow"],
                "github": "https://github.com/codenova/eduai",
                "team": "Alex Thompson, Sarah Chen",
                "status": "active",
                "createdAt": "2025-01-01T00:00:00",
                "updatedAt": "2025-01-01T00:00:00"
            }
        }
