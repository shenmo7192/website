---
sidebar_position: 3
---

# 软件投递标准(2021.1.30)

## 文件替换说明

1. 投递时，填写的联系邮箱和英文的软件名与现有记录一致时，此时会替换对应的记录，可以在上传页面看到自己所投递的软件包，不一致则认为是新的软件包
2. 新仓库，目前同时维护两套软件源，新的仓库替换版本时是按照Package来替换文件，当投递时填写的联系邮箱与现有的记录一致时则认为版本升级，更新记录
3. 建议大家在投递的时候英文软件名和Package一致，这样可以避免不必要的麻烦，同时可以确定维护者等

## 版权要求

1. 对于开源软件，请遵循其开源协议。
2. 对于商业软件，仅可投稿可以在官网匿名(不需要账户登陆)免费下载(下载不用付费)的商业软件，拆包打包不可修改其官方的二进制文件及相关配置，不可投递已经购买的付费商业软件。特别地，对于试用版商业软件，不可包含序列号，激活程序等一切有可能使得版权所有方获益减少的内容和程序。


## 内容要求
1. 不触犯中华人民共和国现行法律
2. 不影响操作系统运行和其他软件运行
3. 安装、卸载干净

## 包名要求

1. 包名必须规范，可以使用lintian进行包名检查，如果不出现bad-package-name即可通过（其它错误可暂时忽略），现在审核已经加上了lintian的自动检查，如果不通过会直接被拒绝，人工无法干预，后续会慢慢检查control文件的一些内容，请大家留意各个渠道的通知
2. 从官方直接获取的deb包可不做修改，自己打包或者拆包打包后的包名(Package Name)不可与官方一致，可考虑命名为 “官方包名”+”.spark”
3. 文件名尽量规范，不允许带有中文，Ubuntu软件包命名遵循下列约定： <1>\_<2>-<3>\_<4>.deb 
* <1>软件包名称(Package Name):
* <2>版本(Version Number):
* <3>修订号(Build Number):
* <4>平台(Architecture):
    * i386：x86的32位程序
    * amd64：x86的64位程序	
    * all: 平台无关. 即适用于所有平台.
    
在 软件包名 里只能含有 小写字母 (a-z), 数字 (0-9), 加号 (+) 和 减号 (-) ， 以及 点号 (.)。 软件包名最短长度两个字符；它必须以字母开头；它不能与仓库软件包名发生冲突。还有，把软件包名的长度控制在 30 字符以内是明智之举。

## deb control文件的字段要求

1. control文件的各个字段经查阅文档建议首字母大写，例如Package，Version，Architecture，Depends，Description等
2. 字段中Package，Version，Architecture，Maintainer，Description这五个字段是deb文档强制要求要有的
3. 字段用途说明：
* Package：包名，相当于软件名，apt卸载安装等使用的
* Version：版本，用来更新等
* Architecture：平台，参见上文
* Maintainer：维护者
* Description：说明，说明这个包的用途等

## desktop字段要求

对于桌面应用程序(有GUI的程序), 投递的deb包需要有`.desktop`文件，且安装后能桌面正确识别，即位于`/usr/share/applications/`下或在此位置有软链接。

`.desktop`文件要有以下字段

1. Name：名称
2. Exec：执行的命令
3. Icon: 图标的名称或者绝对路径
4. Type: 类型，一般是`Application`

在线 `.desktop` 生成：[https://www.freedesktop.org/software/appstream/metainfocreator/#/guiapp](https://www.freedesktop.org/software/appstream/metainfocreator/#/guiapp)。`.desktop` 文件验证 `desktop-file-validate *.desktop` 续依赖 `desktop-file-utils`。

```bash
sudo apt install desktop-file-utils
```

如有更多建议，请发邮件到 jerry@spark-app.store


