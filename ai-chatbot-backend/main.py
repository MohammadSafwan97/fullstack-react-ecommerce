from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel
from core.chatbot import get_ai_response

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    messages: list

@app.post("/api/assistant")
async def assistant(req: ChatRequest):
    user_msg = req.messages[-1]["content"]
    result = await get_ai_response(user_msg)
    return result
