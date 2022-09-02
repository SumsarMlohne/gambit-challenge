import axios from "axios";
var Buffer = require("buffer/").Buffer;

type Data = {
  value: number;
  id: number;
};
type ReturnData = {
  value: number;
  id: string;
};
//get data from backend data.txt file
//hardcoded path to backend for now
export const getData = () => {
  const promise = axios
    .get("/data")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("Error at getData");
      console.error(err);
    });
  const getDataPromise = promise.then((res: any) => res.data);
  return getDataPromise;
};

//parse the text and put into array of objects for later user
export const txtDataToObjArray = (rawData: string) => {
  let tempArr: Array<any> = rawData.split(" ");
  tempArr = rawData.split("\n");
  for (let i = 1; i < tempArr.length; i++) {
    tempArr[i] = tempArr[i].substring(tempArr[i].indexOf(":") + 1);
  }
  tempArr = tempArr.map((str, idx) => ({ id: idx, value: str }));
  return tempArr;
};

//loop through given data array and place conversion in array to return
export const parseData = (data: Data[]) => {
  let returnArr: ReturnData[] = [];
  let res;
  for (let i = 1; i < data.length; i++) {
    switch (i) {
      case 1:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 3:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 5:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 7:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 9:
        res = combineTwo(data[i].value, data[i + 1].value, "long");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 11:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 13:
        res = combineTwo(data[i].value, data[i + 1].value, "long");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 15:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 17:
        res = combineTwo(data[i].value, data[i + 1].value, "long");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 19:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 21:
        res = combineTwo(data[i].value, data[i + 1].value, "long");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 23:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 25:
        res = combineTwo(data[i].value, data[i + 1].value, "long");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 27:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 29:
        res = combineTwo(data[i].value, data[i + 1].value, "");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 31:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 33:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 35:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 37:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 39:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 41:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 43:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 45:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 47:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 49:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 51:
        res = combineOne(data[i].value, "");
        returnArr.push({ id: `${i}`, value: res });
        break;
      case 53:
        res = combineTwo(data[i].value, data[i + 2].value, "");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 56:
        res = combineOne(data[i].value, "");
        returnArr.push({ id: `${i}`, value: res });
        break;
      case 59:
        res = combineOne(data[i].value, "");
        returnArr.push({ id: `${i}`, value: res });
        break;
      case 60:
        res = combineOne(data[i].value, "");
        returnArr.push({ id: `${i}`, value: res });
        break;
      case 61:
        res = combineOne(data[i].value, "");
        returnArr.push({ id: `${i}`, value: res });
        break;
      case 62:
        res = combineOne(data[i].value, "");
        returnArr.push({ id: `${i}`, value: res });
        break;
      case 72:
        res = combineOne(data[i].value, "");
        returnArr.push({ id: `${i}`, value: res });
        break;
      case 77:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 79:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 81:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 83:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 85:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 87:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 89:
        res = combineTwo(data[i].value, data[i + 1].value, "long");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 92:
        res = combineOne(data[i].value, "92");
        returnArr.push({ id: `${i}`, value: res });
        break;
      case 93:
        res = combineOne(data[i].value, "");
        returnArr.push({ id: `${i}`, value: res });
        break;
      case 94:
        res = combineOne(data[i].value, "");
        returnArr.push({ id: `${i}`, value: res });
        break;
      case 96:
        res = combineOne(data[i].value, "");
        returnArr.push({ id: `${i}`, value: res });
        break;
      case 97:
        res = combineTwo(data[i].value, data[i + 1].value, "float");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
      case 99:
        res = combineTwo(data[i].value, data[i + 1].value, "long");
        returnArr.push({ id: `${i}-${i + 1}`, value: res });
        break;
    }
  }
  return returnArr;
};

//helper functions
//converts to hex strings then creates buffer. return value based on type.
const combineTwo = (num1: number, num2: number, type: string) => {
  if (parseInt(num1.toString()) === 0 && parseInt(num2.toString()) === 0) {
    return 0;
  } else {
    //to hex strings
    let str1 = parseInt(num2.toString(), 10).toString(16);
    let str2 = parseInt(num1.toString(), 10).toString(16);

    //combine hex strings
    let str = str1 + str2;
    let buffer = Buffer.from(str, "hex");
    let res;
    if (type === "long") {
      res = parseInt(str) || buffer?.readInt8(3);
    } else if (type === "float") {
      res = buffer.readFloatBE(0);
    } else {
      res = buffer.readInt16LE(0);
    }
    return res;
  }
};
//convert to binary string, return integer of that, unless type = 92, then we only want the low byte.
const combineOne = (num: number, type: String) => {
  if (parseInt(num.toString()) === 0) {
    return 0;
  } else {
    let toBinary = numToBin(num);
    let res;
    if (type === "92") {
      toBinary = toBinary.toString().slice(-6);
      res = parseInt(toBinary, 2);
    } else {
      res = parseInt(toBinary, 2);
    }
    return res;
  }
};

//converts a number into a binary string, >>> 0 shifts incase of negative value
const numToBin = (num: number) => {
  return (num >>> 0).toString(2);
};
