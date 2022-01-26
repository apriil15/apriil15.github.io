# Basic Command

- 安裝 typescript、ts-node (也要安裝 `@types/node`)
    
    ```powershell
    # 安裝
    npm install -g typescript ts-node
    ```
    
    ```bash
    # mac 可能要加 sudo
    sudo npm install -g typescript ts-node
    ```
    
- 確認版本
    
    ```bash
    $ tsc -v
    Version 4.3.5
    ```
    
- 產生 tsconfig.json
    
    ```powershell
    tsc --init
    ```
    
- 編譯 TypeScript 檔案
    
    ```powershell
    # compile all files
    tsc
    
    # compile specific file
    tsc index.ts
    
    # compile with listening
    # 會偵測修改 -> 然後編譯
    tsc [path] --watch
    tsc [path] -w
    ```
    
- 執行 ts-node
    
    ```powershell
    ts-node index.ts
    ```