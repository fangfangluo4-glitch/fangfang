export interface PortfolioItem {
  id: string;
  title: string;
  category: 'modeling' | 'aigc' | 'detail';
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
  specs?: string; // Tech specs or rendering engine used
}

export interface ProfileData {
  name: string;
  engName: string;
  role: string;
  university: string;
  major: string;
  graduationYear: string;
  bio: string;
  phone: string;
  wechat: string;
  email: string;
  avatar: string;
}

export const profileData: ProfileData = {
  name: "骆东方",
  engName: "Dongfang",
  role: "材料成型及控制工程",
  university: "材料成型及控制工程",
  major: "材料成型及控制工程",
  graduationYear: "24岁",
  bio: "专注3C数码产品的电商视觉设计，精通C4D、OC/KeyShot渲染及PS后期。在设计工作流中深度结合AIGC技术，擅长将产品材质精准还原，高效打磨极具质感与极简美学的卖点图，为产品注入视觉生命力。",
  phone: "158-1528-1989",
  wechat: "15815281989ldf",
  email: "691566550@qq.com",
  avatar: "/src/assets/images/regenerated_image_1783077870360.jpg"
};

export const portfolioItems: PortfolioItem[] = [
  // 建模渲染 (3D Modeling & Rendering) - 20 Items
  {
    id: "model-1",
    title: "Aether-01: 极简主义智能穿戴概念",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "探索微观实体与流动光的有机融合。采用 C4D 构建细分曲面，并在 Octane 中对偏振玻璃与钛合金拉丝材质进行微米级折射调试，重现细腻冰冷的金属触感与光波律动。",
    image: "/src/assets/images/regenerated_image_1783078936049.jpg",
    tags: ["Cinema 4D", "Octane Render", "Subdivision Surface", "Material Design"],
    specs: "RENDER TIME: 3.5h / FRAME | SPARK NOISE: 0.01%"
  },
  {
    id: "model-2",
    title: "Monolith: 悬浮概念几何美术馆",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "虚构一座悬浮于极北永恒之境的光影混凝土结构。研究在晨曦漫反射下，巨型实体几何建筑所呈现的块面阴影，以及超白玻璃对微弱天光的反射穿透效果。",
    image: "/src/assets/images/regenerated_image_1783165708070.jpg",
    tags: ["Blender Cycles", "Architectural Rendering", "PBR Materials", "Volumetric Fog"],
    specs: "RAYTRACING: 2048 SAMPLES | DENOISER: OIDN"
  },
  {
    id: "model-3",
    title: "Kinesis: 变色晶体流动艺术装置",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "基于流体动力学模拟生成的非晶态超导结晶。调试复杂的焦散光子追踪路径，使彩色亚克力在强光直射下散发出霓虹般的折射焦散效果，富有未来主义张力。",
    image: "/src/assets/images/1.jpg",
    tags: ["Houdini Vellum", "Octane Caustics", "Fluid Simulation", "Color Gradients"],
    specs: "PHOTONS: 50,000,000 | DEPTH OF FIELD: f/1.4"
  },
  {
    id: "model-4",
    title: "Helios: 概念无线能源传输终端",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "对日常桌面电器的未来重组。哑光磨砂阳极氧化铝材质，伴有极细切角抛光边缘，在冷灰色主调下注入一抹温暖微光，展示兼具实用和艺术美感的硬件造型。",
    image: "/src/assets/images/12.jpg",
    tags: ["Rhino Nurbs", "KeyShot 11", "Anodized Aluminum", "Macro Shot"],
    specs: "GEOMETRY: HIGH-DENSITY MESH | FPS: 60"
  },
  {
    id: "model-5",
    title: "Sphere X: 悬浮磁吸智能音箱",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "研究声学与重力的完美平衡。在外壳中使用双层微孔编织网面与高精细阳极氧化铝切角。设置精确的全局光照，完美呈现球体在磁吸悬浮状态下的光影渐变与细腻金属肌理。",
    image: "/src/assets/images/8.jpg",
    tags: ["Cinema 4D", "KeyShot 11", "Mesh Material", "Magnetic Float"],
    specs: "RENDER TIME: 1.8h / FRAME | PASSES: 128"
  },
  {
    id: "model-6",
    title: "Chroma Studio: 悬浮玻璃流光声卡",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "为专业音乐人设计的概念音频接口。主体由一块完整的冷锻铝块精密铣削而成，顶部覆以2.5D高透钢化玻璃面板。在冷光偏光灯效下展示其多层反射与折射质感。",
    image: "/src/assets/images/7.jpg",
    tags: ["C4D", "Octane Render", "Glassmorphism", "Refraction Index"],
    specs: "SAMPLES: 16000 | COLOR SYSTEM: sRGB Linear"
  },
  {
    id: "model-7",
    title: "Pulse-Ear: 先锋全包裹降噪头戴耳机",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "通体半透明高分子聚合材料外壳，可直视精密重叠 of 内部电路版与金色天线。在KeyShot中使用复杂的介质折射率设置，还原塑料与PCB板接缝处的微弱透光效果。",
    image: "/src/assets/images/9.jpg",
    tags: ["KeyShot 11", "Sub-surface Scattering", "Translucent Plastic", "Macro Lighting"],
    specs: "CAUSTICS: SCATTERING ACCURACY | GI: 5.0"
  },
  {
    id: "model-8",
    title: "Solari: 概念太阳能智能空气净化装置",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "探索自然能量与现代空气循环技术的完美交集。哑光白极简流线型筒身，顶部配有太阳能光电感应晶体。重点利用 C4D 的细分曲面工艺，并在 Octane 中对极富质感的半透柔光面板和金属格栅进行光影漫反射仿真。",
    image: "src/assets/images/Pura X Max.29.png",
    tags: ["Cinema 4D", "Octane Render", "Photovoltaic Shader", "Air Dynamics"],
    specs: "AIR FLOW: 450m³/h | SOLAR EFFICIENCY: 22.8%"
  },
  {
    id: "model-9",
    title: "Aero Flow: 参数化极简智能无叶风扇",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "基于流体力学参数化推演的空气倍增装置。采用极致的白灰极简主义配色，辅以电镀抛光金属内环。细致调整漫反射塑料外壳在背光边缘处的微弱透光度，展现极具现代家居美学的优雅弧线。",
    image: "/src/assets/images/6.png",
    tags: ["Rhino Nurbs", "KeyShot 11", "Electroplated Ring", "Diffuse Plastic"],
    specs: "BLADELESS FACTOR: 15x | NOISE LEVEL: 32dB"
  },
  {
    id: "model-10",
    title: "Terra Vessel: 极简防汗磨砂真空保温杯",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "专为都市出行设计的智能物理温控水杯。杯身外壁采用微米级凹凸防汗雾面喷砂，杯盖为经过氧化拉丝处理的钛金属。利用柔和的多向柔光箱（Softbox Setup），完美刻画温润杯体与冷峻杯盖的材质冲突。",
    image: "src/assets/images/35.jpg",
    tags: ["KeyShot 11", "Anodized Titanium", "Sandblasted Texture", "Studio Lighting"],
    specs: "VACUUM RATING: 24h | SURFACE ROUGHNESS: Ra 1.6"
  },
  {
    id: "model-11",
    title: "Aura Watch: 概念编织腕带智能手表",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "聚焦数码服饰美学。在3D软件中通过精密织物算子模拟高密度尼龙编织腕带，表身使用雾面哑光钛合金，配合防指纹纳米陶瓷背板，实现柔刚并济、材质碰撞的高级视效。",
    image: "/src/assets/images/19.jpg",
    tags: ["C4D Cloth Solver", "Octane Render", "Procedural Fabric", "Matte Titanium"],
    specs: "SUBDIVISION LEVEL: 3 | DISPLACEMENT DEPTH: 0.12mm"
  },
  {
    id: "model-12",
    title: "Lattice: 镂空参数化概念办公椅",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "利用参数化数学函数生成的流线型多维镂空人体工学支撑系统。材料使用高弹阻燃PU，在复杂顶置漫反射环形灯光下，展示光影穿透镂空结构在地面留下的精细莫尔条纹阴影。",
    image: "/src/assets/images/regenerated_image_1783078921135.png",
    tags: ["Grasshopper", "Blender", "Parameteric Grid", "Soft Shadowing"],
    specs: "MESH POLYGONS: 1,200,000 | SHADOW RESOLUTION: 4K"
  },
  {
    id: "model-13",
    title: "Obsidian Pro: 概念全包裹降噪头戴耳机",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "运用极为低调的纯黑哑光皮革，搭配暗灰色抛光镀铬连接件。由于纯黑色细节容易淹没，特别布置了数道侧向细长片状面光源（Gobo rim light），勾勒出流畅利落的外轮廓曲线。",
    image: "/src/assets/images/3.png",
    tags: ["C4D", "Octane Render", "Rim Light", "Leather Microtextures"],
    specs: "CONTRAST EXPONENT: 1.2 | GLOSS SCALE: 0.05"
  },
  {
    id: "model-14",
    title: "Futura: 概念电驱动概念摩托",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "探索先锋出行工具的空气动力学。无轮毂空心轮圈设计，一体式流线碳纤维车壳。在模拟雨夜街头霓虹的湿滑沥青地面上进行渲染，重点还原湿滑地面反射的冷暖色调溢出效果。",
    image: "/src/assets/images/regenerated_image_1783064296783.png",
    tags: ["Rhino", "KeyShot 11", "Wet Surface", "Neon Specular"],
    specs: "RAY BOUNCES: 16 | ROUGHNESS MAP: TRILINEAR"
  },
  {
    id: "model-15",
    title: "Vapor Desk: 悬浮玻璃概念办公套件",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "研究现代办公室的视觉解构。桌面采用一块厚度达40mm的超白高通透钢化玻璃，悬浮于两个对称哑光白混凝土几何立方体底座之上。完美模拟光线在玻璃厚边缘的淡绿色偏光现象。",
    image: "/src/assets/images/16.jpg",
    tags: ["Blender", "Cycles", "Thick Glass Dispersion", "Minimalist Living"],
    specs: "GLASS CAUSTICS: ON | REFLECT INDEX: 1.517"
  },
  {
    id: "model-16",
    title: "Prism Node: 概念高算力边缘计算核心",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "多面体晶格雕刻外观，内置彩虹偏振变色镀膜。当光线从不同角度切入晶格切面时，渲染出炫彩的彩虹光谱散射（Spectral Dispersion），展现无与伦比的高维数字科技感。",
    image: "/src/assets/images/10.jpeg",
    tags: ["Houdini", "Octane Spectrals", "Anisotropic Gradients", "Polyhedron Mesh"],
    specs: "DISPERSION COEFFICIENT: 0.045 | RESOLUTION: 4000x5000"
  },
  {
    id: "model-17",
    title: "Quantum Controller: 模块化次世代无线手柄",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "针对专业玩家设计的概念硬件。握把部分采用了带防汗纹理的特种橡胶双色注塑工艺，金属按键则是高硬度钨钢合金。精雕细琢高强度操作摩擦产生的微磨损表面细节。",
    image: "/src/assets/images/36.jpg",
    tags: ["C4D", "KeyShot 11", "Two-Shot Molding", "Tungsten Alloy"],
    specs: "TEXTURE SCALE: 0.002mm | BUMP DEPTH: 0.05"
  },
  {
    id: "model-18",
    title: "Hydra Care: 概念高端智能极简吹风机",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "无叶片极简环形中空出风设计。整机喷涂丝绒手感漆，出风口镶嵌玫瑰金电镀高亮装饰环。使用高柔和侧向柔光箱模拟丝绒材质在弯曲处的优雅光哑对比弧线。",
    image: "/src/assets/images/2.png",
    tags: ["C4D", "Octane Render", "Velvet Rubber Paint", "Electroplated Metal"],
    specs: "SPECULAR ROUGHNESS: 0.72 | METALLIC: 0.15"
  },
  {
    id: "model-19",
    title: "Zephyr Case: 超跑铝镁合金全侧透机箱",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "以超跑发动机舱为灵感。框架采用 4mm 纯铝板多折弯工艺，两面拼装深空灰高防暴钢化玻璃。在强聚光束照射下，细致展现拉丝金属的纵向各向异性高光分布（Anisotropy）。",
    image: "/src/assets/images/22.jpg",
    tags: ["Rhino Nurbs", "Octane Render", "Anisotropic Metal", "Chassis Design"],
    specs: "ANISOTROPY ANGLE: 90 deg | NOISE DENOISE: ALBEDO GUIDED"
  },
  {
    id: "model-20",
    title: "Aura Bulb: 浮空概念悬浮无线钨丝灯",
    category: "modeling",
    categoryLabel: "建模渲染",
    description: "重力与复古科技的魔幻交集。基于电磁悬浮技术让复古LED钨丝灯泡浮空发光。极其精密地刻画发光螺旋长灯丝在发热状态下的色温过渡、自发光材质（Emissive）与玻璃内壁的二次反射焦散点。",
    image: "/src/assets/images/32.png",
    tags: ["KeyShot 11", "Emissive Color Temperature", "Volumetric Caustics", "Floating Physics"],
    specs: "COLOR TEMP: 2700K | LUMINOUS FLUX: 120lm"
  },

  // AIGC赋能 (AIGC Empowerment) - 10 Items
  {
    id: "aigc-1",
    title: "Neural Flora: 碳基生物与电路共生体",
    category: "aigc",
    categoryLabel: "AIGC赋能",
    description: "通过 LLM 细致雕琢的提示词逻辑工程，引导 AI 算法进行有机生态与数字脉络编织。展示碳基植物在芯片电路激发下产生的荧光花苞，探索生物机器共生美学。",
    image: "/src/assets/images/g1.jpg",
    tags: ["Midjourney v6", "Prompt Engineering", "ComfyUI Refiner", "Digital Post-process"],
    specs: "LATENT STEPS: 35 | SAMPLER: DPM++ 2M Karras"
  },
  {
    id: "aigc-2",
    title: "Titan Face: 钛金液态雕塑概念面容",
    category: "aigc",
    categoryLabel: "AIGC赋能",
    description: "基于扩散模型深度迭代，创造出带有古希腊石雕质感的高精度数字面容，并在太阳穴处融合流线型的液态钛，诠释冷冰算法外壳下对感性情绪的数字模仿。",
    image: "/src/assets/images/g10.jpg",
    tags: ["Stable Diffusion", "ControlNet Tile", "SDXL base", "Aesthetic LoRA"],
    specs: "RESOLUTION: 4096 x 5120 | CFG SCALE: 7.0"
  },
  {
    id: "aigc-3",
    title: "Zen Planet: 环状行星与盐滩极静冥想",
    category: "aigc",
    categoryLabel: "AIGC赋能",
    description: "算法推演而出的永无之境。静谧的浅粉色盐滩、深邃星空与低挂的巨型环状行星交互，大跨度色调的平滑色块渲染，展现极度克制、空灵安详的星际冥想视觉。",
    image: "/src/assets/images/g11.jpg",
    tags: ["Midjourney Niji 6", "Concept Design", "Atmospheric Render", "Color Correction"],
    specs: "RATIO: 16:9 | STYLIZED VALUE: 750"
  },
  {
    id: "aigc-4",
    title: "PolyLoom: 参数化高弹多孔智能面料",
    category: "aigc",
    categoryLabel: "AIGC赋能",
    description: "利用生成网络算子高频迭代，重构出具有未来触感的高回弹多孔参数化面料。旨在为下一代虚拟可穿戴设备以及先锋智能外设提供独特的有机防滑织物触感。",
    image: "/src/assets/images/g2.jpg",
    tags: ["Stable Diffusion", "Lora Parameterized", "Texture Synthesis", "Normal Map Export"],
    specs: "SEAMLESS TILEABLE | UPSCALER: ESRGAN_4x"
  },
  {
    id: "aigc-5",
    title: "Liquid Aurora: 抽象流体渐变彩虹焦散",
    category: "aigc",
    categoryLabel: "AIGC赋能",
    description: "通过多层潜空间引导生成的流体动力学解构。调试细腻的极光色泽，将有机流线体与柔和半透发光玻璃融合，重塑数字雕塑的先锋质感。",
    image: "/src/assets/images/g3.jpg",
    tags: ["Midjourney v6", "Fluid Simulation", "Color Gradients", "Post-process"],
    specs: "RATIO: 4:3 | PROMPT LEVEL: DETAILED"
  },
  {
    id: "aigc-6",
    title: "Chamber of Echoes: 未来混凝土空灵冥想室",
    category: "aigc",
    categoryLabel: "AIGC赋能",
    description: "算法推演的未来主义大跨度空间。巨大的天窗漫反射柔和冷光，斑驳的质感混凝土与流动的微光几何体组合，带来极具禅意的空灵呼吸感。",
    image: "/src/assets/images/g4.png",
    tags: ["Stable Diffusion XL", "Architectural Gen", "Chiaroscuro", "Atmosphere"],
    specs: "STEPS: 40 | SEED: 7891349012"
  },
  {
    id: "aigc-7",
    title: "Ethereal Shell: 智能仿生骨骼多维外壳",
    category: "aigc",
    categoryLabel: "AIGC赋能",
    description: "基于多模态大模型架构共同生成的微观穿戴保护系统。运用高度精细的渐变半透明高分子聚合纤维细节，展现轻量化、坚韧与数字未来的完美结合。",
    image: "/src/assets/images/g5.png",
    tags: ["ComfyUI", "Bionic Structure", "Polymer Material", "Micro Details"],
    specs: "SAMPLER: Euler a | DENOISE: 0.45"
  },
  {
    id: "aigc-8",
    title: "Prism Void: 概念多晶折射光谱棱镜",
    category: "aigc",
    categoryLabel: "AIGC赋能",
    description: "通过微米级光线追踪与深度扩散推演出的水晶体。极光色彩的光束被完全束缚并在多维棱角内多次折射折射，反射出斑斓交错的高对比彩虹光栅。",
    image: "/src/assets/images/g6.jpg",
    tags: ["Midjourney v6", "Caustic Raytrace", "Rainbow Refraction", "Specular Glow"],
    specs: "RATIO: 1:1 | CFG: 8.5"
  },
  {
    id: "aigc-9",
    title: "Organic Matrix: 仿生神经网络流体晶体",
    category: "aigc",
    categoryLabel: "AIGC赋能",
    description: "探索微观实体与能量律动的数字重组。哑光渐变亚克力外壳与发光超导线路缠绕，多层次微粒渲染在强聚光下展示出液态钛与电荷流动的科幻律动。",
    image: "/src/assets/images/g7.jpg",
    tags: ["Stable Diffusion", "SDXL Turbo", "Generative Pattern", "Dynamic Fluids"],
    specs: "LATENT STEPS: 20 | CFG: 5.0"
  },
  {
    id: "aigc-10",
    title: "Celestial Dust: 极静微尘气流轨迹雕塑",
    category: "aigc",
    categoryLabel: "AIGC赋能",
    description: "使用大跨度流体扩散动力学生筑的流沙与风迹。微弱暖光在细密波澜间渐变漫延，精准勾勒出风蚀形成的永恒质感，极致还原静谧旷野与科幻质地。",
    image: "/src/assets/images/g8.jpg",
    tags: ["Midjourney Niji 6", "Desert Aesthetics", "Dynamic Dust", "Achromatic Theme"],
    specs: "RATIO: 16:10 | STYLIZED: 900"
  },

  // 详情页 (Detail Pages / Case Studies) - 13 Items
  {
    id: "detail-1",
    title: "SaaS Analytics Dashboard: 智能数据监控中心",
    category: "detail",
    categoryLabel: "详情页",
    description: "一款高频交易级数据大屏详情设计。全站使用 1px 的高对比极细发丝线勾勒多维 Bento Grid 区域，在柔和纯白中利用精准的蓝绿单色强调信息焦散点，视觉效果冷冽、高效。",
    image: "src/assets/images/微信图片_20260701111344_768_3.png",
    tags: ["Figma Layout", "Typography System", "Grid Structure", "Data Viz Style"],
    specs: "GRID BASE: 8px | CONTRAST RATIO: 7.2:1 (APCA)"
  },
  {
    id: "detail-2",
    title: "Nova Mobile UI: 极简生活出行交互链路",
    category: "detail",
    categoryLabel: "详情页",
    description: "致力于重构通勤交互体验。在大白空背景下，融入超扁平几何图标与柔和的卡片微距转场动效。剔除一切冗余装饰，仅保留纯粹的核心出行状态，极极具克制力。",
    image: "src/assets/images/微信图片_20260701111344_769_3.png",
    tags: ["Mobile Experience", "Interactive Prototyping", "Aesthetic Spacing", "iOS Native"],
    specs: "DENSITY: COMPACT | TARGET TOUCH SIZE: 48dp"
  },
  {
    id: "detail-3",
    title: "Minimalist Editorial Layout: 极简画廊式双语网页",
    category: "detail",
    categoryLabel: "详情页",
    description: "非对称排版与排字美学研究。极度考究中文字符与大写英文字标在横纵网格间的呼吸咬合，采用宽裕的行高与字母间距，让阅读成为一种具有仪式感的视觉漫步。",
    image: "src/assets/images/微信图片_20260701111344_770_3.png",
    tags: ["Web Typography", "Asymmetry Grid", "White Space Art", "Clean Front-end"],
    specs: "FONT PAIR: Syne + Inter + Mono | TRACKING: 0.25em"
  },
  {
    id: "detail-4",
    title: "Interactive UX Frame: 触感式全周期交互体系",
    category: "detail",
    categoryLabel: "详情页",
    description: "高仿真交互线框图研究，展示一款面向创意工作者资源整合工具。深入优化弹窗、侧滑及分级折叠目录，每个阴影与渐变都精准服务于视线引导，诠释匠心造诣。",
    image: "src/assets/images/微信图片_20260701111344_771_3.png",
    tags: ["Wireframe Design", "User Flow Logic", "Functional Aesthetics", "Component Library"],
    specs: "RESPONSIVE COMPONENT MATRIX | VARIANT count: 120+"
  },
  {
    id: "detail-5",
    title: "Aether OS: 先锋全息操作系统界面",
    category: "detail",
    categoryLabel: "详情页",
    description: "探索次世代交互维度的操作系统概念。通过极简的半透明毛玻璃材质、炫彩极光微光背景与超高清晰度的几何排版，赋予数字界面呼吸感与空间深度。",
    image: "src/assets/images/微信图片_20260701111337_764_3.png",
    tags: ["OS Interface", "Holographic UX", "Glassmorphism", "Future UI"],
    specs: "TRANSLUCENCY: 85% | RENDER ENGINE: WEBGL"
  },
  {
    id: "detail-6",
    title: "Echo Branding: 声音科技品牌视觉识别",
    category: "detail",
    categoryLabel: "详情页",
    description: "为声音媒介初创公司量身定制的品牌形象。从克制而高级的黑白平面版式、流畅起伏的声学线条，到独创的网格版式，展示品牌深邃前卫的调性。",
    image: "src/assets/images/微信图片_20260701111345_773_3.png",
    tags: ["Brand Identity", "Minimalism", "Typography", "Visual System"],
    specs: "GRID SYSTEM: GOLDEN RATIO | COLOR: MONOCHROME"
  },
  {
    id: "detail-7",
    title: "Apex Smart Ring: 可穿戴先锋科技产品详情",
    category: "detail",
    categoryLabel: "详情页",
    description: "极致微型的未来健康跟踪穿戴设备详情。全页面设计以高对比黑白为基调，搭配细腻的高清微距产品渲染图，展示精致高雅而又富有人文关怀的高级科技感。",
    image: "src/assets/images/微信图片_20260701111345_775_3.png",
    tags: ["Product Detail", "Hardware UI", "Minimalist Design", "E-commerce Layout"],
    specs: "FONT: CHRONICLE DISPLAY | CONTRAST: OMNI"
  },
  {
    id: "detail-8",
    title: "Lumen Smart Home: 智能家居环境控制器",
    category: "detail",
    categoryLabel: "详情页",
    description: "极简奢华的智能灯光与环境温度管理界面。在细腻的磨砂白质感界面中，辅以流畅的径向色彩滑动条，让用户能够通过微妙的指尖触控完成家中的光影氛围编织。",
    image: "src/assets/images/微信图片_20260701114700_783_3.png",
    tags: ["Smart Home UI", "Haptic Slider", "Soft UI", "Neumorphism Glow"],
    specs: "INTERACTIVE LATENCY: <16ms | RESOLUTION: RESPONSIVE"
  },
  {
    id: "detail-9",
    title: "Vivid Mobile App: 潮流生活方式交互设计",
    category: "detail",
    categoryLabel: "详情页",
    description: "面向年轻一代的艺术与潮流文化社区。打破常规网格，采用大胆的非对称排字、极高对比度的色块冲突和充满律动感的滑动交互，带来耳目一新的数字化交互体验。",
    image: "src/assets/images/微信图片_20260701114700_785_3.jpg",
    tags: ["Mobile App", "Asymmetric Layout", "Street Culture", "Trendy UX"],
    specs: "FRAME RATE: 120FPS | COLOR PROFILE: DCI-P3"
  },
  {
    id: "detail-10",
    title: "Atelier Studio: 先锋创意工作室官网",
    category: "detail",
    categoryLabel: "详情页",
    description: "融合包豪斯美学与极致现代主义的建筑设计工作室主页。页面大面积留白，搭配巨幅高清作品图，以冷峻理性的瑞士版式排列文字，传达永恒而纯粹的设计信仰。",
    image: "src/assets/images/微信图片_20260701114700_784_3.jpg",
    tags: ["Web Portfolio", "Bauhaus Aesthetic", "Grid System", "Editorial Web"],
    specs: "CONTAINER MAX: 1440px | BASE GRID: 12-COLUMN"
  },
  {
    id: "detail-11",
    title: "Orion E-Ink Reader: 概念电子纸阅读器系统",
    category: "detail",
    categoryLabel: "详情页",
    description: "面向重度阅读爱好者的墨水屏纯享系统。在无色彩干扰的环境中，精心打磨中文字符排版的间距、行宽、甚至笔画的像素级防抖，让屏幕重现纸张般温润的阅读本色。",
    image: "src/assets/images/微信图片_20260701111344_772_3.png",
    tags: ["E-Ink OS", "Typography Layout", "Cognitive Comfort", "Paper Texture"],
    specs: "REFRESH RATE: 8Hz | CONTRAST RATIO: High Contrast (Reflection)"
  },
  {
    id: "detail-12",
    title: "Zephyr Watch App: 概念环形智能腕表交互",
    category: "detail",
    categoryLabel: "详情页",
    description: "针对奢华智能手表的微型环绕式控制界面。利用圆弧边缘完美的动态投影与轨迹计算，令气泡式菜单及运动环形图在表盘四周流畅飞舞，演绎前沿奢华质感。",
    image: "src/assets/images/微信图片_20260701111337_765_3.png",
    tags: ["Circular UI", "WatchOS Design", "Aesthetic Projection", "Interactive Bubbles"],
    specs: "CIRCLE DIAMETER: 45mm | SMOOTHNESS: 60fps"
  },
  {
    id: "detail-13",
    title: "Infinite Museum: 虚拟交互式美术馆导览",
    category: "detail",
    categoryLabel: "详情页",
    description: "为先锋数字画廊打造的线上三维沉浸导览系统。通过平滑的双向转场、流利的视角拉伸及极简线框比例，让观者在数字屏幕中感受到实体展厅的宏大庄严与艺术穿透力。",
    image: "src/assets/images/微信图片_20260701114700_786_3.jpg",
    tags: ["Virtual Tour", "Web3D Experience", "Museum UI", "Minimalist Exhibition"],
    specs: "TRANSITION TIME: 1.2s | SHADER COMPILER: GLSL"
  }
];
