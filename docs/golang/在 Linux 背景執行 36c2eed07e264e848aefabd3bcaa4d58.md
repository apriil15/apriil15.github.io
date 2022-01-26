# 在 Linux 背景執行

首先在 Linux 上編譯出執行檔

```bash
go build
```

在背景執行（example 為執行檔名稱）

```bash
nohup ./example &
```

- 目前這好像沒效R，`要將 VM 重開`

停止背景執行

應該是 `ps` 找到 PID

然後 `kill id`