# ARM Syntax README

## Author

Javier Mejias Reverté
[GitHub Profile](https://github.com/ininavicode)

---

## Features

Color Syntax Highlighting for ARM Assembly (keywords from **The ARM Instruction Set - ARM University Program - V1.0</**)
Instruction Set is adapted for **URV - ETSE - DEIM - Computadors**

Color Syntax Highlighting is applied to the following file extensions:
- .s
- .arm
- .asm
- .i

Configurable color, bold, italic for each keyword type.

---

## Installing

### Requirements

None required.

### From VSCode

1. Open **Extensions** in VSCode
2. Click the **"..."** button at the top right of the Extensions window
3. Select **Install from VSIX**
4. Choose your **.vsix file**

### From shell

1. Open terminal with `Ctrl` + `Alt` + `T` or by opening the Terminal application.
2. Type the following commands:
```shell
wget -O arm-syntax-vscode-extension.vsix \
  https://github.com/ininavicode/arm-syntax-vscode-extension/archive/refs/tags/$(curl -s https://api.github.com/repos/ininavicode/arm-syntax-vscode-extension/releases/latest | grep "tag_name" | cut -d '"' -f 4).vsix  # Download latest release
code --install-extension arm-syntax-vscode-extension.vsix  # Install extension
```

---

## Building

### Requirements

* [![nodejs][nodejs-shield]][nodejs-url]
* [![vsce][vsce-shield]][vsce-url]

### Install build requirements

```shell
# Install node version manager
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash  

# Set up nvm to use nodeJS 20.x.x
nvm install 20
nvm use 20

# Install vsce
npm install -g @vscode/vsce
```

### Build instructions

```shell
# Clone repo
git clone https://github.com/ininavicode/arm-syntax-vscode-extension

# Navigate inside the folder
cd arm-syntax-vscode-extension

# Build extension
vsce package --out arm-syntax-vscode-extension.vsix
```

---

## Extension Settings

- **Color**
- **Bold** (On/Off)
- **Italic** (On/Off)

---

### How to configure

1. Press Ctrl + ,
2. Search for **ARM Syntax Settings**

---

## Known Issues

None known at this time.

---

## Release Notes

### V0.0.1
Extension release

### V0.0.2
Corrected detection for comments

### V0.0.3
Changed default colors

### V0.0.4 
**swi** keyword added to mnemonics

### V0.0.5
Fixed error detecting inmediate values.



[nodejs-shield]: https://img.shields.io/badge/nodeJS-20.x.x-orange?style=for-the-badge&logo=jquery&logoColor=white
[nodejs-url]: https://jquery.com
[vsce-shield]: https://img.shields.io/badge/vsce-3.2.1-white?style=for-the-badge&logo=bootstrap&logoColor=black
[vsce-url]: https://github.com/microsoft/vscode-vsce
