## MODERN WEB DEVELOPMENT

front End : client side of the web app:what your user can see and interact with
Back End : server scripting of the web app:database infrastructure,server script
Middleware service : APIs application programming interface : system that allows two or more software to communicate with each other
## Data flow
1. Static data : data resides within the project structure of web application
2. dynamic data : database within the connected server / 2. other server that are not part of the current web app (API service)
Front End(request for data) -> directly(frameworks(Django,flask))or Middleware service (API) <- Backend (respond back to F .F with data request)
### coding languages
Front End - a.HTML-Hyper text markup language(language for web)-structure of a web appkication
b.CSS -cascading stylsheet (language we use to style HTML structure-define the web layouts for our webapp)
c.JS- add interactivity/dynamism to a website-DOM-document object

Back End - a .python -server scripting language-execute operation from backend 

### framework - Backend

Django - python based framework

### version control
- reference to how we store and manage our source code projects
- git - software that handles version control
- github.com -platform that offer GUI for git operation
- gitlab.com -enterprise level
- bitbucket.org -attlassian

### Terminal
- this is what we use to communicate to our computers , git operations
- git bash -windows
- mac -search the application 'terminal ' 

- pwd : print working directory
- ls :list directory / files and other content within the printed directory
- mkdir : make directory : creating folders
- cd :change directory - navigate  -> navigate  inside and outside of folders
- cd .. navigate outside
- touch : make a new file

### how to write HTML

- we create elements
- start tag : content : end tag start tag content end tag
- enclosing tag - some elements can be written < elementName />

### HTML Elements
- HTML + CSS - Cascading stylesheet
- Git operations
### Element types
- Inline elements - elements will only occupy as much width space as necessary
- Block elements - elements will occupy the entire width of the section
### Attributes
- More info/ Meta data about an element

- styling resource , identification resource , measurements
file resource - img, video
### CSS
- styling resource - for our HTML Elements
- CSS Grid/ Css Flexbox - for our layout and structuring webpage
### Css Styling

- Decide on the type of css to use a. inline css : usage of the style(applicable to all html elements) attribute directly on the html element to effect a desired styling b. internal css : usage of the style element within the head element to write css syntax inside the html document c. external css : writing css in a css file and linking that css file to a html page using the link element
### Css syntax

selector { styling_property : value_property }

## Selectors

- element tagname : style all elements in that html document that use the same name
- id :: : identification : styling will only be applied to the element indicated with the selected ID. - id attribute #idname { styling_property : value_property }
- class : bundling up of styling : styling will be applied to all elements bearing the same class name - class attribute .classname { styling_property : value_property }
### GIT COMMANDS

## configuring terminals to work with git only use this command once

- git config --global user.name "Yourgithubusername"
- git config --global user.email "Yourgithubemailaddress"
When a project is new , these steps are only done once at the beginning of the git process for the project
- git init : initializes an empty git folder for version management for your project
- git remote add origin repository_link : connects the local git folder to the github platform repository
updates and when project is new after achieving first two steps
- git status - checks the files that are ready to be saved to github red :not ready , green: ready
- git add . - adds the files to git for tracking
- git commit -m "commit message" - special message tagged to every version update
- git push -u origin master - command that will push the work from the local git folder to the repository on github.

### CSS layout
- CSS "position ,float ,properties
- html tables
-  CSS Grid

                                                  navbar                                                            
side menu                                       main  content       
### HTML and CSS
- how to write JavaScript
  