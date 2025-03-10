module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets")
  eleventyConfig.addPassthroughCopy("src/css")
  eleventyConfig.addPassthroughCopy("src/js")
  eleventyConfig.addPassthroughCopy("CNAME")
  eleventyConfig.addPassthroughCopy({
    "src/favicon": "/",
  })

  eleventyConfig.addWatchTarget("src/css/")

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
}
