import type {Plugin} from 'vite';
import {compileScript, parse} from '@vue/compiler-sfc'

interface optionsAttrs {
    name?: string,
    lang?: string,
    inheritAttrs?: string,
}

export default function setupExtends(): Plugin {
    return {
        name: 'vite-plugin-vue-setup-expand',
        enforce: 'pre',
        transform(code, id) {
            if (!/.vue$/.test(id)) return code
            const {descriptor} = parse(code)
            if (descriptor.script) return code
            let options: optionsAttrs = {}

            if (descriptor.scriptSetup) {
                const {attrs} = compileScript(descriptor, {id})
                options = attrs
            } else {
                let temp: RegExpMatchArray | null = descriptor.source.match(/<script[^>]*(name|setup)[^>]*>([\s\S]*?)<\/script>/)
                if (temp) {
                    temp = temp[0].match(/(?<!<)(?<=\s+)(?!setup\s+)\w+(=".*?"|='.*?')?/g)
                    options = temp!.reduce((p, c) => {
                        if (c.includes('=')) {
                            const [key, value] = c.split('=')
                            p[key] = value.replace(/["']/g, '')
                        } else {
                            p[c] = true
                        }
                        return p
                    }, {})
                }
            }
            const {name, lang, inheritAttrs} = options
            if (name) {
                const template = `
                  <script${lang ? ` lang="${lang}"` : ''}>
                   export default {
                      ${name ? `name: "${name}",` : ''}
                      ${inheritAttrs ? `inheritAttrs: ${inheritAttrs !== 'false'},` : ''}
                   }
                  </script>
                  `;
                code += template
            }
            return code
        }
    };
}
