/**
 * 换卡二级穿透详情
 * @version  v1.0      
 * @createTime: 2016-04-20         
 * @createAuthor liyd             
 * @updateHistory 
 * 
 * @note 列表页:updateCard   
 */
define(function(require) {
	//引用样式
	var app = require("app");
	var angular = require("angular");
	var upload = require("uploadService");
	//模块依赖
	app.ngAMDCtrlRegister.controller("updateCard", [
	       "$scope", //必须引用
	       "appConstant", 
	       "ajaxService", 
	       "register", 
	       "uploadService", 
	       "$rootScope",
	function($scope, 
			appConstant, 
			ajaxService, 
			register, 
			uploadService, 
			$rootScope) {
	    //初始化查询参数
		var tabData = $rootScope.TabsData;
		var data = angular.copy(tabData);
		$scope.shop = data;
		$scope.from = data.from;
		var param = {};
		for (var x in data) {
			param[x] = data[x];
		}
		param["name"] = "getUpdateCards";
		param["pageNo"] = "1";
		param["pageCount"] = appConstant.pageSet.numPerPage;
		param["otherShop"] = data.isOtherShop;
		//取sessionid
		var sessionId = $rootScope.sessionId;

		$scope.conditions = {
			ajaxUrl: 'reportcenter/compDetailed/list.do',//请求URL
			request: param,//筛选条件
			filter: [{
				type: 'normal',
				field: '终端',
				requestFiled: 'terminalId',
				value: [],
				ajaxUrl: 'reportcenter/terminal/list.do',
				request: param
			}]
		};
		//表格配置项
		$scope.pageSet = {
			//引用分页控件
			title:'换卡',
			currentPage: appConstant.pageSet.currentPage,//显示当前
			maxSize: appConstant.pageSet.maxSize,//可显示最大页码
			numPerPage: appConstant.pageSet.numPerPage,//每页条数
			table: [{//表格字段
				field: 'ts_code',
				desc: '流水号'
			},
			{
				field: 'member_name',
				desc: '姓名'
			},
			{
				field: 'old_card_number',
				desc: '老卡卡号'
			},
			{
				field: 'new_card_number',
				desc: '新卡卡号'
			},
			{
				field: 'typename',
				desc: '新卡卡型'
			},
			{
				field: 'open_shop_name',
				desc: '新卡开卡门店'
			},
			{
				field: 'opname',
				desc: '操作类型'
			},
			{
				field: 'createTime',
				desc: '操作时间'
			},
			{
				field: 'terminal_code',
				desc: '终端号'
			},
			{
				field: 'operation_name',
				desc: '操作人'
			},
			{
				field: 'xf_shop_name',
				desc: '交易门店'
			}]
		};

	}]);
});