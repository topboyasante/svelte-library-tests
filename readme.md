# Load Testing with K6

## Convert HAR file to K6 Test File

`npx har-to-k6 test_app.har -o my-k6-script.js`

## Run K6 Script

`k6 run my-k6-script.js`

## Generate HTML Reports

Import :

````js
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";```
At the end of the default function, add:

```js
export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
````
