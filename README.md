# 南陽市DXプロンプトライブラリ

このプロジェクトは、南陽市の「生成AI活用実例集」をモデルにしたモダンなプロンプトライブラリ・アプリです。

## プロジェクト構成

- `src/`: React フロントエンド（Vite）
  - `src/data/prompts.js`: カテゴリ定義とデータ処理ロジック
  - `src/data/raw_data.json`: プロンプトのリスト（配列データ）
- `scraper/`: プロンプト本文取得用スクレイパー（Python）
  - `scraper/main.py`: スクレイピング実行スクリプト
  - `scraper/requirements.txt`: 必要なPythonライブラリ

## 使い方

### 1. フロントエンドの起動

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### 2. スクレイピングの実行（プロンプト本文の取得）

プロンプトの本文を外部サイトから取得して、より充実したデータベースを作成する場合に使用します。

```bash
cd scraper
# ライブラリのインストール
pip install -r requirements.txt

# スクレイピングの実行
python3 main.py
```

実行後、`scraper/nanyo_prompts_full.json` が生成されます。

## 注意事項

- `src/data/raw_data.json` には現在サンプルデータのみが含まれています。提供された全データをこのファイルに貼り付けてください。
- スクレイピングを実行する際は、サーバーへの負荷を考慮し、実行間隔（`SLEEP_TIME`）を適切に保ってください。