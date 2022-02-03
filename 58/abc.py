#importing the module
from pytube import YouTube

# Link of the video you wish to download
link = input("Enter the link of the video: ")

try:
    
    yt  = YouTube(link)
    
    #video title
    print("Title: ", yt.title)
    
    #length of the video
    print("Length of the video: ", yt.length," seconds")
    
    #get the video in highest resolution
    res = yt.streams.get_highest_resolution()
    
    #download the video
    res.download('D:')
    print("task completed")
    
except:
    print("Error")