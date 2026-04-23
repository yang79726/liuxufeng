
export const aboutMarkdown = `
# Intro

我是刘旭峰，兰州大学地理信息科学专业本科生，主修GIS与遥感，辅修通信工程。我热爱用代码解决空间问题——从遥感影像分类到个人财务可视化，从GEE到Python。

今天，我专注于**Python开发 + GIS/遥感应用**，并在课余维护开源项目 [MoneyLens](https://github.com/yang79726/moneylens)——一个保护隐私的个人财务可视化工具。

我相信技术应该**落地、实用、有温度**。如果你对我的项目或研究感兴趣，欢迎通过邮件或GitHub交流。

# Some History


- 2023年，我进入兰州大学，正式学习地理信息科学。
- 大二那年，我同时选修了C语言和Python，开始尝试用代码处理地理数据。我完成了第一个完整的遥感项目：**兰州市土地利用分类**。从GEE下载影像，到ArcGIS制图，再到ENVI分类验证，我第一次走通了遥感处理的全流程。

- 同年，我决定辅修**通信工程**。因为我发现，遥感信号从卫星到地面，本质上是通信问题。信号处理、滤波、傅里叶变换——这些知识让我对遥感影像的理解更深了一层。
- 2025年，我完成了**运城盐湖水体提取**项目。用ENVI/IDL写批处理脚本，提取水体边界，评价富营养化程度。这是我第一次把信号处理思维用到遥感中。
- 我还做过一些“非典型GIS”的事情：焊接机器狗电路、用HTML生成PPT、搭建问答大模型网站、当家庭教师教高中数学物理。
- 2025年，我开始了 **MoneyLens** 项目。起因很简单：我想知道自己的钱花在了哪里，但不想把账单上传到云端。于是我写了一个本地运行的工具，把支出换算成“大米”和“工作时长”。后来它慢慢长成了一个完整的财务可视化项目。目前，我正在完善 MoneyLens，计划加入更多理财建议功能和数据可视化维度。


# 我的学科理解

## 遥感：从电磁波到地物信息

遥感处理的核心，其实是**电磁波信号**。

按照波长从短到长，电磁波大致分为：



- **可见光**：0.38 – 0.76 μm，人眼可见，对应蓝、绿、红波段
- **近红外**：0.76 – 1.1 μm，对植被含水量敏感，是植被遥感的核心波段
- **短波红外**：1.1 – 3 μm，区分矿物、土壤湿度
- **中红外**：3 – 8 μm，热辐射与反射混合区
- **热红外**：8 – 14 μm，探测地表温度、热异常
- **微波**：1 mm – 1 m，穿透云雨，全天候观测（SAR）

这背后是**信号系统**中的**傅里叶变换**思想：将电磁波在频域分解，研究特定频率下的信号特性。

一个经典例子是**植被遥感**：
- 健康植被在**蓝光、红光波段**，由于光合色素（叶绿素）的吸收，**反射率很低**
- 在**近红外波段**，由于叶片细胞结构的散射，**反射率显著升高**
- 通过计算**归一化植被指数（NDVI）**：\`(NIR - Red) / (NIR + Red)\`，可以快速识别植被
- 更进一步，植物**含水量、健康状况**的变化，会改变近红外和中红外的反射率，可以用于旱情监测、作物估产

这让我意识到：**遥感本质上是用傅里叶变换的“眼睛”去看地球**。

## GPS：从编码到定位

GPS定位的核心，也离不开**通信原理**中的编码知识。

GPS卫星通过**码分多址（CDMA）** 技术区分不同卫星：每颗卫星分配一个独特的**伪随机噪声码（PRN）**，其中最著名的是**C/A码（粗捕获码）**。

C/A码本质上是一个**M序列（最长线性反馈移位寄存器序列）**，具有很好的自相关性和互相关性：
- **自相关性**：接收机可以精确锁定信号的时间延迟 → 测距
- **互相关性**：不同卫星的码几乎正交，可以同时接收多颗卫星信号

通过测量信号传播时间 \`Δt\`，计算卫星到接收机的距离 \`d = c × Δt\`（c为光速）。至少4颗卫星，就能解算出三维位置和时间。

**这就是通信原理中的编码知识，在定位系统中的直接应用。**

## 学科融合的思考

地理信息科学 + 通信工程，不是简单的“1+1”，而是：

- **遥感**：电磁波 → 频域分解 → 地物识别
- **GPS**：伪随机码 → 自相关测距 → 空间定位
- **GIS**：空间数据 → 分析建模 → 决策支持

从卫星信号接收，到遥感图像处理，再到GIS空间分析——**全链路理解**，是我努力的方向。

# I Like

- **遥感图像处理**：看着一景卫星影像变成分类结果，很有成就感。
- **开源项目**：代码就应该被看见、被使用、被改进。
- **Python**：简洁、强大、生态丰富。
- **GEE（谷歌地球引擎）**：在云端处理PB级遥感数据。
- **Blogs**：写技术笔记，分享学习心得。
- **播客**：技术、投资、科技史，什么都听一点。


# I Dream Of

- 将 **遥感智能分析** 与 **GIS 开发** 结合，解决环境监测、城市规划等实际问题。
- 在研究生阶段深入研究 **深度学习与遥感图像理解**。
- 让 MoneyLens 成为更多人管理个人财务的工具，同时保护隐私。
- 成为一个既有技术深度、又能把技术讲清楚的开发者。

# 荣誉与证书




#### 奖学金
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 20px 0;">
  <div style="text-align: left;">
    <a href="/images/certificates/bd.jpg" target="_blank">
      <img src="/images/certificates/bd.jpg" style="width: 100%; max-width: 220px; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.1); transition: 0.3s;" 
        onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.15)';"
        onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.1)';">
    </a>
    <p style="margin-top: 8px;">筑梦奖学金</p>
  </div>
  <div style="text-align: left;">
    <a href="/images/certificates/scholarship2.jpg" target="_blank">
      <img src="/images/certificates/scholarship2.jpg" style="width: 100%; max-width: 220px; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.1); transition: 0.3s;" 
        onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.15)';"
        onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.1)';">
    </a>
    <p style="margin-top: 8px;">2023-2024 学年优秀学生二等奖学金</p>
  </div>
  <div style="text-align: left;">
    <a href="/images/certificates/scholarship1.jpg" target="_blank">
      <img src="/images/certificates/scholarship1.jpg" style="width: 100%; max-width: 220px; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.1); transition: 0.3s;" 
        onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.15)';"
        onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.1)';">
    </a>
    <p style="margin-top: 8px;">2025 年优秀学生一等奖学金</p>
  </div>
  <div></div>
</div>

#### 学科竞赛
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 20px 0;">
  <div style="text-align: left;">
    <a href="/images/certificates/math.jpg" target="_blank">
      <img src="/images/certificates/math.jpg" style="width: 100%; max-width: 220px; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.1); transition: 0.3s;" 
        onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.15)';"
        onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.1)';">
    </a>
    <p style="margin-top: 8px;">全国大学生数学竞赛 三等奖</p>
  </div>
  <div style="text-align: left;">
    <a href="/images/certificates/bett3.jpg" target="_blank">
      <img src="/images/certificates/bett3.jpg" style="width: 100%; max-width: 220px; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.1); transition: 0.3s;" 
        onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.15)';"
        onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.1)';">
    </a>
    <p style="margin-top: 8px;">BETT 词汇大赛 全国二等奖</p>
  </div>
  <div style="text-align: left;">
    <a href="/images/certificates/bett4_first.jpg" target="_blank">
      <img src="/images/certificates/bett4_first.jpg" style="width: 100%; max-width: 220px; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.1); transition: 0.3s;" 
        onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.15)';"
        onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.1)';">
    </a>
    <p style="margin-top: 8px;">BETT 阅读大赛 初赛一等奖</p>
  </div>
  <div style="text-align: left;">
    <a href="/images/certificates/bett4_final.jpg" target="_blank">
      <img src="/images/certificates/bett4_final.jpg" style="width: 100%; max-width: 220px; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.1); transition: 0.3s;" 
        onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.15)';"
        onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.1)';">
    </a>
    <p style="margin-top: 8px;">BETT 阅读大赛 决赛一等奖</p>
  </div>
  <div style="text-align: left;">
    <a href="/images/certificates/environment.jpg" target="_blank">
      <img src="/images/certificates/environment.jpg" style="width: 100%; max-width: 220px; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.1); transition: 0.3s;" 
        onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.15)';"
        onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.1)';">
    </a>
    <p style="margin-top: 8px;">环保知识大赛 全国一等奖</p>
  </div>
  <div style="text-align: left;">
    <a href="/images/certificates/esri.jpg" target="_blank">
      <img src="/images/certificates/esri.jpg" style="width: 100%; max-width: 220px; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.1); transition: 0.3s;" 
        onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.15)';"
        onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.1)';">
    </a>
    <p style="margin-top: 8px;">易智瑞杯 GIS 竞赛 优胜奖</p>
  </div>
</div>

#### 文体与实践
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 20px 0;">
  <div style="text-align: left;">
    <a href="/images/certificates/football.jpg" target="_blank">
      <img src="/images/certificates/football.jpg" style="width: 100%; max-width: 220px; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.1); transition: 0.3s;" 
        onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.15)';"
        onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.1)';">
    </a>
    <p style="margin-top: 8px;">资源环境学院五人制足球比赛 第二名</p>
  </div>
  <div></div>
</div>



---
*欢迎通过 [GitHub](https://github.com/yang79726) 或 [邮箱](mailto:liuxf2023@lzu.edu.cn) 交流技术、项目与想法。*
`;