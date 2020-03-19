function GodMan(name) {
    return new _GodMan(name);
}

function _GodMan(name) {
    this.tasks = [];
    var self = this;
    var fn = (function(n) {
        var name = n;
        return function() {
            console.log(`I am ${name}`);
            self.next();
        };
    })(name);
    this.tasks.push(fn);
    setTimeout(function() {
        self.next();
    }, 0);
}

_GodMan.prototype.rest = function(time) {
    var self = this;
    var fn = (function() {
        return function() {
            setTimeout(() => {
                console.log(`Start learning after ${time} seconds`);
                self.next();
            }, time * 1000);
        };
    })(time);
    this.tasks.push(fn);
    return this;
};
_GodMan.prototype.learn = function(subject) {
    var self = this;
    var fn = (function(n) {
        return function() {
            setTimeout(() => {
                console.log(`Learning ${subject}`);
                self.next();
            }, 0);
        };
    })(subject);
    this.tasks.push(fn);
    return this;
};
_GodMan.prototype.restFirst = function(time) {
    var self = this;
    var fn = (function() {
        return function() {
            setTimeout(() => {
                console.log(`Start learning after ${time} seconds`);
                self.next();
            }, time * 1000);
        };
    })(time);
    this.tasks.unshift(fn);
    return this;
};
_GodMan.prototype.next = function() {
    setTimeout(() => {
        let task = this.tasks.shift();
        task && task();
    }, 0);
};

GodMan("Jack")
    .rest(5)
    .learn("computer")
    .rest(7)
    .learn("sss")
    .restFirst(3);