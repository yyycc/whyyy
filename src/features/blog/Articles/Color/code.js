const toRgb = '';
const toHex = 'function rgb2hex(sRGB) {\n' +
  '    var start = sRGB.slice(0, 4);\n' +
  '    if(start !== \'rgb(\') {\n' +
  '        return sRGB;\n' +
  '    }\n' +
  '    var end = sRGB.slice(sRGB.length -1,sRGB.length);\n' +
  '    if(end !== \')\') {\n' +
  '        return sRGB;\n' +
  '    }\n' +
  '    var left = sRGB.slice(4, sRGB.length -1);\n' +
  '    var arr = left.split(\',\');\n' +
  '    if(arr.length !== 3) {\n' +
  '        return sRGB;\n' +
  '    }\n' +
  '    var sexs = [];\n' +
  '    for(let i = 0; i < arr.length;i++) {\n' +
  '        if(arr[i].slice(arr[i].length -1,arr[i].length) == \' \') {\n' +
  '            return sRGB;\n' +
  '        } else if(arr[i] >=0 && arr[i] < 256) {\n' +
  '            var sex = Number(arr[i]).toString(16);\n' +
  '            if(Number(arr[i]) < 16) {\n' +
  '                sex = \'0\' + sex;\n' +
  '            }\n' +
  '            sexs.push(sex);\n' +
  '        } else {\n' +
  '            return sRGB;\n' +
  '        }\n' +
  '    }\n' +
  '    return \'#\' + sexs.join(\'\');\n' +
  '}';

const code = {
  toHex,
  toRgb,
};

export default code;
