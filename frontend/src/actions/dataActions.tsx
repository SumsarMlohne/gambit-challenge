import axios, { AxiosResponse } from "axios";
import Long from "long";
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
  for (let i = 0; i < data.length; i++) {
    if (i === 1) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 3) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 5) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 7) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 9) {
      let res = combineTwo(data[i].value, data[i + 1].value, "long");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 11) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 13) {
      let res = combineTwo(data[i].value, data[i + 1].value, "long");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 15) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 17) {
      let res = combineTwo(data[i].value, data[i + 1].value, "long");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 19) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 21) {
      let res = combineTwo(data[i].value, data[i + 1].value, "long");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 23) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 25) {
      let res = combineTwo(data[i].value, data[i + 1].value, "long");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 27) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 29) {
      let res = combineTwo(data[i].value, data[i + 1].value, "long");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 31) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 33) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 35) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 37) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 39) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 41) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 43) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 45) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 47) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 49) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 51) {
      let res = combineOne(data[i].value, "");

      returnArr.push({ id: `${i}`, value: res });
    } else if (i === 53) {
      let res = combineTwo(data[i].value, data[i + 2].value, "");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 56) {
      let res = combineOne(data[i].value, "");

      returnArr.push({ id: `${i}`, value: res });
    } else if (i === 59) {
      let res = combineOne(data[i].value, "");

      returnArr.push({ id: `${i}`, value: res });
    } else if (i === 60) {
      let res = combineOne(data[i].value, "");

      returnArr.push({ id: `${i}`, value: res });
    } else if (i === 61) {
      let res = combineOne(data[i].value, "");

      returnArr.push({ id: `${i}`, value: res });
    } else if (i === 62) {
      let res = combineOne(data[i].value, "");

      returnArr.push({ id: `${i}`, value: res });
    } else if (i === 72) {
      let res = combineOne(data[i].value, "");

      returnArr.push({ id: `${i}`, value: res });
    } else if (i === 77) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 79) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 81) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 83) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 85) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 87) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");

      returnArr.push({ id: `${i}-${i + 1}`, value: res });
    } else if (i === 89) {
      let res = combineTwo(data[i].value, data[i + 1].value, "long");

      returnArr.push({id: `${i}-${i+1}`, value: res});
    }  else if (i === 92) {
      let res = combineOne(data[i].value, "92");

      returnArr.push({ id: `${i}`, value: res });
    } else if (i === 93) {
      let res = combineOne(data[i].value, "");

      returnArr.push({ id: `${i}`, value: res });
    } else if (i === 94) {
      let res = combineOne(data[i].value, "");

      returnArr.push({ id: `${i}`, value: res });
    } else if (i === 96) {
      let res = combineOne(data[i].value, "");

      returnArr.push({ id: `${i}`, value: res });
    } else if (i === 97) {
      let res = combineTwo(data[i].value, data[i + 1].value, "float");
      
      returnArr.push({id: `${i}-${i+1}`, value: res});
    } else if (i === 99) {
      let res = combineTwo(data[i].value, data[i + 1].value, "long");
      
      returnArr.push({id: `${i}-${i+1}`, value: res});
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
