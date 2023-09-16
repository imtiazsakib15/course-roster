# Add at least 3 Project features

There are many features in this project. From these, I mentioned 3 key features-

- The main feature of the project is to select some courses. Any user can select any course at once. When trying to select multiple times, it shows a toast with a message “Already Selected!!!”.

- Another feature of the project is to show the list of all selected courses with total credit hour and total price.

- The last feature is, anyone can select maximum 20 credit hour courses. When trying to select more than 20 credit hour courses, it shows a toast with a message “You don’t have enough credit hour remaining!!!”.
  <br>
  <br>

# Discuss how you managed the state in your assignment project.

I used the useState hook 3 times for managing state. 2 of them are in the 'App.jsx' file and the other is in the 'Cards.jsx' file.

Firstly, I used the useState hook in the 'Cards.jsx' file for managing all courses. <br>
`const [courses, setCourses] = useState([]);` <br>
Here, “courses” is a variable which holds an array of all courses. And the “setCourses” function is used to set the value of “courses”. Initially I set the value of “courses” is []. Then fetch data from a json file. And then I set those data in “courses” using the “setCourses” function.

Next, I used the useState hook in the 'App.jsx' file for managing selected courses. <br>
`const [selectedCourses, setSelectedCourses] = useState([]);` <br>
Here, “selectedCourses” is a variable which holds an array of all selected courses. And the “setSelectedCourses” function is used to set the value of “selectedCourses”. Initially I set the value of “selectedCourses” is []. When a user selects a course, then “setSelectedCourses” adds that course to the “selectedCourses”.

Lastly, I used another useState hook in the 'App.jsx' file for managing the remaining credit hour of a user. <br>
`const [creditHourRemaining, setCreditHourRemaining] = useState(20);` <br>
Here, “creditHourRemaining” is a variable which holds the remaining credit hour. And the “setCreditHourRemaining” function is used to set the value of “creditHourRemaining”. Initially I set the value of “creditHourRemaining” is 20. When a user is trying to select a course, then check if the user has enough credit hour remaining. If the user has enough credit hour remaining, the state updates the value otherwise shows an error toast.
