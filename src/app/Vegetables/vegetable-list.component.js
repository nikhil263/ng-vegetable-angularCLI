"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var vegetable_service_1 = require('./vegetable.service');
var VegetablelistComponent = (function () {
    function VegetablelistComponent(_vegetableService) {
        this._vegetableService = _vegetableService;
        this.pageTitle = 'Vegetables';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    VegetablelistComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    VegetablelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._vegetableService.getVegetables()
            .subscribe(function (v) { return _this.vegetables = v; }, function (error) { return _this.errorMessage = error; });
    };
    VegetablelistComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Vegetable star clicks!: ' + message;
    };
    VegetablelistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'vegetable-list.component.html',
            styleUrls: ['vegetable-list.component.css']
        }), 
        __metadata('design:paramtypes', [vegetable_service_1.VegetableService])
    ], VegetablelistComponent);
    return VegetablelistComponent;
}());
exports.VegetablelistComponent = VegetablelistComponent;
//# sourceMappingURL=vegetable-list.component.js.map