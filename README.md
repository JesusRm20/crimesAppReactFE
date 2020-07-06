# crimesAppReactFE

The project consists of a web app that uses the public available police API to retrieve info about crimes that happened in a specific date and in a specific location. This data is then save in a sqlite database instance and manipulated with the API built for this project.

Deployed at:

<a href="http://52.202.195.198:3000/login" >ReactApp</a>

## Functionality:

The app consists of 5 different forms. Each of which is in charge of performing a specific task.

#### Log In Form:

This is the firs form that loads when the someone access to my app through a web browser.

![](https://github.com/JesusRm20/crimesAppReactFE/blob/master/images/LogInForm.png)

Here the users have to authenticate themselves in order to gain access to the rest of the app. In case that they do not have a user account they have the option to create one just by going to the sign up page.

#### Sign Up Form:

When a user wants to create an account they just need to go to the sign up page fill in the details asked for in the form and click the sign up button.

![](https://github.com/JesusRm20/crimesAppReactFE/blob/master/images/SignUpForm.png)

#### List Crimes Form:

This form will show a list of crimes to the user in case that there are some loaded to the database, once it logs in. In case that there are no crimes loaded in the database there is an option where a user can go to load crimes. In this form we have a search bar that helps us to search for crimes of a specific date. Just as a note all dates in the app are worked in the format of YYYY-MM. Here we also have an option to view the details of a specific crime. If we press the details button the server will take us to the form where the details of that crime are shown.

![](https://github.com/JesusRm20/crimesAppReactFE/blob/master/images/ListCrimesForm.png)

#### Load Crimes Form:

This form allows the user to load crimes that happened in a certain date to the database, as long as they are not already store in the database. If the user inputs a date that already exists in the database the form will let the user know that those crimes are already loaded and will let them try another date.

![](https://github.com/JesusRm20/crimesAppReactFE/blob/master/images/LoadCrimesForm.png)

#### Edit Crime Form:

In this form the user will be able to visualize the details of a specific crime as well as the outcomes that this crime has had. In this form the user has an option to edit the crime's detail and even delete outcomes for this crime. Once the user presses the edit button all the fields that can be modified will be enable letting the user change their values. When the user has finished changing everything they only have to press the save button and the changes will be applied in the database. And in case that the user doesn't what to modify anything there's a cancel button disable the editing mode.

![](https://github.com/JesusRm20/crimesAppReactFE/blob/master/images/EditCrimeForm.png)