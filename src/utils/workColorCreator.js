const colorList = [
  "184d47",
  "96bb7c",
  "d6efc7",
  "eebb4d",
  "e9896a",
  "897853",
  "897853",
  "ff7171",
  "bbbbbb",
  "b8b5ff",
  "93329e",
  "beca5c",
  "8ac4d0",
  "e3d18a",
  "383e56",
  "5b6d5b",
  "484018",
  "ccf2f4",
  "f8a1d1",
  "b34180",
  "c7ffd8",
  "b67171",
  "5b5b5b",
  "845ec2",
  "eb5e0b",
  "252525",
  "e27802",
  "ff577f",
  "00917c",
];
const workColorCreator = () => {
  return `#${colorList[Math.floor(Math.random() * colorList.length + 1)]}`;
};

export default workColorCreator;
