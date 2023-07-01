from search_return import search_news

def _main():
    query = "sports news"
    result = search_news(query=query)
    
    for each_item in result:
        # print(each_item)
        title, url, content = each_item['title'], each_item['url'], each_item['content']
        print("Title:   ", title)
        print("URL:   ", url)
        print("Content:   ", content)
        print("\n---------------------------------------------------------------------------------------------------------------------------------------\n")
    
    return

if __name__ == "__main__" :
    _main()