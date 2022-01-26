# 在 Linux 安裝 Golang

先移到 tmp 資料夾

```bash
cd /tmp
```

下載（記得改版本）

好像不用加 `sudo`，但實作時有加才能載

```bash
sudo wget https://golang.org/dl/go1.<VERSION_NUMBER>.linux-amd64.tar.gz
```

解壓縮到 `/usr/local`

```bash
sudo tar -C /usr/local -xzf go1.<VERSION_NUMBER>.linux-amd64.tar.gz
```

設定環境變數

把環境變數設定在 `.profile`

```bash
echo "export PATH=$PATH:/usr/local/go/bin" >> ~/.profile
echo "export GOPATH=~/.go" >> ~/.profile
```

reload profile

```bash
source ~/.profile
```

確認是否已安裝

```go
go version
```

## Reference

[Install the Latest Version of Golang on Ubuntu](https://www.vultr.com/docs/install-the-latest-version-of-golang-on-ubuntu)