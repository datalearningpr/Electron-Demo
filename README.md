# Electron-Demo

Simple Electron desktop application.

* Vue.js is used for front-end framework.
* Reads text data from sqlite database and shows in the application.
* User can write query to choose the text list they want to see.
* Support keyword highlight in the text display.
* Support keyword search in the whole page.
* User can check the text if he/she likes it and updates the label in the database.

This can be an easy application to pre process the text web-scrapped from internet to add label information, then the data can be used for machine learning etc for the following steps.

Install sqlite in electron is not easy, try use the following command:
```
npm install --global --production windows-build-tools
npm install sqlite3 --build-from-source --runtime=electron --target=2.0.0 --dist-url=https://atom.io/download/electron --save
```

## License

GPL

## Acknowledgments

All the useful online resources regarding this topic
