---
layout: post-layouts
title: Emacs中几个command相关快捷键设置
bg: '/img/2016-1-4.jpg'
---

Emacs 作为神的编辑器，一直深受广大程序员喜爱。早些年用还在用 Linux 的时候，我也接触到了这款编辑器，但由于水平有限，也没能玩得很6。

后来从 Linux 迁移到 OSX，就下了 [Emacs For Mac OS X](http://emacsformacosx.com/) 继续使用，其中 `control` 和 `alt` 和其相关快捷键倒是和 Linux 上保持一致，也就继续这么用了。但是 OSX 下 `command`  相关的的快捷键比较丰富，用多也就习惯了，特别是`command + left`，`command + right` 和 `command + delete` 这三个快捷键，在 Xcode 等编辑器下倒也挺顺手。

但是 Emacs 却没有这方面相关快捷键，这使我在切换编辑器时经常感到不便，然后网查了下，发现没有相关资料，可能一般使用 Emacs 的程序员都水平比较高，不怎么用这些快捷键。

于是抱着自己动手，丰衣足食的精神，写了这三个快捷键的相关配置，就放上来以方便有相同需求的朋友。把配置添加到 `init.el` 即可。

最后说下，由于不同人的 Emacs 配置不同，该配置不一定有用。

    ;;command + left, 回到行首
    (define-key key-translation-map [(s-left)] [(control a)])
    ;;command + right, 回到行尾
    (define-key key-translation-map [(s-right)] [(control e)])
    ;;command + delete, 删除从光标到行首的字符
    (global-set-key [(s-backspace)] 'kill-line-before-cursor)

    (defun kill-line-before-cursor (&optional arg)
      "kill-line-before-cursor"
      (interactive "P")

      (while (not(bolp))
      (delete-backward-char 1))  
    )
