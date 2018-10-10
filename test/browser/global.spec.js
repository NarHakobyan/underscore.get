 describe("test globally adding underscore.get", function () {
        it("_.get should be available and work as expected", function (done) {
            "use strict";

            if (!window._.get)
                throw "window._.get not found";

            var obj = {a: [{b: "working"}]};
            var ret = window._.get(obj, 'a[0].b', null);
            if(ret !== 'working')
                throw "window._.get not returning expected results";
            done();
        })
    });
