# Mark Lannen MART 441
## Final Project Readme

### Process
I spent several weeks on this game, and the scope changed a bit as I realized I had bitten off a little more than I could chew.
I started with creating the array and populating it with the country images. Then I worked on creating the classes, and 
changing the code structure so that it was more object-oriented. I then spent quite a bit of time just trying to get
the basic game to work. When I finally got to that point, I then did my best to style the game so that it looks a little
more appealing.

### Success
My biggest success was eventually just getting the basic game to work. I was particularly pleased (probably over-pleased) 
with myself when I got every edge of each country to bounce evenly off of the canvas edge. One thing that surprised me 
was that in order to access the width and height of the object I had to use: imgArray[i].get_path.height and imgArray[i].get_path.width. 
I had assumed that it would just be mgArray[i].height etc. So, I've still got plenty of work to do to really understand 
OOP and creating and accessing objects, getters/setters etc. It still don't make complete sense to me yet. I was also pleased
to get the correct button to disappear when the corresponding country was selected. At first I had that block of code below the
image array splice, and finally realized it had to be above the splice as after the splice that particular element would
be gone. :) 

### Difficulties
The biggest letdown was that I never managed to get the object collision to work. I tried for quite a while, but 
could just never clearly see the step by step logic that I needed to do in order to make it happen. I think after a bit 
more study I might come back to it and see if I can make it work. 

Another issue that came up that I was not expecting, was that after I styled the page by adding a header and some instructions
above the canvas, and then centered the canvas, the mouse click collisions stopped working. I think what happened is that
once the canvas x and y did not start in the top left corner of the screen, then the mouse click coordinates, which do start 
there, stopped matching up. I hadn't anticipated that and just ran out of time to figure out how to fix that issue. I'm 
guessing it would involve somehow querying the size of the viewport and somehow subtracting the distance between the top
and left of the screen from the canvas edge and factoring that in to the coordinated returned by the mouse click. Or maybe
there is a way of orienting the mouse click to the edge of the canvas, no matter where it is on the screen(?) Again, just
ran out of time to try and look in to that.

That is why the header and instructions are at the bottom...

Another thing I could have done is made sure that all the countries appeared completely within the bounds of the canvas. 
The issue is that if part of them first appears outside the visual canvas then they bounce along the bottom and sides 
without ever moving in to the center. I'm not sure why this is happening, but with some experimentation I could probably 
manage to fix it.

With more time and a bit more knowledge I think I can make it look much better, and I would really like to expand that game 
to include more countries, maybe randomize which ones get selected, or allow players to pick a continent etc. But that
will take quite a bit of work, but would be good practise. 




