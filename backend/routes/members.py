from fastapi import APIRouter, HTTPException
from typing import List, Optional
from models.member import Member, MemberCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter()

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
members_collection = db.members

@router.get("/members", response_model=List[Member])
async def get_all_members():
    """Get all members (core and active)"""
    members = await members_collection.find().to_list(1000)
    return [Member(**member) for member in members]

@router.get("/members/core", response_model=List[Member])
async def get_core_members():
    """Get core team members only"""
    members = await members_collection.find({"type": "core"}).to_list(1000)
    return [Member(**member) for member in members]

@router.get("/members/active", response_model=List[Member])
async def get_active_members():
    """Get active members only"""
    members = await members_collection.find({"type": "active"}).to_list(1000)
    return [Member(**member) for member in members]

@router.post("/members", response_model=Member)
async def create_member(member: MemberCreate):
    """Create new member"""
    member_obj = Member(**member.dict())
    await members_collection.insert_one(member_obj.dict())
    return member_obj
