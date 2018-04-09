UTOPIA (Unisex Toilet Overview Provider Internet Application)

I'm collaborating with Margrete Xie 
A URL link to your program and run on a browser, see: https://rawgit.com/. (if it can't run on a browser, provide a short video documentation? (or animated gif))

What is the program about? which API have you used and why?
Concept:
The program is a quick overview of where you can find unisex toilets in the three biggest cities in Denmark. It provides you with information about the toilet’s location, address and if needed a comment possibly made in collaboration with users of LGBTQ+ communities. It also tells you how many toilets in total, that are to be found in the given city that are clicked.   
All this information is provided to us through an API from www.refugerestrooms.org/. We’ve wanted to make a program with a political statement. Through our program we’ve raised awareness to the numbers of unisex toilets in Denmark. These numbers are low in general, and this can cause problems for the LGBTQ+ community members. Furthermore, the information can maybe be of help for those who seek unisex toilets.
Technical:
The data from the API is determined by location - longitude and latitude - therefore, we created variable that contains the specific longitudes and latitudes of the three cities. 
At first we thought that we could make a search bar, where you could write the name of the city - we could therefore make a program that provides information of the whole world. But because of the way the location is defined by longitude and latitude, we had to simplify our work by limiting our program to only count in the three big cities of Denmark. 
We had some problems with using the API data, because it seemed like it wouldn’t update the data when the API changed (when choosing between the cities). So we made an extra function called ´update data´ which will store the new API and thereby work as a step between clicking the buttons and showing the data.
Additional technical aspects of the program is commented in the code.

We used locations from the API to make our program in this week. What’s worth noting is that we represented our data, so that the locations of the toilets was the only options, but, we don’t know. This was the data was presented to us, but there could be more toilets.  So, the information we brought further is not wrong, but could possibly be more precise. So if I had more time I would investigate the pros and cons of sharing information through APi’s. 




