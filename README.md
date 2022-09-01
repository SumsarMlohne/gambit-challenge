# gambit-challenge
PWA app that displays TUF-2000M data as it is and converted to readable formats.
https://re-gambit.herokuapp.com/

# Important files
data.txt
server.js
App.tsx
dataActions.tsx
parsedData.tsx

# Solution
Based on the documentation and researching the topic online i came to the conclusion that the numbers given were 16bit integers.
These then needed to be converted to their respective types as per the documentation.
Given that the data is a text file i first needed to convert the string given to a more usable format.
I created a function (txtDataToObjArray in dataActions.tsx) that took this string and turned it into an array of objects, with an id and a value. Ex. {id: 1, value: 2443}
Then this array gets passed to a function that parses and converts the data with helper functions (parseData)
I loop through my array of objects and check for each case, if its a pair i call combineTwo else i call combineOne

combineTwo()
This function takes a pair of values, converts them to hex strings, concatenates them, creates a buffer with that string then depending 
on type(float, long or other) it returns the correct conversion.
For long I either return the parsed integer of the combined hex string or the last value from the 8bit integer buffer.
For float i return the first float value from the buffer
Otherwise i return the first 16bit integer from the buffer

combineOne()
In combineOne i turn the given number into a binary s tring and then parse that to an integer.
If its not case 92 where only the low bit is of interest, there i returned the parsed value of the low bit.

This data is then displayed either in its original state or as the converted values.

# Comments/notes
I could not get all conversions working, I could not figure out what was going wrong in some cases as they seemed identical to others that worked.
But super interesting challenge, it was very difficult at first trying to convert them to the right values.
The commits are a mess because so am I and Heroku is evil.


Peace out, Rasmus.
