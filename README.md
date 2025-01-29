# Reddit Viewer
A streamlined way to view any subreddit you like.

Simply select a subreddit from the list to the left or add your own subreddits to the top.

## Access the website

[Reddit Viewer](mzreddit-viewer.netlify.app)

# Features

- Able to select a subreddit from a list of preset subreddits to view.
- Add your own subreddits to the list to view in the app.
- Search for a specific post.
- Read a posts comments by clicking on it.
- View images
- View links to videos (click on the link to be taken to where the video is hosted)
- Error messages and responses are shown to the viewer if something goes wrong.

*The app has slightly less feature when used on mobile, these include:*

- Viewing subreddits and comments (as above).
- Searching for a subreddit to load.

# Technologies Used

This app was build using **React Redux** as well as calls to the **Reddit JSON API**.

Other smaller uses included:
- The **dayjs** library to display dates.
- The **ReactMarkdown** library to display the contents of posts and comments.

# Future Work

- Adding the subreddit sidebar to mobile.
- Moving the position of where comments are displayed
- Hiding the comments sidebar when a post hasn't been clicked on