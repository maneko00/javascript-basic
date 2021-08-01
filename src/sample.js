// 01. varとletのスコープの違い
// const testScope = (scope) => {
//     if ( scope === 'function' ) {
//         var functionScope = '関数スコープ内ならどこからでも参照できます'
//     } else if ( scope === 'block' ) {
//         let blockScope = 'ブロックスコープ内でしか参照できません'
//         console.log(blockScope)
//     }
//     console.log(functionScope)
// }

// testScope('block');


// 02. mutableとimmutable
// let mutableText = 'let変更前';
// mutableText = 'let変更後';
// console.log(mutableText);

// const immutableText = 'const変更前';
// // immutableText = 'const変更後';
// console.log(immutableText)

// const mutableArray = [1, 2, 3];
// mutableArray.push(4);
// console.log(mutableArray)

// const mutableObject = {id: 'hoge', value: 'fuga'}
// mutableObject['name'] = 'bar'
// console.log(mutableObject)

// 03. 関数宣言
function namedFunc(massage) {
    console.log(massage)
}

const arrowFunc = (massage) => {
    console.log(massage)
}

const oneLineArrowFunc = (massage) => console.log(massage);

const users = {
    hoge: 'maneko00'
}
const getUsername = (userId) => users[userId];

namedFunc('これは名前付き関数です。')
arrowFunc('これはアロー関数です')
oneLineArrowFunc('これは1行で書いたアロー関数です')

const username = getUsername('hoge')
console.log(username)