# 🚧 UNDER CONSTRUCTION 🚧

**Catchphrase:** Reducing the contextual overhead of political processes.

# Why does this project exist?
- All things regarding politics, be that news or legislative procedures and documents are hard to understand. Many people don't have the time to read through all the documents and news articles.
- The goal of this project is to make political processes more accessible and understandable for everyone.

## Idea and Outline
This project aims to tackle two distinct problems:

1. Navigating political situations, legislative documents, and political processes is difficult and time-consuming.
2. Interacting with this data is often limited to a few experts.

**Solution Components:**
- News (Summarisation)
- Actors & Interests (Matrix)
- Background (filling the training cut-off)
- Hard Data Views (%s, numbers, etc.)
- Timeline View (of processes, events, and news)
- Graph View (of actors, interests, and processes)
- Chatbot (Q&A)
- Outlook (generative)


## Tasks
- Information summarization
- Entity Extraction (Named Entity Recognition)
- Q&A Chatbots (for interactive information)
- Providing historical context 
- Monitoring and alerts
- Visual representation of political data
- Fact-checking

## Data Science/ Code Challenges
- Addressing training data bias
- Effective prompt engineering
- Parsing/formatting outputs
- Training and fine-tuning LLMs

## Journalistic Challenges
- Balanced News Sources
- Fact-checking
- Interdependence of news sourcs
- Interdependence of summaries



## Frontend

### Vision
![Open Politics Vision](assets/images/open-politics-website-vision.png)



- The frontend rendering and server communication is largely built on htmx features and tries to stay within the realm of HTML and CSS and Hyperstate Media, calling assets asynchronously.
- Long-term wise Component 1 & 2 are complementary, for now they serve independent purposes.
- Component 1 offers a view of a thematic news complex, planned are graph views, a timeline, and a actor/interests matrix.
- Component 2 offers a summarised view of a "Vorgang" process from the Bundestag.
- Process details are dissected with related information shown in a graph or node manner (akin to Obsidian's graph view).
- Each node features a card that summarizes its content and points to the most relevant related content.
- The cards are generated by the LLM agent and are based on the most relevant information.

- **Design Tool:** 
Figma (details coming soon)

## Backend

### Django
- Fetches relevant documents and process details via the DIP API.

### Langchain
- Parses the document structure (e.g., bold text, headlines, lists).
- Summarizes the main document.
- LLM agent decides which sections to summarize and analyze further.
- Analysis identifies and prioritizes mentioned §s to fetch.

### LLM Chains/Agents
- Instruction sets for varied roles and tasks (most likely via dictionary).
- Differentiation between summarizing models and function-calling models (or instances).

## Patterns & Tools of Analysis for LLMs
- **LangChain**
- **Vector Databases:** Chroma or Pinecone

## Referenced Patterns/Papers
- Reflexion
- Tree of Thought

## MVP (Minimum Viable Product)
- A single process with GUI
- A single news topic with GUI

## Usage (coming soon):
- Clone the repo
- Install dependencies
- Run the Django server
- Connect to the frontend
- Run the LLM agent


## Necessary API Keys/ Environment Variables:
- DIP API (rgsaY4U.oZRQKUHdJhF9qguHMkwCGIoLaqEcaHjYLF)
- NewsAPI API
- OpenAI API
- Huggingface Token