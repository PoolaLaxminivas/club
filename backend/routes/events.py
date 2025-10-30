from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from models.event import Event, EventCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter()

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
events_collection = db.events

@router.get("/events", response_model=List[Event])
async def get_all_events(type: Optional[str] = Query(None)):
    """Get all events, optionally filtered by type"""
    query = {}
    if type:
        query["type"] = type
    
    events = await events_collection.find(query).to_list(1000)
    return [Event(**event) for event in events]

@router.get("/events/{event_id}", response_model=Event)
async def get_event(event_id: str):
    """Get single event by ID"""
    event = await events_collection.find_one({"id": event_id})
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    return Event(**event)

@router.post("/events", response_model=Event)
async def create_event(event: EventCreate):
    """Create new event"""
    event_obj = Event(**event.dict())
    await events_collection.insert_one(event_obj.dict())
    return event_obj
