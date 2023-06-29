import json
import os
import openai

# Function to save data to a JSON file
def save_data(data):
    filename = 'user_data.json'
    with open(filename, 'w') as file:
        json.dump(data, file, indent=4)

# Function to load data from a JSON file
def load_data():
    filename = 'user_data.json'
    if os.path.exists(filename):
        with open(filename, 'r') as file:
            data = json.load(file)
            return data
    else:
        return {}

# Ask user for their name and store it in the JSON file
name = input("What's your name? ")
data = load_data()
data['name'] = name
save_data(data)

# Ask user for their occupation and store it in the JSON file
occupation = input("What is your job? ")
data['occupation'] = occupation
save_data(data)

# Ask user for their schedule by day of the week and store it in the JSON file
schedule_data = {}
days_of_week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

for day in days_of_week:
    schedule = input(f"Please enter your schedule for {day.capitalize()}: ")
    schedule_data[day] = schedule

data['schedule'] = schedule_data
save_data(data)

# Load stored user data
data = load_data()

while True:
    # Ask user how you can help them
    question = input("What can I help you with? ")

    # Check if the question relates to the user's stored information
    if 'name' in question.lower():
        response = f"Your name is {data.get('name', 'unknown')}."
    elif 'occupation' in question.lower():
        response = f"Your occupation is {data.get('occupation', 'unknown')}."
    elif 'schedule' in question.lower():
        # Append the schedule data to the question and send it to ChatGPT
        combined_question = f"{'Analyze data in schedule data and answer the questions below based on the schedule data. In particular, analyze hourly events well, and if the event corresponding to the question is mentioned, respond accordingly.'+question} {data.get('schedule', '')}"
        openai.api_key = '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'  # Replace with your OpenAI API key
        response = openai.Completion.create(
            engine='text-davinci-003',
            prompt=combined_question,
            max_tokens=1000,
            n=1,
            stop=None,
            temperature=0.7
        ).choices[0].text.strip()
    else:
        # Use OpenAI to generate a response
        openai.api_key = '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'  # Replace with your OpenAI API key
        response = openai.Completion.create(
            engine='text-davinci-003',
            prompt=question,
            max_tokens=1000,
            n=1,
            stop=None,
            temperature=0.7
        ).choices[0].text.strip()

    # Print the response
    print(response)

    # Check if user wants to end the conversation
    if question.lower() == 'bye':
        break