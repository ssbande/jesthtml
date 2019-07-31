import React from 'react';
import { renderToStaticMarkup as renders } from 'react-dom/server';
import App from './app';
import { readConfig } from './utils';
<<<<<<< HEAD
=======

//to be removed when publishing
import testResults from './testdata/testResult';

if (process.env.NODE_ENV === 'development') {
	console.log("starting the jest reporter ... ");
	var config = readConfig();
	console.log("dest: ", config);

	render(<App testResult={testResults} />, document.querySelector('#root'))
}
>>>>>>> 9c7fda47290a8d4bc26c48d48b8b67ab4a73c90a

module.exports = (testResult) => {
	console.log("starting the jest reporter ... ");
	var config = readConfig();
	console.log("dest: ", config.destination);

	// fs.writeFile('./testResult.json', JSON.stringify(testResult));

	const x = renders(<App />)
	console.log('the html in string: ', x);
	return testResult;
};