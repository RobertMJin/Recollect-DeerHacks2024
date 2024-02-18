import cohere
import api_credentials.settings as settings
import os

co = cohere.Client(settings.COHERE_API_KEY)

def summarize(input: str) -> str:
  response = co.summarize( 
    text=input,
    length='auto',
    format='auto',
    model='command',
    additional_command='',
    temperature=0.3,
  ) 
  return response.summary

# print('Summary:', response.summary)