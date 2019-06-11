import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
// import scssPlugin from 'rollup-plugin-scss'
import vue from 'rollup-plugin-vue'
import createBanner from 'create-banner'
import pkg from './package.json'

const name = pkg.name.replace(/^.+\//, '')

const data = {
  year: '2019-present',
}
const banner = createBanner({
  data,
})
const globals = {
  'z-components': 'z-components',
  vue: 'Vue',
}

export default {
  input: 'src/index.js',
  output: [
    {
      banner,
      globals,
      name,
      file: `lib/${pkg.name}.js`,
      format: 'umd',
    },
    {
      globals,
      name,
      banner: createBanner({
        data,
        template: 'inline',
      }),
      file: `lib/${pkg.name}.min.js`,
      format: 'umd',
      compact: true,
    },
    {
      banner,
      file: `lib/${pkg.name}.common.js`,
      format: 'cjs',
    },
    {
      banner,
      file: `lib/${pkg.name}.esm.js`,
      format: 'esm',
    },
  ],
  external: ['vue', 'z-components'],
  plugins: [
    nodeResolve(),
    commonjs(),
    // scssPlugin(),
    vue({
      template: {
        isProduction: true,
      },
    }),
    babel({
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
    }),
  ],
}
