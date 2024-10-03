const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig){
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.setLiquidOptions({
        jsTruthy: true,
        strictFilters: false,
        strictVariables: false,
    });
    return {
        dir: {
			input: "src",
            output: "_site",
            data: "../_data", 
		},
    }
}