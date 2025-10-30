from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class MemberBase(BaseModel):
    name: str
    role: str
    type: str  # "core" or "active"
    github: str
    linkedin: str
    image: str

class MemberCreate(MemberBase):
    pass

class Member(MemberBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "id": "123e4567-e89b-12d3-a456-426614174000",
                "name": "Alex Thompson",
                "role": "Club President",
                "type": "core",
                "github": "https://github.com/alexthompson",
                "linkedin": "https://linkedin.com/in/alexthompson",
                "image": "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
                "createdAt": "2025-01-01T00:00:00",
                "updatedAt": "2025-01-01T00:00:00"
            }
        }
