/**
 * @file Visual mapping.
 */
define(function (require) {

    var zrUtil = require('zrender/core/util');

    var visualDefault = {

        /**
         * @public
         */
        get: function (visualType, key, isCategory) {
            var value = zrUtil.clone(
                (defaultOption[visualType] || {})[key],
                true
            );

            return isCategory
                ? (zrUtil.isArray(value) ? value[value.length - 1] : value)
                : value;
        }

    };

    var defaultOption = {

        color: {
            active: ['#006edd', '#e0ffff'],
            inactive: ['rgba(0,0,0,0)']
        },

        colorS: {
            active: [0.3, 1],
            inactive: [0, 0]
        },

        colorL: {
            active: [0.9, 0.5],
            inactive: [0, 0]
        },

        colorA: {
            active: [0.3, 1],
            inactive: [0, 0]
        },

        symbol: {
            active: ['circle', 'roundRect', 'diamond'],
            inactive: ['none']
        },

        symbolSize: {
            active: [10, 50],
            inactive: [0, 0]
        }
    };

    return visualDefault;

});
