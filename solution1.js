/**
 * Created six individual "item" objects and created two "items" arrays with three in each array.
 * Few item objects have single or multiple keys in options array and few doesn't have options array.
 */

// Item object with keys name, v and options
const item1 = {
  name: "item one",
  v: 24,
  options: [
    {
      key: "a",
    },
  ],
};

const item2 = {
  name: "item two",
  v: 20,
  options: [
    {
      key: "a",
    },
    {
      key: "b",
    },
  ],
};

const item3 = {
  name: "item three",
  v: 28,
};

const item4 = {
  name: "item four",
  v: 25,
  options: [
    {
      key: "b",
    },
  ],
};

const item5 = {
  name: "item five",
  v: 70,
  options: [
    {
      key: "c",
    },
    {
      key: "b",
    },
  ],
};

const item6 = {
  name: "item six",
  v: 29,
};

// Items arrays with item objects as elements
const items1 = [item1, item2, item3];
const items2 = [item4, item5, item6];

//  The select array that we need to compare with the item object options array
const select = ["a"];

// The history array with the two items arrays as elements.

const history = [items1, items2]; // Sample history array : [[item1, item2, item3], [item4, item5, item6]]

// Method to get the array of item names that matches with the type mentioned in select array
const getNameOfItems = (historyArray, selectArray) => {
  return []
    .concat(...historyArray) // converting nested array into single dimension array
    .filter(
      (item) =>
        item.options &&
        item.options.filter((option) => selectArray.indexOf(option.key) > -1)
          .length > 0
    ) // Filtering for the option keys that matched with select array elements
    .sort((item1, item2) => item2.v - item1.v) // sorting in descending order of item value
    .map((item) => item.name); // Retreiving item name
};

const itemNames = getNameOfItems(history, select);

console.log(itemNames); // Sample Output : ['item five', 'item two']
