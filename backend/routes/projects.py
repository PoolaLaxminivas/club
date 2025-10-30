from fastapi import APIRouter, HTTPException
from typing import List
from models.project import Project, ProjectCreate

router = APIRouter()

def get_db():
    from server import db
    return db

@router.get("/projects", response_model=List[Project])
async def get_all_projects():
    """Get all projects"""
    db = get_db()
    projects = await db.projects.find().to_list(1000)
    return [Project(**project) for project in projects]

@router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: str):
    """Get single project by ID"""
    db = get_db()
    project = await db.projects.find_one({"id": project_id})
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return Project(**project)

@router.post("/projects", response_model=Project)
async def create_project(project: ProjectCreate):
    """Create new project"""
    db = get_db()
    project_obj = Project(**project.dict())
    await db.projects.insert_one(project_obj.dict())
    return project_obj
