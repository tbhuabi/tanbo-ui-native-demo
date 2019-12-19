const marked = require('marked');
const hljs = require('highlight.js');
const path = require('path');
const fs = require('fs');

module.exports = function (source, sourcemap) {
    const _this = this;
    this.cacheble && this.cacheble();
    const renderer = marked.setOptions({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                } catch (e) {
                    console.log(e);
                }
            }

            return '';
        }
    });

    const testLink = /<link[^>]+href="([^"]+\.(?:html|ts|scss|md))"[^>]*>/g;

    const newSource = source.replace(testLink, function (str, sourceUrl) {
        const sourcePath = path.resolve(_this.context, sourceUrl);
        const fileContent = fs.readFileSync(sourcePath, 'utf-8');
        _this.addDependency(sourceUrl);
        if (/rel="markdown"/.test(str)) {
            if (/\.scss$/.test(sourceUrl)) {
                return renderer(joinMarkdown('scss', fileContent)).replace(/\{/g, '{{\'{\'}}');
            } else if (/\.html$/.test(sourceUrl)) {
                return renderer(joinMarkdown('html', fileContent)).replace(/\{/g, '{{\'{\'}}');
            } else if (/\.ts/.test(sourceUrl)) {
                return renderer(joinMarkdown('typescript', fileContent)).replace(/\{/g, '{{\'{\'}}');
            } else if (/\.md/.test(sourceUrl)) {
                return renderer(fileContent).replace(/\{/g, '{{\'{\'}}');
            }
        } else if (/rel="html"/.test(str)) {
            return fileContent;
        }
        return str;
    });


    if (this.callback) {
        this.callback(null, newSource, sourcemap)
    } else {
        return newSource;
    }
};

function joinMarkdown(type, source) {
    return '```' + type + '\n' + source + '\n```\n';
}
