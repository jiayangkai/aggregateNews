/**
 * Created by 18262 on 2017/9/1.
 */
/**
 * [tools 帮助对象 提供公共方法 ]
 * @type {Object}
 */
const tools = {};
//(function() {
/**
 * 可以补充注释
 * @returns {boolean}
 */
tools.isWeiXin = function () {
    return window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger' ? true : false;
}
/**
 *
 * @param text
 * @param defaultValue
 * @returns {number|*|Number}
 */
tools.toNumber = function (text, defaultValue) {
    return +text || defaultValue || NaN;
}
/**
 *将需要存储的对象存到session中
 * @param key  键
 * @param value  值
 */
tools.setSessionStorage = function (key, value) {
    window.sessionStorage.setItem(key, value);
}
/**
 * 将需要存储的对象存到storage中
 * @param key
 * @param value
 */
tools.setLocalStorage = function (key, value) {
    window.localStorage.setItem(key, value);
}

/**
 * 从session中取出存的值
 * @param key
 */
tools.getSessionStorage = function (key) {
    return window.sessionStorage.getItem(key)
}
/**
 * 从storage中取出存的值
 * @param key
 */
tools.getLocalStorage = function (key) {
    return window.localStorage.getItem(key)
}
/**
 * 将当前键对应的值从session中清除
 * @param key
 */
tools.clearSessionStorage = function (key) {
    window.sessionStorage.removeItem(key);
}
/**
 * 将当前键对应的值从localStorage中清除
 * @param key
 */
tools.clearlocalStorage = function (key) {
    window.localStorage.removeItem(key);
}
/**
 * 从cookie中取出值
 * @param key
 * @returns {null}
 */
tools.getCookie = function (key) {
    var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) return unescape(arr[2]); else return null;
}
/**
 * 将需要的对象存储到cookie中
 * @param key
 * @param value
 */
tools.setCookie = function (key, value) {
    var expdate = new Date();
    expdate.setTime(expdate.getTime() + 30 * 60 * 1000);
    document.cookie = key + "=" + value + ";expires=" + expdate.toGMTString() + ";path=/";
}

/**
 * [isUndefined 是否是未定义的]
 * @param  {Anyone}  obj [要判断的参数]
 * @return {Boolean}     [true: 是undefined]
 */
tools.isUndefined = function (obj) {
    return (typeof (obj) == "undefined");
}

/**
 * [isNull 是否是null]
 * @param  {Anyone}  obj [要判断的参数]
 * @return {Boolean}     [true: 是null]
 */
tools.isNull = function (obj) {
    return (obj === null);
}

/**
 * [isUndefinedOrNull 是否是未定义的或者为空]
 * @param  {Anyone}  obj [要判断的参数]
 * @return {Boolean}     [true: 是undefineded or null]
 */
tools.isUndefinedOrNull = function (obj) {
    // return (tools.isUndefined(obj) || tools.isNull(obj));
    return (obj == null);
}

/**
 * [isString 是否是字符串]
 * @param  {anyone}  str [要判断的参数]
 * @return {Boolean}     [true:是String]
 */
tools.isString = function (str) {
    return (typeof (str) == "string");
}

/**
 * [isRightString 是否是正确的字符串]
 * @param  {anyone}  str [要判断的参数]
 * @return {Boolean}     [true:是字符串]
 */
tools.isRightString = function (str) {
    return (tools.isString(str) && str.length > 0);
};

/**
 * [isRightNumber 是否是正确的数字]
 * @param  {anyone}  num [要判断的参数]
 * @return {Boolean}     [true:是正确Number]
 */
tools.isRightNumber = function (num) {
    return (!tools.isUndefinedOrNull(num) && !isNaN(num));
};

/**
 * [isObject 是不是对象]
 * @param  {anyone}  obj [参数]
 * @return {Boolean}     [true:是对象]
 */
tools.isObject = function (obj) {
    return (typeof (obj) == "object");
};

/**
 * [isArray 是否是数组]
 * @param  {anyone}  arr [要判断的参数]
 * @return {Boolean}     [true:是Array]
 */
tools.isArray = function (arr) {
    return (tools.isObject(arr) && arr instanceof Array);
}

/**
 * [isRightArray 是否是正确的数组]
 * @param  {anyone}  arr [要判断的参数]
 * @return {Boolean}     [true:是正确的Array]
 */
tools.isRightArray = function (arr) {
    return (tools.isArray(arr) && arr.length > 0);
}

tools.isJsonString = function (str) {
    try {
        var obj = JSON.parse(str);
        if (typeof obj == "object" && obj !== null) {
            return true;
        }
    } catch (e) { }
    return false;
}

/**
 * [setNullDefault 将对象中的null空值置为def(私有方法)]
 * @param  {anyone}  arr [要判断的参数]
 * @return {Boolean}     [true:是正确的Array]
 */
tools.setNullDefault = function (obj, def) {
    if (tools.isArray(obj)) {//是数组?
        obj.forEach(function (data, index) {//遍历数组
            for (var key in data) {
                if (tools.isNull(data[key])) {//属性值为空?
                    data[key] = def;
                }
            }
        });

        return obj;
    }

    if (tools.isObject(obj)) {//是普通对象
        for (var key in obj) {
            if (tools.isNull(obj[key])) {//属性值为空?
                obj[key] = def;
            }
        }
    }

    return obj;
};

