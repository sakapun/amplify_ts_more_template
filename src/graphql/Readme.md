# tl;dr
srcフォルダ内の.ts拡張子内に、graphqlのクエリをgqlで囲むと、そこを解析要素として返り値の型定義ができあがる  
下の例だとQの型定義が出力される

```javascript

import gql from 'graphql-tag'

const q = gql`
  query Q { 
    getBlog {
      id
      title
    }
  }
`;

```

## 解説

Amplify codegenは、内部的にgraphql-code-generatorを使っている。  
このライブラリに備わっている gql\`\` をパースする機能によって、src内の.tsファイルに書いたクエリの型定義を作ってくれるのである。

```
amplify-cli/packages/amplify-codegen/package.json

...
dependencies: {
    "@graphql-codegen/core": "1.8.3",
    "graphql-config": "^2.2.1",

```
  

### Amplifyのgraphql設定ファイル、graphqlconfig.ymlとは

拡張としてamplify拡張が入っているが、一般的な`graphql-config`である。
しかし、バージョンが古いことが要注意。

graphql-configの現行バージョンは3系で構成されているのだが、このライブラリでは依然として`v2`を使っている  
https://graphql-config.com/migration
  
  
そのため、２系の設定値を使っている。  
ドキュメントは古い物を漁る必要があり、現在検索でヒットするものは大抵バージョンが違う。  
https://github.com/kamilkisiela/graphql-config/tree/v2.2.1  
graphqlconfig.ymlという設定ファイル名も、ちょっとレガシーみたいだ。    

### v2の設定値で読み取ると

- schemaPath: でgraphqlの定義ファイルの場所を指定し、
- includes: でクエリが書かれるであろうファイルの場所を指定し、
- excludes: で除外設定をして
- generatedFileName: で出力される定義ファイルの場所を指定している。
