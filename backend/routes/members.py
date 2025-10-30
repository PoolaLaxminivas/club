from fastapi import APIRouter, HTTPException
from typing import List, Optional
from models.member import Member, MemberCreate

router = APIRouter()

def get_db():
    from server import db
    return db

@router.get("/members", response_model=List[Member])
async def get_all_members():
    """Get all members (core and active)"""
    db = get_db()
    members = await db.members.find().to_list(1000)
    return [Member(**member) for member in members]

@router.get("/members/core", response_model=List[Member])
async def get_core_members():
    """Get core team members only"""
    db = get_db()
    members = await db.members.find({"type": "core"}).to_list(1000)
    return [Member(**member) for member in members]

@router.get("/members/active", response_model=List[Member])
async def get_active_members():
    """Get active members only"""
    db = get_db()
    members = await db.members.find({"type": "active"}).to_list(1000)
    return [Member(**member) for member in members]

@router.post("/members", response_model=Member)
async def create_member(member: MemberCreate):
    """Create new member"""
    db = get_db()
    member_obj = Member(**member.dict())
    await db.members.insert_one(member_obj.dict())
    return member_obj
