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
let mutableText = 'let変更前';
mutableText = 'let変更後';
console.log(mutableText);

const immutableText = 'const変更前';
// immutableText = 'const変更後';
console.log(immutableText)

const mutableArray = [1, 2, 3];
mutableArray.push(4);
console.log(mutableArray)

const mutableObject = {id: 'hoge', value: 'fuga'}
mutableObject['name'] = 'bar'
console.log(mutableObject)