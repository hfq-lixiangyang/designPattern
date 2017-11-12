"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Handle = (function () {
    function Handle(name) {
        this.name = name;
    }
    Handle.prototype.setSuccesor = function (succesor) {
        this.succesor = succesor;
    };
    return Handle;
}());
exports.Handle = Handle;
var Member = (function () {
    function Member(name, day) {
        this.name = name;
        this.day = day;
    }
    return Member;
}());
exports.Member = Member;
var GroupLeader = (function (_super) {
    __extends(GroupLeader, _super);
    function GroupLeader(name) {
        return _super.call(this, name) || this;
    }
    GroupLeader.prototype.handleRequest = function (request) {
        if (request.day <= 7 && request.day >= 5)
            console.log("GrounLeader " + this.name + " approved staff member " + request.name + " " + request.day + " days holiday");
        else
            this.succesor.handleRequest(request);
    };
    return GroupLeader;
}(Handle));
exports.GroupLeader = GroupLeader;
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.handleRequest = function (request) {
        if (request.day < 5 && request.day >= 1)
            console.log("Manager " + this.name + " approved staff member " + request.name + " " + request.day + " days holiday");
        else
            this.succesor.handleRequest(request);
    };
    return Manager;
}(Handle));
exports.Manager = Manager;
var HRDerpatment = (function (_super) {
    __extends(HRDerpatment, _super);
    function HRDerpatment(name) {
        return _super.call(this, name) || this;
    }
    HRDerpatment.prototype.handleRequest = function (request) {
        if (request.day < 1)
            console.log("HRDerpatment " + this.name + " approved staff member " + request.name + " " + request.day + " days holiday");
        else
            this.succesor.handleRequest(request);
    };
    return HRDerpatment;
}(Handle));
exports.HRDerpatment = HRDerpatment;
var sta1 = new Member('lly', 0.5);
var leader = new GroupLeader('leader');
var manager = new Manager('manager');
var hr = new HRDerpatment('hr');
leader.setSuccesor(manager);
manager.setSuccesor(hr);
leader.handleRequest(sta1);
