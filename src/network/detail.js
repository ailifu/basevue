import { request } from "./api";

export function getgooddetail(params) {
  return request({
    url: "/detail",
    ...params
  });
}
export function getrecommend() {
  return request({
    url: "/recommend"
  });
}


export class Gooddetailnote {
  constructor(columns, itemInfo, services) {
    this.columns = columns;
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.discountBgColor = itemInfo.discountBgColor;
    this.discountDesc = itemInfo.discountDesc;
    this.services = services;
  }
}
export class GoodShopNote {
  constructor(shopInfo) { 
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.shopLogo = shopInfo.shopLogo;
    this.allGoodsUrl = shopInfo.allGoodsUrl;
 
    
  }
}

export class GoodDetaillist {
  constructor(info,rule,detailInfo) { 
    this.set = info.set;
    this.tables = rule.tables;
    this.desc = detailInfo.desc;
    this.key=detailInfo.detailImage[0].key
    this.list=detailInfo.detailImage[0].list
  }
}

export class GoodCommentlist {
  constructor(list) { 
    
    this.content = list.content;
    this.tables = list.tables;
    this.user = list.user;
    this.explain = list.explain;
    this.style = list.style;
    this.created = list.created;
  }
}

 
