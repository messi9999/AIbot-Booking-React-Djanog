import requests
import json

def search_news(query):
    api_key = 'AIzaSyBBaj_89EScVqMvfVoaFvQ83nYdMAUn9uM'  # Replace with your own API key
    cx = '4223831f37be142bc'  # Replace with your own Custom Search Engine ID

    # API endpoint URL
    url = f'https://www.googleapis.com/customsearch/v1?key={api_key}&cx={cx}&q={query}&num=10&tbm=nws'

    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for unsuccessful requests
        data = response.json()
        # print(data)
        # for d in data:
        #     print(d)
        
        # Check if there are search results
        if 'items' in data:
            for item in data['items']:
                title = item['title']
                url = item['link']
                snippet = item['snippet']

                # Display the URL and content of each news item
                print('------------------------------------')
                print(f'Title: {title}')
                print(f'URL: {url}')
                print(f'Content: {snippet}\n')
        else:
            print('No search results found.')
    except requests.exceptions.HTTPError as error:
        print(f'Error occurred while fetching search results: {error}')
    except requests.exceptions.RequestException as error:
        print(f'An unexpected error occurred: {error}')

# Example usage
search_query = input('Enter your search query: ')
search_news(search_query)