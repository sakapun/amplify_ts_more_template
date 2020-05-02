# tl;dr

src フォルダ内の.ts 拡張子内に、graphql のクエリを gql で囲むと、そこを解析要素として返り値の型定義ができあがる  
下の例だと Q の型定義が出力される

```javascript
import gql from "graphql-tag";

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

Amplify codegen は、内部的に graphql-code-generator を使っている。  
このライブラリに備わっている gql\`\` をパースする機能によって、src 内の.ts ファイルに書いたクエリの型定義を作ってくれるのである。

```
amplify-cli/packages/amplify-codegen/package.json

...
dependencies: {
    "@graphql-codegen/core": "1.8.3",
    "graphql-config": "^2.2.1",

```

### Amplify の graphql 設定ファイル、graphqlconfig.yml とは

拡張として amplify 拡張が入っているが、一般的な`graphql-config`である。
しかし、バージョンが古いことが要注意。

graphql-config の現行バージョンは 3 系で構成されているのだが、このライブラリでは依然として`v2`を使っている  
https://graphql-config.com/migration

そのため、２系の設定値を使っている。  
ドキュメントは古い物を漁る必要があり、現在検索でヒットするものは大抵バージョンが違う。  
https://github.com/kamilkisiela/graphql-config/tree/v2.2.1  
graphqlconfig.yml という設定ファイル名も、ちょっとレガシーみたいだ。

### v2 の設定値で読み取ると

- schemaPath: で graphql の定義ファイルの場所を指定し、
- includes: でクエリが書かれるであろうファイルの場所を指定し、
- excludes: で除外設定をして
- generatedFileName: で出力される定義ファイルの場所を指定している。
