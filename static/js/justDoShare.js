/**
 * author : Fengzi
 * blog : http://www.fengziliu.com
 */
justDoShare = {
	api : {},
	detail : {
		url : "",
		title : "",
		summary : "",
	    text : "",
	    pic : ""
	},
	setApi : function(json){
		this.api = json;
	},
	setDetail : function(json){
		this.detail = json;
	},
	doShare : function(type){
		if(!type) return false;
		var api = '';
		var url = this.isString(this.detail.url) ? this.detail.url : location.href;
		var tit = this.isString(this.detail.title) ? this.detail.title : document.title;
		var sum = this.isString(this.detail.summary) ? this.detail.summary : document.getElementsByName("description")[0].content;
		var pic = this.isString(this.detail.pic) ? this.detail.pic : "";
		var txt = this.isString(this.detail.text) ? this.detail.text : "";
		api = this.api[type].apiurl;
		if(api.indexOf("?") < 0) api += "?";
		else if(api.slice(api.length - 1, api.length) != "&") api += "&";
		api = api + (this.isString(this.api[type].url) ? this.api[type].url + "=" + url : "") + (this.isString(this.api[type].title) ? "&" + this.api[type].title + "=" + tit : "") + (this.isString(this.api[type].summary) ? "&" + this.api[type].summary + "=" + sum : "") + (this.isString(this.api[type].pic) ? "&" + this.api[type].pic + "=" + pic : "") + (this.isString(this.api[type].text) ? "&" + this.api[type].text + "=" + txt : "");
		api = encodeURI(api);
		window.open(api);
	},
	isString : function(str){
		if(typeof str == "string") return true;
		else return false;
	}
}