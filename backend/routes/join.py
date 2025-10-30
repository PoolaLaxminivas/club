from fastapi import APIRouter, HTTPException
from typing import List
from models.join_submission import JoinSubmission, JoinSubmissionCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter()

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
submissions_collection = db.join_submissions

@router.post("/join", response_model=JoinSubmission)
async def submit_join_application(submission: JoinSubmissionCreate):
    """Submit join application"""
    submission_obj = JoinSubmission(**submission.dict())
    await submissions_collection.insert_one(submission_obj.dict())
    return submission_obj

@router.get("/join", response_model=List[JoinSubmission])
async def get_all_submissions():
    """Get all join submissions (admin only in future)"""
    submissions = await submissions_collection.find().to_list(1000)
    return [JoinSubmission(**submission) for submission in submissions]

@router.get("/join/{submission_id}", response_model=JoinSubmission)
async def get_submission(submission_id: str):
    """Get single submission by ID"""
    submission = await submissions_collection.find_one({"id": submission_id})
    if not submission:
        raise HTTPException(status_code=404, detail="Submission not found")
    return JoinSubmission(**submission)