/**
 * [setNullOrUndefinedDefault 将对象中的null或undefined空值置为def]
 * @param  {anyone}  arr [要判断的参数]
 * @return {Boolean}     [true:是正确的Array]
 */
tools.setNullOrUndefinedDefault = function (obj, def) {
    if (tools.isArray(obj)) {//是数组?
        obj.forEach(function (data, index) {//遍历数组
            for (var key in data) {
                if (tools.isUndefinedOrNull(data[key])) {//属性值为空?
                    data[key] = def;
                }
            }
        });

        return obj;
    }

    if (tools.isObject(obj)) {//是普通对象
        for (var key in obj) {
            if (tools.isUndefinedOrNull(obj[key])) {//属性值为空?
                obj[key] = def;
            }
        }
    }

    return obj;
};

/**
 * [setNullAllDefault 将对象中的null空值(包括字符串)置为def(私有方法)]
 * @param  {anyone}  arr [要判断的参数]
 * @return {Boolean}     [true:是正确的Array]
 */
tools.setNullAllDefault = function (obj, def) {
    if (tools.isArray(obj)) {//是数组?
        obj.forEach(function (data, index) { //遍历数组
            for (var key in data) {
                if (tools.isNull(data[key]) || data[key] == "null") {//属性值为空?
                    data[key] = def;
                }
            }
        });

        return obj;
    }

    if (tools.isObject(obj)) {//是普通对象
        for (var key in obj) {
            if (tools.isNull(obj[key]) || obj[key] == "null") {//属性值为空?
                obj[key] = def;
            }
        }
    }

    return obj;
};

/**
 * [setNullOrUndefinedAllDefault 将对象中的null或undefined空值(包括字符串)置为def]
 * @param  {anyone}  arr [要判断的参数]
 * @return {Boolean}     [true:是正确的Array]
 */
tools.setNullOrUndefinedAllDefault = function (obj, def) {
    if (tools.isArray(obj)) {//是数组?
        obj.forEach(function (data, index) {//遍历数组
            for (var key in data) {
                if (tools.isUndefinedOrNull(data[key]) || data[key] == "null" || data[key] == "undefined") {//属性值为空?
                    data[key] = def;
                }
            }
        });

        return obj;
    }

    if (tools.isObject(obj)) {//是普通对象
        for (var key in obj) {
            if (tools.isUndefinedOrNull(obj[key]) || obj[key] == "null" || data[key] == "undefined") {//属性值为空?
                obj[key] = def;
            }
        }
    }

    return obj;
};

/**
 * [isEmptyObject 是否是空对象]
 * @param  {anyone}  arr [要判断的参数]
 * @return {Boolean}     [true:是空对象]
 */
tools.isEmptyObject = function (obj) {
    if (tools.isObject(obj)) {//是对象?
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {//排除原型链上的属性
                return false;//不是空对象
            }
        }
        return true;//说明是空对象啦
    }

    return false;
};

/**
 * [isEmpty 是否是空(包含undefined, null, 空对象)]
 * @param  {anyone}  obj [要判断的参数]
 * @return {Boolean}     [true:是空]
 */
tools.isEmpty = function (obj) {
    return (tools.isUndefinedOrNull(obj) || tools.isEmptyObject(obj));
};

/**
 * [trim 去除左右空字符]
 * @param  {String} str [替换字符]
 * @return {String|Anyone}     [去除空格后的字符串或者原值]
 */
tools.trim = function (str) {
    if (tools.isRightString(str)) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }

    return str;
};

/**
 * [lTrim 去除左空字符]
 * @param  {String} str [替换字符]
 * @return {String|Anyone}     [去除左空格后的字符串或者原值]
 */
tools.lTrim = function (str) {
    if (tools.isRightString(str)) {
        return str.replace(/(^\s*)/g, "");
    }

    return str;
};

/**
 * [rTrim 去除右空字符]
 * @param  {String} str [替换字符]
 * @return {String|Anyone}     [去除右空格后的字符串或者原值]
 */
tools.rTrim = function (str) {
    if (tools.isRightString(str)) {
        return str.replace(/(\s*$)/g, "");
    }
    return str;
}

tools.isiOS = function () {
    var u = navigator.userAgent, app = navigator.appVersion;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return isiOS;
}

