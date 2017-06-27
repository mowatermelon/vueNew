//获取主页信息
function getIndexData() {
  /*
  *@parameter newId 新闻编号
  *@parameter name 新闻标题
  *@parameter newTest 新闻内容
  *@parameter visitNum 新闻浏览量
  *@parameter upTime 新闻发布时间
  *@parameter loveNum 喜欢人数
  *@parameter hateNum 讨厌人数
  */
  var dataL =[
  {
    "newId": "ASDSDSDS123101B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-01",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS123102B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-02",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS123103B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-03",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS123104B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-04",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS123105B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-05",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS123106B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-06",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS123107B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-07",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS123108B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-08",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS123109B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-09",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS1231010B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-10",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS1231011B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-11",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS1231012B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-12",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS1231013B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-13",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS1231014B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-14",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS1231015B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-15",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS1231016B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-16",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS1231017B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-17",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS1231018B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-18",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS1231019B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-19",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS1231020B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-20",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS123121B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-21",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS123122B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-22",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS1231023B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-23",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS1231024B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-24",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS1231025B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-25",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS1231026B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-26",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS123127B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-27",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS123128B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-28",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS123129B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-29",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  },
  {
    "newId": "ASDSDSDS123130B",
    "name": "西瓜新闻在线",
    "newTest":"西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线西瓜新闻在线",
    "upTime":"2017-05-30",
    "visitNum":15416,
    "loveNum":5656,
    "hateNum":5665
  }
]
  return dataL;
}


/*获取设置数据*/
function getSettingData() {
  /*
  *@parameter Id 子设置编号
  *@parameter text 子设置内容
  *@parameter icon 子设置图标
  *@parameter color 子标题颜色
  */
  var dataL =[
    {
      "Id": "ASDSDSDS123101B",
      "text": "    西瓜设置01",
      "icon":"glyphicon-user",
      "color":"",
      "url":"../detail/newdetail.html"
    },
    {
      "Id": "ASDSDSDS123102B",
      "text": "    西瓜设置02",
      "icon":"glyphicon-user",
      "color":"",
      "url":"../detail/newdetail.html"
    },
    {
      "Id": "ASDSDSDS123103B",
      "text": "    西瓜设置03",
      "icon":"glyphicon-user",
      "color":"",
      "url":"../detail/newdetail.html"
    },
    {
      "Id": "ASDSDSDS123104B",
      "text": "    西瓜设置04",
      "icon":"glyphicon-user",
      "color":"",
      "url":"../detail/newdetail.html"
    },
    {
      "Id": "ASDSDSDS123105B",
      "text": "    西瓜设置05",
      "icon":"glyphicon-user",
      "color":"",
      "url":"../detail/newdetail.html"
    },
    {
      "Id": "ASDSDSDS123106B",
      "text": "    西瓜设置06",
      "icon":"glyphicon-user",
      "color":"",
      "url":"../detail/newdetail.html"
    },
    {
      "Id": "ASDSDSDS123107B",
      "text": "    西瓜设置07",
      "icon":"glyphicon-user",
      "color":"",
      "url":"../detail/newdetail.html"
    },
  ];
    return dataL;
}
