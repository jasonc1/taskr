# todolist_v1 aka TASKR
This is for PUI assignment A3. I present to you TASKR, which is a small/basic to-do list application made in about 6 hours from start to finish. This application was made with only the css framework [Skeletoncss](http://getskeleton.com/). The rest was made from scratch - no jquery or javascript framework. Skeletoncss is a simple ~200 line css framework that provides fonts, basic forms, grid system, and a little more. I chose not to use bootstrap or another css framework because of the ease and flexibility of skeletoncss: I can create my own styles freely, as skeletoncss provides the bare necessities.


## Functionality
As mentioned before, this is a light exercise on javascript, I mainly focused on the bare functionality of the to-do app: creating tasks, deleting them, and marking them as completed. I do validate if a task is empty or not before adding it to the "list," however, the date is not verified for simplicity. Furthermore, transitions were left out because JQUERY was not used (which would have made it quite easy). Some basic transitions for input focus or button hovers were incorporated via css. 

I tried to go the minimalist route, so I made the list simply take a task name and a due date. When the task is complete, you click the box next to the task, and the item moves to the bottom of the list and has a strike-through over the text, marking it as complete. In addition, both complete and incomplete tasks could be deleted. 

If a task was created without a due date, the date section lists it as "none." For the sake of simplicity, dates were entered in as simply text inputs, date pickers are typically done through jQuery, so that was left out (and I did not want to make my own).


## For Future Improvements
Since this was a small assignment as an introductory javascript exercise, some features were left out. For future development, I would animate the creation, deletion, and completion of events. In addition, I would do some date validation, and provide a date picker.