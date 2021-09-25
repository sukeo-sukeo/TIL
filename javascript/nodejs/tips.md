# sharp metadata取得
```js
const sharpImg = sharp(imgPath);
const metaData = await sharpImg.metadata();
const imgWidth = metaData.width;
console.log(imgWidth);
console.log(metaData);
```
log↓
```
750
{
  format: 'jpeg',
  width: 750,
  height: 1000,
  space: 'srgb',
  channels: 3,
  depth: 'uchar',
  density: 72,
  chromaSubsampling: '4:4:4',
  isProgressive: false,
  hasProfile: false,
  hasAlpha: false,
  orientation: 1,
  exif: <Buffer 45 78 69 66 00 00 4d 4d 00 2a 00 00 00 08 00 0c 01 0f 00 02 00 00 00 06 00 00 00 9e 01 10 00 02 00 00 00 09 00 00 00 a4 01 12 00 03 00 00 00 01 00 01 ... 798 more bytes>,
  iptc: <Buffer 50 68 6f 74 6f 73 68 6f 70 20 33 2e 30 00 38 42 49 4d 04 04 00 00 00 00 00 3f 1c 01 5a 00 03 1b 25 47 1c 02 00 00 02 00 02 1c 02 3f 00 06 31 39 34 32 ... 68 more bytes>
}
```