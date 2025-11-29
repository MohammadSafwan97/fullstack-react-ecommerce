import json
from core.config import Config
from langchain_openai import ChatOpenAI

# Load products once
with open(Config.DATA_FILE, "r") as f:
    PRODUCTS = json.load(f)


# Simple keyword-based relevance scoring
def find_relevant_products(query: str, limit=5):
    query_words = query.lower().split()
    matches = []

    for p in PRODUCTS:
        text = (p["name"] + " " + p.get("description", "")).lower()

        score = sum([1 for w in query_words if w in text])
        if score > 0:
            matches.append((score, p))

    matches.sort(key=lambda x: x[0], reverse=True)
    return [p for score, p in matches[:limit]]


chat_model = ChatOpenAI(
    model=Config.MODEL_NAME,
    temperature=0.5
)

async def get_ai_response(user_query: str):
    matched_products = find_relevant_products(user_query)

    # Build context text only if products matched
    product_context = ""
    if matched_products:
        product_context = "\n".join([
            f"- {p['name']} (${p['price']}): {p.get('description','')}"
            for p in matched_products
        ])

    system_prompt = f"""
    You are a friendly, smart AI shopping assistant.

    Your behavior rules:
    - ALWAYS respond in a helpful and conversational tone.
    - If the user's question is shopping/product-related, help them using the products below.
    - If the question is NOT related to shopping, reply politely:
      "I can help only with shopping or product-related questions."
    - DO NOT say "I couldn't understand" — always give a polite response.
    - DO NOT invent fake products.
    - If no product matches the query, still answer normally about shopping.

    Product List:
    {product_context if product_context else "No specific products matched, but you can still help the user."}
    """

    response = chat_model.invoke([
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_query}
    ])

    return {
        "reply": response.content,
        "results": matched_products
    }
