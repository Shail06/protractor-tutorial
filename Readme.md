## Protractor Tutorial
---
Aim: To create test framwork using Protractor tool 
### Steps to Initialize the project

**Step-1**: Create project directory & Initialize as Node Project
```
> mkdir protractor-tutorial

> npm init  // This creates package.json file

> npm install protractor // This installs protractor for this project & gets all dependencies
```

**Step-2**: Get the Selenium Server running through `webdriver-manager` which is provided with protractor

```
> webdriver-manager update
> webdriver-manager start  // starts the Selenium server
```
Note: If first command fails for geckodriver, inside `package.json`, add following to the `"scripts" ` :
```
"webdriver-update": "webdriver-manager update --gecko false"
```

**Step-3**: Now follow the tutorial at the link:

https://github.com/angular/protractor/blob/master/docs/tutorial.md