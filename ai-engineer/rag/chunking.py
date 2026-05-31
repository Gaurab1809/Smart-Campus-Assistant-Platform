from langchain_text_splitters import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,  # Maximum number of characters in each chunk
    chunk_overlap=50
)

def split_documents(documents):
    return splitter.split_documents(documents)