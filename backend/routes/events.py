from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from models.event import Event, EventCreate

router = APIRouter()

def get_db():
    from server import db
    return db

@router.get("/events", response_model=List[Event])
async def get_all_events(type: Optional[str] = Query(None)):
    """Get all events, optionally filtered by type"""
    db = get_db()
    query = {}
    if type:
        query["type"] = type
    
    events = await db.events.find(query).to_list(1000)
    return [Event(**event) for event in events]

@router.get("/events/{event_id}", response_model=Event)
async def get_event(event_id: str):
    """Get single event by ID"""
    db = get_db()
    event = await db.events.find_one({"id": event_id})
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    return Event(**event)

@router.post("/events", response_model=Event)
async def create_event(event: EventCreate):
    """Create new event"""
    db = get_db()
    event_obj = Event(**event.dict())
    await db.events.insert_one(event_obj.dict())
    return event_obj
