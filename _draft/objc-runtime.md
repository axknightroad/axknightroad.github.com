---
layout: post-layouts
title: iOS 的 Rumtime 机制浅谈
bg: '/img/2016-1-4.jpg'
---

个人学习 iOS 开发也有一段时间了，最近面临找工作，也学习了一些底层相关的知识，其中对 Objective-C 的 Runtime 有点兴趣，也就看了点相关资料。

现在把自己学习的理解写在这里，也是方便自己将来再复习的时候有个可以参照的东西。

我们知道 Objective-C 是一个面向对象的语言，是 C 的超集。 但是和同样是 C 的超集，也同样是面向对象的 C++ 有很大不同。
C++ 中的类的方法的调用，大部分情况下，是在编译的时候就确定的(虽然也有抽象类和虚函数可以实现动态绑定)。 而 Objective-C 则不同，它调用哪个方法，是在运行阶段动态决定的。
