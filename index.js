'use strict';

var Dyer = require("dyer");
var Event = require("emitter");

function Inspector(opt) {
    var doc = this.doc = opt.doc || document;
    var every = opt.every;
    var self = this;

    var dyer = this.dyer = new Dyer({
        doc: doc,
        active: true
    });

    this._active = opt.active || false;
}

Event(Inspector.prototype);

Inspector.prototype.setActive = function (active) {
    this._active = active
}

Inspector.prototype.toggleActive = function () {
    this._active = !this._active;
    if (!this._active) {
        this.dyer.clear();
    }
}

module.exports = Inspector;