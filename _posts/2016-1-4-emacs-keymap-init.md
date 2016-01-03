---
layout: post-layouts
title: OSX下，emacs配置cmd相关快捷键
bg: '/img/random-generator-bg.jpg'
css: <link href="/css/get-random.css" rel="stylesheet">
---
##test
test `test`

```lisp
    (define-key key-translation-map [(s-left)] [(control a)])
    (define-key key-translation-map [(s-right)] [(control e)])
    (global-set-key [(s-backspace)] 'kill-line-before-cursor)

    (defun kill-line-before-cursor (&optional arg)
      "kill-line-before-cursor"
      (interactive "P")

      (while (not(bolp))
      (delete-backward-char 1))  
    )
```
