.PHONY: build deploy all

# Vue アプリのビルド
build:
	npm run build

# Firebase Hosting にデプロイ
deploy:
	firebase deploy

# ビルド → デプロイをまとめて実行
all: build deploy
