from fastapi import APIRouter, HTTPException
from typing import List
from models.project import Project, ProjectCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter()

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
projects_collection = db.projects

@router.get("/projects", response_model=List[Project])
async def get_all_projects():
    """Get all projects"""
    projects = await projects_collection.find().to_list(1000)
    return [Project(**project) for project in projects]

@router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: str):
    """Get single project by ID"""
    project = await projects_collection.find_one({"id": project_id})
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return Project(**project)

@router.post("/projects", response_model=Project)
async def create_project(project: ProjectCreate):
    """Create new project"""
    project_obj = Project(**project.dict())
    await projects_collection.insert_one(project_obj.dict())
    return project_obj