tools.getQueryString = function (key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

tools.encrypt = function (str, pwd) {
    if (pwd == null || pwd.length <= 0) {
        return null;
    }
    var prand = "";
    for (var i = 0; i < pwd.length; i++) {
        prand += pwd.charCodeAt(i).toString();
    }
    var sPos = Math.floor(prand.length / 5);
    var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
    var incr = Math.ceil(pwd.length / 2);
    var modu = Math.pow(2, 31) - 1;
    if (mult < 2) {
        return null;
    }
    var salt = Math.round(Math.random() * 1000000000) % 100000000;
    prand += salt;
    while (prand.length > 10) {
        prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
    }
    prand = (mult * prand + incr) % modu;
    var enc_chr = "";
    var enc_str = "";
    for (var i = 0; i < str.length; i++) {
        enc_chr = parseInt(str.charCodeAt(i) ^ Math.floor((prand / modu) * 255));
        if (enc_chr < 16) {
            enc_str += "0" + enc_chr.toString(16);
        } else enc_str += enc_chr.toString(16);
        prand = (mult * prand + incr) % modu;
    }
    salt = salt.toString(16);
    while (salt.length < 8) salt = "0" + salt;
    enc_str += salt;
    return enc_str;
};
tools.decrypt = function (str, pwd) {
    if (str == null || str.length < 8) {
        return;
    }
    if (pwd == null || pwd.length <= 0) {
        return;
    }
    var prand = "";
    for (var i = 0; i < pwd.length; i++) {
        prand += pwd.charCodeAt(i).toString();
    }
    var sPos = Math.floor(prand.length / 5);
    var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
    var incr = Math.round(pwd.length / 2);
    var modu = Math.pow(2, 31) - 1;
    var salt = parseInt(str.substring(str.length - 8, str.length), 16);
    str = str.substring(0, str.length - 8);
    prand += salt;
    while (prand.length > 10) {
        prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
    }
    prand = (mult * prand + incr) % modu;
    var enc_chr = "";
    var enc_str = "";
    for (var i = 0; i < str.length; i += 2) {
        enc_chr = parseInt(parseInt(str.substring(i, i + 2), 16) ^ Math.floor((prand / modu) * 255));
        enc_str += String.fromCharCode(enc_chr);
        prand = (mult * prand + incr) % modu;
    }
    return enc_str;
};
tools.timeStamp2String = function (time, type) {
    var datetime = new Date();
    if (0 !== time) {
        //datetime.setTime(time);
        datetime = time;
    }
    if (typeof time === 'string') {
        //替换日期中的-为/
        time = time.replace(/-/g, '/');
        datetime = new Date(time);
    }
    if (typeof time === 'number' && 0 !== time) {
        datetime = new Date(time);
    }
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    var day = datetime.getDay();
    //返回周几 周日为0
    if (type === 'datetime') {
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    }
    //年月日时分秒 年以2位 
    if (type === 'datetime2') {
        return year.toString().substr(2, 2) + "" + month + "" + date + "" + hour + "" + minute + "" + second;
    }
    if (type === 'date') {
        return year + "-" + month + "-" + date;
    }
    if (type === 'date2') {
        return year + month + date;
    }
    if (type === 'time') {
        return (hour + ":" + minute + ' ') + ((hour <= 12) ? 'AM' : 'PM');
    }
    if (type === 'time_2') {
        return (hour + ":" + minute + ' ');
    }
    if (type === 'time_3') {
        return (hour + minute + ' ');
    }
    if (type === 'day') {
        return day == 0 ? 7 : day;
    }
    if (type === 'month') {
        return month;
    }
    if (type === 'year') {
        return year;
    }
    if (type === 'month-day') {
        return month + "-" + date;
    }
    if (type === 'birthday') {
        return year + month + date;
    }
};
tools.getNetType = function () {
    let network = window.navigator.userAgent.toLowerCase().match(/ nettype\/([^ ]+)/g);
    if (network && network[0]) {
        network = network[0].split('/')[1];
        return network;
    } else {
        let connection = window.navigator.connection;
        if (connection && connection.effectiveType) {
            return connection.effectiveType;
        } else {
            return null;
        }
    }
}
// 处理请求参数
tools.transform = function(obj, flag = 1) {
    return transform(obj, flag);
    function transform(obj, flag) {
      // 非typeof的对象统一return
      if (obj == null || typeof obj != 'object') {
        return;
      }
      if (
        typeof obj === 'object' &&
        Object.prototype.toString.call(obj) === '[object Array]' &&
        obj.length > 0
      ) {
        return;
      } else {
        let props = Object.keys(obj),
          result = {};
        if (props.length == 0) {
          return;
        }
        for (var index = 0; index < props.length; index++) {
          let prop = props[index];
          let lowercase = transformString(prop);
          result[lowercase] = obj[prop];
          if (typeof result[lowercase] == 'object') {
            result[lowercase] = transform(result[lowercase], 1);
          }
        }
        return result;
      }
  
      function transformString(str) {
        // flag等于1时，将属性名称的下划线转成驼峰命名
        if (flag === 1) {
          return str
            .split('_')
            .map((element, index) => {
              switch (element) {
                case 'id':
                case 'url':
                  return element.toUpperCase();
                  break;
                case 'ios':
                  return 'iOS';
                  break;
                case 'android':
                  return 'Android';
                  break;
                default:
                  if (index === 0) {
                    return element;
                  } else {
                    return element
                      .toLowerCase()
                      .replace(/( |^)[a-z]/g, L => L.toUpperCase());
                  }
                  break;
              }
            })
            .join('');
        } else {
          return str.replace(/([A-Z])/g, '_$1').toLowerCase();
        }
      }
    }
  };
//})();
export default tools
