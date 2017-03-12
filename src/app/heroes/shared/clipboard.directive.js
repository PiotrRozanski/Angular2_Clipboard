"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ClipboardDirective = (function () {
    // I initialize the clipboard directive.
    function ClipboardDirective(clipboardService) {
        this.clipboardService = clipboardService;
        this.copyEvent = new core_1.EventEmitter();
        this.errorEvent = new core_1.EventEmitter();
        this.value = "";
    }
    // ---
    // PUBLIC METODS.
    // ---
    // I copy the value-input to the Clipboard. Emits success or error event.
    ClipboardDirective.prototype.copyToClipboard = function () {
        var _this = this;
        this.clipboardService
            .copy(this.value)
            .then(function (value) {
            _this.copyEvent.emit(value);
        })
            .catch(function (error) {
            _this.errorEvent.emit(error);
        });
    };
    ClipboardDirective = __decorate([
        core_1.Directive({
            selector: "[clipboard]",
            inputs: ["value: clipboard"],
            outputs: [
                "copyEvent: clipboardCopy",
                "errorEvent: clipboardError"
            ],
            host: {
                "(click)": "copyToClipboard()"
            }
        })
    ], ClipboardDirective);
    return ClipboardDirective;
}());
exports.ClipboardDirective = ClipboardDirective;
