# 🚧 UNDER CONSTRUCTION 🚧

**Catchphrase:** Reducing politics contextual overhead.

This project is currently in development and the mission and vision statements will soon be released. 

Please contact me if you are interested in providing help.
Currently needed:
- Data Scraper Modules 
- Prompt Engineering suggestions
- Networking & Marketing
- Frontend/ UX/ UI work

## Coming soon: release of data scraper interface to provide extensibility for the project.
- The idea is that people can choose source x and build a datascraper for it, which will then be integrated into the project.
- Generally if you want to start directly, passing a dataframe with the columns "Headline", "Content", "Source", "Date" and "URL" will be super fine.

## Table of Contents
- [Why does this project exist?](#why-does-this-project-exist)
- [Idea and Outline](#idea-and-outline)
- [Tasks](#tasks)
- [Data Challenges](#data-science-code-challenges)
- [Journalistic Challenges](#journalistic-challenges)
- [Quality Assurance](#quality-assurance)
- [Frontend](#frontend)
- [Backend](#backend)
- [Architecture](#architecture)
- [Usage](#usage)
- [Necessary API Keys/ Environment Variables](#necessary-api-keys-environment-variables)
- [Contributing](#contributing)
- [Contact](#contact)

# Why does this project exist?
- All things regarding politics, be that news, conflicts, relationships, legislative procedures or documents are hard to understand. Many people don't have the time to read through all the documents and news articles necessary to gain a broad and well-informed understanding of a political situation.
- The goal of this project is to make politics more accessible and understandable for everyone by the means of data science and AI.

# Idea and Outline
This project aims to tackle two distinct problems:

1. Navigating political situations, legislative documents, and political processes is difficult and time-consuming.
2. Interacting with this data is often limited to a few experts.

**Solution Components:**
- News (Summarisation)
- Actors & Interests (Matrix)
- Background filling (the training cut-off)
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

## Data Challenges
- Addressing training data bias
- Effective prompt engineering
- Creating Datasets & Benchmarks
- Robust and scalable data pipelines
- Training and fine-tuning LLMs

## Journalistic Challenges
- Balanced News Sources
- Fact-checking
- Interdependence of news sources
- Interdependence of summaries

## Quality Assurance
- Automatic Evaluation of Results Pipelines needed (conciseness, accuracy, bias weighting etc.)



# Frontend

### Vision
![Open Politics Vision](assets/images/open-politics-website-vision.png)

- The frontend rendering and server communication is largely built on htmx features and tries to stay within the realm of HTML and CSS and Hyperstate Media, calling assets asynchronously.


# Backend

## Architecture Outline (v0.1)
![Open Politics Architecture](assets/images/open-politics-architecture.png)

## Notes on model usage
- The usage of any LLM or LMM models is a highly interesting and complex topic.
- We can opt to use most powerful models (with often proprietary architecture and training data) or open-source models (with often less powerful architecture and training data) but for the benefit of reproducibility and transparency. There are tasks that are essentially total other domains of each other. Using GPT-4 for complex reasoning tasks is probably more interesting than using a Mistral model for it. Meanwhile we can relatively quickly fine-tune such a model for task delegation or classification tasks.
- Model interfaces should be generally model-agnostic and open to frequent change and testing.
- Current hot open-source models:
- - Sensei-7b (due to its special recursive researching  functionality)
- - Mistral / Mixtral MoE (due to its "multiple-expert models" and task-specific routing architecture)
- - LLaMa/ LLaVa models
- - Mamba




### Django

- Django is used as a backend framework to serve the frontend and to communicate with the LLMs.

### Database
- Intermediate article data storage 
- Qdrant vector storage
- Agent-Search dataset (for smaller "ground truth" data points)


### Langchain
- The LLM domain AI is now heavily evolving on agents-based sytems
- Our purpose will need multple agents, as we need to address different tasks

08.11 Update after OpenAI DevDay:
- the available context length is now 128k tokens, which is a huge improvement


- Each component requires different solutions
- - Langchain teams, agents, and chains are used to deliver rich and relevant information.
- - Elaborate processes are done with tree tree-of-thought, chain-of-thought and reflexion (see papers).
- - Some tools require automatic code generation (e.g., for the graph or timeline view).
- - Some tools require a more interactive approach (e.g., for the chatbot).
- Sets of instructions are used to generate the output.
- Sets of instructions and sets of data are retrievable via Vecor Storage Querying (e.g., Chroma or Pinecone).


### Database 
- Vector Databases
- SQLite (for current scale)
- Neo4js

## Patterns & Tools of Analysis for LLMs
- Instruction Sets
- Skill/ Instruction Vector Storage


## Referenced Patterns/Papers (will be extended in a notion doc)
- [Reflexion](https://arxiv.org/abs/2303.11366)
- [Tree of Thought](https://arxiv.org/abs/2305.10601)
- [Chain of Thought](https://arxiv.org/abs/2201.11903)



## Usage (coming soon):
- Clone the repo
```
git clone https://github.com/JimVincentW/open-politics.git
```
- Install dependencies with
```
pip install -r requirements.txt
```
- Run the Django server
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
- Connect to the frontend (open 127.0.0.1:8000 in your browser)
- Run the LLM agent (query the API)


## Necessary API Keys/ Environment Variables:
- DIP API (rgsaY4U.oZRQKUHdJhF9qguHMkwCGIoLaqEcaHjYLF)
- NewsAPI API
- OpenAI API
- Huggingface Token

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make, especially in the form of questions or proposals, are greatly appreciated.

- If you have a question or proposal, please feel free to add it as an issue in the GitHub repository.
- If you're looking to contribute directly to the code base, please approach via email so we can set up a team or arrange a discussion.


## Contact

For any inquiries, questions, or proposals, please feel free to reach out at jimvwagner@googlemail.com. I'm open to discussions and collaborations!

## License
- [MIT](https://choosealicense.com/licenses/mit/)