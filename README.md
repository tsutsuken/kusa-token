# kusa-token

## トークン（新規・既存）の発行

- コントラクトの Owner 権限を持つウォレットで、コントラクトの`mint()`メソッドを呼び出す
  - polygonscan.com 上の KusaToken のページ > Contract > Write Contract > mint で以下の情報を入力し、実行する
    - account: トークンを付与したいアドレス
    - id: トークンの id。新トークン発行の場合は、未使用の id を指定する
    - amount: トークンの発行数
    - data: トークンの補足情報。通常は空データを意味する「0x」を入力する

## トークンの uri（トークンのメタデータの参照先 URL）の変更

- コントラクトの Owner 権限を持つウォレットで、コントラクトの`setURI()`メソッドを呼び出す
  - polygonscan.com 上の KusaToken のページ > Contract > Write Contract > setURI で以下の情報を入力し、実行する
    - newuri: 新しい uri。「sample.com/sample/{id}.json」 のように指定することで、`{id}`の部分に自動で tokenid が割り当てられる

## トークンのメタデータ（トークン名、トークン画像 URL など）の変更

- 上記「トークンの uri」に格納している json の中身を編集する

## コントラクトのテスト

- ローカル用のブロックチェーンノードを起動する

  - package/hardhat フォルダ下で、以下のコマンドを実行する

    ```zsh
      npm run test
    ```

- package/hardhat フォルダ下で、以下のコマンドを実行する

  ```zsh
   npm run test
  ```

## コントラクトの公開(Deploy)

- 環境変数ファイル（.env）の ALCHEMY_API_KEY_MUMBAI, DEPLOYER_PRIVATE_KEY に、自身で取得したキーを入れる
- デプロイ先のネットワークを指定する
  - package/hardhat/hardhat.config.ts の TARGET_NETWORK を編集する
- package/hardhat フォルダ下で、以下のコマンドを実行する

  ```zsh
   npm run deploy
  ```

## コントラクトの認証(Verify)

- 環境変数ファイル（.env）の POLYGONSCAN_API_KEY に、自身で取得したキーを入れる
- package/hardhat フォルダ下で、以下のコマンドを実行する

  ```zsh
  npx hardhat verify YOUR_CONTRACT_ADDRESS --contract contracts/KusaToken.sol:KusaToken --network NETWORK_NAME
  ```
