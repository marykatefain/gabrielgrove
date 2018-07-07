module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("www/assets");

  return {
    passthroughFileCopy: true
  };
};
