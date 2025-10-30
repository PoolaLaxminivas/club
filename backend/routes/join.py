from fastapi import APIRouter, HTTPException
from typing import List
from models.join_submission import JoinSubmission, JoinSubmissionCreate

router = APIRouter()

def get_db():
    from server import db
    return db

@router.post("/join", response_model=JoinSubmission)
async def submit_join_application(submission: JoinSubmissionCreate):
    """Submit join application"""
    db = get_db()
    submission_obj = JoinSubmission(**submission.dict())
    await db.join_submissions.insert_one(submission_obj.dict())
    return submission_obj

@router.get("/join", response_model=List[JoinSubmission])
async def get_all_submissions():
    """Get all join submissions (admin only in future)"""
    db = get_db()
    submissions = await db.join_submissions.find().to_list(1000)
    return [JoinSubmission(**submission) for submission in submissions]

@router.get("/join/{submission_id}", response_model=JoinSubmission)
async def get_submission(submission_id: str):
    """Get single submission by ID"""
    db = get_db()
    submission = await db.join_submissions.find_one({"id": submission_id})
    if not submission:
        raise HTTPException(status_code=404, detail="Submission not found")
    return JoinSubmission(**submission)
