import json
from langchain.schema import Document
from langchain.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
from core.config import Config

def load_documents():
    with open(Config.DATA_FILE, "r") as f:
        items = json.load(f)

    docs = [
        Document(
            page_content=f"{item['name']}\n{item.get('description')}",
            metadata=item
        )
        for item in items
    ]
    return docs

def create_vector_store():
    docs = load_documents()
    embeddings = OpenAIEmbeddings(model=Config.EMBEDDING_MODEL)

    store = Chroma.from_documents(
        docs,
        embedding=embeddings,
        persist_directory=Config.VECTOR_DIR
    )

    return store
