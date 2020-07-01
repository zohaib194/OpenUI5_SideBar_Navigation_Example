sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("exampleApp.exampleApp.controller.Menu", {
		onInit: function () {
			// Get Path to local resources
			var sRootPath = jQuery.sap.getModulePath("exampleApp.exampleApp");
			// Load local json data for side menu
			var sMenuJSONPath = sRootPath + "/model/mainMenu.json";
			// Bind local json to view model
			var oMenuData = new JSONModel(sMenuJSONPath);
			oMenuData.attachRequestCompleted(function () {
				this.getView().setModel(oMenuData);
			}.bind(this));
		},

		onItemSelect: function (oEvent) {

			var oItem = oEvent.getParameter("item");
			var sKey = oItem.getKey(); // Get selected item on side menu

			this.getOwnerComponent().getRouter().navTo(sKey); // Navigate to selected screen (routes defined in manifest.json file)

		},
	});
});