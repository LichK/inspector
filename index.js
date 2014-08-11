'use strict';

var Event = require("emitter");

function Inspector(opt) {
    var doc = this.doc = opt.doc || document;
    var every = opt.every;
    var self = this;

    this._active = opt.active || false;
}

Event(Inspector.prototype);

Inspector.prototype.setActive = function (active) {
    this._active = active
}

Inspector.prototype.toggleActive = function () {
    this._active = !this._active;
}

module.exports = Inspector;