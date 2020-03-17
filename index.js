var _ = require('lodash');
var utils = require('loader-utils');


module.exports = function (source) {    
    if (_.isUndefined(this.cacheable)) return source;
    this.cacheable();
    const options = utils.getOptions(this);
    const opts = options || {};
    const width = opts.width || 750,
        unit = opts.unit || 'rpx';
    const scale = 100 / width;
    const matchPXExp = new RegExp("\\b\\d+(\\.\\d+)?" + unit + "\\b", 'g');
    return source.replace(matchPXExp, function (match) {
        var pxValue = parseFloat(match.slice(0, match.length - 2));
        return (pxValue * scale) + 'vw';
    });

};

