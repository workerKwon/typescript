/** Used
 * 이 파일에서 환경설정 객체를 추출해야 한다.
 * 웹팩은 Node.js 같은 브라우저창이 없는 자바스크립트 환경에서 동작하기 때문이다.
 * 
 * Entry point - 모든 의존 객체들이 모인 웹팩의 시작점을 정의한다. 이러한 의존들은 의존 그래피를 생성한다.
 * Output - 어느 곳에 빌드 과정에서 JS와 정적 파일들을 모을지 정의한다.
 * Loaders - 웹팩이 다양한 파일 확장자를 다룰 수 있도록 도와주는 서드파티 확장 프로그램들이다. JS가 아닌 파일들을 모듈로 바꿔준다.
 * Plugins - 웹팩의 동작 방식을 바꿔주는 서드파티 확장 프로그램들이다.
 * Mode - 개발(development)과 생상(production) 두 모드를 정의한다. 기본은 생산이다.
 * */

 const HTMLWebpackPlugin = require('html-webpack-plugin') // HTML 파일을 읽고, 같은 파일에 번들을 삽입한다.
 const path = require('path')
 

module.exports = {
    entry: { index: path.resolve(__dirname, 'source', 'index.js') }, // 기본 src 폴더가 아닌 source/index.js 파일을 보기를 원하면 우리는 추출된 객체에 entry 속성을 추가하면 된다.
    output: { path: path.resolve(__dirname, 'build'), filename: 'main.js' }, // 기본 dist 폴더가 아닌 다른 폴더에 빌드 파일을 추출하고 싶다면 output 속성을 세팅하면 된다.
    plugins: [new HTMLWebpackPlugin({ 
        template: path.resolve(__dirname, 'source', 'index.html'),
    })],
    module: { // Loader는 module이라는 키를 사용하는데 module은 Loader의 배열인 rules라 불리는 속성을 구성하고 있다.
        rules: [ // 모듈로 취급하길 원하는 각각의 파일은 rules 배열에 객체로 추가해야한다. 모든 객체는 test와 use 두개의 속성으로 구성되어 있다.
            {
                test: /\.css$/, // test는 파일의 타입을 정의한다.
                use: ['style-loader', 'css-loader'] // use는 Loader를 정의하는 배열이다. loader는 오른쪽에서 왼쪽 순서대로 불러온다. 오른쪽에서 왼쪽이다.
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
}