---
title: 'How to setup neovim for coding'
date: 'May 12, 2022'
excerpt: 'Neovim is an implementation of Vim, but focused on extensibility and usability. The key feature is asynchronous plugins (mostly) compatible with Vim, which significantly improves performance for things like code-completion and linting.'
cover_image: '/images/blog/neovim.png'
---

Neovim is a great editor and the most fastest editor on my option. I was introduced to it by a friend. And I very since then, I have being using it since then

I use a video on youtube by [devaslife](https://www.youtube.com/c/devaslife)


- Install neovim with homebrew

```bash
   brew install --HEAD tree-sitter luajit neovim
```

- Install vim plug

```bash
   - curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

- Install neovim-npm package and python package

```python
pip3 install --user neovim
```

```javascript
yarn global add neovim
```

- Run

```vim
:PlugInstall
:CocInstall  coc-json coc-html coc-css coc-prettier coc-pyright coc-snippets
```

- Install tailwindcss, typescript, emmet for reactjs, html and typescriptreact with language Server Protocol (lsp)

```vim
:LspInstall tailwindcss
:LspInstall typescript // choose option 3
:LspInstall emmet_ls
```

- Copy files to required directories

```bash
cp -rf ultisnips ~/.config/coc
cp -rf * ~/.config/nvim
```
