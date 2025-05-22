export const publication_categories: { c1: string; c2s: string[] }[] = [
  {
    c1: 'Topic',
    c2s: [
      'Dataset/Benchmark',
      'Embodied AI',
      'General',
      'Generative',
      'Multimodality',
      'RL',
      'Vision',
    ],
  },
  {
    c1: 'Year',
    c2s: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', 'Previous'],
  },
  {
    c1: 'PI',
    c2s: ['Ping Luo', 'Xihui Liu', 'Hongyang Li', 'Bo Dai'],
  },
];

export const publications: {
  title: string;
  authors: string;
  proceedings: string;
  links: { website: string; url: string }[];
  keys: string[];
  pis: string[];
}[] = [
  {
    title:
      'AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems',
    authors: 'Team AgiBot-World',
    proceedings: 'arXiv 2025',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2503.06669' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/AgiBot-World' },
      { website: 'Article', url: 'https://opendrivelab.com/blog/agibot-world/' },
      { website: 'bilibili', url: 'https://www.bilibili.com/video/BV1sNdGYWEBY' },
    ],
    pis: ['Hongyang Li'],
    keys: ['2025', 'Embodied AI', 'Dataset/Benchmark'],
  },
  {
    title:
      'BEVFormer: Learning Bird’s-Eye-View Representation From LiDAR-Camera via Spatiotemporal Transformers',
    authors:
      'Zhiqi Li, Wenhai Wang, Hongyang Li, Enze Xie, Chonghao Sima, Tong Lu, Yu Qiao, Jifeng Dai',
    proceedings: 'TPAMI 2025',
    links: [
      {
        website: 'Paper',
        url: 'https://www.computer.org/csdl/journal/tp/2025/03/10791908/22ABgP6PlUQ',
      },
      { website: 'GitHub', url: 'https://github.com/fundamentalvision/BEVFormer' },
      { website: 'Zhihu', url: 'https://zhuanlan.zhihu.com/p/564295059' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2025'],
  },
  {
    title: 'Centaur: Robust End-to-End Autonomous Driving with Test-Time Training',
    authors:
      'Chonghao Sima, Kashyap Chitta, Zhiding Yu, Shiyi Lan, Ping Luo, Andreas Geiger, Hongyang Li, Jose M. Alvarez',
    proceedings: 'arXiv 2025',
    links: [{ website: 'Paper', url: 'https://arxiv.org/abs/2503.11650' }],
    pis: ['Ping Luo', 'Hongyang Li'],
    keys: ['Embodied AI', '2025'],
  },
  {
    title: 'Decoupled Diffusion Sparks Adaptive Scene Generation',
    authors:
      'Yunsong Zhou, Naisheng Ye, William Ljungbergh, Tianyu Li, Jiazhi Yang, Zetong Yang, Hongzi Zhu, Christoffer Petersson, Hongyang Li',
    proceedings: 'arXiv 2025',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2504.10485' },
      { website: 'Page', url: 'https://opendrivelab.com/Nexus' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2025'],
  },
  {
    title: 'Learning to Act Anywhere with Task-centric Latent Actions',
    authors:
      'Qingwen Bu, Yanting Yang, Jisong Cai, Shenyuan Gao, Guanghui Ren, Maoqing Yao, Ping Luo, Hongyang Li',
    proceedings: 'RSS 2025',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2505.06111' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/UniVLA' },
    ],
    pis: ['Ping Luo', 'Hongyang Li'],
    keys: ['2025', 'Embodied AI'],
  },
  {
    title: 'MTGS: Multi-Traversal Gaussian Splatting',
    authors:
      'Tianyu Li, Yihang Qiu, Zhenhua Wu, Carl Lindström, Peng Su, Matthias Nießner, Hongyang Li',
    proceedings: 'arXiv 2025',
    links: [{ website: 'Paper', url: 'https://arxiv.org/abs/2503.12552' }],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2025'],
  },
  {
    title: '3D Data Augmentation for Driving Scenes on Camera',
    authors:
      'Wenwen Tong, Jiangwei Xie, Tianyu Li, Yang Li, Hanming Deng, Bo Dai, Lewei Lu, Hao Zhao, Junchi Yan, Hongyang Li',
    proceedings: 'PRCV 2024',
    links: [
      { website: 'Paper', url: 'https://link.springer.com/chapter/10.1007/978-981-97-8508-7_4' },
      { website: 'GitHub', url: '' },
    ],
    pis: ['Hongyang Li', 'Bo Dai'],
    keys: ['Embodied AI', '2024'],
  },
  {
    title: 'Closed-Loop Visuomotor Control with Generative Expectation for Robotic Manipulation',
    authors:
      'Qingwen Bu, Jia Zeng, Li Chen, Yanchao Yang, Guyue Zhou, Junchi Yan, Ping Luo, Heming Cui, Yi Ma, Hongyang Li',
    proceedings: 'NeurIPS 2024',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2409.09016' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/CLOVER' },
      { website: 'bilibili', url: 'https://www.bilibili.com/video/BV1rHqZYeECL' },
    ],
    pis: ['Ping Luo', 'Hongyang Li'],
    keys: ['Embodied AI', '2024'],
  },
  {
    title: 'DriveLM: Driving with Graph Visual Question Answering',
    authors:
      'Chonghao Sima, Katrin Renz, Kashyap Chitta, Li Chen, Hanxue Zhang, Chengen Xie, Ping Luo, Andreas Geiger, Hongyang Li',
    proceedings: 'ECCV 2024 Oral',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2312.14150' },
      { website: 'Dataset', url: 'https://github.com/OpenDriveLab/DriveLM' },
      { website: 'Page', url: 'https://opendrivelab.com/DriveLM/' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/DriveLM' },
    ],
    pis: ['Ping Luo', 'Hongyang Li'],
    keys: ['2024', 'Embodied AI', 'Dataset/Benchmark'],
  },
  {
    title: 'Embodied Understanding of Driving Scenarios',
    authors:
      'Yunsong Zhou, Linyan Huang, Qingwen Bu, Jia Zeng, Tianyu Li, Hang Qiu, Hongzi Zhu, Minyi Guo, Yu Qiao, Hongyang Li',
    proceedings: 'ECCV 2024',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2403.04593' },
      { website: 'Page', url: 'https://opendrivelab.github.io/elm.github.io/' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/ELM' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2024'],
  },
  {
    title: 'End-to-End Autonomous Driving: Challenges and Frontiers',
    authors: 'Li Chen, Penghao Wu, Kashyap Chitta, Bernhard Jaeger, Andreas Geiger, Hongyang Li',
    proceedings: 'TPAMI 2024',
    links: [
      { website: 'Paper', url: 'https://ieeexplore.ieee.org/abstract/document/10614862/' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/End-to-end-Autonomous-Driving' },
    ],
    pis: ['Hongyang Li'],
    keys: ['2024', 'Embodied AI'],
  },
  {
    title: 'FastMAC: Stochastic Spectral Sampling of Correspondence Graph',
    authors: 'Yifei Zhang, Hao Zhao, Hongyang Li, Siheng Chen',
    proceedings: 'CVPR 2024',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2403.08770' },
      { website: 'GitHub', url: 'https://github.com/Forrest-110/FastMAC' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Vision', '2024'],
  },
  {
    title: 'Fully Sparse 3D Occupancy Prediction',
    authors:
      'Haisong Liu, Yang Chen, Haiguang Wang, Zetong Yang, Tianyu Li, Jia Zeng, Li Chen, Hongyang Li, Limin Wang',
    proceedings: 'ECCV 2024',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2312.17118' },
      { website: 'GitHub', url: 'https://github.com/MCG-NJU/SparseOcc' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2024'],
  },
  {
    title: 'Generalized Predictive Model for Autonomous Driving',
    authors:
      'Jiazhi Yang, Shenyuan Gao, Yihang Qiu, Li Chen, Tianyu Li, Bo Dai, Kashyap Chitta, Penghao Wu, Jia Zeng, Ping Luo, Jun Zhang, Andreas Geiger, Yu Qiao, Hongyang Li',
    proceedings: 'CVPR 2024 Highlight',
    links: [
      {
        website: 'Paper',
        url: 'https://openaccess.thecvf.com/content/CVPR2024/html/Yang_Generalized_Predictive_Model_for_Autonomous_Driving_CVPR_2024_paper.html',
      },
      { website: 'Dataset', url: 'https://github.com/OpenDriveLab/DriveAGI/tree/main/opendv' },
      {
        website: 'Medium',
        url: 'https://medium.com/@opendrivelab/towards-next-level-of-autonomous-driving-via-world-models-aff0eb7fee00',
      },
    ],
    pis: ['Ping Luo', 'Hongyang Li', 'Bo Dai'],
    keys: ['Embodied AI', '2024', 'Generative', 'Dataset/Benchmark'],
  },
  {
    title: 'LaneSegNet: Map Learning with Lane Segment Perception for Autonomous Driving',
    authors: 'Tianyu Li, Peijin Jia, Bangjun Wang, Li Chen, Kun Jiang, Junchi Yan, Hongyang Li',
    proceedings: 'ICLR 2024',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2312.16108' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/LaneSegNet' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2024'],
  },
  {
    title: 'Learning Manipulation by Predicting Interaction',
    authors:
      'Jia Zeng, Qingwen Bu, Bangjun Wang, Wenke Xia, Li Chen, Hao Dong, Haoming Song, Dong Wang, Di Hu, Ping Luo, Heming Cui, Bin Zhao, Xuelong Li, Yu Qiao, Hongyang Li',
    proceedings: 'RSS 2024',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2406.00439' },
      { website: 'Page', url: 'https://opendrivelab.com/MPI/' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/MPI' },
    ],
    pis: ['Ping Luo', 'Hongyang Li'],
    keys: ['Embodied AI', '2024'],
  },
  {
    title: 'NAVSIM: Data-Driven Non-Reactive Autonomous Vehicle Simulation and Benchmarking',
    authors:
      'Daniel Dauner, Marcel Hallgarten, Tianyu Li, Xinshuo Weng, Zhiyu Huang, Zetong Yang, Hongyang Li, Igor Gilitschenski, Boris Ivanovic, Marco Pavone, Andreas Geiger, Kashyap Chitta',
    proceedings: 'NeurIPS 2024 Track Datasets and Benchmarks',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2406.15349' },
      { website: 'GitHub', url: 'https://github.com/autonomousvision/navsim' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2024'],
  },
  {
    title: 'Open-sourced Data Ecosystem in Autonomous Driving: The Present and Future',
    authors:
      'Hongyang Li, Yang Li, Huijie Wang, Jia Zeng, Huilin Xu, Pinlong Cai, Li Chen, Junchi Yan, Feng Xu, Lu Xiong, Jingdong Wang, Futang Zhu, Kai Yan, Chunjing Xu, Tiancai Wang, Fei Xia, Beipeng Mu, Zhihui Peng, Dahua Lin, Yu Qiao',
    proceedings: 'SCIENTIA SINICA Informationis 2024',
    links: [
      { website: 'Paper', url: 'http://engine.scichina.com/doi/10.1360/SSI-2023-0313' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/DriveAGI' },
      {
        website: 'ResearchGate',
        url: 'https://www.researchgate.net/publication/375331218_Open-sourced_Data_Ecosystem_in_Autonomous_Driving_the_Present_and_Future?channel=doi&linkId=65467b44ce88b87031c4ceab&showFulltext=true',
      },
      { website: 'Arxiv', url: 'https://arxiv.org/abs/2312.03408' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2024'],
  },
  {
    title: 'Reasoning Multi-Agent Behavioral Topology for Interactive Autonomous Driving',
    authors: 'Haochen Liu, Li Chen, Yu Qiao, Chen Lv, Hongyang Li',
    proceedings: 'NeurIPS 2024',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2409.18031' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/BeTop' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2024'],
  },
  {
    title:
      'Referred by Multi-Modality: A Unified Temporal Transformer for Video Object Segmentation',
    authors:
      'Shilin Yan, Renrui Zhang, Ziyu Guo, Wenchao Chen, Wei Zhang, Hongyang Li, Yu Qiao, Zhongjiang He, Peng Gao',
    proceedings: 'AAAI 2024',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2305.16318' },
      { website: 'GitHub', url: 'https://github.com/OpenGVLab/MUTR' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Vision', '2024'],
  },
  {
    title:
      'Test-time Correction with Human Feedback: An Online 3D Detection System via Visual Prompting',
    authors: 'Zetong Yang, Hanxue Zhang, Yanan Sun, Li Chen, Fei Xia, Fatma Güney, Hongyang Li',
    proceedings: 'arXiv 2024',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2412.07768' },
      { website: 'GitHub', url: '' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Vision', '2024'],
  },
  {
    title: 'Towards Synergistic, Generalized, and Efficient Dual-System for Robotic Manipulation',
    authors:
      'Qingwen Bu, Hongyang Li, Li Chen, Jisong Cai, Jia Zeng, Heming Cui, Maoqing Yao, Yu Qiao',
    proceedings: 'arXiv 2024',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2410.08001' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/RoboDual' },
      { website: 'Page', url: 'https://opendrivelab.com/RoboDual/' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2024'],
  },
  {
    title:
      'Vista: A Generalizable Driving World Model with High Fidelity and Versatile Controllability',
    authors:
      'Shenyuan Gao, Jiazhi Yang, Li Chen, Kashyap Chitta, Yihang Qiu, Andreas Geiger, Jun Zhang, Hongyang Li',
    proceedings: 'NeurIPS 2024',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2405.17398' },
      { website: 'Page', url: 'https://opendrivelab.com/Vista/' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/Vista' },
      {
        website: 'Medium',
        url: 'https://medium.com/@opendrivelab/towards-next-level-of-autonomous-driving-via-world-models-aff0eb7fee00',
      },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2024', 'Generative'],
  },
  {
    title: 'Visual Point Cloud Forecasting enables Scalable Autonomous Driving',
    authors: 'Zetong Yang, Li Chen, Yanan Sun, Hongyang Li',
    proceedings: 'CVPR 2024 Highlight',
    links: [
      {
        website: 'Paper',
        url: 'https://openaccess.thecvf.com/content/CVPR2024/html/Yang_Visual_Point_Cloud_Forecasting_enables_Scalable_Autonomous_Driving_CVPR_2024_paper.html',
      },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/ViDAR' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2024'],
  },
  {
    title: 'A Survey of Reasoning with Foundation Models: Concepts, Methodologies, and Outlook',
    authors:
      'Jiankai Sun, Chuanyang Zheng, Enze Xie, Zhengying Liu, Ruihang Chu, Jianing Qiu, Jiaqi Xu, Mingyu Ding, Hongyang Li, Mengzhe Geng, Yue Wu, Wenhai Wang, Junsong Chen, Zhangyue Yin, Xiaozhe Ren, Jie Fu, Junxian He, Yuan Wu, Qi Liu, Xihui Liu, Yu Li, Hao Dong, Yu Cheng, Ming Zhang, Pheng Ann Heng, Jifeng Dai, Ping Luo, Jingdong Wang, Ji-Rong Wen, Xipeng Qiu, Yike Guo, Hui Xiong, Qun Liu, Zhenguo Li',
    proceedings: 'ACM Computing Surveys 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:oPLKW5k6eA4C',
      },
    ],
    keys: ['General', 'General', '2023'],
    pis: ['Ping Luo', 'Xihui Liu', 'Hongyang Li'],
  },
  {
    title: 'Distilling Focal Knowledge from Imperfect Expert for 3D Object Detection',
    authors: 'Jia Zeng, Li Chen, Hanming Deng, Lewei Lu, Junchi Yan, Yu Qiao, Hongyang Li',
    proceedings: 'CVPR 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://openaccess.thecvf.com/content/CVPR2023/html/Zeng_Distilling_Focal_Knowledge_From_Imperfect_Expert_for_3D_Object_Detection_CVPR_2023_paper.html',
      },
      { website: 'GitHub', url: '' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2023'],
  },
  {
    title:
      'DriveAdapter: Breaking the Coupling Barrier of Perception and Planning in End-to-End Autonomous Driving',
    authors: 'Xiaosong Jia, Yulu Gao, Li Chen, Junchi Yan, Patrick Langechuan Liu, Hongyang Li',
    proceedings: 'ICCV 2023 Oral',
    links: [
      {
        website: 'Paper',
        url: 'https://openaccess.thecvf.com/content/ICCV2023/html/Jia_DriveAdapter_Breaking_the_Coupling_Barrier_of_Perception_and_Planning_in_ICCV_2023_paper.html',
      },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/DriveAdapter' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2023'],
  },
  {
    title: 'Geometric-aware Pretraining for Vision-centric 3D Object Detection',
    authors:
      'Linyan Huang, Huijie Wang, Jia Zeng, Shengchuan Zhang, Liujuan Cao, Rongrong Ji, Junchi Yan, Hongyang Li',
    proceedings: 'arXiv 2023',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2304.03105' },
      { website: 'GitHub', url: '' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2023'],
  },
  {
    title: 'Graph-based Topology Reasoning for Driving Scenes',
    authors:
      'Tianyu Li, Li Chen, Huijie Wang, Yang Li, Jiazhi Yang, Xiangwei Geng, Shengyin Jiang, Yuting Wang, Hang Xu, Chunjing Xu, Junchi Yan, Ping Luo, Hongyang Li',
    proceedings: 'arXiv 2023',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2304.05277' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/TopoNet' },
    ],
    pis: ['Ping Luo', 'Hongyang Li'],
    keys: ['Embodied AI', '2023'],
  },
  {
    title:
      'HDGT: Heterogeneous Driving Graph Transformer for Multi-Agent Trajectory Prediction via Scene Encoding',
    authors: 'Xiaosong Jia, Penghao Wu, Li Chen, Hongyang Li, Yu Liu, Junchi Yan',
    proceedings: 'TPAMI 2023',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2205.09753' },
      { website: 'GitHub', url: 'https://github.com/OpenPerceptionX/HDGT' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2023'],
  },
  {
    title: 'LLM4Drive: A Survey of Large Language Models for Autonomous Driving',
    authors: 'Zhenjie Yang, Xiaosong Jia, Hongyang Li, Junchi Yan',
    proceedings: 'arXiv 2023',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2311.01043' },
      { website: 'GitHub', url: 'https://github.com/Thinklab-SJTU/Awesome-LLM4AD' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2023'],
  },
  {
    title: 'Leveraging Vision-Centric Multi-Modal Expertise for 3D Object Detection',
    authors:
      'Linyan Huang, Zhiqi Li, Chonghao Sima, Wenhai Wang, Jingdong Wang, Yu Qiao, Hongyang Li',
    proceedings: 'NeurIPS 2023',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2310.15670' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/Birds-eye-view-Perception' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2023'],
  },
  {
    title: 'Mimic before Reconstruct: Enhancing Masked Autoencoders with Feature Mimicking',
    authors: 'Peng Gao, Renrui Zhang, Rongyao Fang, Ziyi Lin, Hongyang Li, Hongsheng Li, Qiao Yu',
    proceedings: 'IJCV 2023',
    links: [
      { website: 'Paper', url: 'https://link.springer.com/article/10.1007/s11263-023-01898-4' },
      { website: 'GitHub', url: 'https://github.com/Alpha-VL/ConvMAE' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Vision', '2023'],
  },
  {
    title: 'OpenLane-V2: A Topology Reasoning Benchmark for Unified 3D HD Mapping',
    authors:
      'Huijie Wang, Tianyu Li, Yang Li, Li Chen, Chonghao Sima, Zhenbo Liu, Bangjun Wang, Peijin Jia, Yuting Wang, Shengyin Jiang, Feng Wen, Hang Xu, Ping Luo, Junchi Yan, Wei Zhang, Hongyang Li',
    proceedings: 'NeurIPS 2023 Track Datasets and Benchmarks',
    links: [
      {
        website: 'Paper',
        url: 'https://proceedings.neurips.cc/paper_files/paper/2023/hash/3c0a4c8c236144f1b99b7e1531debe9c-Abstract-Datasets_and_Benchmarks.html',
      },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/OpenLane-V2' },
      { website: 'Dataset', url: 'https://github.com/OpenDriveLab/OpenLane-V2' },
    ],
    pis: ['Ping Luo', 'Hongyang Li'],
    keys: ['Embodied AI', '2023', 'Dataset/Benchmark'],
  },
  {
    title: 'Planning-oriented Autonomous Driving',
    authors:
      'Yihan Hu, Jiazhi Yang, Li Chen, Keyu Li, Chonghao Sima, Xizhou Zhu, Siqi Chai, Senyao Du, Tianwei Lin, Wenhai Wang, Lewei Lu, Xiaosong Jia, Qiang Liu, Jifeng Dai, Yu Qiao, Hongyang Li',
    proceedings: 'CVPR 2023 Best Paper Award',
    links: [
      {
        website: 'Paper',
        url: 'https://openaccess.thecvf.com/content/CVPR2023/html/Hu_Planning-Oriented_Autonomous_Driving_CVPR_2023_paper.html',
      },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/UniAD' },
      { website: 'YouTube', url: 'https://www.youtube.com/watch?v=cyrxJJ_nnaQ' },
      { website: 'Slides', url: 'https://opendrivelab.github.io/UniAD_plenary_talk_slides.pdf' },
      { website: 'Zhihu', url: 'https://zhuanlan.zhihu.com/p/638780421' },
      {
        website: 'WeChat',
        url: 'https://mp.weixin.qq.com/s?__biz=MzkyMDUzMDE2Mw==&mid=2247485809&idx=1&sn=5dbd00380bcf80cc32d11b6e15e93829',
      },
    ],
    pis: ['Hongyang Li'],
    keys: ['2023', 'Embodied AI'],
  },
  {
    title:
      'Policy Pre-Training for End-to-End Autonomous Driving via Self-Supervised Geometric Modeling',
    authors: 'Penghao Wu, Li Chen, Hongyang Li, Xiaosong Jia, Junchi Yan, Yu Qiao',
    proceedings: 'ICLR 2023',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2301.01006' },
      { website: 'GitHub', url: 'https://github.com/opendrivelab/ppgeo' },
      {
        website: 'Slides',
        url: 'https://docs.google.com/presentation/d/1d0MGh3XCxuZujtYgZ0sr6xsAKZ4uS50p/edit?usp=sharing&ouid=118212253182146260973&rtpof=true&sd=true',
      },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2023'],
  },
  {
    title: 'Scene as Occupancy',
    authors:
      'Chonghao Sima, Wenwen Tong, Tai Wang, Li Chen, Silei Wu, Hanming Deng, Yi Gu, Lewei Lu, Ping Luo, Dahua Lin, Hongyang Li',
    proceedings: 'ICCV 2023',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2306.02851' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/OccNet' },
    ],
    pis: ['Ping Luo', 'Hongyang Li'],
    keys: ['Embodied AI', '2023'],
  },
  {
    title: 'Sparse Dense Fusion for 3D Object Detection',
    authors: 'Yulu Gao, Chonghao Sima, Shaoshuai Shi, Shangzhe Di, Si Liu, Hongyang Li',
    proceedings: 'IROS 2023',
    links: [
      { website: 'Paper', url: 'https://arxiv.org/abs/2304.04179' },
      { website: 'GitHub', url: '' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2023'],
  },
  {
    title: 'Stare at What You See: Masked Image Modeling without Reconstruction',
    authors: 'Hongwei Xue, Peng Gao, Hongyang Li, Yu Qiao, Hao Sun, Houqiang Li, Jiebo Luo',
    proceedings: 'CVPR 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://openaccess.thecvf.com/content/CVPR2023/html/Xue_Stare_at_What_You_See_Masked_Image_Modeling_Without_Reconstruction_CVPR_2023_paper.html',
      },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/maskalign' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Vision', '2023'],
  },
  {
    title:
      'Think Twice before Driving: Towards Scalable Decoders for End-to-End Autonomous Driving',
    authors: 'Xiaosong Jia, Penghao Wu, Li Chen, Jiangwei Xie, Conghui He, Junchi Yan, Hongyang Li',
    proceedings: 'CVPR 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://openaccess.thecvf.com/content/CVPR2023/html/Jia_Think_Twice_Before_Driving_Towards_Scalable_Decoders_for_End-to-End_Autonomous_CVPR_2023_paper.html',
      },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/ThinkTwice' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2023'],
  },
  {
    title: "Delving into the Devils of Bird's-Eye-View Perception: A Review, Evaluation and Recipe",
    authors:
      'Hongyang Li, Chonghao Sima, Jifeng Dai, Wenhai Wang, Lewei Lu, Huijie Wang, Jia Zeng, Zhiqi Li, Jiazhi Yang, Hanming Deng, Hao Tian, Enze Xie, Jiangwei Xie, Li Chen, Tianyu Li, Yang Li, Yulu Gao, Xiaosong Jia, Si Liu, Jianping Shi, Dahua Lin, Yu Qiao',
    proceedings: 'TPAMI 2023',
    links: [
      { website: 'Paper', url: 'https://ieeexplore.ieee.org/document/10321736' },
      { website: 'GitHub', url: 'https://github.com/opendrivelab/bevperception-survey-recipe' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2023'],
  },
  {
    title:
      "BEVFormer v2: Adapting Modern Image Backbones to Bird's-Eye-View Recognition via Perspective Supervision",
    authors:
      'Chenyu Yang, Yuntao Chen, Hao Tian, Chenxin Tao, Xizhou Zhu, Zhaoxiang Zhang, Gao Huang, Hongyang Li, Yu Qiao, Lewei Lu, Jie Zhou, Jifeng Dai',
    proceedings: 'CVPR 2023 Highlight',
    links: [
      {
        website: 'Paper',
        url: 'https://openaccess.thecvf.com/content/CVPR2023/html/Yang_BEVFormer_v2_Adapting_Modern_Image_Backbones_to_Birds-Eye-View_Recognition_via_CVPR_2023_paper.html',
      },
      { website: 'GitHub', url: '' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2023'],
  },
  {
    title: 'Align Representations With Base: A New Approach to Self-Supervised Learning',
    authors:
      'Shaofeng Zhang, Lyn Qiu, Feng Zhu, Junchi Yan, Hengrui Zhang, Rui Zhao, Hongyang Li, Xiaokang Yang',
    proceedings: 'CVPR 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://openaccess.thecvf.com/content/CVPR2022/html/Zhang_Align_Representations_With_Base_A_New_Approach_to_Self-Supervised_Learning_CVPR_2022_paper.html',
      },
      { website: 'GitHub', url: '' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Vision', '2022'],
  },
  {
    title: 'PersFormer: 3D Lane Detection via Perspective Transformer and the OpenLane Benchmark',
    authors:
      'Li Chen, Chonghao Sima, Yang Li, Zehan Zheng, Jiajie Xu, Xiangwei Geng, Hongyang Li, Conghui He, Jianping Shi, Yu Qiao, Junchi Yan',
    proceedings: 'ECCV 2022 Oral',
    links: [
      { website: 'Paper', url: 'https://link.springer.com/chapter/10.1007/978-3-031-19839-7_32' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/PersFormer_3DLane' },
      { website: 'Dataset', url: 'https://github.com/OpenDriveLab/OpenLane' },
      {
        website: 'Article',
        url: 'https://patrick-llgc.github.io/Learning-Deep-Learning/paper_notes/persformer.html',
      },
      { website: 'Zhihu', url: 'https://zhuanlan.zhihu.com/p/552908337' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2022', 'Dataset/Benchmark'],
  },
  {
    title:
      'ST-P3: End-to-End Vision-Based Autonomous Driving via Spatial-Temporal Feature Learning',
    authors: 'Shengchao Hu, Li Chen, Penghao Wu, Hongyang Li, Junchi Yan, Dacheng Tao',
    proceedings: 'ECCV 2022',
    links: [
      { website: 'Paper', url: 'https://link.springer.com/chapter/10.1007/978-3-031-19839-7_31' },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/st-p3' },
      { website: 'Zhihu', url: 'https://zhuanlan.zhihu.com/p/544387122' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2022'],
  },
  {
    title:
      'Towards Capturing the Temporal Dynamics for Trajectory Prediction: a Coarse-to-Fine Approach',
    authors: 'Xiaosong Jia, Li Chen, Penghao Wu, Jia Zeng, Junchi Yan, Hongyang Li, Yu Qiao',
    proceedings: 'CoRL 2022',
    links: [
      { website: 'Paper', url: 'https://proceedings.mlr.press/v205/jia23a.html' },
      { website: 'GitHub', url: '' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2022'],
  },
  {
    title:
      'Trajectory-guided Control Prediction for End-to-end Autonomous Driving: A Simple yet Strong Baseline',
    authors: 'Penghao Wu, Xiaosong Jia, Li Chen, Junchi Yan, Hongyang Li, Yu Qiao',
    proceedings: 'NeurIPS 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://proceedings.neurips.cc/paper_files/paper/2022/hash/286a371d8a0a559281f682f8fbf89834-Abstract-Conference.html',
      },
      { website: 'GitHub', url: 'https://github.com/OpenDriveLab/TCP' },
      { website: 'Zhihu', url: 'https://zhuanlan.zhihu.com/p/532665469' },
    ],
    pis: ['Hongyang Li'],
    keys: ['Embodied AI', '2022'],
  },
  {
    title:
      '-Tuning: Transferring Multimodal Foundation Models with Optimal Multi-task Interpolation',
    authors: 'Chengyue Wu, Teng Wang, Yixiao Ge, Zeyu Lu, Ruisong Zhou, Ying Shan, Ping Luo',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4xDN1ZYqzskC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: '3D Human Mesh Regression with Dense Correspondence** Supplementary Material',
    authors: 'Wang Zeng, Wanli Ouyang, Ping Luo, Wentao Liu, Xiaogang Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tkaPQYYpVKoC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      '3D Interacting Hand Pose Estimation by Hand De-occlusion and Removal–Supplementary Material–',
    authors: 'Hao Meng, Sheng Jin, Wentao Liu, Chen Qian, Mengxiang Lin, Wanli Ouyang, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:KbBQZpvPDL4C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: '3d data augmentation for driving scenes on camera',
    authors:
      'Tong  Wenwen, Xie  Jiangwei, Li  Tianyu, Li  Yang, Deng  Hanming, Dai  Bo, Lu  Lewei, Zhao  Hao, Yan  Junchi, Li  Hongyang',
    proceedings: 'Chinese Conference on Pattern Recognition and Computer Vision (PRCV) 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/ee93f9f277b0a41985658612ed9dbae45950f8d2',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: '3d human mesh regression with dense correspondence',
    authors: 'Wang Zeng, Wanli Ouyang, Ping Luo, Wentao Liu, Xiaogang Wang',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Mojj43d5GZwC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: '3d interacting hand pose estimation by hand de-occlusion and removal',
    authors: 'Hao Meng, Sheng Jin, Wentao Liu, Chen Qian, Mengxiang Lin, Wanli Ouyang, Ping Luo',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mlAyqtXpCwEC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: '3dhumangan: 3d-aware human image generation with 3d pose mapping',
    authors: 'Yang  Zhuoqian, Li  Shikai, Wu  Wayne, Dai  Bo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/3DHumanGAN%3A-3D-Aware-Human-Image-Generation-with-3D-Yang-Li/f3f9a5e0f0b868a16c6940737c3af3a9efd6dc9c',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'A Neural Compositional Paradigm for Image Captioning',
    authors: 'Dai  Bo, Fidler  Sanja, Lin  Dahua',
    proceedings: '32nd Conference on Neural Information Processing Systems (NIPS 2018)',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/345a222fef6f5c1415056319ae7e87a369940d3f',
      },
    ],
    keys: ['Multimodality', 'Visual Reasoning'],
    pis: ['Bo Dai'],
  },
  {
    title: 'A Shading-Guided Generative Implicit Model for Shape-Accurate 3D-Aware Image Synthesis',
    authors: 'Pan  Xingang, Xu  Xudong, Loy  Chen Change, Theobalt  Christian, Dai  Bo',
    proceedings: 'Neural Information Processing Systems (NeurIPS) 2021 ',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/A-Shading-Guided-Generative-Implicit-Model-for-Pan-Xu/7f03aa91b5bfdfc2b5c1a177262ca5da21dfca04',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'A deep sum-product architecture for robust facial attributes analysis',
    authors: 'Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:MXK_kJrjxJIC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'A discriminative model for object representation and detection via sparse features',
    authors: 'Xi Song, Ping Luo, Liang Lin, Yunde Jia',
    proceedings: '2010 20th International Conference on Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:8k81kl-MbHgC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'A large-scale car dataset for fine-grained categorization and verification',
    authors: 'Linjie Yang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ZeXyd9-uunAC',
      },
    ],
    keys: ['Dataset/Benchmark', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'A unified multi-scenario attacking network for visual object tracking',
    authors: 'Xuesong Chen, Canmiao Fu, Feng Zheng, Yong Zhao, Hongsheng Li, Ping Luo, Guo-Jun Qi',
    proceedings: 'Proceedings of the AAAI Conference on Artificial Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:EYYDruWGBe4C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Accelerating Vision-Language Pretraining with Free Language Modeling (Supplementary Materials)',
    authors: 'Teng Wang, Yixiao Ge, Feng Zheng, Ran Cheng, Ying Shan, Xiaohu Qie, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:U4n9YNQMCAIC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Accelerating diffusion models via early stop of the diffusion process',
    authors: 'Lyu  Zhaoyang, Xu  Xudong, Yang  Ceyuan, Lin  Dahua, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2205.12524 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Accelerating-Diffusion-Models-via-Early-Stop-of-the-Lyu-Xudong/77ee8ee73f146043e888574638adfc3fb05dbf7f',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Accelerating vision-language pretraining with free language modeling',
    authors: 'Teng Wang, Yixiao Ge, Feng Zheng, Ran Cheng, Ying Shan, Xiaohu Qie, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:BJbdYPG6LGMC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Adaptdiffuser: Diffusion models as adaptive self-evolving planners',
    authors: 'Zhixuan Liang, Yao Mu, Mingyu Ding, Fei Ni, Masayoshi Tomizuka, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2302.01877',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:gVv57TyPmFsC',
      },
    ],
    keys: ['Generative', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Adaptformer: Adapting vision transformers for scalable visual recognition',
    authors: 'Shoufa Chen, Chongjian Ge, Zhan Tong, Jiangliu Wang, Yibing Song, Jue Wang, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:anf4URPfarAC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Adapting llama decoder to vision transformer',
    authors:
      'Jiahao Wang, Wenqi Shao, Mengzhao Chen, Chengyue Wu, Yong Liu, Taiqiang Wu, Kaipeng Zhang, Songyang Zhang, Kai Chen, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2404.06773',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:DrR-2ekChdkC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Adax: Adaptive gradient descent with exponential long term memory',
    authors: 'Wenjie Li, Zhaoyang Zhang, Xinjiang Wang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2004.09740',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:XiVPGOgt02cC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Advancing Vision Transformers with Group-Mix Attention',
    authors: 'GE Chongjian, Xiaohan Ding, Zhan Tong, Li Yuan, Jiangliu Wang, Yibing Song, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SnGPuo6Feq8C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Advancing vision transformers with group-mix attention',
    authors: 'Chongjian Ge, Xiaohan Ding, Zhan Tong, Li Yuan, Jiangliu Wang, Yibing Song, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2311.15157',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Dem6FJhTUoYC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Adversarial robustness for unsupervised domain adaptation',
    authors:
      'Muhammad Awais, Fengwei Zhou, Hang Xu, Lanqing Hong, Ping Luo, Sung-Ho Bae, Zhenguo Li',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hMsQuOkrut0C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Ae textspotter: Learning visual and linguistic representation for ambiguous text spotting',
    authors:
      'Wenhai Wang, Xuebo Liu, Xiaozhong Ji, Enze Xie, Ding Liang, ZhiBo Yang, Tong Lu, Chunhua Shen, Ping Luo',
    proceedings:
      'Computer Vision–ECCV 2020: 16th European Conference, Glasgow, UK, August 23–28, 2020, Proceedings, Part XIV 16',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:9vf0nzSNQJEC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Agentgen: Enhancing planning abilities for large language model based agent via environment and task generation',
    authors:
      'Mengkang Hu, Pu Zhao, Can Xu, Qingfeng Sun, Jianguang Lou, Qingwei Lin, Ping Luo, Saravan Rajmohan',
    proceedings: 'arXiv preprint arXiv:2408.00764',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:zdjWy_NXXwUC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Align, Adapt and Inject: Audio-Guided Image Generation, Editing and Stylization',
    authors: 'Yue Yang, Kaipeng Zhang, Yuying Ge, Wenqi Shao, Zeyue Xue, Yu Qiao, Ping Luo',
    proceedings:
      'ICASSP 2024-2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:pS0ncopqnHgC',
      },
    ],
    keys: ['Multimodality', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Align, adapt and inject: Sound-guided unified image generation',
    authors: 'Yue Yang, Kaipeng Zhang, Yuying Ge, Wenqi Shao, Zeyue Xue, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2306.11504',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kw52XkFRtyQC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Amos: A large-scale abdominal multi-organ benchmark for versatile medical image segmentation',
    authors:
      'Yuanfeng Ji, Haotian Bai, Chongjian Ge, Jie Yang, Ye Zhu, Ruimao Zhang, Zhen Li, Lingyan Zhanng, Wanling Ma, Xiang Wan, Ping Luo',
    proceedings: 'Advances in neural information processing systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NXb4pA-qfm4C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'An Empirical Study of Multiple Masking in Masked Autoencoder',
    authors: 'Jie Zhu, Zhihao Yu, Mingyu Ding, Ping Luo, Leye Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:A8cqit5AE6sC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Analogcoder: Analog circuit design via training-free code generation',
    authors:
      'Yao Lai, Sungyoung Lee, Guojin Chen, Souradip Poddar, Mengkang Hu, David Z Pan, Ping Luo',
    proceedings: 'Proceedings of the AAAI Conference on Artificial Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Hck25ST_3aIC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Analysis and Benchmarking of Extending Blind Face Image Restoration to Videos',
    authors:
      'Zhouxia Wang, Jiawei Zhang, Xintao Wang, Tianshui Chen, Ying Shan, Wenping Wang, Ping Luo',
    proceedings: 'IEEE Transactions on Image Processing',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:2ywjKiB__4kC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Animatediff: Animate your personalized text-to-image diffusion models without specific tuning',
    authors:
      'Guo  Yuwei, Yang  Ceyuan, Rao  Anyi, Liang  Zhengyang, Wang  Yaohui, Qiao  Yu, Agrawala  Maneesh, Lin  Dahua, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2307.04725 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/AnimateDiff%3A-Animate-Your-Personalized-Diffusion-Guo-Yang/c1caa303549764d220ff17dc1785985dd1ba6047',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Apparatuses and methods for semantic image labeling',
    authors: 'X Tang, Z Liu, LI Xiaoxiao, P Luo, CC Loy',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:RYcK_YlVTxYC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: [],
  },
  {
    title:
      'Appendix for “Visual Dependency Transformers: Dependency Tree Emerges from Reversed Attention”',
    authors:
      'Mingyu Ding13, Yikang Shen, Lijie Fan, Zhenfang Chen, Zitian Chen, Ping Luo, Josh Tenenbaum, Chuang Gan24',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:43bX7VzcjpAC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Appendix of EC2: Emergent Communication for Embodied Control',
    authors: 'Yao Mu, Shunyu Yao, Mingyu Ding, Ping Luo, Chuang Gan',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:zCSUwVk65WsC',
      },
    ],
    keys: ['Embodied AI', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Articulated object manipulation using online axis estimation with sam2-based tracking',
    authors:
      'Xi Wang, Tianxing Chen, Qiaojun Yu, Tianling Xu, Zanxin Chen, Yiting Fu, Ziqi He, Cewu Lu, Yao Mu, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2409.16287',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:RJOyoaXV5v8C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'AssetField: Assets Mining and Reconfiguration in Ground Feature Plane Representation',
    authors: 'Xiangli  Yuanbo, Xu  Linning, Pan  Xingang, Zhao  Nanxuan, Dai  Bo, Lin  Dahua',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/c4c2aed56ffc66d8154941d21e24cce61e4f03c8',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'Autommlab: Automatically generating deployable models from language instructions for computer vision tasks',
    authors: 'Zekang Yang, Wang Zeng, Sheng Jin, Chen Qian, Ping Luo, Wentao Liu',
    proceedings: 'Proceedings of the AAAI Conference on Artificial Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:raTqNPD5sRQC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Autoregressive Models in Vision: A Survey',
    authors:
      'Jing Xiong, Gongye Liu, Lun Huang, Chengyue Wu, Taiqiang Wu, Yao Mu, Yuan Yao, Hui Shen, Zhongwei Wan, Jinfa Huang, Chaofan Tao, Shen Yan, Huaxiu Yao, Lingpeng Kong, Hongxia Yang, Mi Zhang, Guillermo Sapiro, Jiebo Luo, Ping Luo, Ngai Wong',
    proceedings: 'arXiv preprint arXiv:2411.05902',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-6RzNnnwWf8C',
      },
    ],
    keys: ['General', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Autoregressive model beats diffusion: Llama for scalable image generation',
    authors: 'Peize Sun, Yi Jiang, Shoufa Chen, Shilong Zhang, Bingyue Peng, Ping Luo, Zehuan Yuan',
    proceedings: 'arXiv preprint arXiv:2406.06525',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:UmS_249rOGwC',
      },
    ],
    keys: ['Generative', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Avibench: Towards evaluating the robustness of large vision-language model on adversarial visual-instructions',
    authors: 'Hao Zhang, Wenqi Shao, Hong Liu, Yongqiang Ma, Ping Luo, Yu Qiao, Kaipeng Zhang',
    proceedings: 'arXiv e-prints',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SGW5VrABaM0C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'B-AVIBench: Towards Evaluating the Robustness of Large Vision-Language Model on Black-box Adversarial Visual-Instructions',
    authors:
      'Hao Zhang, Wenqi Shao, Hong Liu, Yongqiang Ma, Ping Luo, Yu Qiao, Nanning Zheng, Kaipeng Zhang',
    proceedings: 'IEEE Transactions on Information Forensics and Security',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NMlhSUseqAsC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'BRACE: The Breakdancing Competition Dataset for Dance Motion Synthesis',
    authors: 'Moltisanti  Davide, Wu  Jinyi, Dai  Bo, Loy  Chen Change',
    proceedings: 'European Conference on Computer Vision (ECCV) 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/2eb172cd942ce173e53b3466c14a15f4bccd51f4',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Batch kalman normalization: Towards training deep neural networks with micro-batches',
    authors: 'Guangrun Wang, Jiefeng Peng, Ping Luo, Xinjiang Wang, Liang Lin',
    proceedings: 'arXiv preprint arXiv:1802.03133',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:J_g5lzvAfSwC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Berfscene: Bev-conditioned equivariant radiance fields for infinite 3d scene generation',
    authors: 'Zhang  Qihang, Xu  Yinghao, Shen  Yujun, Dai  Bo, Zhou  Bolei, Yang  Ceyuan',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/0f5d8ae5aec31c3c2d6a00d2ef8fbdf077dcafd0',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'Besa: Pruning large language models with blockwise parameter-efficient sparsity allocation',
    authors:
      'Peng Xu, Wenqi Shao, Mengzhao Chen, Shitao Tang, Kaipeng Zhang, Peng Gao, Fengwei An, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2402.16880',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-nhnvRiOwuoC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Beyond One-to-One: Rethinking the Referring Image Segmentation (Supplementary Material)',
    authors: 'Yutao Hu, Qixiong Wang, Wenqi Shao, Enze Xie, Zhenguo Li, Jungong Han, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:6bLC7aUMtPcC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Beyond one-to-one: Rethinking the referring image segmentation',
    authors: 'Yutao Hu, Qixiong Wang, Wenqi Shao, Enze Xie, Zhenguo Li, Jungong Han, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:yxmsSjX2EkcC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Blockplanner: City block generation with vectorized graph representation',
    authors:
      'Xu  Linning, Xiangli  Yuanbo, Rao  Anyi, Zhao  Nanxuan, Dai  Bo, Liu  Ziwei, Lin  Dahua',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision 2021',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/BlockPlanner%3A-City-Block-Generation-with-Vectorized-Xu-Xiangli/a65fbfaba54f76d14f3ad25f61befa459cdffa84',
      },
    ],
    keys: ['Graph Neural Networks', 'Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Boosting 3D object generation through PBR materials',
    authors: 'Wang  Yitong, Xu  Xudong, Ma  Li, Wang  Haoran, Dai  Bo',
    proceedings: 'SIGGRAPH Asia 2024 Conference Papers 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/67167291c0ee3ca47454a60e59c05dbd58c70d51',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Bridging video-text retrieval with multiple choice questions',
    authors: 'Yuying Ge, Yixiao Ge, Xihui Liu, Dian Li, Ying Shan, Xiaohu Qie, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:xtoqd-5pKcoC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Bringing events into video deblurring with non-consecutively blurry frames',
    authors: 'Wei Shang, Dongwei Ren, Dongqing Zou, Jimmy S Ren, Ping Luo, Wangmeng Zuo',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:TIZ-Mc8IlK0C',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Bungeenerf: Progressive neural radiance field for extreme multi-scale scene rendering',
    authors:
      'Xiangli  Yuanbo, Xu  Linning, Pan  Xingang, Zhao  Nanxuan, Rao  Anyi, Theobalt  Christian, Dai  Bo, Lin  Dahua',
    proceedings: 'European conference on computer vision 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/795fecd949592a89c88cc96d22478df04519d4f8',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Bwcp: Probabilistic learning-to-prune channels for convnets via batch whitening',
    authors: 'Wenqi Shao, Hang Yu, Zhaoyang Zhang, Hang Xu, Zhenguo Li, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2105.06423',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:yB1At4FlUx8C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Bytetrack: Multi-object tracking by associating every detection box',
    authors:
      'Yifu Zhang, Peize Sun, Yi Jiang, Dongdong Yu, Fucheng Weng, Zehuan Yuan, Ping Luo, Wenyu Liu, Xinggang Wang',
    proceedings: 'European conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:VaXvl8Fpj5cC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'CLAP: Unsupervised 3D Representation Learning for Fusion 3D Perception via Curvature Sampling and Prototype Learning',
    authors:
      'Runjian Chen, Hang Zhang, Avinash Ravichandran, Hyoungseob Park, Wenqi Shao, Alex Wong, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2412.03059',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:CNPyR2KL9-0C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'CO^ 3: Cooperative Unsupervised 3D Representation Learning for Autonomous Driving',
    authors:
      'Runjian Chen, Yao Mu, Runsen Xu, Wenqi Shao, Chenhan Jiang, Hang Xu, Zhenguo Li, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2206.04028',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:0izLItjtcgwC',
      },
    ],
    keys: ['Embodied AI', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Cached transformers: Improving transformers with differentiable memory cachde',
    authors: 'Zhaoyang Zhang, Wenqi Shao, Yixiao Ge, Xiaogang Wang, Jinwei Gu, Ping Luo',
    proceedings: 'Proceedings of the AAAI conference on artificial intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NDuN12AVoxsC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'CamNet: Coarse-to-fine retrieval for camera re-localization',
    authors: 'Mingyu Ding, Zhe Wang, Jiankai Sun, Jianping Shi, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:5Ul4iDaHHb8C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Cameractrl: Enabling camera control for text-to-video generation',
    authors:
      'He  Hao, Xu  Yinghao, Guo  Yuwei, Wetzstein  Gordon, Dai  Bo, Li  Hongsheng, Yang  Ceyuan',
    proceedings: 'arXiv preprint arXiv:2404.02101 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/3fc6184c72fd55b67409ef87493c333f15a33180',
      },
    ],
    keys: ['Multimodality', 'Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Channel Equilibrium Networks',
    authors: 'Wenqi Shao, Shitao Tang, Xingang Pan, Ping Tan, Xiaogang Wang, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:eMMeJKvmdy0C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Channel equilibrium networks for learning deep representation',
    authors: 'Wenqi Shao, Shitao Tang, Xingang Pan, Ping Tan, Xiaogang Wang, Ping Luo',
    proceedings: 'International conference on machine learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:q3oQSFYPqjQC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Chartassisstant: A universal chart multimodal language model via chart-to-table pre-training and multitask instruction tuning',
    authors: 'Fanqing Meng, Wenqi Shao, Quanfeng Lu, Peng Gao, Kaipeng Zhang, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2401.02384',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-95Q15plzcUC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'ChatDyn: Language-Driven Multi-Actor Dynamics Generation in Street Scenes',
    authors:
      'Wei  Yuxi, Wang  Jingbo, Du  Yuwen, Wang  Dingju, Pan  Liang, Xu  Chenxin, Feng  Yao, Dai  Bo, Chen  Siheng',
    proceedings: 'arXiv preprint arXiv:2412.08685 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/ChatDyn%3A-Language-Driven-Multi-Actor-Dynamics-in-Wei-Wang/baa224ea1dc76e4a3803155b36fa171c22a26b04',
      },
    ],
    keys: ['Multimodality', 'Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Chip placement method and apparatus, and storage medium',
    authors: 'P Luo, Y Lai, MU Yao',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:KNjnJ3z-R6IC',
      },
    ],
    keys: ['General', 'General'],
    pis: [],
  },
  {
    title: 'Chipformer: Transferable chip placement via offline decision transformer',
    authors: 'Yao Lai, Jinxin Liu, Zhentao Tang, Bin Wang, Jianye Hao, Ping Luo',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:1taIhTC69MYC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'CinePreGen: Camera Controllable Video Previsualization via Engine-powered Diffusion',
    authors:
      'Chen  Yiran, Rao  Anyi, Jiang  Xuekun, Xiao  Shishi, Ma  Ruiqing, Wang  Zeyu, Xiong  Hui, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2408.17424 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/CinePreGen%3A-Camera-Controllable-Video-via-Diffusion-Chen-Rao/48fe88ea81ad8a04306f2b9d8ab5e0829fa9aa96',
      },
    ],
    keys: ['Multimodality'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Cinematic Behavior Transfer via NeRF-based Differentiable Filming',
    authors: 'Jiang  Xuekun, Rao  Anyi, Wang  Jingbo, Lin  Dahua, Dai  Bo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Cinematic-Behavior-Transfer-via-NeRF-based-Filming-Jiang-Rao/58fbdacd2435e00917da5f95778ad6a0e6d628f9',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'Clothes Co-Parsing via Joint Image Segmentation and Labeling with Application to Clothing Retrieval',
    authors: 'Xiaodan Liang, Liang Lin, Wei Yang, Ping Luo, Junshi Huang, Shuicheng Yan',
    proceedings: 'IEEE Transactions on Multimedia',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:e5wmG9Sq2KIC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Clothing Co-Parsing by Joint Image Segmentation and Labeling',
    authors: 'Wei Yang, Ping Luo, Liang Lin',
    proceedings: 'IEEE Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ULOm3_A8WrAC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'CompGS: Unleashing 2D Compositionality for Compositional Text-to-3D via Dynamically Optimizing 3D Gaussians',
    authors:
      'Chongjian Ge, Chenfeng Xu, Yuanfeng Ji, Chensheng Peng, Masayoshi Tomizuka, Ping Luo, Mingyu Ding, Varun Jampani, Wei Zhan',
    proceedings: 'CVPR 2025',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:D_tqNUsBuKoC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Compensation Tracker: Data Association Method for Lost Object.',
    authors: 'Zhibo Zou, Junjie Huang, Ping Luo',
    proceedings: 'CoRR',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_Re3VWB3Y0AC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Compensation tracker: Reprocessing for lost object',
    authors: 'Z Zou, J Huang, P Luo',
    proceedings: 'arXiv preprint arXiv:2008.12052',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:AvfA0Oy_GE0C',
      },
    ],
    keys: ['General', 'General'],
    pis: [],
  },
  {
    title: 'Compressed video contrastive learning',
    authors: 'Yuqi Huo, Mingyu Ding, Haoyu Lu, Nanyi Fei, Zhiwu Lu, Ji-Rong Wen, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:WZBGuue-350C',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Compression of generative pre-trained language models via quantization',
    authors:
      'Chaofan Tao, Lu Hou, Wei Zhang, Lifeng Shang, Xin Jiang, Qun Liu, Ping Luo, Ngai Wong',
    proceedings: 'arXiv preprint arXiv:2203.10705',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ClCfbGk0d_YC',
      },
    ],
    keys: ['Generative', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Conditional MAE: An Empirical Study of Multiple Masking in Masked Autoencoder',
    authors: 'Jie Zhu, Zhihao Yu, Mingyu Ding, Ping Luo, Leye Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:3bvyWxjaHKcC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Constrained mdps can be solved by eearly-termination with recurrent models',
    authors: 'Sun  Hao, Xu  Ziping, Peng  Zhenghao, Fang  Meng, Wang  Taiyi, Dai  Bo, Zhou  Bolei',
    proceedings: 'NeurIPS 2022 Foundation Models for Decision Making Workshop 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://openreview.net/forum?id=2WXr1CyDN4Q',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Context autoencoder for self-supervised representation learning',
    authors:
      'Xiaokang Chen, Mingyu Ding, Xiaodi Wang, Ying Xin, Shentong Mo, Yunhao Wang, Shumin Han, Ping Luo, Gang Zeng, Jingdong Wang',
    proceedings: 'International Journal of Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:q3CdL3IzO_QC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Contrastive Learning for Image Captioning',
    authors: 'Dai  Bo, Lin  Dahua',
    proceedings: '31st Conference on Neural Information Processing Systems (NIPS 2017) 2017',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/83d66c1f808962536a68418587b691f30221c5a1',
      },
    ],
    keys: ['General', 'Multimodality'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Controllable mesh generation through sparse latent point diffusion models',
    authors: 'Lyu  Zhaoyang, Wang  Jinyi, An  Yuwei, Zhang  Ya, Lin  Dahua, Dai  Bo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/fb00c87e7d91205310ab673ed7d96b4b83e80181',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'ConvBench: A Multi-Turn Conversation Evaluation Benchmark with Hierarchical Ablation Capability for Large Vision-Language Models',
    authors:
      'Shuo Liu, Kaining Ying, Hao Zhang, Yuqi Lin, Tianle Zhang, Chuanhao Li, Yu Qiao, Ping Luo, Wenqi Shao, Kaipeng Zhang',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:z6xuaG2dYH0C',
      },
    ],
    keys: ['Dataset/Benchmark', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Convbench: A multi-turn conversation evaluation benchmark with hierarchical capability for large vision-language models',
    authors:
      'Shuo Liu, Kaining Ying, Hao Zhang, Yue Yang, Yuqi Lin, Tianle Zhang, Chuanhao Li, Yu Qiao, Ping Luo, Wenqi Shao, Kaipeng Zhang',
    proceedings: 'arXiv preprint arXiv:2403.20194',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:rTD5ala9j4wC',
      },
    ],
    keys: ['Dataset/Benchmark', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Convolution on Your 12× Wide Feature: A ConvNet with Nested Design',
    authors:
      'Jiahao Wang, Songyang Zhang, Haodong Duan, Zhaohui Yu, Mengzhang Li, Yong Liu, Taiqiang Wu, Xihui Liu, Kai Chen, Dahua Lin, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:QUX0mv85b1cC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Convolution-weight-distribution assumption: Rethinking the criteria of channel pruning',
    authors: 'Zhongzhan Huang, Wenqi Shao, Xinjiang Wang, Liang Lin, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2004.11627',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HE397vMXCloC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Correspondence Distillation from NeRF-Based GAN',
    authors: 'Lan  Yushi, Loy  Chen Change, Dai  Bo',
    proceedings: 'International Journal of Computer Vision 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/a786b4faf741c9c24c10e0a99e2d43c7cd067744',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Cross-Model Pseudo-Labeling for Semi-Supervised Action Recognition',
    authors:
      'Xu  Yinghao, Wei  Fangyun, Sun  Xiao, Yang  Ceyuan, Shen  Yujun, Dai  Bo, Zhou  Bolei, Lin  Stephen',
    proceedings: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/138cd7e783062f51740fc6842e1a804b4fb32b3a',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'Ctrlformer: Learning transferable state representation for visual control via transformer',
    authors: 'Yao Mu, Shoufa Chen, Mingyu Ding, Jianyu Chen, Runjian Chen, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2206.08883',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:a9-T7VOCCH8C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Cuimage: a neverending learning platform on a convolutional knowledge graph of billion web images',
    authors: 'Zhanglin Peng, Lingyun Wu, Jiamin Ren, Ruimao Zhang, Ping Luo',
    proceedings: '2018 IEEE International Conference on Big Data (Big Data)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:cFHS6HbyZ2cC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Cyclemlp: A mlp-like architecture for dense visual predictions',
    authors: 'Shoufa Chen, Enze Xie, Chongjian Ge, Runjian Chen, Ding Liang, Ping Luo',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:p__nRnzSRKYC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'DCP: Learning Accelerator Dataflow for Neural Network via Propagation',
    authors: 'Peng Xu, Wenqi Shao, Mingyu Ding, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2410.06553',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:C33y2ycGS3YC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'DRiVE: Diffusion-based Rigging Empowers Generation of Versatile and Expressive Characters',
    authors:
      'Sun  Mingze, Chen  Junhao, Dong  Junting, Chen  Yurun, Jiang  Xinyu, Mao  Shiwei, Jiang  Puhua, Wang  Jingbo, Dai  Bo, Huang  Ruqi',
    proceedings: 'arXiv preprint arXiv:2411.17423 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/4579b6151e95cea92b2178937df6811ebf5bec1f',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'DaViT: Dual Attention Vision Transformers–Supplementary Material–',
    authors: 'Mingyu Ding, Bin Xiao, Noel Codella, Ping Luo, Jingdong Wang, Lu Yuan',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:fFSKOagxvKUC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Dag-plan: Generating directed acyclic dependency graphs for dual-arm cooperative planning',
    authors: 'Zeyu Gao, Yao Mu, Jinye Qu, Mengkang Hu, Lingyue Guo, Ping Luo, Yanfeng Lu',
    proceedings: 'arXiv preprint arXiv:2406.09953',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:8Xgff_V0N9gC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Dancetrack: Multi-object tracking in uniform appearance and diverse motion',
    authors: 'Peize Sun, Jinkun Cao, Yi Jiang, Zehuan Yuan, Song Bai, Kris Kitani, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:S16KYo8Pm5AC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Data processing method and apparatus, and storage medium',
    authors: 'P Luo, L Wu, P Zhanglin, R Zhang, J Ren, W Shao',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:k8Z6L05lTy4C',
      },
    ],
    keys: ['General', 'General'],
    pis: [],
  },
  {
    title: 'Davit: Dual attention vision transformers',
    authors: 'Mingyu Ding, Bin Xiao, Noel Codella, Ping Luo, Jingdong Wang, Lu Yuan',
    proceedings: 'European conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:YohjEiUPhakC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Ddp: Diffusion model for dense visual prediction',
    authors:
      'Yuanfeng Ji, Zhe Chen, Enze Xie, Lanqing Hong, Xihui Liu, Zhaoqiang Liu, Tong Lu, Zhenguo Li, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:LgRImbQfgY4C',
      },
    ],
    keys: ['Generative', 'General'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Deceive d: Adaptive pseudo augmentation for gan training with limited data',
    authors: 'Jiang  Liming, Dai  Bo, Wu  Wayne, Loy  Chen Change',
    proceedings: 'Advances in Neural Information Processing Systems 2021',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/ba0eb489230fd50cb2848732e27424b77124ddcf',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Deciwatch: A simple baseline for 10x efficient 2d and 3d pose estimation',
    authors: 'Zeng  Ailing, Ju  Xuan, Yang  Lei, Gao  Ruiyuan, Zhu  Xizhou, Dai  Bo, Xu  Qiang',
    proceedings: 'European Conference on Computer Vision 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/32da58aa252700339b118b1e4f03bd721d2d5b55',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'Decomposed mutual information optimization for generalized context in meta-reinforcement learning',
    authors: 'Yao Mu, Yuzheng Zhuang, Fei Ni, Bin Wang, Jianyu Chen, Jianye Hao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2210.04209',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:RtRctb2lSbAC',
      },
    ],
    keys: ['RL', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep Dual Learning for Semantic Image Segmentation',
    authors: 'Ping Luo, Guangrun Wang, Liang Lin, Xiaogang Wang',
    proceedings: 'ICCV',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:GnPB-g6toBAC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep Learning Face Attributes in the Wild',
    authors: 'Ziwei Liu, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'ICCV',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:9ZlFYXVOiuMC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep Learning Strong Parts for Pedestrian Detection',
    authors: 'Yonglong Tian, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'ICCV',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mB3voiENLucC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep Representation Learning with Target Coding Supplementary Material',
    authors: 'Shuo Yang, Ping Luo, Chen Change Loy, Kenneth W Shum, Xiaoou Tang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:TQgYirikUcIC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep Self-Learning from Noisy Labels',
    authors: 'Jiangfan Han, Ping Luo, Xiaogang Wang',
    proceedings: 'IEEE International Conference on Computer Vision (ICCV)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:XiSMed-E-HIC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep learning face attributes for detection and alignment',
    authors: 'Chen Change Loy, Ping Luo, Chen Huang',
    proceedings: 'Visual Attributes',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:isC4tDSrTZIC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep learning identity-preserving face space',
    authors: 'Zhenyao Zhu, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:roLk4NBRz8UC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep learning markov random field for semantic segmentation',
    authors: 'Ziwei Liu, Xiaoxiao Li, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'IEEE transactions on pattern analysis and machine intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:RHpTSmoSYBkC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep learning multi-view representation for face recognition',
    authors: 'Zhenyao Zhu, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'arXiv preprint arXiv:1406.6947',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:pqnbT2bcN3wC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep representation learning with target coding',
    authors: 'Shuo Yang, Ping Luo, Chen Change Loy, Kenneth W Shum, Xiaoou Tang',
    proceedings: 'Proceedings of the AAAI Conference on Artificial Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mVmsd5A6BfQC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'DeepAccident: A Large-Scale Accident Dataset for Multi-Vehicle Autonomous Driving',
    authors: 'Tianqi Wang Wenxuan Ji Shoufa Chen, Chongjian Ge Enze Xie Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:XvxMoLDsR5gC',
      },
    ],
    keys: ['Embodied AI', 'Dataset/Benchmark'],
    pis: [],
  },
  {
    title: 'DeepID-Net: Object Detection with Deformable Part Based Convolutional Neural Networks',
    authors:
      'Wanli Ouyang, Xingyu Zeng, Xiaogang Wang, Shi Qiu, Ping Luo, Yonglong Tian, Hongsheng Li, Shuo Yang, Zhe Wang, Hongyang Li, Kun Wang, Junjie Yan, Chen-Change Loy, Xiaoou Tang',
    proceedings: 'TPAMI 2016',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:35N4QoGY0k4C',
      },
    ],
    keys: ['Vision', 'General', 'Previous'],
    pis: ['Ping Luo', 'Hongyang Li'],
  },
  {
    title: 'Deepaccident: A motion and accident prediction benchmark for v2x autonomous driving',
    authors:
      'Tianqi Wang, Sukmin Kim, Ji Wenxuan, Enze Xie, Chongjian Ge, Junsong Chen, Zhenguo Li, Ping Luo',
    proceedings: 'Proceedings of the AAAI Conference on Artificial Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:F1b5ZUV5XREC',
      },
    ],
    keys: ['Embodied AI', 'Dataset/Benchmark'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Deepfashion2: A versatile benchmark for detection, pose estimation, segmentation and re-identification of clothing images',
    authors: 'Yuying Ge, Ruimao Zhang, Xiaogang Wang, Xiaoou Tang, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:a0OBvERweLwC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deepfashion: Powering robust clothes recognition and retrieval with rich annotations',
    authors: 'Ziwei Liu, Ping Luo, Shi Qiu, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_Qo2XoVZTnwC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deepid-net: Deformable deep convolutional neural networks for object detection',
    authors:
      'Wanli Ouyang, Xiaogang Wang, Xingyu Zeng, Shi Qiu, Ping Luo, Yonglong Tian, Hongsheng Li, Shuo Yang, Zhe Wang, Chen-Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:QIV2ME_5wuYC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Deepid-net: multi-stage and deformable deep convolutional neural networks for object detection',
    authors:
      'Wanli Ouyang, Ping Luo, Xingyu Zeng, Shi Qiu, Yonglong Tian, Hongsheng Li, Shuo Yang, Zhe Wang, Yuanjun Xiong, Chen Qian, Zhenyao Zhu, Ruohui Wang, Chen-Change Loy, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'arXiv preprint arXiv:1409.3505',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:vV6vV6tmYwMC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deeply unsupervised patch re-identification for pre-training object detectors',
    authors: 'Jian Ding, Enze Xie, Hang Xu, Chenhan Jiang, Zhenguo Li, Ping Luo, Gui-Song Xia',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_axFR9aDTf0C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Dense Distinct Query for End-to-End Object Detection (Supplementary Material)',
    authors:
      'Shilong Zhang, Xinjiang Wang, Jiaqi Wang, Jiangmiao Pang, Chengqi Lyu, Wenwei Zhang, Ping Luo, Kai Chen',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:1lhNe0rCu4AC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Dense distinct query for end-to-end object detection',
    authors:
      'Shilong Zhang, Xinjiang Wang, Jiaqi Wang, Jiangmiao Pang, Chengqi Lyu, Wenwei Zhang, Ping Luo, Kai Chen',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:artPoR2Yc-kC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'DepthLab: From Partial to Complete',
    authors:
      'Zhiheng Liu, Ka Leong Cheng, Qiuyu Wang, Shuzhe Wang, Hao Ouyang, Bin Tan, Kai Zhu, Yujun Shen, Qifeng Chen, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2412.18153',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:H_jBuBxbQIAC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Detco: Unsupervised contrastive learning for object detection',
    authors:
      'Enze Xie, Jian Ding, Wenhai Wang, Xiaohang Zhan, Hang Xu, Peize Sun, Zhenguo Li, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:2KloaMYe4IUC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Detecting Visual Relationships with Deep Relational Networks',
    authors: 'Dai  Bo, Zhang  Yuqi, Lin  Dahua',
    proceedings: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2017',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/5fcd93997b7dde90594dc1caa27ba9d560bbe63d',
      },
    ],
    keys: ['Visual Relationship Detection'],
    pis: ['Bo Dai'],
  },
  {
    title: 'DexHandDiff: Interaction-aware Diffusion Planning for Adaptive Dexterous Manipulation',
    authors:
      'Zhixuan Liang, Yao Mu, Yixiao Wang, Tianxing Chen, Wenqi Shao, Wei Zhan, Masayoshi Tomizuka, Ping Luo, Mingyu Ding',
    proceedings: 'CVPR 2025',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4aZ_i-5WJEQC',
      },
    ],
    keys: ['Generative', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Dexdiffuser: Interaction-aware diffusion planning for adaptive dexterous manipulation',
    authors:
      'Zhixuan Liang, Yao Mu, Yixiao Wang, Fei Ni, Tianxing Chen, Wenqi Shao, Wei Zhan, Masayoshi Tomizuka, Ping Luo, Mingyu Ding',
    proceedings: 'arXiv preprint arXiv:2411.18562',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:unp9ATQDT5gC',
      },
    ],
    keys: ['Generative', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'DiCoDe: Diffusion-Compressed Deep Tokens for Autoregressive Video Generation with Language Models',
    authors: 'Yizhuo Li, Yuying Ge, Yixiao Ge, Ping Luo, Ying Shan',
    proceedings: 'arXiv preprint arXiv:2412.04446',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:zwpXiJ37cpgC',
      },
    ],
    keys: ['Multimodality', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Diagnosing the compositional knowledge of vision language models from a game-theoretic view',
    authors: 'Jin Wang, Shichao Dong, Yapeng Zhu, Kelu Yao, Weidong Zhao, Chao Li, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2405.17201',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:65Yg0jNCQDAC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Diffagent: Fast and accurate text-to-image api selection with large language model',
    authors:
      'Lirui Zhao, Yue Yang, Kaipeng Zhang, Wenqi Shao, Yuxin Zhang, Yu Qiao, Ping Luo, Rongrong Ji',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:69ZgNCALVd0C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Diffbir: Toward blind image restoration with generative diffusion prior',
    authors:
      'Lin  Xinqi, He  Jingwen, Chen  Ziyan, Lyu  Zhaoyang, Dai  Bo, Yu  Fanghua, Qiao  Yu, Ouyang  Wanli, Dong  Chao',
    proceedings: 'European Conference on Computer Vision 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/DiffBIR%3A-Toward-Blind-Image-Restoration-with-Prior-Lin-He/9f685f780a18606525926352dd91a1de4fbd0748',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Differentiable Learning-to-Group Channels via Groupable Convolutional Neural Networks',
    authors:
      'Zhaoyang Zhang, Jingyu Li, Wenqi Shao, Zhanglin Peng, Ruimao Zhang, Xiaogang Wang, Ping Luo',
    proceedings: 'IEEE International Conference on Computer Vision (ICCV)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Tiz5es2fbqcC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Differentiable dynamic normalization for learning deep representation',
    authors: 'Ping Luo, Peng Zhanglin, Shao Wenqi, Zhang Ruimao, Ren Jiamin, Wu Lingyun',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:b0M2c_1WBrUC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Differentiable dynamic quantization with mixed precision and adaptive resolution',
    authors: 'Zhaoyang Zhang, Wenqi Shao, Jinwei Gu, Xiaogang Wang, Ping Luo',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ML0RJ9NH7IQC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Differentiable hierarchical graph grouping for multi-person pose estimation',
    authors: 'Sheng Jin, Wentao Liu, Enze Xie, Wenhai Wang, Chen Qian, Wanli Ouyang, Ping Luo',
    proceedings:
      'Computer Vision–ECCV 2020: 16th European Conference, Glasgow, UK, August 23–28, 2020, Proceedings, Part VII 16',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:eq2jaN3J8jMC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Differentiable learning-to-normalize via switchable normalization',
    authors: 'Ping Luo, Jiamin Ren, Zhanglin Peng, Ruimao Zhang, Jingyu Li',
    proceedings: 'arXiv preprint arXiv:1806.10779',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ldfaerwXgEUC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Diffmorpher: Unleashing the capability of diffusion models for image morphing',
    authors: 'Zhang  Kaiwen, Zhou  Yifan, Xu  Xudong, Dai  Bo, Pan  Xingang',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/82e51cc702a9a0508708cd85de052b86e897641f',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Diffrate: Differentiable compression rate for efficient vision transformers',
    authors:
      'Mengzhao Chen, Wenqi Shao, Peng Xu, Mingbao Lin, Kaipeng Zhang, Fei Chao, Rongrong Ji, Yu Qiao, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:LdasjJ6CEcoC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Diffree: Text-guided shape free object inpainting with diffusion model',
    authors:
      'Lirui Zhao, Tianshuo Yang, Wenqi Shao, Yuxin Zhang, Yu Qiao, Ping Luo, Kaipeng Zhang, Rongrong Ji',
    proceedings: 'arXiv preprint arXiv:2407.16982',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:YlPif8NxrbYC',
      },
    ],
    keys: ['Generative', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Diffusiondet: Diffusion model for object detection',
    authors: 'Shoufa Chen, Peize Sun, Yibing Song, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:OP4eGU-M3BUC',
      },
    ],
    keys: ['Vision', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Diffusionmat: Alpha matting as sequential refinement learning',
    authors: 'Yangyang Xu, Shengfeng He, Wenqi Shao, Kwan-Yee K Wong, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2311.13535',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:jE2MZjpN3IcC',
      },
    ],
    keys: ['Generative', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Director3d: Real-world camera trajectory and 3d scene generation from text',
    authors:
      'Li  Xinyang, Lai  Zhangyu, Xu  Linning, Qu  Yansong, Cao  Liujuan, Zhang  Shengchuan, Dai  Bo, Ji  Rongrong',
    proceedings: 'Advances in Neural Information Processing Systems 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Director3D%3A-Real-world-Camera-Trajectory-and-3D-Li-Lai/20df408b1705d519c9942c7fafc083314e183fed',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Disentangled cycle consistency for highly-realistic virtual try-on',
    authors: 'Chongjian Ge, Yibing Song, Yuying Ge, Han Yang, Wei Liu, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:VLnqNzywnoUC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Do 2d gans know 3d shape? unsupervised 3d shape reconstruction from 2d image gans',
    authors: 'Pan  Xingang, Dai  Bo, Liu  Ziwei, Loy  Chen Change, Luo  Ping',
    proceedings: 'International Conference on Learning Representations (ICLR) 2021',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Do-2D-GANs-Know-3D-Shape-Unsupervised-3D-shape-from-Pan-Dai/7d7d189796efa8fbd3f516b183954bc36f262f3f',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Do normalization layers in a deep ConvNet really need to be distinct?',
    authors: 'Ping Luo, Zhanglin Peng, Jiamin Ren, Ruimao Zhang',
    proceedings: 'arXiv preprint arXiv:1811.07727',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:u_35RYKgDlwC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Domain-adaptive few-shot learning',
    authors: 'An Zhao, Mingyu Ding, Zhiwu Lu, Tao Xiang, Yulei Niu, Jiechao Guan, Ji-Rong Wen',
    proceedings: 'Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kRWSkSYxWN8C',
      },
    ],
    keys: ['General', 'General'],
    pis: [],
  },
  {
    title:
      'Domino: Decomposed mutual information optimization for generalized context in meta-reinforcement learning',
    authors: 'Yao Mu, Yuzheng Zhuang, Fei Ni, Bin Wang, Jianyu Chen, Jianye Hao, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:OR75R8vi5nAC',
      },
    ],
    keys: ['RL', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'DriveE2E: Benchmarking Closed-Loop End-to-End Autonomous Driving Based-on Real-World Traffic Scenarios',
    authors:
      'Haibao Yu, Wenxian Yang, Ruiyang Hao, Chuanye Wang, Jiaru Zhong, Ping Luo, Zaiqing Nie',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:MIg0yeAD4ggC',
      },
    ],
    keys: ['Embodied AI', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Drivecot: Integrating chain-of-thought reasoning with end-to-end driving',
    authors: 'Tianqi Wang, Enze Xie, Ruihang Chu, Zhenguo Li, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2403.16996',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:eO3_k5sD8BwC',
      },
    ],
    keys: ['Embodied AI', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Dual3d: Efficient and consistent text-to-3d generation with dual-mode multi-view latent diffusion',
    authors:
      'Li  Xinyang, Lai  Zhangyu, Xu  Linning, Guo  Jianfei, Cao  Liujuan, Zhang  Shengchuan, Dai  Bo, Ji  Rongrong',
    proceedings: 'arXiv preprint arXiv:2405.09874 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Dual3D%3A-Efficient-and-Consistent-Text-to-3D-with-Li-Lai/119e415cf9cc2648a40ac173499ebfdef796174d',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'Dynamic Multimodal Evaluation with Flexible Complexity by Vision-Language Bootstrapping',
    authors: 'Yue Yang, Shuibai Zhang, Wenqi Shao, Kaipeng Zhang, Yi Bin, Yu Wang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2410.08695',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:qE4H1tSSYIIC',
      },
    ],
    keys: ['Multimodality', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Dynamic Token Normalization Improves Vision Transformer',
    authors: 'Wenqi Shao, Yixiao Ge, Zhaoyang Zhang, Xuyuan Xu, Xiaogang Wang, Ying Shan, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems 34',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SpbeaW3--B0C',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Dynamic and static context-aware lstm for multi-agent motion prediction',
    authors: 'Chaofan Tao, Qinhong Jiang, Lixin Duan, Ping Luo',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ZuybSZzF8UAC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Dynamic visual reasoning by learning differentiable physics models from video and language',
    authors: 'Mingyu Ding, Zhenfang Chen, Tao Du, Ping Luo, Josh Tenenbaum, Chuang Gan',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kz9GbA2Ns4gC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'E2EAI: End-to-End Deep Learning Framework for Active Investing',
    authors: 'Wei  Zikai, Dai  Bo, Lin  Dahua',
    proceedings: 'Proceedings of the Fourth ACM International Conference on AI in Finance 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/7c83ce03af61b17f5ece31477faf6028de780bd8',
      },
    ],
    keys: ['General'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Ec2: Emergent communication for embodied control',
    authors: 'Yao Mu, Shunyu Yao, Mingyu Ding, Ping Luo, Chuang Gan',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NyGDZy8z5eUC',
      },
    ],
    keys: ['Embodied AI', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Edgesam: Prompt-in-the-loop distillation for on-device deployment of sam',
    authors: 'Zhou  Chong, Li  Xiangtai, Loy  Chen Change, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2312.06660 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/EdgeSAM%3A-Prompt-In-the-Loop-Distillation-for-of-SAM-Zhou-Li/36e75a2fac5f0414a649e2842f52fbfdf370b9cc',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Efficientqat: Efficient quantization-aware training for large language models',
    authors: 'Mengzhao Chen, Wenqi Shao, Peng Xu, Jiahao Wang, Peng Gao, Kaipeng Zhang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2407.11062',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:27LrP4qxOz0C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Egc: Image generation and classification via a diffusion energy-based model',
    authors: 'Qiushan Guo, Chuofan Ma, Yi Jiang, Zehuan Yuan, Yizhou Yu, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ALROH1vI_8AC',
      },
    ],
    keys: ['Vision', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title: 'EigenNet: Towards Fast and Structural Learning of Deep Neural Networks',
    authors: 'Ping Luo',
    proceedings: 'IJCAI',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hMod-77fHWUC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Embodied concept learner: Self-supervised learning of concepts and mapping through instruction following',
    authors:
      'Mingyu Ding, Yan Xu, Zhenfang Chen, David Daniel Cox, Ping Luo, Joshua B Tenenbaum, Chuang Gan',
    proceedings: 'Conference on robot learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4vMrXwiscB8C',
      },
    ],
    keys: ['Embodied AI', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Embodiedgpt: Vision-language pre-training via embodied chain of thought',
    authors:
      'Yao Mu, Qinglong Zhang, Mengkang Hu, Wenhai Wang, Mingyu Ding, Jun Jin, Bin Wang, Jifeng Dai, Yu Qiao, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:v1_lew4L6wgC',
      },
    ],
    keys: ['Embodied AI', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'End-to-End Dense Video Captioning with Parallel Decoding (Supplementary Materials)',
    authors: 'Teng Wang, Ruimao Zhang, Zhichao Lu, Feng Zheng, Ran Cheng, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tuHXwOkdijsC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'End-to-end autonomous driving through V2X cooperation',
    authors: 'Haibao Yu, Wenxian Yang, Jiaru Zhong, Zhenwei Yang, Siqi Fan, Ping Luo, Zaiqing Nie',
    proceedings: 'Proceedings of the AAAI Conference on Artificial Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mWEH9CqjF64C',
      },
    ],
    keys: ['Embodied AI', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'End-to-end dense video captioning with parallel decoding',
    authors: 'Teng Wang, Ruimao Zhang, Zhichao Lu, Feng Zheng, Ran Cheng, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ILKRHgRFtOwC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'End-to-end video text spotting with transformer',
    authors: 'Weijia Wu, Yuanqiang Cai, Chunhua Shen, Debing Zhang, Ying Fu, Hong Zhou, Ping Luo',
    proceedings: 'International Journal of Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hCrLmN-GePgC',
      },
    ],
    keys: ['Multimodality', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Enhance sample efficiency and robustness of end-to-end urban autonomous driving via semantic masked world model',
    authors: 'Zeyu Gao, Yao Mu, Chen Chen, Jingliang Duan, Ping Luo, Yanfeng Lu, Shengbo Eben Li',
    proceedings: 'IEEE Transactions on Intelligent Transportation Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:OcBU2YAGkTUC',
      },
    ],
    keys: ['Embodied AI', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Every frame counts: Joint learning of video segmentation and optical flow',
    authors: 'Mingyu Ding, Zhe Wang, Bolei Zhou, Jianping Shi, Zhiwu Lu, Ping Luo',
    proceedings: 'Proceedings of the AAAI conference on artificial intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:fQNAKQ3IYiAC',
      },
    ],
    keys: ['Vision', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Evolutionary Stochastic Policy Distillation',
    authors: 'Sun  Hao, Pan  Xinyu, Dai  Bo, Lin  Dahua, Zhou  Bolei',
    proceedings: 'arXiv preprint arXiv:2004.12909 2020',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Evolutionary-Stochastic-Policy-Distillation-Sun-Pan/36e739a71e408e19d1c37ea4873370f293bfceb2',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Exemplar Normalization for Learning Deep Representation Supplemental Material',
    authors: 'Ruimao Zhang, Zhanglin Peng, Lingyun Wu, Zhen Li, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_B80troHkn4C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Exemplar normalization for learning deep representation',
    authors: 'Ruimao Zhang, Zhanglin Peng, Lingyun Wu, Zhen Li, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:V3AGJWp-ZtQC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Exploiting Context Information for Generic Event Boundary Captioning',
    authors: 'Jinrui Zhang, Teng Wang, Feng Zheng, Ran Cheng, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2207.01050',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:sNmaIFBj_lkC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Exploiting Deep Generative Prior for Versatile Image Restoration and Manipulation',
    authors: 'Pan  Xingang, Zhan  Xiaohang, Dai  Bo, Lin  Dahua, Loy  Chen Change, Luo  Ping',
    proceedings: 'European Conference on Computer Vision (ECCV) 2020',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Exploiting-Deep-Generative-Prior-for-Versatile-and-Pan-Zhan/7101bc1c316740d99cd87185586829291a983a1d',
      },
    ],
    keys: ['Robotics', 'Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Exploiting deep generative prior for versatile image restoration and manipulation',
    authors: 'Xingang Pan, Xiaohang Zhan, Bo Dai, Dahua Lin, Chen Change Loy, Ping Luo',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:bnK-pcrLprsC',
      },
    ],
    keys: ['Generative', 'Vision'],
    pis: ['Bo Dai', 'Ping Luo'],
  },
  {
    title: 'Exploring transformers for open-world instance segmentation',
    authors: 'Jiannan Wu, Yi Jiang, Bin Yan, Huchuan Lu, Zehuan Yuan, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:jU7OWUQzBzMC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Extract free dense labels from clip',
    authors: 'Zhou  Chong, Loy  Chen Change, Dai  Bo',
    proceedings: 'European Conference on Computer Vision 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Extract-Free-Dense-Labels-from-CLIP-Zhou-Loy/0a7e7347e16bf13d710f6f3d30748baabdbb96ad',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'FAT: Frequency-aware transformation for bridging full-precision and low-precision deep representations',
    authors: 'Chaofan Tao, Rui Lin, Quan Chen, Zhaoyang Zhang, Ping Luo, Ngai Wong',
    proceedings: 'IEEE Transactions on Neural Networks and Learning Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:WJVC3Jt7v1AC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Face Model Compression by Distilling Knowledge from Neurons',
    authors: 'Ping Luo, Zhenyao Zhu, Ziwei Liu, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'AAAI',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:R3hNpaxXUhUC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Face Verification',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tOudhMTPpwUC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Face localization and enhancement',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:8AbLer7MMksC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Facefeat-gan: a two-stage approach for identity-preserving face synthesis',
    authors: 'Yujun Shen, Bolei Zhou, Ping Luo, Xiaoou Tang',
    proceedings: 'arXiv preprint arXiv:1812.01288',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4OULZ7Gr8RgC',
      },
    ],
    keys: ['Vision', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Faceid-gan: Learning a symmetry three-player gan for identity-preserving face synthesis',
    authors: 'Yujun Shen, Ping Luo, Junjie Yan, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:70eg2SAEIzsC',
      },
    ],
    keys: ['Vision', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Faceness-net: Face detection through deep facial part responses',
    authors: 'Shuo Yang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'IEEE transactions on pattern analysis and machine intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:TFP_iSt0sucC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Facial landmark detection by deep multi-task learning',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings:
      'Computer Vision–ECCV 2014: 13th European Conference, Zurich, Switzerland, September 6-12, 2014, Proceedings, Part VI 13',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:qxL8FJ1GzNcC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Factor investing with a deep multi-factor model',
    authors: 'Wei  Zikai, Dai  Bo, Lin  Dahua',
    proceedings: 'arXiv preprint arXiv:2210.12462 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/189f18cda78d6756d0f0a9cfbde84b1a57e3fa69',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Fashion Landmark Detection in the Wild',
    authors: 'Ziwei Liu, Sijie Yan, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'ECCV',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4JMBOYKVnBMC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Fashion Retrieval via Graph Reasoning Networks on A Similarity Pyramid',
    authors: 'Yiming Gao, Zhanghui Kuang, Guanbin Li, Ping Luo, Yimin Chen, Liang Lin, Wayne Zhang',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:UHK10RUVsp4C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Fashion retrieval via graph reasoning networks on a similarity pyramid',
    authors: 'Zhanghui Kuang, Yiming Gao, Guanbin Li, Ping Luo, Yimin Chen, Liang Lin, Wayne Zhang',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:P5F9QuxV20EC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Fast: Faster arbitrarily-shaped text detector with minimalist kernel representation',
    authors: 'Zhe Chen, Jiahao Wang, Wenhai Wang, Guo Chen, Enze Xie, Ping Luo, Tong Lu',
    proceedings: 'arXiv preprint arXiv:2111.02394',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:oNZyr7d5Mn4C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Fat: Learning low-bitwidth parametric representation via frequency-aware transformation',
    authors: 'Chaofan Tao, Rui Lin, Quan Chen, Zhaoyang Zhang, Ping Luo, Ngai Wong',
    proceedings: 'arXiv preprint arXiv:2102.07444',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:35r97b3x0nAC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Feature Intertwiner for Object Detection',
    authors: 'Li  Hongyang, Dai  Bo, Shi  Shaoshuai, Ouyang  Wanli, Wang  Xiaogang',
    proceedings: 'International Conference on Learning Representation (ICLR) 2019',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Feature-Intertwiner-for-Object-Detection-Li-Dai/d2420d9ce64d101b28641660b4641c415fc7a6c9',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'FineGym: A Hierarchical Video Dataset for Fine-grained Action Understanding',
    authors: 'Shao  Dian, Zhao  Yue, Dai  Bo, Lin  Dahua',
    proceedings: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2020',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/FineGym%3A-A-Hierarchical-Video-Dataset-for-Action-Shao-Zhao/f5c35edc9cf622c7dd7e19ce6fbd5d563557de5b',
      },
    ],
    keys: ['Multimodality'],
    pis: ['Bo Dai'],
  },
  {
    title: 'FlashVideo: Flowing Fidelity to Detail for Efficient High-Resolution Video Generation',
    authors:
      'Shilong Zhang, Wenbo Li, Shoufa Chen, Chongjian Ge, Peize Sun, Yida Zhang, Yi Jiang, Zehuan Yuan, Binyue Peng, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2502.05179',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:RuPIJ_LgqDgC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Flashface: Human image personalization with high-fidelity identity preservation',
    authors:
      'Shilong Zhang, Lianghua Huang, Xi Chen, Yifei Zhang, Zhi-Fan Wu, Yutong Feng, Wei Wang, Yujun Shen, Yu Liu, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2403.17008',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:DkZNVXde3BIC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Flashgs: Efficient 3d gaussian splatting for large-scale and high-resolution rendering',
    authors:
      'Feng  Guofeng, Chen  Siyan, Fu  Rong, Liao  Zimu, Wang  Yi, Liu  Tao, Pei  Zhilin, Li  Hengjie, Zhang  Xingcheng, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2408.07967 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/FlashGS%3A-Efficient-3D-Gaussian-Splatting-for-and-Feng-Chen/18e4b2a2781c13a0c79a6534f832487bb2d38257',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'Flow-based Feature Fusion for Vehicle-Infrastructure Cooperative 3D Object Detection–Appendix',
    authors: 'Haibao Yu, Yingjuan Tang, Enze Xie, Jilei Mao, Ping Luo, Zaiqing Nie',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HhcuHIWmDEUC',
      },
    ],
    keys: ['Embodied AI', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Flow-based feature fusion for vehicle-infrastructure cooperative 3d object detection',
    authors: 'Haibao Yu, Yingjuan Tang, Enze Xie, Jilei Mao, Ping Luo, Zaiqing Nie',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-7ulzOJl1JYC',
      },
    ],
    keys: ['Embodied AI', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Flow-based recurrent belief state learning for pomdps',
    authors: 'Xiaoyu Chen, Yao Mark Mu, Ping Luo, Shengbo Li, Jianyu Chen',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ruyezt5ZtCIC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Focal frequency loss for image reconstruction and synthesis',
    authors: 'Jiang  Liming, Dai  Bo, Wu  Wayne, Loy  Chen Change',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision 2021',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Focal-Frequency-Loss-for-Image-Reconstruction-and-Jiang-Dai/05afe403fd398f774aed4e9872a0eca1dfa21d36',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'Forensics-Bench: A Comprehensive Forgery Detection Benchmark Suite for Large Vision Language Models',
    authors:
      'Jin Wang, Chenghui Lv, Xian Li, Shichao Dong, Huadong Li, Chao Li, Wenqi Shao, Ping Luo',
    proceedings: 'CVPR 2025',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:t-hv7AR41mYC',
      },
    ],
    keys: ['Vision', 'Dataset/Benchmark'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Foundation model is efficient multimodal multitask model selector',
    authors: 'Fanqing Meng, Wenqi Shao, Chonghe Jiang, Kaipeng Zhang, Yu Qiao, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:XUvXOeBm_78C',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'From facial expression recognition to interpersonal relation prediction',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'International Journal of Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:r0BpntZqJG4C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'From facial parts responses to face detection: A deep learning approach',
    authors: 'Shuo Yang, Ping Luo, Chen-Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hFOr9nPyWt4C',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'G3Flow: Generative 3D Semantic Flow for Pose-aware and Generalizable Object Manipulation',
    authors:
      'Tianxing Chen, Yao Mu, Zhixuan Liang, Zanxin Chen, Shijia Peng, Qiangyu Chen, Mingkun Xu, Ruizhen Hu, Hongyuan Zhang, Xuelong Li, Ping Luo',
    proceedings: 'CVPR 2025',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:EsEWqaRxkBgC',
      },
    ],
    keys: ['Vision', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title: 'GAS: Generative Avatar Synthesis from a Single Image',
    authors:
      'Lu  Yixing, Dong  Junting, Kwon  Youngjoong, Zhao  Qin, Dai  Bo, De la Torre  Fernando',
    proceedings: 'arXiv preprint arXiv:2502.06957 2025',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/GAS%3A-Generative-Avatar-Synthesis-from-a-Single-Lu-Dong/44065f181d479230c8c63460e9b86a698a62d031',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'GSDF: 3DGS Meets SDF for Improved Neural Rendering and Reconstruction',
    authors: 'Yu  Mulin, Lu  Tao, Xu  Linning, Jiang  Lihan, Xiangli  Yuanbo, Dai  Bo',
    proceedings:
      'The Thirty-eighth Annual Conference on Neural Information Processing Systems 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/GSDF%3A-3DGS-Meets-SDF-for-Improved-Neural-Rendering-Yu-Lu/b16efea4daff9d23d54f099418cc9ba008ced274',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'GausSim: Foreseeing Reality by Gaussian Simulator for Elastic Objects',
    authors: 'Shao  Yidi, Huang  Mu, Loy  Chen Change, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2412.17804 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/fed25b83ee6e2082d4c2d5ff730641f5c751c134',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Gaussiananything: Interactive point cloud latent diffusion for 3d generation',
    authors:
      'Lan  Yushi, Zhou  Shangchen, Lyu  Zhaoyang, Hong  Fangzhou, Yang  Shuai, Dai  Bo, Pan  Xingang, Change Loy  Chen',
    proceedings: 'arXiv e-prints 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/GaussianAnything%3A-Interactive-Point-Cloud-Latent-3D-Lan-Zhou/0f6d5df23da508163655df4e1ac19a1bc90e5feb',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Generative diffusion prior for unified image restoration and enhancement',
    authors:
      'Fei  Ben, Lyu  Zhaoyang, Pan  Liang, Zhang  Junzhe, Yang  Weidong, Luo  Tianyue, Zhang  Bo, Dai  Bo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Generative-Diffusion-Prior-for-Unified-Image-and-Fei-Lyu/5549dc3ceff07561d9fb59610c0f78c71617901a',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Generative occupancy fields for 3d surface-aware image synthesis',
    authors: 'Xu  Xudong, Pan  Xingang, Lin  Dahua, Dai  Bo',
    proceedings: 'Advances in Neural Information Processing Systems 2021',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Generative-Occupancy-Fields-for-3D-Surface-Aware-Xu-Pan/0755a30a4da86f60534e38507d786fc4fcae6540',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Gentron: Diffusion transformers for image and video generation',
    authors:
      'Shoufa Chen, Mengmeng Xu, Jiawei Ren, Yuren Cong, Sen He, Yanping Xie, Animesh Sinha, Ping Luo, Tao Xiang, Juan-Manuel Perez-Rua',
    proceedings:
      'CVPR 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-jrNzM816MMC',
      },
    ],
    keys: ['Multimodality', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Getmesh: A controllable model for high-quality mesh generation and manipulation',
    authors: 'Lyu  Zhaoyang, Fei  Ben, Wang  Jinyi, Xu  Xudong, Zhang  Ya, Yang  Weidong, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2403.11990 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/GetMesh%3A-A-Controllable-Model-for-High-quality-Mesh-Lyu-Fei/7fd70fad9b3ac04aeca79076a977d27002049421',
      },
    ],
    keys: ['Robotics', 'Generative'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'Gkgnet: Group k-nearest neighbor based graph convolutional network for multi-label image recognition',
    authors: 'Ruijie Yao, Sheng Jin, Lumin Xu, Wang Zeng, Wentao Liu, Chen Qian, Ping Luo, Ji Wu',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-mN3Mh-tlDkC',
      },
    ],
    keys: ['General', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Going deeper into face detection: A survey',
    authors: 'Shervin Minaee, Ping Luo, Zhe Lin, Kevin Bowyer',
    proceedings: 'arXiv preprint arXiv:2103.14983',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:XD-gHx7UXLsC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Going deeper into face detection: A survey. arXiv',
    authors: 'S Minaee, P Luo, Z Lin, K Bowyer',
    proceedings: 'arXiv preprint arXiv:2103.14983',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:BrOSOlqYqPUC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: [],
  },
  {
    title: 'Going deeper into face detection: A survey. arXiv 2021',
    authors: 'Shervin Minaee, Ping Luo, Zhe Lin, Kevin Bowyer',
    proceedings: 'arXiv preprint arXiv:2103.14983',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kF1pexMAQbMC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Going denser with open-vocabulary part segmentation',
    authors:
      'Peize Sun, Shoufa Chen, Chenchen Zhu, Fanyi Xiao, Ping Luo, Saining Xie, Zhicheng Yan',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:48xauSegjOkC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Goku: Flow Based Video Generative Foundation Models',
    authors:
      'Shoufa Chen, Chongjian Ge, Yuqi Zhang, Yida Zhang, Fengda Zhu, Hao Yang, Hongxiang Hao, Hui Wu, Zhichao Lai, Yifei Hu, Ting-Che Lin, Shilong Zhang, Fu Li, Chuan Li, Xing Wang, Yanghua Peng, Peize Sun, Ping Luo, Yi Jiang, Zehuan Yuan, Bingyue Peng, Xiaobing Liu',
    proceedings: 'arXiv preprint arXiv:2502.04896',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hvmnpdAuIbkC',
      },
    ],
    keys: ['Multimodality', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Grid-guided neural radiance fields for large urban scenes',
    authors:
      'Xu  Linning, Xiangli  Yuanbo, Peng  Sida, Pan  Xingang, Zhao  Nanxuan, Theobalt  Christian, Dai  Bo, Lin  Dahua',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Grid-guided-Neural-Radiance-Fields-for-Large-Urban-Xu-Xiangli/b904a7f27dafcd2d29de5852fcad03041a1166f5',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Gui odyssey: A comprehensive dataset for cross-app gui navigation on mobile devices',
    authors:
      'Quanfeng Lu, Wenqi Shao, Zitao Liu, Fanqing Meng, Boxuan Li, Botong Chen, Siyuan Huang, Kaipeng Zhang, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2406.08451',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SIv7DqKytYAC',
      },
    ],
    keys: ['Dataset/Benchmark', 'Dataset/Benchmark'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Guided diffusion model for adversarial purification',
    authors: 'Wang  Jinyi, Lyu  Zhaoyang, Lin  Dahua, Dai  Bo, Fu  Hongfei',
    proceedings: 'arXiv preprint arXiv:2205.14969 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/254e21a16df4a45899e6fd5e1fab9202c3491e4c',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'HRVMamba: High-Resolution Visual State Space Model for Dense Prediction',
    authors: 'Hao Zhang, Yongqiang Ma, Wenqi Shao, Ping Luo, Nanning Zheng, Kaipeng Zhang',
    proceedings: 'arXiv preprint arXiv:2410.03174',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:AYInfyleIOsC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Harvest Video Foundation Models via Efficient Post-Pretraining',
    authors: 'Yizhuo Li, Kunchang Li, Yinan He, Yi Wang, Yali Wang, Limin Wang, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2310.19554',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:KaMxkj08jr0C',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Hiagent: Hierarchical working memory management for solving long-horizon agent tasks with large language model',
    authors: 'Mengkang Hu, Tianxing Chen, Qiguang Chen, Yao Mu, Wenqi Shao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2408.09559',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:wE-fMHVdjMkC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Hierarchical 3D perception from a single image',
    authors: 'Ping Luo, Jiajie He, Liang Lin, Hongyang Chao',
    proceedings: '2009 16th IEEE International Conference on Image Processing (ICIP)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:0EnyYjriUFMC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Hierarchical face parsing via deep learning',
    authors: 'Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: '2012 IEEE Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:LkGwnXOMwfcC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Hirevae: An online and adaptive factor model based on hierarchical and regime-switch vae',
    authors: 'Wei  Zikai, Rao  Anyi, Dai  Bo, Lin  Dahua',
    proceedings: 'arXiv preprint arXiv:2306.02848 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/HireVAE%3A-An-Online-and-Adaptive-Factor-Model-Based-Wei-Rao/b2241edb47d3e65035c6eb6db2b0e644966a74de',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Homogenization of electric field distribution facilitating the Zn anode reversibility',
    authors:
      'Han Tang, Huadong Liang, Runmin Jia, Yu Liu, Huibiao Chen, Hongyu Luo, Wei Yang, Jian Wang, Mengjun Zhou, Ping Luo, Qinyou An',
    proceedings: 'Chemical Communications',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:j7_hQOaDUrUC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Horizon-GS: Unified 3D Gaussian Splatting for Large-Scale Aerial-to-Ground Scenes',
    authors:
      'Jiang  Lihan, Ren  Kerui, Yu  Mulin, Xu  Linning, Dong  Junting, Lu  Tao, Zhao  Feng, Lin  Dahua, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2412.01745 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Horizon-GS%3A-Unified-3D-Gaussian-Splatting-for-Jiang-Ren/d4c4047e8a2485114b6e8fa6e97bc2b50150a694',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'How does BN increase collapsed neural network filters?',
    authors: 'Sheng Zhou, Xinjiang Wang, Ping Luo, Litong Feng, Wenjie Li, Wei Zhang',
    proceedings: 'arXiv preprint arXiv:2001.11216',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:BrmTIyaxlBUC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Hr-nas: Searching efficient high-resolution neural architectures with lightweight transformers',
    authors: 'Mingyu Ding, Xiaochen Lian, Linjie Yang, Peng Wang, Xiaojie Jin, Zhiwu Lu, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:zLWjf1WUPmwC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Human Activity Understanding',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:geHnlv5EZngC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Human Centric Visual Analysis with Deep Learning, Springer, Singapore, 2020, pp. 115–130',
    authors: 'L LIN, D ZHANG, P Luo, W ZUO',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:dBIO0h50nwkC',
      },
    ],
    keys: ['General', 'General'],
    pis: [],
  },
  {
    title: 'Human Centric Visual Analysis with Deep Learning, Springer, Singapore, 2020, pp. 47–54',
    authors: 'L LIN, D ZHANG, P Luo, W ZUO',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:QYdC8u9Cj1oC',
      },
    ],
    keys: ['General', 'General'],
    pis: [],
  },
  {
    title: 'Human Centric Visual Analysis with Deep Learning, Springer, Singapore, 2020, pp. 69–83',
    authors: 'L LIN, D ZHANG, P Luo, W ZUO',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:9c2xU6iGI7YC',
      },
    ],
    keys: ['General', 'General'],
    pis: [],
  },
  {
    title: 'Human centric visual analysis with deep learning',
    authors: 'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4fKUyHm3Qg0C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Human-Centric Visual Analysis: Tasks and Progress',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:vRqMK49ujn8C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Hyperstyle3d: Text-guided 3d portrait stylization via hypernetworks',
    authors:
      'Chen  Zhuo, Xu  Xudong, Yan  Yichao, Pan  Ye, Zhu  Wenhan, Wu  Wayne, Dai  Bo, Yang  Xiaokang',
    proceedings: 'IEEE Transactions on Circuits and Systems for Video Technology 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/HyperStyle3D%3A-Text-Guided-3D-Portrait-Stylization-Chen-Xu/00cb67b8a8efb17d7101db912f360398416e57f4',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Ida-vlm: Towards movie understanding via id-aware large vision-language model',
    authors:
      'Yatai Ji, Shilong Zhang, Jie Wu, Peize Sun, Weifeng Chen, Xuefeng Xiao, Sidi Yang, Yujiu Yang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2407.07577',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:qwy9JoKyICEC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Image deblurring aided by low-resolution events',
    authors: 'Zhouxia Wang, Jimmy Ren, Jiawei Zhang, Ping Luo',
    proceedings: 'Electronics',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:XoXfffV-tXoC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Image normalization processing',
    authors: 'R Zhang, P Zhanglin, L Wu, P Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Aul-kAQHnToC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: [],
  },
  {
    title: 'Image processing method and apparatus, computer device, and computer storage medium',
    authors: 'W Shao, T Meng, R Zhang, P Luo, L Wu',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:EkHepimYqZsC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: [],
  },
  {
    title: 'Image processing method and apparatus, computer device, and storage medium',
    authors: 'R Zhang, P Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:86PQX7AUzd4C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: [],
  },
  {
    title: 'Image processing method and apparatus, electronic device and storage medium',
    authors: 'LI Chenghan, Z Liu, L Wu, P Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:PoWvk5oyLR8C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: [],
  },
  {
    title: 'Improving GANs with A Dynamic Discriminator',
    authors: 'Yang  Ceyuan, Shen  Yujun, Xu  Yinghao, Zhao  Deli, Dai  Bo, Zhou  Bolei',
    proceedings: 'Neural Information Processing Systems (NeurIPS) 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Improving-GANs-with-A-Dynamic-Discriminator-Yang-Shen/533bd07bb49a6c8cb65bad96236a8490f8fd2182',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Information processing method and apparatus, and storage medium',
    authors: 'Z Zhang, L Wu, P Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:9Nmd_mFXekcC',
      },
    ],
    keys: ['General', 'General'],
    pis: [],
  },
  {
    title: 'Instance-Level Human Parsing',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:l7t_Zn2s7bgC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'InterControl: Zero-shot Human Interaction Generation by Controlling Every Joint',
    authors: 'Wang  Zhenzhi, Wang  Jingbo, Li  Yixuan, Lin  Dahua, Dai  Bo',
    proceedings:
      'The Thirty-eighth Annual Conference on Neural Information Processing Systems 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/b9212638a1e32aa23c8384dc6a5718b831953afc',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Interactive Character Control with Auto-Regressive Motion Diffusion Models',
    authors: 'Shi  Yi, Wang  Jingbo, Jiang  Xuekun, Lin  Bingkun, Dai  Bo, Peng  Xue Bin',
    proceedings: 'ACM Transactions on Graphics (TOG) 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Interactive-Character-Control-with-Auto-Regressive-Shi-Wang/718c4a4851315ff334d097c524c18f5be6cf592c',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Interngpt: Solving vision-centric tasks by interacting with chatgpt beyond language',
    authors:
      'Zhaoyang Liu, Yinan He, Wenhai Wang, Weiyun Wang, Yi Wang, Shoufa Chen, Qinglong Zhang, Zeqiang Lai, Yang Yang, Qingyun Li, Jiashuo Yu, Kunchang Li, Zhe Chen, Xue Yang, Xizhou Zhu, Yali Wang, Limin Wang, Ping Luo, Jifeng Dai, Yu Qiao',
    proceedings: 'arXiv preprint arXiv:2305.05662',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:buQ7SEKw-1sC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Internvid: A large-scale video-text dataset for multimodal understanding and generation',
    authors:
      'Yi Wang, Yinan He, Yizhuo Li, Kunchang Li, Jiashuo Yu, Xin Ma, Xinhao Li, Guo Chen, Xinyuan Chen, Yaohui Wang, Conghui He, Ping Luo, Ziwei Liu, Yali Wang, Limin Wang, Yu Qiao',
    proceedings: 'arXiv preprint arXiv:2307.06942',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:7H_MAutzIkAC',
      },
    ],
    keys: ['Multimodality', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Internvl: Scaling up vision foundation models and aligning for generic visual-linguistic tasks',
    authors:
      'Zhe Chen, Jiannan Wu, Wenhai Wang, Weijie Su, Guo Chen, Sen Xing, Muyan Zhong, Qinglong Zhang, Xizhou Zhu, Lewei Lu, Bin Li, Ping Luo, Tong Lu, Yu Qiao, Jifeng Dai',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:RoXSNcbkSzsC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Interpret vision transformers as convnets with dynamic convolutions',
    authors: 'Zhou  Chong, Loy  Chen Change, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2309.10713 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/fc773da8606fe08b835eb2071050fad8379e2dc6',
      },
    ],
    keys: ['Transformers', 'Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Intra-and inter-action understanding via temporal action parsing',
    authors: 'Shao  Dian, Zhao  Yue, Dai  Bo, Lin  Dahua',
    proceedings: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2020',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Intra-and-Inter-Action-Understanding-via-Temporal-Shao-Zhao/c09af0b1bdbd5d532b0d5d2ba2a2a12b29ba4f19',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Janus: Decoupling visual encoding for unified multimodal understanding and generation',
    authors:
      'Chengyue Wu, Xiaokang Chen, Zhiyu Wu, Yiyang Ma, Xingchao Liu, Zizheng Pan, Wen Liu, Zhenda Xie, Xingkai Yu, Chong Ruan, Ping Luo',
    proceedings: 'CVPR 2025',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:L_l9e5I586QC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'JiSAM: Alleviate Labeling Burden and Corner Case Problems in Autonomous Driving via Minimal Real-World Data',
    authors: 'Runjian Chen, Wenqi Shao, Bo Zhang, Shaoshuai Shi, Li Jiang, Ping Luo',
    proceedings: 'CVPR 2025',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hGdtkIFZdKAC',
      },
    ],
    keys: ['Embodied AI', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Joint Face Representation Adaptation and Clustering in Videos: Supplementary Material',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:bEWYMUwI8FkC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Joint face representation adaptation and clustering in videos',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings:
      'Computer Vision–ECCV 2016: 14th European Conference, Amsterdam, The Netherlands, October 11-14, 2016, Proceedings, Part III 14',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:j3f4tGmQtD8C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Joint semantic segmentation by searching for compatible-competitive references',
    authors: 'Ping Luo, Xiaogang Wang, Liang Lin, Xiaoou Tang',
    proceedings: 'Proceedings of the 20th ACM international conference on Multimedia',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:5nxA0vEk-isC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'KET-QA: A Dataset for Knowledge Enhanced Table Question Answering',
    authors: 'Mengkang Hu, Haoyu Dong, Ping Luo, Shi Han, Dongmei Zhang',
    proceedings: 'arXiv preprint arXiv:2405.08099',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:jSAVyFp_754C',
      },
    ],
    keys: ['Dataset/Benchmark', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Kalman normalization: Normalizing internal representations across network layers',
    authors: 'Guangrun Wang, Ping Luo, Xinjiang Wang, Liang Lin',
    proceedings: 'Advances in neural information processing systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:fPk4N6BV_jEC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'LLaMA Decoder As Vision Transformer',
    authors:
      'Jiahao Wang, Wenqi Shao, Mengzhao Chen, Chengyue Wu, Yong Liu, Taiqiang Wu, Kaipeng Zhang, Songyang Zhang, Kai Chen, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SxCCDk4iOpsC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Language as queries for referring video object segmentation',
    authors: 'Jiannan Wu, Yi Jiang, Peize Sun, Zehuan Yuan, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:edDO8Oi4QzsC',
      },
    ],
    keys: ['Vision', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Language-driven open-vocabulary keypoint detection for animal body and face',
    authors:
      'Hao Zhang, Kaipeng Zhang, Lumin Xu, Shenqi Lai, Wenqi Shao, Nanning Zheng, Ping Luo, Yu Qiao',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:AXkvAH5U_nMC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Large Language Models as Decision Makers for Autonomous Driving',
    authors:
      'Hao Sha, Yao Mu, Yuxuan Jiang, Guojian Zhan, Li Chen, Chenfeng Xu, Ping Luo, Shengbo Eben Li, Masayoshi Tomizuka, Wei Zhan, Mingyu Ding',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ziOE8S1-AIUC',
      },
    ],
    keys: ['Embodied AI', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Large language models as automated aligners for benchmarking vision-language models',
    authors:
      'Yuanfeng Ji, Chongjian Ge, Weikai Kong, Enze Xie, Zhengying Liu, Zhengguo Li, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2311.14580',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:MAUkC_7iAq8C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Large-batch optimization for dense visual predictions',
    authors: 'Zeyue Xue, Jianming Liang, Guanglu Song, Zhuofan Zong, Liang Chen, Yu Liu, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HeT0ZceujKMC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Large-batch optimization for dense visual predictions: Training faster R-CNN in 4.2 minutes',
    authors: 'Zeyue Xue, Jianming Liang, Guanglu Song, Zhuofan Zong, Liang Chen, Yu Liu, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:vDZJ-YLwNdEC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Large-scale celebfaces attributes (celeba) dataset',
    authors: 'Ziwei Liu, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Retrieved August',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:pyW8ca7W8N0C',
      },
    ],
    keys: ['Dataset/Benchmark', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Large-scale fashion (deepfashion) database',
    authors: 'Ziwei Liu, Ping Luo, Shi Qiu, Xiaogang Wang, Xiaoou Tang',
    proceedings:
      'The Chinese University of Hong Kong, Category and Attribute Prediction Benchmark, Xiaoou TangMultimedia Laboratory',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:URolC5Kub84C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning 3D Garment Animation from Trajectories of A Piece of Cloth',
    authors: 'Shao  Yidi, Loy  Chen Change, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2501.01393 2025',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Learning-3D-Garment-Animation-from-Trajectories-of-Shao-Loy/168a4d4c2a9e13188fb176b6ad28fb0063c5c0f3',
      },
    ],
    keys: ['General'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Learning Hierarchical Cross-Modal Association for Co-Speech Gesture Generation',
    authors:
      'Liu  Xian, Wu  Qianyi, Zhou  Hang, Xu  Yinghao, Qian  Rui, Lin  Xinyi, Zhou  Xiaowei, Wu  Wayne, Dai  Bo, Zhou  Bolei',
    proceedings: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2022 ',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/769c2b7537dc0b9bddc1e4169e1d3b6f17bffc99',
      },
    ],
    keys: ['General', 'Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Learning Modulated Transformation in GANs',
    authors: 'Yang  Ceyuan, Zhang  Qihang, Xu  Yinghao, Zhu  Jiapeng, Shen  Yujun, Dai  Bo',
    proceedings: 'Advances in Neural Information Processing Systems (NeurIPS) 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/c9f39cc087f49be1e71e9a0dd5ac37039368a72a',
      },
    ],
    keys: ['General'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Learning a reinforced agent for flexible exposure bracketing selection',
    authors: 'Zhouxia Wang, Jiawei Zhang, Mude Lin, Jiong Wang, Ping Luo, Jimmy Ren',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:WA5NYHcadZ8C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning and Transferring Multi-task Deep Representation for Face Alignment',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:aqlVkmm33-oC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Learning compositional shape models of multiple distance metrics by information projection',
    authors: 'Ping Luo, Liang Lin, Xiaobai Liu',
    proceedings: 'IEEE transactions on neural networks and learning systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:IWHjjKOFINEC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning deep architectures via generalized whitened neural networks',
    authors: 'Ping Luo',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:blknAaTinKkC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning deep representation for face alignment with auxiliary attributes',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'IEEE transactions on pattern analysis and machine intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:qUcmZB5y_30C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning depth-guided convolutions for monocular 3d object detection',
    authors: 'Mingyu Ding, Yuqi Huo, Hongwei Yi, Zhe Wang, Jianping Shi, Zhiwu Lu, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on computer vision and pattern recognition workshops',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:D_sINldO8mEC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Learning grounded vision-language representation for versatile understanding in untrimmed videos',
    authors: 'Teng Wang, Jinrui Zhang, Feng Zheng, Wenhao Jiang, Ran Cheng, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2303.06378',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:5icHVeHT4IsC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning object interactions and descriptions for semantic image segmentation',
    authors: 'Guangrun Wang, Ping Luo, Liang Lin, Xiaogang Wang',
    proceedings: 'Proceedings of the IEEE conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:maZDTaKrznsC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning object-language alignments for open-vocabulary object detection',
    authors:
      'Chuang Lin, Peize Sun, Yi Jiang, Ping Luo, Lizhen Qu, Gholamreza Haffari, Zehuan Yuan, Jianfei Cai',
    proceedings: 'arXiv preprint arXiv:2211.14843',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:otzGkya1bYkC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning shape detector by quantizing curve segments with multiple distance metrics',
    authors: 'Ping Luo, Liang Lin, Hongyang Chao',
    proceedings:
      'Computer Vision–ECCV 2010: 11th European Conference on Computer Vision, Heraklion, Crete, Greece, September 5-11, 2010, Proceedings, Part III 11',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:UebtZRa9Y70C',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning social relation traits from face images',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen-Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-f6ydRqryjwC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning to recognize pedestrian attribute',
    authors: 'Yubin Deng, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'arXiv preprint arXiv:1501.00901',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SeFeTyx0c_EC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning transferable spatiotemporal representations from natural script knowledge',
    authors: 'Ziyun Zeng, Yuying Ge, Xihui Liu, Bin Chen, Ping Luo, Shu-Tao Xia, Yixiao Ge',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:yFnVuubrUp4C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Learning versatile neural architectures by propagating network codes',
    authors:
      'Mingyu Ding, Yuqi Huo, Haoyu Lu, Linjie Yang, Zhe Wang, Zhiwu Lu, Jingdong Wang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2103.13253',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:t7zJ5fGR-2UC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Leo: Generative latent image animator for human video synthesis',
    authors:
      'Wang  Yaohui, Ma  Xin, Chen  Xinyuan, Chen  Cunjian, Dantcheva  Antitza, Dai  Bo, Qiao  Yu',
    proceedings: 'International Journal of Computer Vision 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/LEO%3A-Generative-Latent-Image-Animator-for-Human-Wang-Ma/43c93968ea54ea098879c548732272aa22ce04ab',
      },
    ],
    keys: ['Multimodality', 'Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'LiT: Delving into a Simplified Linear Diffusion Transformer for Image Generation',
    authors:
      'Jiahao Wang, Ning Kang, Lewei Yao, Mengzhao Chen, Chengyue Wu, Songyang Zhang, Shuchen Xue, Yong Liu, Taiqiang Wu, Xihui Liu, Kaipeng Zhang, Shifeng Zhang, Wenqi Shao, Zhenguo Li, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2501.12976',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Zh0EY9V9P6UC',
      },
    ],
    keys: ['Generative', 'Vision'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Linkgan: Linking gan latents to pixels for controllable image synthesis',
    authors:
      'Zhu  Jiapeng, Yang  Ceyuan, Shen  Yujun, Shi  Zifan, Dai  Bo, Zhao  Deli, Chen  Qifeng',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/0fc8bc437bd741410a5688d475bf8b0687aef039',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Llama pro: Progressive llama with block expansion',
    authors:
      'Chengyue Wu, Yukang Gan, Yixiao Ge, Zeyu Lu, Jiahao Wang, Ye Feng, Ying Shan, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2401.02415',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:O0nohqN1r9EC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Ln3diff: Scalable latent neural fields diffusion for speedy 3d generation',
    authors:
      'Lan  Yushi, Hong  Fangzhou, Yang  Shuai, Zhou  Shangchen, Meng  Xuyi, Dai  Bo, Pan  Xingang, Loy  Chen Change',
    proceedings: 'European Conference on Computer Vision 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/c115fe03ce13e8cd7a1809e4325f95c36c06ef23',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Lvlm-ehub: A comprehensive evaluation benchmark for large vision-language models',
    authors:
      'Peng Xu, Wenqi Shao, Kaipeng Zhang, Peng Gao, Shuo Liu, Meng Lei, Fanqing Meng, Siyuan Huang, Yu Qiao, Ping Luo',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:FiytvqdAVhgC',
      },
    ],
    keys: ['Dataset/Benchmark', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'MBEV: Multi-Camera Joint 3D Detection and Segmentation with Unified Birds-Eye View Representation',
    authors:
      'Enze Xie, Zhiding Yu, Daquan Zhou, Jonah Philion, Anima Anandkumar, Sanja Fidler, Ping Luo, Jose M Alvarez',
    proceedings: 'arXiv preprint arXiv:2204.05088',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Ri6SYOTghG4C',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'MGL: Mutual graph learning for camouflaged object detection',
    authors: 'Qiang Zhai, Xin Li, Fan Yang, Zhicheng Jiao, Ping Luo, Hong Cheng, Zicheng Liu',
    proceedings: 'IEEE Transactions on Image Processing',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Ehil0879vHcC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'ML-ViG: Multi-label image recognition with vision graph convolutional network',
    authors: 'Ruijie Yao, Sheng Jin, Wentao Liu, Chen Qian, Ping Luo, Ji Wu',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_OXeSy2IsFwC',
      },
    ],
    keys: ['General', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Make-it-vivid: dressing your animatable biped cartoon characters from text',
    authors: 'Tang  Junshu, Zeng  Yanhong, Fan  Ke, Wang  Xuheng, Dai  Bo, Chen  Kai, Ma  Lizhuang',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Make-It-Vivid%3A-Dressing-Your-Animatable-Biped-from-Tang-Zeng/7834240ffa9b8c77738bf330bc56f3da4ebff5ce',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'MangaNinja: Line Art Colorization with Precise Reference Following',
    authors:
      'Zhiheng Liu, Ka Leong Cheng, Xi Chen, Jie Xiao, Hao Ouyang, Kai Zhu, Yu Liu, Yujun Shen, Qifeng Chen, Ping Luo',
    proceedings: 'CVPR 2025',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:KWzIFqRkAKkC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Maskgan: Towards diverse and interactive facial image manipulation',
    authors: 'Cheng-Han Lee, Ziwei Liu, Lingyun Wu, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:xtRiw3GOFMkC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Maskplace: Fast chip placement via reinforced visual representation learning',
    authors: 'Yao Lai, Yao Mu, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:F9fV5C73w3QC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'MatchMask: Mask-Centric Generative Data Augmentation for Label-Scarce Semantic Segmentation',
    authors: 'Yuqi Lin, Wenqi Shao, Zheng Yang, Jun Zhao, Xiaofei He, Ping Luo, Kaipeng Zhang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:__bU50VfleQC',
      },
    ],
    keys: ['Vision', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Matlaber: Material-aware text-to-3d via latent brdf auto-encoder',
    authors: 'Xu  Xudong, Lyu  Zhaoyang, Pan  Xingang, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2308.09278 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/MATLABER%3A-Material-Aware-Text-to-3D-via-LAtent-BRDF-Xu-Lyu/6af93090c0bef85cf21ef5db9ce16fe001159ab7',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Matrixcity: A large-scale city dataset for city-scale neural rendering and beyond',
    authors:
      'Li  Yixuan, Jiang  Lihan, Xu  Linning, Xiangli  Yuanbo, Wang  Zhenzhi, Lin  Dahua, Dai  Bo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/MatrixCity%3A-A-Large-scale-City-Dataset-for-Neural-Li-Jiang/861593f632f98aa597802b95056a05b37e8955f8',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Mean-AP Guided Reinforced Active Learning for Object Detection',
    authors: 'Zhixuan Liang, Xingyu Zeng, Rui Zhao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2310.08387',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:6_hjMsCP8ZoC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'MetaBEV: Solving Sensor Failures for 3D Detection and Map Segmentation< Supplementary Material',
    authors:
      'Chongjian Ge, Junsong Chen, Enze Xie Zhongdao Wang, Lanqing Hong Huchuan Lu Zhenguo Li, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:LPtt_HFRSbwC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'MetaCloth: learning unseen tasks of dense fashion landmark detection from a few samples',
    authors: 'Yuying Ge, Ruimao Zhang, Ping Luo',
    proceedings: 'IEEE Transactions on Image Processing',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:i2xiXl-TujoC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'MetaDance: Few-shot Dancing Video Retargeting via Temporal-aware Meta-learning',
    authors: 'Yuying Ge, Yibing Song, Ruimao Zhang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2201.04851',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Dip1O2bNi0gC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Metabev: Solving sensor failures for 3d detection and map segmentation',
    authors:
      'Chongjian Ge, Junsong Chen, Enze Xie, Zhongdao Wang, Lanqing Hong, Huchuan Lu, Zhenguo Li, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:WC9gN4BGCRcC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Metabev: Solving sensor failures for bev detection and map segmentation',
    authors:
      'Chongjian Ge, Junsong Chen, Enze Xie, Zhongdao Wang, Lanqing Hong, Huchuan Lu, Zhenguo Li, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2304.09801',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:6yz0xqPARnAC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Method and apparatus for segmenting video object, electronic device, and storage medium',
    authors: 'LI Xiaoxiao, Y Qi, Z Wang, K Chen, Z Liu, SHI Jianping, P Luo, CC Loy, ...',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:abG-DnoFyZgC',
      },
    ],
    keys: ['Vision', 'Multimodality'],
    pis: [],
  },
  {
    title: 'Method and device for image processing, and computer storage medium',
    authors: 'X Pan, SHI Jianping, P Luo, X Tang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:evX43VCCuoAC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: [],
  },
  {
    title: 'Method and device for image processing, electronic device, and storage medium',
    authors: 'X Pan, P Luo, SHI Jianping, X Tang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:fEOibwPWpKIC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: [],
  },
  {
    title: 'Method and system for exacting face features from data of face images',
    authors: 'X Tang, ZHU Zhenyao, P Luo, X Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:BqipwSGYUEgC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: [],
  },
  {
    title: 'Methods and systems for social relation identification',
    authors: 'X Tang, Z Zhang, P Luo, CC Loy',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:2P1L_qKh6hAC',
      },
    ],
    keys: ['General', 'General'],
    pis: [],
  },
  {
    title:
      'Miles: Visual bert pre-training with injected language semantics for video-text retrieval',
    authors:
      'Yuying Ge, Yixiao Ge, Xihui Liu, Jinpeng Wang, Jianping Wu, Ying Shan, Xiaohu Qie, Ping Luo',
    proceedings: 'European conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:GtLg2Ama23sC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Mix-and-match tuning for self-supervised semantic segmentation',
    authors: 'Xiaohang Zhan, Ziwei Liu, Ping Luo, Xiaoou Tang, Chen Loy',
    proceedings: 'Proceedings of the AAAI conference on artificial intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:RGFaLdJalmkC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Mllms-augmented visual-language representation learning',
    authors:
      'Yanqing Liu, Kai Wang, Wenqi Shao, Ping Luo, Yu Qiao, Mike Zheng Shou, Kaipeng Zhang, Yang You',
    proceedings: 'arXiv preprint arXiv:2311.18765',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:OBSaB-F7qqsC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Mm-eureka: Exploring visual aha moment with rule-based large-scale reinforcement learning',
    authors:
      'F Meng, L Du, Z Liu, Z Zhou, Q Lu, D Fu, B Shi, W Wang, J He, K Zhang, P Luo, Y Qiao, Q Zhang, W Shao',
    proceedings: 'arXiv preprint arXiv:2503.07365',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:YTuZlYwrTOUC',
      },
    ],
    keys: ['RL', 'General'],
    pis: [],
  },
  {
    title: 'Mmiu: Multimodal multi-image understanding for evaluating large vision-language models',
    authors:
      'Fanqing Meng, Jin Wang, Chuanhao Li, Quanfeng Lu, Hao Tian, Jiaqi Liao, Xizhou Zhu, Jifeng Dai, Yu Qiao, Ping Luo, Kaipeng Zhang, Wenqi Shao',
    proceedings: 'arXiv preprint arXiv:2408.02718',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kJDgFkosVoMC',
      },
    ],
    keys: ['Multimodality', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Mmt-bench: A comprehensive multimodal benchmark for evaluating large vision-language models towards multitask agi',
    authors:
      'Kaining Ying, Fanqing Meng, Jin Wang, Zhiqian Li, Han Lin, Yue Yang, Hao Zhang, Wenbo Zhang, Yuqi Lin, Shuo Liu, Jiayi Lei, Quanfeng Lu, Runjian Chen, Peng Xu, Renrui Zhang, Haozhe Zhang, Peng Gao, Yali Wang, Yu Qiao, Ping Luo, Kaipeng Zhang, Wenqi Shao',
    proceedings: 'arXiv preprint arXiv:2404.16006',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HJSXoJQnj-YC',
      },
    ],
    keys: ['Multimodality', 'Dataset/Benchmark'],
    pis: ['Ping Luo'],
  },
  {
    title: 'MoLE: Enhancing Human-centric Text-to-image Diffusion via Mixture of Low-rank Experts',
    authors: 'Jie Zhu, Yixiong Chen, Mingyu Ding, Ping Luo, Leye Wang, Jingdong Wang',
    proceedings: 'arXiv preprint arXiv:2410.23332',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SAZ1SQo2q1kC',
      },
    ],
    keys: ['Generative', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'MoLE: Human-centric Text-to-image Diffusion with Mixture of Low-rank Experts',
    authors: 'Jie Zhu, Yixiong Chen, Mingyu Ding, Ping Luo, Leye Wang, Jingdong Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:w1MjKQ0l0TYC',
      },
    ],
    keys: ['Generative', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Model-based reinforcement learning via imagination with derived memory',
    authors:
      'Yao Mu, Yuzheng Zhuang, Bin Wang, Guangxiang Zhu, Wulong Liu, Jianyu Chen, Ping Luo, Shengbo Li, Chongjie Zhang, Jianye Hao',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:e_rmSamDkqQC',
      },
    ],
    keys: ['RL', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Monocular 3D Object Reconstruction with GAN Inversion',
    authors: 'Zhang  Junzhe, Ren  Daxuan, Cai  Zhongang, Yeo  Chai Kiat, Dai  Bo, Loy  Chen Change',
    proceedings: 'European Conference on Computer Vision (ECCV) 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/3bcf42780f142e0c5d7efc6741018a34ed161c3c',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Motionctrl: A unified and flexible motion controller for video generation',
    authors:
      'Zhouxia Wang, Ziyang Yuan, Xintao Wang, Yaowei Li, Tianshui Chen, Menghan Xia, Ping Luo, Ying Shan',
    proceedings: 'ACM SIGGRAPH 2024 Conference Papers',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:QyXJ3EUuO1IC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Motionlcm: Real-time controllable motion generation via latent consistency model',
    authors: 'Dai  Wenxun, Chen  Ling-Hao, Wang  Jingbo, Liu  Jinpeng, Dai  Bo, Tang  Yansong',
    proceedings: 'European Conference on Computer Vision 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/MotionLCM%3A-Real-time-Controllable-Motion-Generation-Dai-Chen/31cf335ceee3e5ed44aaaf04bd5631645c7d954c',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Move Forward and Tell: A Progressive Generator of Video Descriptions',
    authors: 'Xiong  Yilei, Dai  Bo, Lin  Dahua',
    proceedings: 'European Conference on Computer Vision (ECCV) 2018',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Move-Forward-and-Tell%3A-A-Progressive-Generator-of-Xiong-Dai/b74a094b6e35fab07e1a4694afd12cad9696f1c1',
      },
    ],
    keys: ['Multimodality', 'Multimodality'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Multi-compound transformer for accurate biomedical image segmentation',
    authors:
      'Yuanfeng Ji, Ruimao Zhang, Huijie Wang, Zhen Li, Lingyun Wu, Shaoting Zhang, Ping Luo',
    proceedings:
      'Medical Image Computing and Computer Assisted Intervention–MICCAI 2021: 24th International Conference, Strasbourg, France, September 27–October 1, 2021, Proceedings, Part I 24',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:BUYA1_V_uYcC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Multi-frame collaboration for effective endoscopic video polyp detection via spatial-temporal feature transformation',
    authors: 'Lingyun Wu, Zhiqiang Hu, Yuanfeng Ji, Ping Luo, Shaoting Zhang',
    proceedings:
      'Medical Image Computing and Computer Assisted Intervention–MICCAI 2021: 24th International Conference, Strasbourg, France, September 27–October 1, 2021, Proceedings, Part V 24',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:vbGhcppDl1QC',
      },
    ],
    keys: ['Vision', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Multi-identity Human Image Animation with Structural Video Diffusion',
    authors:
      'Wang  Zhenzhi, Li  Yixuan, Zeng  Yanhong, Guo  Yuwei, Lin  Dahua, Xue  Tianfan, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2504.04126 2025',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/5588e943742454b82444f2b800034cc11f8cb1ae',
      },
    ],
    keys: ['Multimodality'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Multi-level contrastive learning for dense prediction task',
    authors: 'Qiushan Guo, Yizhou Yu, Yi Jiang, Jiannan Wu, Zehuan Yuan, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2304.02010',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:GFxP56DSvIMC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Multi-view perceptron: a deep model for learning face identity and view representations',
    authors: 'Zhenyao Zhu, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Wp0gIr-vW9MC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Multimodal-gpt: A vision and language model for dialogue with humans',
    authors:
      'Tao Gong, Chengqi Lyu, Shilong Zhang, Yudong Wang, Miao Zheng, Qian Zhao, Kuikun Liu, Wenwei Zhang, Ping Luo, Kai Chen',
    proceedings: 'arXiv preprint arXiv:2305.04790',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:jL-93Qbq4QoC',
      },
    ],
    keys: ['Multimodality', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Mvbench: A comprehensive multi-modal video understanding benchmark',
    authors:
      'Kunchang Li, Yali Wang, Yinan He, Yizhuo Li, Yi Wang, Yi Liu, Zun Wang, Jilan Xu, Guo Chen, Ping Luo, Limin Wang, Yu Qiao',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HGTzPopzzJcC',
      },
    ],
    keys: ['Multimodality', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title: 'NADER: Neural Architecture Design via Multi-Agent Collaboration',
    authors: 'Zekang Yang, Wang Zeng, Sheng Jin, Chen Qian, Ping Luo, Wentao Liu',
    proceedings: 'CVPR 2025',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ZqE1mSdD_DYC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Needle in a multimodal haystack',
    authors:
      'Weiyun Wang, Shuibo Zhang, Yiming Ren, Yuchen Duan, Tiantong Li, Shuo Liu, Mengkang Hu, Zhe Chen, Kaipeng Zhang, Lewei Lu, Xizhou Zhu, Ping Luo, Yu Qiao, Jifeng Dai, Wenqi Shao, Wenhai Wang',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:silx2ntsSuwC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Network training method, electronic device and storage medium',
    authors: 'X Pan, Z Xiaohang, B Dai, D Lin, P Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:3htObqc8RwsC',
      },
    ],
    keys: ['General', 'General'],
    pis: [],
  },
  {
    title:
      'Neural MPC-Based Decision-Making Framework for Autonomous Driving in Multi-Lane Roundabout',
    authors: 'Yao Mu, Zhiqian Lan, Chen Chen, Chang Liu, Ping Luo, Shengbo Eben Li',
    proceedings:
      '2023 IEEE 26th International Conference on Intelligent Transportation Systems (ITSC)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:sJsF-0ZLhtgC',
      },
    ],
    keys: ['Embodied AI', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Neural Network Encapsulation',
    authors: 'Li  Hongyang, Guo  Xiaoyang, Dai  Bo, Ouyang  Wanli, Wang  Xiaogang',
    proceedings: 'European Conference on Computer Vision (ECCV) 2018',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/f96f30e7af13c3fbf83ee58e1c7f577414af1aa9',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'Neural network training method and apparatus, and image processing method and apparatus',
    authors: 'HAN Jiangfan, P Luo, X Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:M7yex6snE4oC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: [],
  },
  {
    title: 'Neural network training method and image matching method and apparatus',
    authors: 'Y Ge, L Wu, R Zhang, P Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tYavs44e6CUC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: [],
  },
  {
    title: 'Normalization method and apparatus for deep neural network, and storage media',
    authors: 'P Luo, L Wu, J Ren, P Zhanglin, R Zhang, W Xinjiang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:1yQoGdGgb4wC',
      },
    ],
    keys: ['General', 'General'],
    pis: [],
  },
  {
    title:
      'Not all models are equal: Predicting model transferability in a self-challenging fisher space',
    authors:
      'Wenqi Shao, Xun Zhao, Yixiao Ge, Zhaoyang Zhang, Lei Yang, Xiaogang Wang, Ying Shan, Ping Luo',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:umqufdRvDiIC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Not all pixels are equal: Difficulty-aware semantic segmentation via deep layer cascade',
    authors: 'Xiaoxiao Li, Ziwei Liu, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:k_IJM867U9cC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Not all tokens are equal: Human-centric visual analysis via token clustering transformer',
    authors: 'Wang Zeng, Sheng Jin, Wentao Liu, Chen Qian, Ping Luo, Wanli Ouyang, Xiaogang Wang',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4fGpz3EwCPoC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Novel policy seeking with constrained optimization',
    authors: 'Sun  Hao, Peng  Zhenghao, Dai  Bo, Guo  Jian, Lin  Dahua, Zhou  Bolei',
    proceedings: 'arXiv preprint arXiv:2005.10696 2020',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Novel-Policy-Seeking-with-Constrained-Optimization-Sun-Peng/99bc5a19a5aa9f85e2c1ecdc9bf8add7b75dae45',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Objects in semantic topology',
    authors:
      'Shuo Yang, Peize Sun, Yi Jiang, Xiaobo Xia, Ruiheng Zhang, Zehuan Yuan, Changhu Wang, Ping Luo, Min Xu',
    proceedings: 'arXiv preprint arXiv:2110.02687',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:lmc2jWPfTJgC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Octree-gs: Towards consistent real-time rendering with lod-structured 3d gaussians',
    authors: 'Ren  Kerui, Jiang  Lihan, Lu  Tao, Yu  Mulin, Xu  Linning, Ni  Zhangkai, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2403.17898 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/4ab763a5ccf2b84fd6f6e0834ee73f3a0cd8caa2',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Omnimedvqa: A new large-scale comprehensive evaluation benchmark for medical lvlm',
    authors: 'Yutao Hu, Tianbin Li, Quanfeng Lu, Wenqi Shao, Junjun He, Yu Qiao, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:VN7nJs4JPk0C',
      },
    ],
    keys: ['General', 'Dataset/Benchmark'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Omniquant: Omnidirectionally calibrated quantization for large language models',
    authors:
      'Wenqi Shao, Mengzhao Chen, Zhaoyang Zhang, Peng Xu, Lirui Zhao, Zhiqian Li, Kaipeng Zhang, Peng Gao, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2308.13137',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Br1UauaknNIC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Once a man: Towards multi-target attack via learning multi-target adversarial network once',
    authors:
      'Jiangfan Han, Xiaoyi Dong, Ruimao Zhang, Dongdong Chen, Weiming Zhang, Nenghai Yu, Ping Luo, Xiaogang Wang',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:1sJd4Hv_s6UC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Online knowledge distillation via collaborative learning',
    authors: 'Qiushan Guo, Xinjiang Wang, Yichao Wu, Zhipeng Yu, Ding Liang, Xiaolin Hu, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:AXPGKjj_ei8C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Open-vocabulary animal keypoint detection with semantic-feature matching',
    authors:
      'Hao Zhang, Lumin Xu, Shenqi Lai, Wenqi Shao, Nanning Zheng, Ping Luo, Yu Qiao, Kaipeng Zhang',
    proceedings: 'International Journal of Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:g5Ck-dwhA_QC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Optimization variance: Exploring generalization properties of DNNs',
    authors: 'Zhang  Xiao, Wu  Dongrui, Xiong  Haoyi, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2106.01714 2021',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Optimization-Variance%3A-Exploring-Generalization-of-Zhang-Wu/0654d07f4b2e0841764bf2bd8415f78c371cad7f',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Optimizing Facial Landmark Detection by Facial Attribute Learning',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'a∈ A',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:M3ejUd6NZC8C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Orthoplanes: A novel representation for better 3d-awareness of gans',
    authors: 'He  Honglin, Yang  Zhuoqian, Li  Shikai, Dai  Bo, Wu  Wayne',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/7df7b0625fdf775611b8e6bb7bbad00fcc9fd074',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'PDA: Progressive data augmentation for general robustness of deep neural networks',
    authors:
      'Hang Yu, Aishan Liu, Xianglong Liu, Gengchao Li, Ping Luo, Ran Cheng, Jichen Yang, Chongzhi Zhang',
    proceedings: 'arXiv preprint arXiv:1909.04839',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:dQ2og3OwTAUC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'PIXART-: Weak-to-Strong Training of Diffusion Transformer for 4K Text-to-Image Generation',
    authors:
      'Junsong Chen, Chongjian Ge, Enze Xie, Yue Wu, Lewei Yao, Xiaozhe Ren, Zhongdao Wang, Ping Luo, Huchuan Lu, Zhenguo Li',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:An6A6Jpfc1oC',
      },
    ],
    keys: ['Generative', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'PVTv2: Improved Baselines with Pyramid Vision Transformer',
    authors:
      'Ling Shao Wenhai Wang, Enze Xie, Xiang Li, Deng-Ping Fan, Kaitao Song, Ding Liang, Tong Lu, Ping Luo',
    proceedings: 'Computational Visual Media',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:bz8QjSJIRt4C',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Pacer+: On-demand pedestrian animation controller in driving scenarios',
    authors: 'Wang  Jingbo, Luo  Zhengyi, Yuan  Ye, Li  Yixuan, Dai  Bo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/PACER%2B%3A-On-Demand-Pedestrian-Animation-Controller-Wang-Luo/360d6e9d81b683811ad1aa8a09fa20e339cd9791',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Panoptic segformer: Delving deeper into panoptic segmentation with transformers',
    authors:
      'Zhiqi Li, Wenhai Wang, Enze Xie, Zhiding Yu, Anima Anandkumar, Jose M Alvarez, Ping Luo, Tong Lu',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:g3aElNc5_aQC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Parser-free virtual try-on via distilling appearance flows',
    authors: 'Yuying Ge, Yibing Song, Ruimao Zhang, Chongjian Ge, Wei Liu, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:j8SEvjWlNXcC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Part123: part-aware 3d reconstruction from a single-view image',
    authors:
      'Anran Liu, Cheng Lin, Yuan Liu, Xiaoxiao Long, Zhiyang Dou, Hao-Xiang Guo, Ping Luo, Wenping Wang',
    proceedings: 'ACM SIGGRAPH 2024 Conference Papers',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:UuEBAcK4md4C',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Pedestrian Detection with RPN and Boosted Forest',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:08ZZubdj9fEC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Pedestrian attribute recognition at far distance',
    authors: 'Yubin Deng, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the 22nd ACM international conference on Multimedia',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HoB7MX3m0LUC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Pedestrian detection aided by deep learning semantic tasks',
    authors: 'Yonglong Tian, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'CVPR',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:dhFuZR0502QC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Pedestrian parsing via deep decompositional network',
    authors: 'Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Se3iqnhoufwC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Person Verification',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:sSrBHYA8nusC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Phybench: A physical commonsense benchmark for evaluating text-to-image models',
    authors:
      'Fanqing Meng, Wenqi Shao, Lixin Luo, Yahong Wang, Yiran Chen, Quanfeng Lu, Yue Yang, Tianshuo Yang, Kaipeng Zhang, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2406.11802',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:qe6vwMD2xtsC',
      },
    ],
    keys: ['Dataset/Benchmark', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'PixArt-: Fast Training of Diffusion Transformer for Photorealistic Text-to-Image Synthesis',
    authors:
      'Junsong Chen, Jincheng Yu, Chongjian Ge, Lewei Yao, Enze Xie, Yue Wu, Zhongdao Wang, James Kwok, Ping Luo, Huchuan Lu, Zhenguo Li',
    proceedings: 'arXiv preprint arXiv:2310.00426',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:DBa1UEJaJKAC',
      },
    ],
    keys: ['Generative', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Pixart-δ: Fast and controllable image generation with latent consistency models',
    authors:
      'Junsong Chen, Yue Wu, Simian Luo, Enze Xie, Sayak Paul, Ping Luo, Hang Zhao, Zhenguo Li',
    proceedings: 'arXiv preprint arXiv:2401.05252',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:uVUOdF_882EC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'PixelFlow: Pixel-Space Generative Models with Flow',
    authors: 'Shoufa Chen, Chongjian Ge, Shilong Zhang, Peize Sun, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2504.07963',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:LGlY6t8CeOMC',
      },
    ],
    keys: ['Generative', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Plot2code: A comprehensive benchmark for evaluating multi-modal large language models in code generation from scientific plots',
    authors:
      'Chengyue Wu, Yixiao Ge, Qiushan Guo, Jiahao Wang, Zhixuan Liang, Zeyu Lu, Ying Shan, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2405.07990',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:PkcyUWeTMh0C',
      },
    ],
    keys: ['Multimodality', 'Dataset/Benchmark'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Point cloud pre-training with diffusion models',
    authors:
      'Zheng  Xiao, Huang  Xiaoshui, Mei  Guofeng, Hou  Yuenan, Lyu  Zhaoyang, Dai  Bo, Ouyang  Wanli, Gong  Yongshun',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/437c7836d32c7f221aad466047130075c7cb5336',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'Polarmask++: Enhanced polar representation for single-shot instance segmentation and beyond',
    authors: 'Enze Xie, Wenhai Wang, Mingyu Ding, Ruimao Zhang, Ping Luo',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:nrtMV_XWKgEC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Polarmask: Single shot instance segmentation with polar representation',
    authors:
      'Enze Xie, Peize Sun, Xiaoge Song, Wenhai Wang, Xuebo Liu, Ding Liang, Chunhua Shen, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:WbkHhVStYXYC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Policy adaptation from foundation model feedback',
    authors: 'Yuying Ge, Annabella Macaluso, Li Erran Li, Ping Luo, Xiaolong Wang',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ubry08Y2EpUC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Policy continuation and policy evolution with hindsight inverse dynamics',
    authors: 'Sun  Hao, Dai  Bo, Li  Zhizhong, Liu  Xiaotong, Xu  Rui, Lin  Dahua, Zhou  Bolei',
    proceedings: 'Optimization Foundations for Reinforcement Learning Workshop at NeurIPS 2019',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Policy-Continuation-and-Policy-Evolution-with-Sun-Dai/f52449c24b55852bff87205f50d30339166ba8df',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Polygon-free: unconstrained scene text detection with box annotations',
    authors: 'Weijia Wu, Enze Xie, Ruimao Zhang, Wenhai Wang, Ping Luo, Hong Zhou',
    proceedings: '2022 IEEE International Conference on Image Processing (ICIP)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4hFrxpcac9AC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Pose for Everything: Towards Category-Agnostic Pose Estimation–Supplementary Material–',
    authors:
      'Lumin Xu, Sheng Jin, Wang Zeng, Wentao Liu, Chen Qian, Wanli Ouyang, Ping Luo, Xiaogang Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:yMeIxYmEMEAC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Pose for everything: Towards category-agnostic pose estimation',
    authors:
      'Lumin Xu, Sheng Jin, Wang Zeng, Wentao Liu, Chen Qian, Wanli Ouyang, Ping Luo, Xiaogang Wang',
    proceedings: 'European conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:IRz6iEL74y4C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Posetrans: A simple yet effective pose transformation augmentation for human pose estimation',
    authors: 'Wentao Jiang, Sheng Jin, Wentao Liu, Chen Qian, Ping Luo, Si Liu',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:IUKN3-7HHlwC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Position: Towards implicit prompt for text-to-image models',
    authors:
      'Yue Yang, Yuqi Lin, Hong Liu, Wenqi Shao, Runjian Chen, Hailong Shang, Yu Wang, Yu Qiao, Kaipeng Zhang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2403.02118',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:EPG8bYD4jVwC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Prefixquant: Static quantization beats dynamic through prefixed outliers in llms',
    authors: 'Mengzhao Chen, Yi Liu, Jiahao Wang, Yi Bin, Wenqi Shao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2410.05265',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:isU91gLudPYC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Proc-GS: Procedural building generation for city assembly with 3D Gaussians',
    authors:
      'Li  Yixuan, Ran  Xingjian, Xu  Linning, Lu  Tao, Yu  Mulin, Wang  Zhenzhi, Xiangli  Yuanbo, Lin  Dahua, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2412.07660 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Proc-GS%3A-Procedural-Building-Generation-for-City-3D-Li-Ran/4f862b99b1fa0a67976b4dc24eb2a071828b41ce',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Program: Prototype graph model based pseudo-label learning for test-time adaptation',
    authors: 'Haopeng Sun, Lumin Xu, Sheng Jin, Ping Luo, Chen Qian, Wentao Liu',
    proceedings: 'The Twelfth International Conference on Learning Representations',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:F2UWTTQJPOcC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Prompt-a-video: Prompt your video diffusion model via preference-aligned llm',
    authors:
      'Yatai Ji, Jiacheng Zhang, Jie Wu, Shilong Zhang, Shoufa Chen, Chongjian GE, Peize Sun, Weifeng Chen, Wenqi Shao, Xuefeng Xiao, Weilin Huang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2412.15156',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:AzKEL7Gb_04C',
      },
    ],
    keys: ['Multimodality', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Prototypical Context-Aware Dynamics for Generalization in Visual Control With Model-Based Reinforcement Learning',
    authors:
      'Junjie Wang, Qichao Zhang, Yao Mu, Dong Li, Dongbin Zhao, Yuzheng Zhuang, Ping Luo, Bin Wang, Jianye Hao',
    proceedings: 'IEEE Transactions on Industrial Informatics',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:IsPWOBWtZBwC',
      },
    ],
    keys: ['RL', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Prototypical context-aware dynamics generalization for high-dimensional model-based reinforcement learning',
    authors:
      'Junjie Wang, Yao Mu, Dong Li, Qichao Zhang, Dongbin Zhao, Yuzheng Zhuang, Ping Luo, Bin Wang, Jianye Hao',
    proceedings: 'arXiv preprint arXiv:2211.12774',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:P7Ujq4OLJYoC',
      },
    ],
    keys: ['RL', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Pseudo-labeled auto-curriculum learning for semi-supervised keypoint localization',
    authors: 'Can Wang, Sheng Jin, Yingda Guan, Wentao Liu, Chen Qian, Ping Luo, Wanli Ouyang',
    proceedings: 'arXiv preprint arXiv:2201.08613',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HbR8gkJAVGIC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Pyramid Vision Transformer: A Versatile Backbone for Dense Prediction without Convolutions—Supplemental Materials',
    authors:
      'Wenhai Wang, Enze Xie, Xiang Li, Deng-Ping Fan, Kaitao Song, Ding Liang, Tong Lu, Ping Luo, Ling Shao',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:MLfJN-KU85MC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Pyramid vision transformer: A versatile backbone for dense prediction without convolutions',
    authors:
      'Wenhai Wang, Enze Xie, Xiang Li, Deng-Ping Fan, Kaitao Song, Ding Liang, Tong Lu, Ping Luo, Ling Shao',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-_dYPAW6P2MC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'RIGID: Recurrent GAN Inversion and Editing of Real Face Videos and Beyond',
    authors: 'Yangyang Xu, Shengfeng He, Kwan-Yee K Wong, Ping Luo',
    proceedings: 'International Journal of Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-uzm3Y7AvW0C',
      },
    ],
    keys: ['Vision', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Raphael: Text-to-image generation via large mixture of diffusion paths',
    authors: 'Zeyue Xue, Guanglu Song, Qiushan Guo, Boxiao Liu, Zhuofan Zong, Yu Liu, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:cK4Rrx0J3m0C',
      },
    ],
    keys: ['Generative', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Real or Not Real, that is the Question',
    authors: 'Xiangli  Yuanbo, Deng  Yubin, Dai  Bo, Loy  Chen Change, Lin  Dahua',
    proceedings: 'International Conference on Learning Representation (ICLR) 2020',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/7a2c9cc48062fcfd77a2e6e97aa48119a21c9f7d',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Real-time controllable denoising for image and video',
    authors:
      'Zhaoyang Zhang, Yitong Jiang, Wenqi Shao, Xiaogang Wang, Ping Luo, Kaimo Lin, Jinwei Gu',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Bg7qf7VwUHIC',
      },
    ],
    keys: ['Multimodality', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Real-time end-to-end video text spotter with contrastive representation learning',
    authors:
      'Wejia Wu, Zhuang Li, Jiahong Li, Chunhua Shen, Hong Zhou, Size Li, Zhongyuan Wang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2207.08417',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_5tno0g5mFcC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Recover canonical-view faces in the wild with deep neural networks',
    authors: 'Zhenyao Zhu, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'arXiv preprint arXiv:1404.3543',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Zph67rFs4hoC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Recursive Visual Sound Separation Using Minus-Plus Net',
    authors: 'Xu  Xudong, Dai  Bo, Lin  Dahua',
    proceedings: 'IEEE International Conference on Computer Vision (ICCV) 2019',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Recursive-Visual-Sound-Separation-Using-Minus-Plus-Xu-Dai/b7a5f074e06cf8d71e26fb5d25b86b4164a5bb54',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Regiongpt: Towards region understanding vision language model',
    authors:
      'Qiushan Guo, Shalini De Mello, Hongxu Yin, Wonmin Byeon, Ka Chun Cheung, Yizhou Yu, Ping Luo, Sifei Liu',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:5bg8sr1QxYwC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'RelativeNAS: Relative neural architecture search via slow-fast learning',
    authors: 'Hao Tan, Ran Cheng, Shihua Huang, Cheng He, Changxiao Qiu, Fan Yang, Ping Luo',
    proceedings: 'IEEE Transactions on Neural Networks and Learning Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hkOj_22Ku90C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Representing and recognizing objects with massive local image patches',
    authors: 'Liang Lin, Ping Luo, Xiaowu Chen, Kun Zeng',
    proceedings: 'Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:3fE2CSJIrl8C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'RestoreFormer++: Towards real-world blind face restoration from undegraded key-value pairs',
    authors: 'Zhouxia Wang, Jiawei Zhang, Tianshui Chen, Wenping Wang, Ping Luo',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:L1USKYWJimsC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Restoreformer: High-quality blind face restoration from undegraded key-value pairs',
    authors: 'Zhouxia Wang, Jiawei Zhang, Runjian Chen, Wenping Wang, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:FAceZFleit8C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Rethinking Human Evaluation Protocol for Text-to-Video Models: Enhancing Reliability, Reproducibility, and Practicality',
    authors:
      'Tianle Zhang, Langtian Ma, Yuchen Yan, Yuchen Zhang, Kai Wang, Yue Yang, Ziyao Guo, Wenqi Shao, Yang You, Yu Qiao, Ping Luo, Kaipeng Zhang',
    proceedings: 'arXiv preprint arXiv:2406.08845',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:CYCckWUYoCcC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Rethinking Trajectory Prediction via Team Game',
    authors: 'Wei  Zikai, Zhu  Xinge, Dai  Bo, Lin  Dahua',
    proceedings: 'arXiv preprint arXiv:2210.08793 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Rethinking-Trajectory-Prediction-via-%22Team-Game%22-Wei-Zhu/4936f9a1385a5585ed385b5e58c4a0c48ecaceaa',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Rethinking attentive object detection via neural attention learning',
    authors: 'Chongjian Ge, Yibing Song, Chao Ma, Yuankai Qi, Ping Luo',
    proceedings: 'IEEE Transactions on Image Processing',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:PYBJJbyH-FwC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Rethinking resolution in the context of efficient video recognition',
    authors: 'Chuofan Ma, Qiushan Guo, Yi Jiang, Ping Luo, Zehuan Yuan, Xiaojuan Qi',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mNrWkgRL2YcC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Rethinking the Form of Latent States in Image Captioning',
    authors: 'Dai  Bo, Ye  Deming, Lin  Dahua',
    proceedings: 'European Conference on Computer Vision (ECCV) 2018',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/94e3b75a6732b5918c4c2b87d127a9216ff07efc',
      },
    ],
    keys: ['Multimodality'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Rethinking the Noise Schedule of Diffusion-Based Generative Models',
    authors: 'Qiushan Guo, Sifei Liu, Yizhou Yu, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:oi2SiIJ9l4AC',
      },
    ],
    keys: ['Generative', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Rethinking the pruning criteria for convolutional neural network',
    authors: 'Zhongzhan Huang, Wenqi Shao, Xinjiang Wang, Liang Lin, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:epqYDVWIO7EC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Revisiting skeleton-based action recognition',
    authors: 'Duan  Haodong, Zhao  Yue, Chen  Kai, Lin  Dahua, Dai  Bo',
    proceedings: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Revisiting-Skeleton-based-Action-Recognition-Duan-Zhao/f8c4c5cc82f6270b62d5f68940e444b55ea2f13c',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Revisiting the Evaluation of Image Synthesis with GANs',
    authors: 'Yang  Mengping, Yang  Ceyuan, Zhang  Yichi, Bai  Qingyan, Shen  Yujun, Dai  Bo',
    proceedings: 'NeurIPS 2023 Datasets and Benchmarks 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/387ad594473a40115bc6d96796e8f856d59bad02',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'Revitalizing cnn attention via transformers in self-supervised visual representation learning',
    authors: 'Chongjian Ge, Youwei Liang, Yibing Song, Jianbo Jiao, Jue Wang, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:LI9QrySNdTsC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Riformer: Keep your vision backbone effective but removing token mixer',
    authors:
      'Jiahao Wang, Songyang Zhang, Yong Liu, Taiqiang Wu, Yujiu Yang, Xihui Liu, Kai Chen, Ping Luo, Dahua Lin',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:BzfGm06jWhQC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Riformer: Keep your vision backbone effective while removing token mixer',
    authors:
      'Jiahao Wang, Songyang Zhang, Yong Liu, Taiqiang Wu, Yujiu Yang, Xihui Liu, Kai Chen, Ping Luo, Dahua Lin',
    proceedings: 'arXiv preprint arXiv:2304.05659',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:2tRrZ1ZAMYUC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Rigid: Recurrent gan inversion and editing of real face videos',
    authors: 'Yangyang Xu, Shengfeng He, Kwan-Yee K Wong, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:1tZ8xJnm2c8C',
      },
    ],
    keys: ['Vision', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title: 'RoboTwin: Dual-Arm Robot Benchmark with Generative Digital Twins',
    authors:
      'Yao Mu, Tianxing Chen, Zanxin Chen, Shijia Peng, Zhiqian Lan, Zeyu Gao, Zhixuan Liang, Qiaojun Yu, Yude Zou, Mingkun Xu, Lunkai Lin, Zhiqiang Xie, Mingyu Ding, Ping Luo',
    proceedings: 'CVPR 2025',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hQUaER0FWQ4C',
      },
    ],
    keys: ['Embodied AI', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title: 'RoboTwin: Dual-Arm Robot Benchmark with Generative Digital Twins (early version)',
    authors: 'Zeyu Gao, Yude Zou, Lunkai Lin, Zhiqiang Xie, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:JP7YXuLIOvAC',
      },
    ],
    keys: ['Embodied AI', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Robocodex: Multimodal code generation for robotic behavior synthesis',
    authors:
      'Yao Mu, Junting Chen, Qinglong Zhang, Shoufa Chen, Qiaojun Yu, Chongjian Ge, Runjian Chen, Zhixuan Liang, Mengkang Hu, Chaofan Tao, Peize Sun, Haibao Yu, Chao Yang, Wenqi Shao, Wenhai Wang, Jifeng Dai, Yu Qiao, Mingyu Ding, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2402.16117',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:YsrPvlHIBpEC',
      },
    ],
    keys: ['Embodied AI', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Roboscript: Code generation for free-form manipulation tasks across real and simulation',
    authors:
      'Junting Chen, Yao Mu, Qiaojun Yu, Tianming Wei, Silang Wu, Zhecheng Yuan, Zhixuan Liang, Chao Yang, Kaipeng Zhang, Wenqi Shao, Yu Qiao, Huazhe Xu, Mingyu Ding, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2402.14623',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mUJArPsKIAAC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Robotwin: Dual-arm robot benchmark with generative digital twins (early version)',
    authors:
      'Yao Mu, Tianxing Chen, Shijia Peng, Zanxin Chen, Zeyu Gao, Yude Zou, Lunkai Lin, Zhiqiang Xie, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2409.02920',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:eGYfIraVYiQC',
      },
    ],
    keys: ['Embodied AI', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Roomtex: Texturing compositional indoor scenes via iterative inpainting',
    authors:
      'Wang  Qi, Lu  Ruijie, Xu  Xudong, Wang  Jingbo, Wang  Michael Yu, Dai  Bo, Zeng  Gang, Xu  Dan',
    proceedings: 'European Conference on Computer Vision 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/RoomTex%3A-Texturing-Compositional-Indoor-Scenes-via-Wang-Lu/cf33b9a285888675ca13c5cbcba0dac7144f8fd2',
      },
    ],
    keys: ['Visual Reasoning'],
    pis: ['Bo Dai'],
  },
  {
    title: 'SAMRefiner: Taming Segment Anything Model for Universal Mask Refinement',
    authors:
      'Yuqi Lin, Hengjia Li, Wenqi Shao, Zheng Yang, Jun Zhao, Xiaofei He, Ping Luo, Kaipeng Zhang',
    proceedings: 'arXiv preprint arXiv:2502.06756',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:8dzOF9BpDQoC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'SCAN: Self-and-Collaborative Attention Network for Video Person Re-identification',
    authors: 'Ruimao Zhang, Hongbin Sun, Jingyu Li, Yuying Ge, Liang Lin, Ping Luo, Xiaogang Wang',
    proceedings: 'Transaction on Image Processing (TIP)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:M05iB0D1s5AC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'SEM2: Enhance Sample Efficiency and Robustness of End-to-end Urban Autonomous Driving via Semantic Masked World Model',
    authors:
      'Zeyu Gao, Yao Mu, Ruoyan Shen, Chen Chen, Yangang Ren, Jianyu Chen, Shengbo Eben Li, Ping Luo, Yanfeng Lu',
    proceedings: 'Deep Reinforcement Learning Workshop NeurIPS 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mel-f30kHHgC',
      },
    ],
    keys: ['Embodied AI', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'SLIDE: A Unified Mesh and Texture Generation Framework with Enhanced Geometric Control and Multi-view Consistency',
    authors:
      'Wang  Jinyi, Lyu  Zhaoyang, Fei  Ben, Yao  Jiangchao, Zhang  Ya, Dai  Bo, Lin  Dahua, He  Ying, Wang  Yanfeng',
    proceedings: 'International Journal of Computer Vision 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/8b439d8244d9c6ad3ecfba055b43053d82e96c21',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'SPOT: Scalable 3D Pre-training via Occupancy Prediction for Learning Transferable 3D Representations',
    authors:
      'Xiangchao Yan, Runjian Chen, Bo Zhang, Hancheng Ye, Renqiu Xia, Jiakang Yuan, Hongbin Zhou, Xinyu Cai, Botian Shi, Wenqi Shao, Ping Luo, Yu Qiao, Tao Chen, Junchi Yan',
    proceedings: 'arXiv preprint arXiv:2309.10527',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:s9ia6_kGH2AC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'SWORD: Demystify the Secrets of Open-world Instance Recognition',
    authors: 'Jiannan Wu, Yi Jiang, Bin Yan, Huchuan Lu, Zehuan Yuan, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:8xutWZnSdmoC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'ScaMo: Exploring the Scaling Law in Autoregressive Motion Generation Model',
    authors:
      'Lu  Shunlin, Wang  Jingbo, Lu  Zeyu, Chen  Ling-Hao, Dai  Wenxun, Dong  Junting, Dou  Zhiyang, Dai  Bo, Zhang  Ruimao',
    proceedings: 'arXiv preprint arXiv:2412.14559 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/ScaMo%3A-Exploring-the-Scaling-Law-in-Autoregressive-Lu-Wang/fe1cf34f0f2dfcac81ab9d9f4c47ae8495cbb115',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Scaffold-gs: Structured 3d gaussians for view-adaptive rendering',
    authors: 'Lu  Tao, Yu  Mulin, Xu  Linning, Xiangli  Yuanbo, Wang  Limin, Lin  Dahua, Dai  Bo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Scaffold-GS%3A-Structured-3D-Gaussians-for-Rendering-Lu-Yu/a294b8632fed59e7079ef6187b0afa532c97ed7f',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Scalable and effective arithmetic tree generation for adder and multiplier designs',
    authors: 'Yao Lai, Jinxin Liu, David Z Pan, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2405.06758',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:rbm3iO8VlycC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Scale Calibrated Training: Improving Generalization of Deep Networks via Scale-Specific Normalization',
    authors: 'Zhuoran Yu, Aojun Zhou, Yukun Ma, Yudian Li, Xiaohan Zhang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:1909.00182',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:PR6Y55bgFSsC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Scale-Invariant Teaching for Semi-Supervised Object Detection',
    authors: 'Qiushan Guo, Yizhou Yu, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:PVjk1bu6vJQC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Scale-equivalent distillation for semi-supervised object detection',
    authors: 'Qiushan Guo, Yao Mu, Jianyu Chen, Tianqi Wang, Yizhou Yu, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:5qfkUJPXOUwC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Scaling laws for diffusion transformers',
    authors: 'Liang  Zhengyang, He  Hao, Yang  Ceyuan, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2410.08184 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Scaling-Laws-For-Diffusion-Transformers-Liang-He/38bc7c4dc18399ecc6fe958dcf27cffd2ff98d63',
      },
    ],
    keys: ['Transformers'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Scaling laws with vocabulary: Larger models deserve larger vocabularies',
    authors:
      'Chaofan Tao, Qian Liu, Longxu Dou, Niklas Muennighoff, Zhongwei Wan, Ping Luo, Min Lin, Ngai Wong',
    proceedings: 'arXiv preprint arXiv:2407.13623',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:X9ykpCP0fEIC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Scene-aware Generative Network for Human Motion Synthesis',
    authors: 'Wang  Jingbo, Yan  Sijie, Dai  Bo, LIn  Dahua',
    proceedings: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2021',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Scene-aware-Generative-Network-for-Human-Motion-Wang-Yan/80446df79c7d5d5c76dea68b5f8873e24efdd40e',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Scheduling Large-scale Distributed Training via Reinforcement Learning',
    authors: 'Zhanglin Peng, Jiamin Ren, Ruimao Zhang, Lingyun Wu, Xinjiang Wang, Ping Luo',
    proceedings: '2018 IEEE International Conference on Big Data (Big Data)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:yD5IFk8b50cC',
      },
    ],
    keys: ['RL', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'SearchLVLMs: A Plug-and-Play Framework for Augmenting Large Vision-Language Models by Searching Up-to-Date Internet Knowledge',
    authors:
      'Chuanhao Li, Zhen Li, Chenchen Jing, Shuo Liu, Wenqi Shao, Yuwei Wu, Ping Luo, Yu Qiao, Kaipeng Zhang',
    proceedings: 'arXiv preprint arXiv:2405.14554',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:T_ojBgVMvoEC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'SegFormer: Simple and efficient design for semantic segmentation with transformers',
    authors: 'Enze Xie, Wenhai Wang, Zhiding Yu, Anima Anandkumar, Jose M Alvarez, Ping Luo',
    proceedings: 'Advances in neural information processing systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ipzZ9siozwsC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Segment Every Reference Object in Spatial and Temporal Spaces (Supplementary Material)',
    authors: 'Jiannan Wu, Yi Jiang, Bin Yan, Huchuan Lu, Zehuan Yuan, Ping Luo',
    proceedings: 'OVIS',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:CdxZDUztZiMC',
      },
    ],
    keys: ['Vision', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Segment every reference object in spatial and temporal spaces',
    authors: 'Jiannan Wu, Yi Jiang, Bin Yan, Huchuan Lu, Zehuan Yuan, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Ade32sEp0pkC',
      },
    ],
    keys: ['Vision', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Segment, lift and fit: Automatic 3d shape labeling from 2d prompts',
    authors:
      'Jianhao Li, Tianyu Sun, Zhongdao Wang, Enze Xie, Bailan Feng, Hongbo Zhang, Ze Yuan, Ke Xu, Jiaheng Liu, Ping Luo',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-DxkuPiZhfEC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Segmenting transparent object in the wild with transformer',
    authors: 'Enze Xie, Wenjia Wang, Wenhai Wang, Peize Sun, Hang Xu, Ding Liang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2101.08461',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tzM49s52ZIMC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Segmenting transparent objects in the wild',
    authors: 'Enze Xie, Wenjia Wang, Wenhai Wang, Mingyu Ding, Chunhua Shen, Ping Luo',
    proceedings:
      'Computer Vision–ECCV 2020: 16th European Conference, Glasgow, UK, August 23–28, 2020, Proceedings, Part XIII 16',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:5ugPr518TE4C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Self-Supervised Scene De-occlusion',
    authors: 'Zhan  Xiaohang, Pan  Xingang, Dai  Bo, Liu  Ziwei, Lin  Dahua, Loy  Chen Change',
    proceedings: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2020',
    links: [
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2004.02788',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Self-play and self-describe: Policy adaptation with vision-language foundation models',
    authors: 'Yuying Ge, Annabella Macaluso, Li Erran Li, Ping Luo, Xiaolong Wang',
    proceedings: 'arXiv preprint arXiv:2212.07398',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ZzlSgRqYykMC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Self-supervised Structure-Sensitive Learning for Human Parsing',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:B3FOqHPlNUQC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Self-supervised geometry-aware encoder for style-based 3D GAN inversion',
    authors: 'Lan  Yushi, Meng  Xuyi, Yang  Shuai, Loy  Chen Change, Dai  Bo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/94cda50f5e311975d00ba6e960f6e325b44d4b85',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Self-supervised video representation learning with constrained spatiotemporal jigsaw',
    authors:
      'Yuqi Huo, Mingyu Ding, Haoyu Lu, Zhiwu Lu, Tao Xiang, Ji-Rong Wen, Ziyuan Huang, Jianwen Jiang, Shiwei Zhang, Mingqian Tang, Songfang Huang, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:vDijr-p_gm4C',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'SelfText Beyond Polygon: Unconstrained text detection with box supervision and dynamic self-training',
    authors:
      'Weijia Wu, Enze Xie, Ruimao Zhang, Wenhai Wang, Guan Pang, Zhen Li, Hong Zhou, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2011.13307',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NJ774b8OgUMC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Sem-iNeRF: Camera pose refinement by inverting neural radiance fields with semantic feature consistency',
    authors: 'Anran Liu, Xiaoxiao Long, Yuan Liu, Ping Luo, Wenping Wang',
    proceedings: 'Computational Visual Media',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:nPT8s1NX_-sC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Semantic image segmentation via deep parsing network',
    authors: 'Ziwei Liu, Xiaoxiao Li, Ping Luo, Chen-Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hC7cP41nSMkC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Semantic segmentation model training methods and apparatuses, electronic devices, and storage media',
    authors: 'Z Xiaohang, Z Liu, P Luo, CC Loy, X Tang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:t6usbXjVLHcC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: [],
  },
  {
    title: 'Semantic-aware pretraining for dense video captioning',
    authors: 'Teng Wang, Zhu Liu, Feng Zheng, Zhichao Lu, Ran Cheng, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2204.07449',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:9pM33mqn1YgC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Semantics-driven portrait cartoon stylization',
    authors: 'Ming Yang, Shu Lin, Ping Luo, Liang Lin, Hongyang Chao',
    proceedings: '2010 IEEE International Conference on Image Processing',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hqOjcs7Dif8C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Semgrasp: Semantic grasp generation via language aligned discretization',
    authors: 'Li  Kailin, Wang  Jingbo, Yang  Lixin, Lu  Cewu, Dai  Bo',
    proceedings: 'European Conference on Computer Vision 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/dd7b2817d54c20e6c0bf854b3463c17bb18014a0',
      },
    ],
    keys: ['Multimodality', 'Generative'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'Skilldiffuser: Interpretable hierarchical planning via skill abstractions in diffusion-based task execution',
    authors: 'Zhixuan Liang, Yao Mu, Hengbo Ma, Masayoshi Tomizuka, Mingyu Ding, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:sszUF3NjhM4C',
      },
    ],
    keys: ['Generative', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Soft neighbors are positive supporters in contrastive visual representation learning',
    authors: 'Chongjian Ge, Jiangliu Wang, Zhan Tong, Shoufa Chen, Yibing Song, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2303.17142',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:nVrZBo8bIpAC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Sparse R-CNN: An end-to-end framework for object detection',
    authors:
      'Peize Sun, Rufeng Zhang, Yi Jiang, Tao Kong, Chenfeng Xu, Wei Zhan, Masayoshi Tomizuka, Zehuan Yuan, Ping Luo',
    proceedings: 'IEEE transactions on pattern analysis and machine intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:WHdLCjDvYFkC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Sparse r-cnn: End-to-end object detection with learnable proposals',
    authors:
      'Peize Sun, Rufeng Zhang, Yi Jiang, Tao Kong, Chenfeng Xu, Wei Zhan, Masayoshi Tomizuka, Lei Li, Zehuan Yuan, Changhu Wang, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tKAzc9rXhukC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Sparsectrl: Adding sparse controls to text-to-video diffusion models',
    authors: 'Guo  Yuwei, Yang  Ceyuan, Rao  Anyi, Agrawala  Maneesh, Lin  Dahua, Dai  Bo',
    proceedings: 'European Conference on Computer Vision 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/SparseCtrl%3A-Adding-Sparse-Controls-to-Text-to-Video-Guo-Yang/40626a059bcd8d3e7f364b410f831b9baf997b0c',
      },
    ],
    keys: ['Multimodality'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Spatial as deep: Spatial cnn for traffic scene understanding',
    authors: 'Xingang Pan, Jianping Shi, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the AAAI conference on artificial intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NaGl4SEjCO4C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Spot: Scalable 3d pre-training via occupancy prediction for autonomous driving',
    authors:
      'Xiangchao Yan, Runjian Chen, Bo Zhang, Jiakang Yuan, Xinyu Cai, Botian Shi, Wenqi Shao, Junchi Yan, Ping Luo, Yu Qiao',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:1yWc8FF-_SYC',
      },
    ],
    keys: ['Embodied AI', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Ssn: Learning sparse switchable normalization via sparsestmax',
    authors:
      'Wenqi Shao, Tianjian Meng, Jingyu Li, Ruimao Zhang, Yudian Li, Xiaogang Wang, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_xSYboBqXhAC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Star: A structure-aware lightweight transformer for real-time image enhancement',
    authors: 'Zhaoyang Zhang, Yitong Jiang, Jun Jiang, Xiaogang Wang, Ping Luo, Jinwei Gu',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:gsN89kCJA0AC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Structured pruning for efficient generative pre-trained language models',
    authors:
      'Chaofan Tao, Lu Hou, Haoli Bai, Jiansheng Wei, Xin Jiang, Qun Liu, Ping Luo, Ngai Wong',
    proceedings: 'Findings of the Association for Computational Linguistics: ACL 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:WC23djZS0W4C',
      },
    ],
    keys: ['Generative', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'StyleAdapter: A Unified Stylized Image Generation Model',
    authors:
      'Zhouxia Wang, Xintao Wang, Liangbin Xie, Zhongang Qi, Ying Shan, Wenping Wang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2309.01770',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hsZV8lGYWTMC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'StyleAdapter: A Unified Stylized Image Generation Model without Test-Time Fine-Tuning',
    authors:
      'Zhouxia Wang, Xintao Wang, Liangbin Xie, Zhongang Qi, Ying Shan, Wenping Wang, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:TlpoogIpr_IC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Styleadapter: A unified stylized image generation model',
    authors:
      'Zhouxia Wang, Xintao Wang, Liangbin Xie, Zhongang Qi, Ying Shan, Wenping Wang, Ping Luo',
    proceedings: 'International Journal of Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tHtfpZlB6tUC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Supplementary Material Adversarial Robustness for Unsupervised Domain Adaptation',
    authors:
      'Muhammad Awais, Fengwei Zhou, Hang Xu, Lanqing Hong, Ping Luo, Sung-Ho Bae, Zhenguo Li',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kuK5TVdYjLIC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Supplementary Material for When Human Pose Estimation Meets Robustness: Adversarial Algorithms and Benchmarks',
    authors: 'Jiahang Wang, Sheng Jin, Wentao Liu, Weizhong Liu, Chen Qian, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:uWiczbcajpAC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Supplementary Materials for AE TextSpotter',
    authors:
      'Wenhai Wang, Xuebo Liu, Xiaozhong Ji, Enze Xie, Ding Liang, ZhiBo Yang, Tong Lu, Chunhua Shen, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:N5tVd3kTz84C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Supplementary Materials for Paper “InternVL: Scaling up Vision Foundation Models and Aligning for Generic Visual-Linguistic Tasks”',
    authors:
      'Zhe Chen, Jiannan Wu, Wenhai Wang, Weijie Su, Guo Chen, Sen Xing, Muyan Zhong, Qinglong Zhang, Xizhou Zhu, Lewei Lu, Bin Li, Ping Luo, Tong Lu, Yu Qiao, Jifeng Dai',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:QsaTk4IG4EwC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Switchable deep network for pedestrian detection',
    authors: 'Ping Luo, Yonglong Tian, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_kc_bZDykSQC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Switchable normalization for learning-to-normalize deep representation',
    authors: 'Ping Luo, Ruimao Zhang, Jiamin Ren, Zhanglin Peng, Jingyu Li',
    proceedings: 'IEEE transactions on pattern analysis and machine intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NhqRSupF_l8C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Switchable whitening for deep representation learning',
    authors: 'Xingang Pan, Xiaohang Zhan, Jianping Shi, Xiaoou Tang, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:EUQCXRtRnyEC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Syndock: N rigid protein docking via learnable group synchronization',
    authors: 'Yuanfeng Ji, Yatao Bian, Guoji Fu, Peilin Zhao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2305.15156',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kVjdVfd2voEC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'TCFormer: Visual Recognition via Token Clustering Transformer',
    authors:
      'Wang Zeng, Sheng Jin, Lumin Xu, Wentao Liu, Chen Qian, Wanli Ouyang, Ping Luo, Xiaogang Wang',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hSRAE-fF4OAC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'TREND: Unsupervised 3D Representation Learning via Temporal Forecasting for LiDAR Perception',
    authors: 'Runjian Chen, Hyoungseob Park, Bo Zhang, Wenqi Shao, Ping Luo, Alex Wong',
    proceedings: 'arXiv preprint arXiv:2412.03054',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NxmKEeNBbOMC',
      },
    ],
    keys: ['Vision', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Talking face generation by adversarially disentangled audio-visual representation',
    authors: 'Hang Zhou, Yu Liu, Ziwei Liu, Ping Luo, Xiaogang Wang',
    proceedings: 'Proceedings of the AAAI conference on artificial intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:3s1wT3WcHBgC',
      },
    ],
    keys: ['Vision', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Target matching method and apparatus, electronic device, and storage medium',
    authors: 'R Zhang, H Sun, P Luo, Y Ge, K Ren, L Lin, X Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:VL0QpB8kHFEC',
      },
    ],
    keys: ['General', 'General'],
    pis: [],
  },
  {
    title: 'Task-Oriented Diffusion Inversion for High-Fidelity Text-based Editing',
    authors: 'Yangyang Xu, Wenqi Shao, Yong Du, Haiming Zhu, Yang Zhou, Ping Luo, Shengfeng He',
    proceedings: 'arXiv preprint arXiv:2408.13395',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ghEM2AJqZyQC',
      },
    ],
    keys: ['Generative', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Task-Oriented Human-Object Interactions Generation with Implicit Neural Representations',
    authors: 'Li  Quanzhou, Wang  Jingbo, Loy  Chen Change, Dai  Bo',
    proceedings: 'IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/2e367a8a4945ea04e2560120e030afd28b89f488',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Tela: Text to layer-wise 3d clothed human generation',
    authors:
      'Dong  Junting, Fang  Qi, Huang  Zehuan, Xu  Xudong, Wang  Jingbo, Peng  Sida, Dai  Bo',
    proceedings: 'European Conference on Computer Vision 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/a3810adf4dd5d23e732892dbe34f4ed924f8eeb8',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Temporal Pyramid Network for Action Recognition',
    authors: 'Yang  Ceyuan, Xu  Yinghao, Shi  Jianping, Dai  Bo, Zhou  Bolei',
    proceedings: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2020',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/10db26c80238d70ca51d8a5293d893b6f1dedc8b',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Temporal Sequence Distillation',
    authors: 'Zhaoyang Zhang, Zhanghui Kuang, Ping Luo, Litong Feng, Wei Zhang',
    proceedings: 'Proceedings of the 26th ACM international conference on Multimedia',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:0CzhzZyukY4C',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Temporal and contextual transformer for multi-camera editing of TV shows',
    authors:
      'Rao  Anyi, Jiang  Xuekun, Wang  Sichen, Guo  Yuwei, Liu  Zihao, Dai  Bo, Pang  Long, Wu  Xiaoyu, Lin  Dahua, Jin  Libiao',
    proceedings: 'arXiv preprint arXiv:2210.08737 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Temporal-and-Contextual-Transformer-for-Editing-of-Rao-Jiang/58aba12dc885e8f9383476744e356e8edc21b73c',
      },
    ],
    keys: ['Transformers'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Temporal sequence distillation: Towards few-frame action recognition in videos',
    authors: 'Zhaoyang Zhang, Zhanghui Kuang, Ping Luo, Litong Feng, Wei Zhang',
    proceedings: 'Proceedings of the 26th ACM international conference on Multimedia',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:rO6llkc54NcC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Text2world: Benchmarking large language models for symbolic world model generation',
    authors:
      'Mengkang Hu, Tianxing Chen, Yude Zou, Yuheng Lei, Qiguang Chen, Ming Li, Yao Mu, Hongyuan Zhang, Wenqi Shao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2502.13092',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:YB4bud6kWLwC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'The Foundation and Advances of Deep Learning',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tS2w5q8j5-wC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'The first visual object tracking segmentation vots2023 challenge results',
    authors:
      'Matej Kristan, Jiří Matas, Martin Danelljan, Michael Felsberg, Hyung Jin Chang, Luka Čehovin Zajc, Alan Lukežič, Ondrej Drbohlav, Zhongqun Zhang, Khanh-Tung Tran, Xuan-Son Vu, Johanna Björklund, Christoph Mayer, Yushan Zhang, Lei Ke, Jie Zhao, Gustavo Fernández, Noor Al-Shakarji, Dong An, Michael Arens, Stefan Becker, Goutam Bhat, Sebastian Bullinger, Antoni B Chan, Shijie Chang, Hanyuan Chen, Xin Chen, Yan Chen, Zhenyu Chen, Yangming Cheng, Yutao Cui, Chunyuan Deng, Jiahua Dong, Matteo Dunnhofer, Wei Feng, Jianlong Fu, Jie Gao, Ruize Han, Zeqi Hao, Jun-Yan He, Keji He, Zhenyu He, Xiantao Hu, Kaer Huang, Yuqing Huang, Yi Jiang, Ben Kang, Jin-Peng Lan, Hyungjun Lee, Chenyang Li, Jiahao Li, Ning Li, Wangkai Li, Xiaodi Li, Xin Li, Pengyu Liu, Yue Liu, Huchuan Lu, Bin Luo, Ping Luo, Yinchao Ma, Deshui Miao, Christian Micheloni, Kannappan Palaniappan, Hancheol Park, Matthieu Paul, HouWen Peng, Zekun Qian, Gani Rahmon, Norbert Scherer-Negenborn, Pengcheng Shao, Wooksu Shin, Elham Soltani Kazemi, Tianhui Song, Rainer Stiefelhagen, Rui Sun, Chuanming Tang, Zhangyong Tang, Imad Eddine Toubal, Jack Valmadre, Joost Van De Weijer, Luc Van Gool, Jash Vira, Stèphane Vujasinović, Cheng Wan, Jia Wan, Dong Wang, Fei Wang, Feifan Wang, He Wang, Limin Wang, Song Wang, Yaowei Wang, Zhepeng Wang, Gangshan Wu, Jiannan Wu, Qiangqiang Wu, Xiaojun Wu, Anqi Xiao, Jinxia Xie, Chenlong Xu, Min Xu, Tianyang Xu, Yuanyou Xu, Bin Yan, Dawei Yang, Ming-Hsuan Yang, Tianyu Yang, Yi Yang, Zongxin Yang, Xuanwu Yin, Fisher Yu, Hongyuan Yu, Qianjin Yu, Weichen Yu, YongSheng Yuan, Zehuan Yuan, Jianlin Zhang, Lu Zhang, Tianzhu Zhang, Guodongfang Zhao, Shaochuan Zhao, Yaozong Zheng, Bineng Zhong, Jiawen Zhu, Xuefeng Zhu, Yueting Zhuang, ChengAo Zong, Kunlong Zuo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:q-HalDI95KYC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Theoretical calculation and analysis of ZrO2 spherical nanometer powders',
    authors: 'Ying Chang, Huihu Wang, Qinbiao Zhu, Ping Luo, Shijie Dong',
    proceedings: 'Journal of Advanced Ceramics',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HtS1dXgVpQUC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Tiny lvlm-ehub: Early multimodal experiments with bard',
    authors:
      'Wenqi Shao, Yutao Hu, Peng Gao, Meng Lei, Kaipeng Zhang, Fanqing Meng, Peng Xu, Siyuan Huang, Hongsheng Li, Yu Qiao, Ping Luo',
    proceedings: 'arXiv e-prints',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:owLR8QvbtFgC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'TokenHSI: Unified Synthesis of Physical Human-Scene Interactions through Task Tokenization',
    authors:
      'Pan  Liang, Yang  Zeshi, Dou  Zhiyang, Wang  Wenjia, Huang  Buzhen, Dai  Bo, Komura  Taku, Wang  Jingbo',
    proceedings: 'arXiv preprint arXiv:2503.19901 2025',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/TokenHSI%3A-Unified-Synthesis-of-Physical-Human-Scene-Pan-Yang/ca08ecf7efd9a55d0ce65d667d5708b515516f24',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'Tooth Motion Monitoring in Orthodontic Treatment by Mobile Device-based Multi-view Stereo',
    authors:
      'Jiaming Xie, Congyi Zhang, Guangshun Wei, Peng Wang, Guodong Wei, Wenxi Liu, Min Gu, Ping Luo, Wenping Wang',
    proceedings: 'IEEE Transactions on Visualization and Computer Graphics',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:eAlLMO4JVmQC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Towards Diverse and Natural Image Descriptions via a Conditional GAN',
    authors: 'Dai  Bo, Fidler  Sanja, Urtasun  Raquel, Lin  Dahua',
    proceedings: 'IEEE International Conference on Computer Vision (ICCV) 2017',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Towards-Diverse-and-Natural-Image-Descriptions-via-Dai-Fidler/24dc571a49d3431e8cb1f1008f86d5dd5b7a1613',
      },
    ],
    keys: ['Multimodality'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Towards Diverse and Natural Scene-aware 3D Human Motion Synthesis',
    authors: 'Wang  Jingbo, Rong  Yu, Liu  Jingyuan, Yan  Sijie, Lin  Dahua, Dai  Bo',
    proceedings: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2022 ',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/69febe5c00d7e4d03f3df569ba324d074686938c',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Towards Implicit Prompt For Text-To-Image Models',
    authors:
      'Yue Yang, Hong Liu, Wenqi Shao, Runjian Chen, Hailong Shang, Yu Wang, Yu Qiao, Kaipeng Zhang, Ping Luo',
    proceedings: 'CoRR',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-yGd096yOn8C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Towards Multi-Layered 3D Garments Animation',
    authors: 'Shao  Yidi, Loy  Chen Change, Dai  Bo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision 2023 ',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/cf7fa79e86dfe50101b96a1920978565430e552e',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title:
      'Towards Synthesized and Editable Motion In-Betweening Through Part-Wise Phase Representation',
    authors: 'Dai  Minyue, Wang  Jingbo, Fan  Ke, Ji  Bin, Zhao  Haoyu, Dong  Junting, Dai  Bo',
    proceedings: 'arXiv preprint arXiv:2503.08180 2025',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Towards-Synthesized-and-Editable-Motion-Through-Dai-Wang/adc2b96c5045daa53c61438f1a8beb768d539ca7',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Towards Understanding Regularization in Batch Normalization',
    authors: 'Ping Luo, Xinjiang Wang, Wenqi Shao, Zhanglin Peng',
    proceedings: 'arXiv preprint arXiv:1809.00846',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:zA6iFVUQeVQC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Towards grand unification of object tracking',
    authors: 'Bin Yan, Yi Jiang, Peize Sun, Dong Wang, Zehuan Yuan, Ping Luo, Huchuan Lu',
    proceedings: 'European conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:6ZxmRoH8BuwC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Towards high-quality temporal action detection with sparse proposals',
    authors: 'Jiannan Wu, Peize Sun, Shoufa Chen, Jiewen Yang, Zihao Qi, Lan Ma, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2109.08847',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:KUbvn5osdkgC',
      },
    ],
    keys: ['Vision', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Towards improving generalization of deep networks via consistent normalization',
    authors: 'Aojun Zhou, Yukun Ma, Yudian Li, Xiaohan Zhang, Ping Luo',
    proceedings: 'ArXiv',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:nb7KW1ujOQ8C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Towards photo-realistic virtual try-on by adaptively generating-preserving image content',
    authors: 'Han Yang, Ruimao Zhang, Xiaobao Guo, Wei Liu, Wangmeng Zuo, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mvPsJ3kp5DgC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Towards ultra-resolution neural style transfer via thumbnail instance normalization',
    authors: 'Zhe Chen, Wenhai Wang, Enze Xie, Tong Lu, Ping Luo',
    proceedings: 'Proceedings of the AAAI Conference on artificial intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:z_wVstp3MssC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Towards world simulator: Crafting physical commonsense-based benchmark for video generation',
    authors:
      'Fanqing Meng, Jiaqi Liao, Xinyu Tan, Wenqi Shao, Quanfeng Lu, Kaipeng Zhang, Yu Cheng, Dianqi Li, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2410.05363',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Wq2b2clWBLsC',
      },
    ],
    keys: ['Multimodality', 'Dataset/Benchmark'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Trans2seg: Transparent object segmentation with transformer',
    authors: 'Enze Xie, Wenjia Wang, Wenhai Wang, Peize Sun, Hang Xu, Ding Liang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2101.08461',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:L7CI7m0gUJcC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'TransEditor: Transformer-Based Dual-Space GAN for Highly Controllable Facial Editing',
    authors:
      'Xu  Yanbo, Yin  Yueqin, Jiang  Liming, Wu  Qianyi, Zheng  Chengyao, Loy  Chen Change, Dai  Bo, Wu  Wayne',
    proceedings: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2022 ',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/TransEditor%3A-Transformer-Based-Dual-Space-GAN-for-Xu-Yin/bc6c2e432840e1ac17738eda4745e9cce3753030',
      },
    ],
    keys: ['Transformers'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Transformer with Implicit Edges for Particle-based Physics Simulation',
    authors: 'Shao  Yidi, Loy  Chen Change, Dai  Bo',
    proceedings: 'European Conference on Computer Vision (ECCV) 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Transformer-with-Implicit-Edges-for-Particle-based-Shao-Loy/fb1036cddc05983c3c8d296b61d7bec2605118ef',
      },
    ],
    keys: ['Transformers'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Transtrack: Multiple object tracking with transformer',
    authors:
      'Peize Sun, Jinkun Cao, Yi Jiang, Rufeng Zhang, Enze Xie, Zehuan Yuan, Changhu Wang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2012.15460',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ZfRJV9d4-WMC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Tree-planner: Efficient close-loop task planning with large language models',
    authors:
      'Mengkang Hu, Yao Mu, Xinmiao Yu, Mingyu Ding, Shiguang Wu, Wenqi Shao, Qiguang Chen, Bin Wang, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2310.08582',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:jFemdcug13IC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Two at once: Enhancing learning and generalization capacities via ibn-net',
    authors: 'Xingang Pan, Ping Luo, Jianping Shi, Xiaoou Tang',
    proceedings: 'Proceedings of the european conference on computer vision (ECCV)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ZHo1McVdvXMC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'UDKAG: Augmenting Large Vision-Language Models with Up-to-Date Knowledge',
    authors:
      'Chuanhao Li, Zhen Li, Chenchen Jing, Shuo Liu, Wenqi Shao, Yuwei Wu, Ping Luo, Yu Qiao, Kaipeng Zhang',
    proceedings: 'arXiv e-prints',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:zGdJYJv2LkUC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Unconstrained fashion landmark detection via hierarchical recurrent transformer networks',
    authors: 'Sijie Yan, Ziwei Liu, Ping Luo, Shi Qiu, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the 25th ACM international conference on Multimedia',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:O3NaXMp0MMsC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Understanding self-supervised pretraining with part-aware representation learning',
    authors:
      'Jie Zhu, Jiyang Qi, Mingyu Ding, Xiaokang Chen, Ping Luo, Xinggang Wang, Wenyu Liu, Leye Wang, Jingdong Wang',
    proceedings: 'arXiv preprint arXiv:2301.11915',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:5MTHONV0fEkC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Unified human-scene interaction via prompted chain-of-contacts',
    authors:
      'Xiao  Zeqi, Wang  Tai, Wang  Jingbo, Cao  Jinkun, Zhang  Wenwei, Dai  Bo, Lin  Dahua, Pang  Jiangmiao',
    proceedings: 'arXiv preprint arXiv:2309.07918 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/dca4ed6d4db18216796336d647f8d4bdf197f039',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Unifs: universal few-shot instance perception with point representations',
    authors: 'Sheng Jin, Ruijie Yao, Lumin Xu, Wentao Liu, Chen Qian, Ji Wu, Ping Luo',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:wvYxNZNCP7wC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Uniref++: Segment every reference object in spatial and temporal spaces',
    authors: 'Jiannan Wu, Yi Jiang, Bin Yan, Huchuan Lu, Zehuan Yuan, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2312.15715',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kWvqk_afx_IC',
      },
    ],
    keys: ['Vision', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Universal Instance Perception as Object Discovery and Retrieval—–Supplementary Material—–',
    authors: 'Bin Yan, Yi Jiang, Jiannan Wu, Dong Wang, Ping Luo, Zehuan Yuan, Huchuan Lu',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:CaZNVDsoPx4C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Universal instance perception as object discovery and retrieval',
    authors: 'Bin Yan, Yi Jiang, Jiannan Wu, Dong Wang, Ping Luo, Zehuan Yuan, Huchuan Lu',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:gKiMpY-AVTkC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Unsupervised 3D Shape Completion through GAN Inversion',
    authors:
      'Zhang  Junzhe, Chen  Xinyi, Cai  Zhongang, Pan  Liang, Zhao  Haiyu, Yi  Shuai, Yeo  Chai Kiat, Dai  Bo, Loy  Chen Change',
    proceedings: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2021 ',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Unsupervised-3D-Shape-Completion-through-GAN-Zhang-Chen/99f2cadcaed68ad07d5377d15c7af8a5422af680',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Unsupervised landmark learning from unpaired data',
    authors: 'Xu  Yinghao, Yang  Ceyuan, Liu  Ziwei, Dai  Bo, Zhou  Bolei',
    proceedings: 'arXiv preprint arXiv:2007.01053 2020',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Unsupervised-Landmark-Learning-from-Unpaired-Data-Xu-Yang/15f7693004b67cf10ef9fa29847f4755dc17cee3',
      },
    ],
    keys: ['General'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Unsupervised pretraining for object detection by patch reidentification',
    authors: 'Jian Ding, Enze Xie, Hang Xu, Chenhan Jiang, Zhenguo Li, Ping Luo, Gui-Song Xia',
    proceedings: 'arXiv preprint arXiv:2103.04814',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:uJ-U7cs_P_0C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Uxnet: Searching multi-level feature aggregation for 3d medical image segmentation',
    authors: 'Yuanfeng Ji, Ruimao Zhang, Zhen Li, Jiamin Ren, Shaoting Zhang, Ping Luo',
    proceedings:
      'Medical Image Computing and Computer Assisted Intervention–MICCAI 2020: 23rd International Conference, Lima, Peru, October 4–8, 2020, Proceedings, Part I 23',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:JQOojiI6XY0C',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'V2x-seq: A large-scale sequential dataset for vehicle-infrastructure cooperative perception and forecasting',
    authors:
      'Haibao Yu, Wenxian Yang, Hongzhi Ruan, Zhenwei Yang, Yingjuan Tang, Xu Gao, Xin Hao, Yifeng Shi, Yifeng Pan, Ning Sun, Juan Song, Jirui Yuan, Ping Luo, Zaiqing Nie',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:wMgC3FpKEyYC',
      },
    ],
    keys: ['Embodied AI', 'Dataset/Benchmark'],
    pis: ['Ping Luo'],
  },
  {
    title: 'VEHICLE-INFRASTRUCTURE COOPERATIVE 3D DETECTION VIA FEATURE FLOW PREDICTION',
    authors: 'Haibao Yu, Yingjuan Tang, Jilei Mao, Enze Xie, Jirui Yuan, Ping Luo, Zaiqing Nie',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:lvd772isFD0C',
      },
    ],
    keys: ['Embodied AI', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Vdt: An empirical study on video diffusion with transformers',
    authors: 'Haoyu Lu, Guoxing Yang, Nanyi Fei, Yuqi Huo, Zhiwu Lu, Ping Luo, Mingyu Ding',
    proceedings: 'arXiv preprint arXiv:2305.13311',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:jgBuDB5drN8C',
      },
    ],
    keys: ['Multimodality', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Vdt: General-purpose video diffusion transformers via mask modeling',
    authors: 'Haoyu Lu, Guoxing Yang, Nanyi Fei, Yuqi Huo, Zhiwu Lu, Ping Luo, Mingyu Ding',
    proceedings: 'arXiv preprint arXiv:2305.13311',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:w0F2JDEymm0C',
      },
    ],
    keys: ['Multimodality', 'Generative'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Vehicle-infrastructure cooperative 3d object detection via feature flow prediction',
    authors: 'Haibao Yu, Yingjuan Tang, Enze Xie, Jilei Mao, Jirui Yuan, Ping Luo, Zaiqing Nie',
    proceedings: 'arXiv preprint arXiv:2303.10552',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tH6gc1N1XXoC',
      },
    ],
    keys: ['Embodied AI', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Video Instance-Level Human Parsing',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Y5dfb0dijaUC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Video classification via relational feature encoding networks',
    authors: 'Yao Zhou, Jiamin Ren, Jingyu Li, Litong Feng, Shi Qiu, Ping Luo',
    proceedings: 'Proceedings of the workshop on large-scale video classification challenge',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ns9cj8rnVeAC',
      },
    ],
    keys: ['Vision', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Video object segmentation with re-identification',
    authors:
      'Xiaoxiao Li, Yuankai Qi, Zhe Wang, Kai Chen, Ziwei Liu, Jianping Shi, Ping Luo, Xiaoou Tang, Chen Change Loy',
    proceedings: 'arXiv preprint arXiv:1708.00197',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NMxIlDl6LWMC',
      },
    ],
    keys: ['Vision', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Video representation learning with visual tempo consistency',
    authors: 'Yang  Ceyuan, Xu  Yinghao, Dai  Bo, Zhou  Bolei',
    proceedings: 'arXiv preprint arXiv:2006.15489 2020',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Video-Representation-Learning-with-Visual-Tempo-Yang-Xu/2e1e98779bf721a91c5b41e2ac00ffc305469da5',
      },
    ],
    keys: ['General', 'Multimodality'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Video understanding with large language models: A survey',
    authors:
      'Yunlong Tang, Jing Bi, Siting Xu, Luchuan Song, Susan Liang, Teng Wang, Daoan Zhang, Jie An, Jingyang Lin, Rongyi Zhu, Ali Vosoughi, Chao Huang, Zeliang Zhang, Pinxin Liu, Mingqian Feng, Feng Zheng, Jianguo Zhang, Ping Luo, Jiebo Luo, Chenliang Xu',
    proceedings: 'arXiv preprint arXiv:2312.17432',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:1DsIQWDZLl8C',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Videochat: Chat-centric video understanding',
    authors:
      'KunChang Li, Yinan He, Yi Wang, Yizhuo Li, Wenhai Wang, Ping Luo, Yali Wang, Limin Wang, Yu Qiao',
    proceedings: 'arXiv preprint arXiv:2305.06355',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:QD3KBmkZPeQC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Vipnas: Efficient video pose estimation via neural architecture search',
    authors:
      'Lumin Xu, Yingda Guan, Sheng Jin, Wentao Liu, Chen Qian, Ping Luo, Wanli Ouyang, Xiaogang Wang',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:uc_IGeMz5qoC',
      },
    ],
    keys: ['Multimodality', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Vision-infused deep audio inpainting',
    authors: 'Hang Zhou, Ziwei Liu, Xudong Xu, Ping Luo, Xiaogang Wang',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:K3LRdlH-MEoC',
      },
    ],
    keys: ['Multimodality', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Visionllm v2: An end-to-end generalist multimodal large language model for hundreds of vision-language tasks',
    authors:
      'Jiannan Wu, Muyan Zhong, Sen Xing, Zeqiang Lai, Zhaoyang Liu, Zhe Chen, Wenhai Wang, Xizhou Zhu, Lewei Lu, Tong Lu, Ping Luo, Yu Qiao, Jifeng Dai',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:DyXnQzXoVgIC',
      },
    ],
    keys: ['Multimodality', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Visionllm: Large language model is also an open-ended decoder for vision-centric tasks',
    authors:
      'Wenhai Wang, Zhe Chen, Xiaokang Chen, Jiannan Wu, Xizhou Zhu, Gang Zeng, Ping Luo, Tong Lu, Jie Zhou, Yu Qiao, Jifeng Dai',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:lgwcVrK6X84C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Visual dependency transformers: Dependency tree emerges from reversed attention',
    authors:
      'Mingyu Ding, Yikang Shen, Lijie Fan, Zhenfang Chen, Zitian Chen, Ping Luo, Joshua B Tenenbaum, Chuang Gan',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:AHdEip9mkN0C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Visually informed binaural audio generation without binaural audios',
    authors: 'Xu  Xudong, Zhou  Hang, Liu  Ziwei, Dai  Bo, Wang  Xiaogang, Lin  Dahua',
    proceedings: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2021 ',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Visually-Informed-Binaural-Audio-Generation-without-Xu-Zhou/06a48439d4eab9d73f440c1db57fa67bf023f030',
      },
    ],
    keys: ['Generative'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Vlmixer: Unpaired vision-language pre-training via cross-modal cutmix',
    authors: 'Teng Wang, Wenhao Jiang, Zhichao Lu, Feng Zheng, Ran Cheng, Chengguo Yin, Ping Luo',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HtEfBTGE9r8C',
      },
    ],
    keys: ['Multimodality', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Watch only once: An end-to-end video action detection framework',
    authors:
      'Shoufa Chen, Peize Sun, Enze Xie, Chongjian Ge, Jiannan Wu, Lan Ma, Jiajun Shen, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:b1wdh0AR-JQC',
      },
    ],
    keys: ['Vision', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Webly supervised image classification with self-contained confidence',
    authors:
      'Jingkang Yang, Litong Feng, Weirong Chen, Xiaopeng Yan, Huabin Zheng, Ping Luo, Wayne Zhang',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:PELIpwtuRlgC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'What makes for end-to-end object detection?',
    authors: 'Peize Sun, Yi Jiang, Enze Xie, Wenqi Shao, Zehuan Yuan, Changhu Wang, Ping Luo',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:7T2F9Uy0os0C',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'When human pose estimation meets robustness: Adversarial algorithms and benchmarks',
    authors: 'Jiahang Wang, Sheng Jin, Wentao Liu, Weizhong Liu, Chen Qian, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:0KyAp5RtaNEC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'When pedestrian detection meets multi-modal learning: Generalist model and benchmark dataset',
    authors: 'Yi Zhang, Wang Zeng, Sheng Jin, Chen Qian, Ping Luo, Wentao Liu',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:v6i8RKmR8ToC',
      },
    ],
    keys: ['Vision', 'Multimodality'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Whole-body human pose estimation in the wild',
    authors: 'Sheng Jin, Lumin Xu, Jin Xu, Can Wang, Wentao Liu, Chen Qian, Wanli Ouyang, Ping Luo',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SdhP9T11ey4C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Wider face and pedestrian challenge 2018: Methods and results',
    authors:
      'Chen Change Loy, Dahua Lin, Wanli Ouyang, Yuanjun Xiong, Shuo Yang, Qingqiu Huang, Dongzhan Zhou, Wei Xia, Quanquan Li, Ping Luo, Junjie Yan, Jianfeng Wang, Zuoxin Li, Ye Yuan, Boxun Li, Shuai Shao, Gang Yu, Fangyun Wei, Xiang Ming, Dong Chen, Shifeng Zhang, Cheng Chi, Zhen Lei, Stan Z Li, Hongkai Zhang, Bingpeng Ma, Hong Chang, Shiguang Shan, Xilin Chen, Wu Liu, Boyan Zhou, Huaxiong Li, Peng Cheng, Tao Mei, Artem Kukharenko, Artem Vasenin, Nikolay Sergievskiy, Hua Yang, Liangqi Li, Qiling Xu, Yuan Hong, Lin Chen, Mingjun Sun, Yirong Mao, Shiying Luo, Yongjun Li, Ruiping Wang, Qiaokang Xie, Ziyang Wu, Lei Lu, Yiheng Liu, Wengang Zhou',
    proceedings: 'arXiv preprint arXiv:1902.06854',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:bFI3QPDXJZMC',
      },
    ],
    keys: ['Vision', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Wider face: A face detection benchmark',
    authors: 'Shuo Yang, Ping Luo, Chen-Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HDshCWvjkbEC',
      },
    ],
    keys: ['Vision', 'Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'You only learn one query: learning unified human query for single-stage multi-person multi-task human-centric perception',
    authors: 'Sheng Jin, Shuhuai Li, Tong Li, Wentao Liu, Chen Qian, Ping Luo',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:PyEswDtIyv0C',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Zeroth-order supervised policy improvement',
    authors: 'Sun  Hao, Xu  Ziping, Song  Yuhang, Fang  Meng, Xiong  Jiechao, Dai  Bo, Zhou  Bolei',
    proceedings: 'arXiv preprint arXiv:2006.06600 2020',
    links: [
      {
        website: 'Paper',
        url: 'https://www.semanticscholar.org/paper/Zeroth-Order-Supervised-Policy-Improvement-Sun-Xu/3f673101c2cac3b47639056e2988e018546c3c90',
      },
    ],
    keys: ['Vision'],
    pis: ['Bo Dai'],
  },
  {
    title: 'Zoomnas: searching for whole-body human pose estimation in the wild',
    authors: 'Lumin Xu, Sheng Jin, Wentao Liu, Chen Qian, Wanli Ouyang, Ping Luo, Xiaogang Wang',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:OTTXONDVkokC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: "Fast-BEV: Towards real-time on-vehicle bird's-eye view perception",
    authors:
      'Bin Huang, Yangguang Li, Enze Xie, Feng Liang, Luya Wang, Mingzhu Shen, Fenggang Liu, Tianqi Wang, Ping Luo, Jing Shao',
    proceedings: 'arXiv preprint arXiv:2301.07870',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:LhH-TYMQEocC',
      },
    ],
    keys: ['Embodied AI', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      "Don't touch what matters: Task-aware lipschitz data augmentation for visual reinforcement learning",
    authors:
      'Zhecheng Yuan, Guozheng Ma, Yao Mu, Bo Xia, Bo Yuan, Xueqian Wang, Ping Luo, Huazhe Xu',
    proceedings: 'arXiv preprint arXiv:2202.09982',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Ug5p-4gJ2f0C',
      },
    ],
    keys: ['RL', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'vPipe: A Virtualized Acceleration System for Achieving Efficient and Scalable Pipeline Parallel DNN Training',
    authors:
      'Shixiong Zhao, Fanxin Li, Xusheng Chen, Xiuxian Guan, Jianyu Jiang, Dong Huang, Yuhao Qing, Sen Wang, Peng Wang, Gong Zhang, Cheng Li, Ping Luo, Heming Cui',
    proceedings: 'IEEE Transactions on Parallel and Distributed Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4MWp96NkSFoC',
      },
    ],
    keys: ['General', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: "A Survey of Interactive Generative Video",
    authors: "Jiwen Yu*, Yiran Qin*, Haoxuan Che*, Quande Liu, Xintao Wang, Pengfei Wan, Di Zhang, Kun Gai, Hao Chen, Xihui Liu",
    proceedings: "arXiv 2025",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2504.21853",
        },
    ],
    keys: [
        "2025",
        "Generative",
        "Survey",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Position: Interactive Generative Video as Next-Generation Game Engine",
    authors: "Jiwen Yu*, Yiran Qin*, Haoxuan Che, Quande Liu, Xintao Wang, Pengfei Wan, Di Zhang, Xihui Liu",
    proceedings: "arXiv 2025",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2503.17359",
        },
    ],
    keys: [
        "2025",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "TokenBridge: Bridging Continuous and Discrete Tokens for Autoregressive Visual Generation",
    authors: "Yuqing Wang, Zhijie Lin, Yao Teng, Yuanzhi Zhu, Shuhuai Ren, Jiashi Feng, Xihui Liu",
    proceedings: "arXiv 2025",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2503.16430",
        },
        {
            website: "Project Page",
            url: "https://yuqingwang1029.github.io/TokenBridge/",
        },
        {
            website: "Code",
            url: "https://github.com/yuqingwang1029/TokenBridge",
        },
    ],
    keys: [
        "2025",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "GigaTok: Scaling Visual Tokenizers to 3 Billion Parameters for Autoregressive Image Generation",
    authors: "Tianwei Xiong, Jun Hao Liew, Zilong Huang, Jiashi Feng, Xihui Liu",
    proceedings: "arXiv 2025",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2504.08736",
        },
        {
            website: "Project Page",
            url: "https://silentview.github.io/GigaTok/",
        },
        {
            website: "Code",
            url: "https://github.com/SilentView/GigaTok",
        },
    ],
    keys: [
        "2025",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "HoloPart: Generative 3D Part Amodal Segmentation",
    authors: "Yunhan Yang, Yuan-Chen Guo, Yukun Huang, Zi-Xin Zou, Zhipeng Yu, Yangguang Li, Yan-Pei Cao, Xihui Liu",
    proceedings: "arXiv 2025",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2504.07943",
        },
        {
            website: "Project Page",
            url: "https://vast-ai-research.github.io/HoloPart/",
        },
        {
            website: "Code",
            url: "https://github.com/VAST-AI-Research/HoloPart",
        },
        {
            website: "Interactive Demo",
            url: "https://huggingface.co/spaces/VAST-AI/HoloPart",
        },
    ],
    keys: [
        "2025",
        "3D Vision",
        "Generative",
        "Segmentation",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "SAMPart3D: Segment Any Part in 3D Objects",
    authors: "Yunhan Yang, Yukun Huang, Yuan-Chen Guo, Liangjun Lu, Xiaoyang Wu, Edmund Y. Lam, Yan-Pei Cao, Xihui Liu",
    proceedings: "arXiv 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2411.07184",
        },
        {
            website: "Project Page",
            url: "https://yhyang-myron.github.io/SAMPart3D-website/",
        },
        {
            website: "Code",
            url: "https://github.com/Pointcept/SAMPart3D",
        },
        {
            website: "Dataset",
            url: "https://huggingface.co/datasets/yhyang-myron/PartObjaverse-Tiny",
        },
    ],
    keys: [
        "2024",
        "3D Vision",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "WorldSimBench: Towards Video Generation Models as World Simulators",
    authors: "Yiran Qin*, Zhelun Shi*, Jiwen Yu, Xijun Wang, Enshen Zhou, Lijun Li, Zhenfei Yin, Xihui Liu, Lu Sheng, Jing Shao, Lei Bai, Wanli Ouyang, Ruimao Zhang",
    proceedings: "ICML 2025",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2410.18072",
        },
        {
            website: "Project page",
            url: "https://iranqin.github.io/WorldSimBench.github.io/",
        },
    ],
    keys: [
        "2025",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "UniMC: Taming Diffusion Transformer for Unified Keypoint-Guided Multi-Class Image Generation",
    authors: "Qin Guo, Ailing Zeng, Dongxu Yue, Ceyuan Yang, Yang Cao, Hanzhong Guo, Fei Shen, Wei Liu, Xihui Liu, Dan Xu",
    proceedings: "ICML 2025",
    links: [
    ],
    keys: [
        "2025",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "DreamComposer++: Empowering Diffusion Models with Multi-View Conditions for 3D Content Generation",
    authors: "Yunhan Yang*, Shuo Chen*, Yukun Huang*, Xiaoyang Wu, Yuan-Chen Guo, Edmund Y. Lam, Hengshuang Zhao, Tong He, Xihui Liu",
    proceedings: "TPAMI 2025",
    links: [
        {
            website: "Paper",
            url: "https://ieeexplore.ieee.org/document/10847875",
        },
    ],
    keys: [
        "2025",
        "3D Vision",
        "Generative",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "T2I-CompBench++: An Enhanced and Comprehensive Benchmark for Compositional Text-to-Image Generation",
    authors: "Kaiyi Huang, Chengqi Duan, Kaiyue Sun, Enze Xie, Zhenguo Li, Xihui Liu",
    proceedings: "TPAMI 2025",
    links: [
        {
            website: "Paper",
            url: "https://ieeexplore.ieee.org/document/10847875",
        },
        {
            website: "Project page",
            url: "https://karine-h.github.io/T2I-CompBench-new/",
        },
        {
            website: "Code",
            url: "https://github.com/Karine-Huang/T2I-CompBench",
        },
    ],
    keys: [
        "2025",
        "Dataset/Benchmark",
        "Generative",
        "Multimodality",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Parallelized Autoregressive Visual Generation",
    authors: "Yuqing Wang, Shuhuai Ren, Zhijie Lin, Yujin Han, Haoyuan Guo, Zhenheng Yang, Difan Zou, Jiashi Feng, Xihui Liu",
    proceedings: "CVPR 2025",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2412.15119",
        },
        {
            website: "Project Page",
            url: "https://epiphqny.github.io/PAR-project/",
        },
        {
            website: "Code",
            url: "https://github.com/Epiphqny/PAR",
        },
    ],
    keys: [
        "2024",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "T2V-CompBench: A Comprehensive Benchmark for Compositional Text-to-video Generation",
    authors: "Kaiyue Sun, Kaiyi Huang, Xian Liu, Yue Wu, Zihan Xu, Zhenguo Li, Xihui Liu",
    proceedings: "CVPR 2025",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2407.14505",
        },
        {
            website: "Project Page",
            url: "https://t2v-compbench.github.io/",
        },
        {
            website: "Code",
            url: "https://github.com/KaiyueSun98/T2V-CompBench",
        },
        {
            website: "LeaderBoard",
            url: "https://huggingface.co/spaces/Kaiyue/T2V-CompBench_Leaderboard",
        },
    ],
    keys: [
        "2024",
        "Dataset/Benchmark",
        "Generative",
        "Multimodality",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "T2ISafety: Benchmark for Assessing Fairness, Toxicity, and Privacy in Image Generation",
    authors: "Lijun Li, Zhelun Shi, Xuhao Hu, Bowen Dong, Yiran Qin, Xihui Liu, Lu Sheng, Jing Shao",
    proceedings: "CVPR 2025",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2501.12612",
        },
    ],
    keys: [
        "2024",
        "Dataset/Benchmark",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "MBQ: Modality-Balanced Quantization for Large Vision-Language Models",
    authors: "Shiyao Li, Yingchun Hu, Xuefei Ning, Xihui Liu, Ke Hong, xiaotao jia, Xiuhong Li, Yaqi Yan, PEI RAN, Guohao Dai, Shengen Yan, Huazhong Yang, Yu Wang",
    proceedings: "CVPR 2025",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2412.19509",
        },
        {
            website: "Code",
            url: "https://github.com/thu-nics/MBQ",
        },
    ],
    keys: [
        "2024",
        "Multimodality",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "MIDI: Multi-Instance Diffusion for Single Image to 3D Scene Generation",
    authors: "Zehuan Huang, Yuan-Chen Guo, Xingqiao An, Yunhan Yang, Yangguang Li, Zi-Xin Zou, Ding Liang, Xihui Liu, Yan-Pei Cao, Lu Sheng",
    proceedings: "CVPR 2025",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2412.03558",
        },
        {
            website: "Project Page",
            url: "https://huanngzh.github.io/MIDI-Page/",
        },
        {
            website: "Code",
            url: "https://github.com/huanngzh/MIDI",
        },
    ],
    keys: [
        "2024",
        "3D Vision",
        "Generative",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "HMAR: Efficient Hierarchical Masked AutoRegressive Image Generation",
    authors: "Hermann Kumbong, Xian Liu, Tsung-Yi Lin, Ming-Yu Liu, Xihui Liu, Ziwei Liu, Daniel Y Fu, Christopher Re, David W. Romero",
    proceedings: "CVPR 2025",
    links: [
        {
            website: "Paper",
            url: "https://cvpr.thecvf.com/virtual/2025/poster/34513",
        },
    ],
    keys: [
        "2024",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Accelerating Auto-regressive Text-to-Image Generation with Training-free Speculative Jacobi Decoding",
    authors: "Yao Teng, Han Shi, Xian Liu, Xuefei Ning, Guohao Dai, Yu Wang, Zhenguo Li, Xihui Liu",
    proceedings: "ICLR 2025",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2410.01699",
        },
        {
            website: "Code",
            url: "https://github.com/tyshiwo1/Accelerating-T2I-AR-with-SJD/",
        },
    ],
    keys: [
        "2025",
        "Generative",
        "Multimodality",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Moto: Latent Motion Token as the Bridging Language for Robot Manipulation",
    authors: "Yi Chen, Yuying Ge, Yizhuo Li, Yixiao Ge, Mingyu Ding, Ying Shan, Xihui Liu",
    proceedings: "arXiv 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2412.04445",
        },
        {
            website: "Project Page",
            url: "https://chenyi99.github.io/moto/",
        },
        {
            website: "Code",
            url: "https://github.com/TencentARC/Moto",
        },
    ],
    keys: [
        "2024",
        "Embodied AI",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "LLaVA-3D: A Simple yet Effective Pathway to Empowering LMMs with 3D Capabilities",
    authors: "Chenming Zhu, Tai Wang, Wenwei Zhang, Jiangmiao Pang, Xihui Liu",
    proceedings: "arXiv 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2409.18125",
        },
        {
            website: "Project Page",
            url: "https://zcmax.github.io/projects/LLaVA-3D/",
        },
        {
            website: "Code",
            url: "https://github.com/ZCMax/LLaVA-3D",
        },
    ],
    keys: [
        "2024",
        "3D Vision",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "GameFactory: Creating New Games with Generative Interactive Videos",
    authors: "Jiwen Yu, Yiran Qin, Xintao Wang, Pengfei Wan, Di Zhang, Xihui Liu",
    proceedings: "arXiv 2025",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2501.08325",
        },
        {
            website: "Project Page",
            url: "https://vvictoryuki.github.io/gamefactory/",
        },
        {
            website: "Code",
            url: "https://github.com/KwaiVGI/GameFactory",
        },
        {
            website: "Dataset",
            url: "https://huggingface.co/datasets/KwaiVGI/GameFactory-Dataset",
        },
    ],
    keys: [
        "2025",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "GenMAC: Compositional Text-to-Video Generation with Multi-Agent Collaboration",
    authors: "Kaiyi Huang, Yukun Huang, Xuefei Ning, Zinan Lin, Yu Wang, Xihui Liu",
    proceedings: "arXiv 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2412.04440",
        },
        {
            website: "Project Page",
            url: "https://karine-h.github.io/GenMAC/",
        },
        {
            website: "Code",
            url: "https://github.com/Karine-Huang/GenMAC",
        },
    ],
    keys: [
        "2024",
        "Generative",
        "Multimodality",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "GenArtist: Multimodal LLM as an Agent for Unified Image Generation and Editing",
    authors: "Zhenyu Wang, Aoxue Li, Zhenguo Li, Xihui Liu",
    proceedings: "NeurIPS 2024",
    links: [
        {
            website: "Paper",
            url: "https://proceedings.neurips.cc/paper_files/paper/2024/file/e7c786024ca718f2487712bfe9f51030-Paper-Conference.pdf",
        },
        {
            website: "Project Page",
            url: "https://zhenyuw16.github.io/GenArtist_page/",
        },
        {
            website: "Code",
            url: "https://github.com/zhenyuw16/GenArtist",
        },
    ],
    keys: [
        "2024",
        "Generative",
        "Multimodality",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "LVD-2M: A Long-take Video Dataset with Temporally Dense Captions",
    authors: "Tianwei Xiong, Yuqing Wang, Daquan Zhou, Zhijie Lin, Jiashi Feng, Xihui Liu",
    proceedings: "NeurIPS 2024",
    links: [
        {
            website: "Paper",
            url: "https://proceedings.neurips.cc/paper_files/paper/2024/file/1df493ec1c2530c038d94d7300b5b368-Paper-Datasets_and_Benchmarks_Track.pdf",
        },
        {
            website: "Project Page",
            url: "https://silentview.github.io/LVD-2M/",
        },
        {
            website: "Code and Dataset",
            url: "https://github.com/SilentView/LVD-2M",
        },
    ],
    keys: [
        "2024",
        "Dataset/Benchmark",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "BEACON: Benchmark for Comprehensive RNA Tasks and Language Models",
    authors: "Yuchen Ren, Zhiyuan Chen, Lifeng Qiao, Hongtai Jing, Yuchen Cai, Sheng Xu, Peng Ye, Xinzhu Ma, Siqi Sun, Hongliang Yan, Dong Yuan, Wanli Ouyang, Xihui Liu",
    proceedings: "NeurIPS 2024",
    links: [
        {
            website: "Paper",
            url: "hhttps://proceedings.neurips.cc/paper_files/paper/2024/file/a8ea503d91320fcfe12cba61c8a6d285-Paper-Datasets_and_Benchmarks_Track.pdf",
        },
        {
            website: "Project Page",
            url: "https://silentview.github.io/LVD-2M/",
        },
        {
            website: "Code and Dataset",
            url: "https://github.com/terry-r123/RNABenchmark",
        },
    ],
    keys: [
        "2024",
        "AI for Science",
        "Dataset/Benchmark",
        "Multimodality",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "4Diffusion: Multi-view Video Diffusion Model for 4D Generation",
    authors: "Haiyu Zhang, Xinyuan Chen, Yaohui Wang, Xihui Liu, Yunhong Wang, Yu Qiao",
    proceedings: "NeurIPS 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2405.20674",
        },
        {
            website: "Project Page",
            url: "https://aejion.github.io/4diffusion/",
        },
        {
            website: "Code",
            url: "https://github.com/aejion/4Diffusion",
        },
    ],
    keys: [
        "2024",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Scene Graph Disentanglement and Composition for Generalizable Complex Image Generation",
    authors: "Yunnan Wang, Ziqiang Li, Wenyao Zhang, Zequn Zhang, Baao Xie, Xihui Liu, Wenjun Zeng, Xin Jin",
    proceedings: "NeurIPS 2024",
    links: [
        {
            website: "Paper",
            url: "https://proceedings.neurips.cc/paper_files/paper/2024/file/b288470688e72f58c02031304ad6339f-Paper-Conference.pdf",
        },
    ],
    keys: [
        "2024",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "PUMA: Empowering Unified MLLM with Multi-granular Visual Generation",
    authors: "Rongyao Fang, Chengqi Duan, Kun Wang, Hao Li, Hao Tian, Xingyu Zeng, Rui Zhao, Jifeng Dai, Hongsheng Li, Xihui Liu",
    proceedings: "arXiv 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2410.13861",
        },
        {
            website: "Project Page",
            url: "https://rongyaofang.github.io/puma/",
        },
        {
            website: "Code",
            url: "https://github.com/rongyaofang/PUMA",
        },
    ],
    keys: [
        "2024",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Empowering 3D Visual Grounding with Reasoning Capabilities",
    authors: "Chenming Zhu, Tai Wang, Wenwei Zhang, Kai Chen, Xihui Liu",
    proceedings: "ECCV 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2407.01525",
        },
        {
            website: "Project Page",
            url: "https://zcmax.github.io/projects/ScanReason/",
        },
        {
            website: "Code",
            url: "https://github.com/ZCMax/ScanReason",
        },
        {
            website: "Data",
            url: "https://github.com/ZCMax/ScanReason",
        },
    ],
    keys: [
        "2024",
        "3D Vision",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "TC4D: Trajectory-Conditioned Text-to-4D Generation",
    authors: "Sherwin Bahmani*, Xian Liu*, Yifan Wang*, Ivan Skorokhodov, Victor Rong, Ziwei Liu, Xihui Liu, Jeong Joon Park, Sergey Tulyakov, Gordon Wetzstein, Andrea Tagliasacchi, David B. Lindell",
    proceedings: "ECCV 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2403.17920",
        },
        {
            website: "Project Page",
            url: "https://sherwinbahmani.github.io/tc4d/",
        },
        {
            website: "Code",
            url: "https://github.com/sherwinbahmani/tc4d",
        },
    ],
    keys: [
        "2024",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "PredBench: Benchmarking Spatio-Temporal Prediction across Diverse Disciplines",
    authors: "ZiDong Wang, Zeyu Lu, Di Huang, Tong He, Xihui Liu, Wanli Ouyang, Lei Bai",
    proceedings: "ECCV 2024",
    links: [
        {
            website: "Paper",
            url: "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/07567.pdf",
        },
        {
            website: "Code",
            url: "https://github.com/OpenEarthLab/PredBench",
        },
    ],
    keys: [
        "2024",
        "Dataset/Benchmark",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "EgoPlan-Bench: Benchmarking Multimodal Large Language Models for Human-Level Planning",
    authors: "Yi Chen, Yuying Ge, Yixiao Ge, Mingyu Ding, Bohao Li, Rui Wang, Ruifeng Xu, Ying Shan, Xihui Liu",
    proceedings: "arXiv 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2312.06722",
        },
        {
            website: "Project Page",
            url: "https://chenyi99.github.io/ego_plan/",
        },
        {
            website: "Code",
            url: "https://github.com/ChenYi99/EgoPlan",
        },
        {
            website: "Challenge",
            url: "https://chenyi99.github.io/ego_plan_challenge/",
        },
        {
            website: "Data",
            url: "https://drive.google.com/drive/folders/1qVtPzhHmCgdQ5JlMeAL3OZtvbHaXktTo",
        },
        {
            website: "Leaderboard",
            url: "https://huggingface.co/spaces/ChenYi99/EgoPlan-Bench_Leaderboard",
        },
    ],
    keys: [
        "2024",
        "Dataset/Benchmark",
        "Multimodality",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "DiM: Diffusion Mamba for Efficient High-Resolution Image Synthesis",
    authors: "Yao Teng, Yue Wu, Han Shi, Xuefei Ning, Guohao Dai, Yu Wang, Zhenguo Li, Xihui Liu",
    proceedings: "arXiv 2024",
    links: [
        {
            website: "Paper",
            url: "https://www.arxiv.org/abs/2405.14224",
        },
        {
            website: "Code",
            url: "https://github.com/tyshiwo1/DiM-DiffusionMamba",
        },
    ],
    keys: [
        "2024",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Editing Massive Concepts in Text-to-Image Diffusion Models",
    authors: "Tianwei Xiong, Yue Wu, Enze Xie, Yue Wu, Zhenguo Li, Xihui Liu",
    proceedings: "arXiv 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2403.13807",
        },
        {
            website: "Project Page",
            url: "https://github.com/SilentView/EMCID/",
        },
        {
            website: "Code",
            url: "https://github.com/SilentView/EMCID",
        },
    ],
    keys: [
        "2024",
        "Generative",
        "Multimodality",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Divide and Conquer: Language Models can Plan and Self-Correct for Compositional Text-to-Image Generation",
    authors: "Zhenyu Wang, Enze Xie, Aoxue Li, Zhongdao Wang, Xihui Liu, Zhenguo Li",
    proceedings: "arXiv 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2401.15688",
        },
        {
            website: "Code",
            url: "https://github.com/zhenyuw16/CompAgent_code",
        },
    ],
    keys: [
        "2024",
        "Generative",
        "Multimodality",
    ],
    pis: [
        "Xihui Liu",
    ],
},
{
    title: "FiT: Flexible Vision Transformer for Diffusion Model",
    authors: "Zeyu Lu, Zidong Wang, Di Huang, Chengyue Wu, Xihui Liu, Wanli Ouyang, Lei Bai",
    proceedings: "ICML 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2402.12376",
        },
        {
            website: "Code",
            url: "https://github.com/whlzy/FiT",
        },
    ],
    keys: [
        "2024",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "DreamComposer: Controllable 3D Object Generation via Multi-View Conditions",
    authors: "Yunhan Yang*, Yukun Huang*, Xiaoyang Wu, Yuan-Chen Guo, Song-Hai Zhang, Hengshuang Zhao, Tong He, Xihui Liu",
    proceedings: "CVPR 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2311.17061",
        },
        {
            website: "Project Page",
            url: "https://yhyang-myron.github.io/DreamComposer/",
        },
        {
            website: "Code",
            url: "https://github.com/yhyang-myron/DreamComposer",
        },
    ],
    keys: [
        "2023",
        "3D Vision",
        "Generative",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "HumanGaussian: Text-driven 3d Human Generation with Gaussian Splatting",
    authors: "Xian Liu, Xiaohang Zhan, Jiaxiang Tang, Ying Shan, Gang Zeng, Dahua Lin, Xihui Liu, Ziwei Liu",
    proceedings: "CVPR 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2312.03611",
        },
        {
            website: "Project Page",
            url: "https://alvinliu0.github.io/projects/HumanGaussian",
        },
        {
            website: "Code",
            url: "https://github.com/alvinliu0/HumanGaussian",
        },
        {
            website: "video",
            url: "https://www.youtube.com/watch?v=S3djzHoqPKY",
        },
    ],
    keys: [
        "2023",
        "3D Vision",
        "Generative",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "EmbodiedScan: A Holistic Multi-Modal 3D Perception Suite Towards Embodied AI",
    authors: "Tai Wang*, Xiaohan Mao*, Chenming Zhu*, Runsen Xu, Ruiyuan Lyu, Peisen Li, Xiao Chen, Wenwei Zhang, Kai Chen, Tianfan Xue, Xihui Liu, Cewu Lu, Dahua Lin, Jiangmiao Pang",
    proceedings: "CVPR 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2312.16170",
        },
        {
            website: "Project Page",
            url: "https://tai-wang.github.io/embodiedscan/",
        },
        {
            website: "Code",
            url: "https://github.com/OpenRobotLab/EmbodiedScan",
        },
        {
            website: "Data",
            url: "https://github.com/OpenRobotLab/EmbodiedScan",
        },
    ],
    keys: [
        "2023",
        "3D Vision",
        "Embodied AI",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Point Transformer V3: Simpler, Faster, Stronger",
    authors: "Xiaoyang Wu, Li Jiang, Peng-Shuai Wang, Zhijian Liu, Xihui Liu, Yu Qiao, Wanli Ouyang, Tong He, Hengshuang Zhao",
    proceedings: "CVPR 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2312.10035",
        },
        {
            website: "Code",
            url: "https://github.com/Pointcept/PointTransformerV3",
        },
    ],
    keys: [
        "2023",
        "Other",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Towards Large-scale 3D Representation Learning with Multi-dataset Point Prompt Training",
    authors: "Xiaoyang Wu, Zhuotao Tian, Xin Wen, Bohao Peng, Xihui Liu, Kaicheng Yu, Hengshuang Zhao",
    proceedings: "CVPR 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2308.09718",
        },
        {
            website: "Code",
            url: "https://github.com/Pointcept/Pointcept?tab=readme-ov-file#point-prompt-training-ppt",
        },
    ],
    keys: [
        "2023",
        "3D Vision",
        "Dataset/Benchmark",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "HyperHuman: Hyper-Realistic Human Generation with Latent Structural Diffusion",
    authors: "Xian Liu, Jian Ren, Aliaksandr Siarohin, Ivan Skorokhodov, Yanyu Li, Dahua Lin, Xihui Liu, Ziwei Liu, Sergey Tulyakov",
    proceedings: "ICLR 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2310.08579",
        },
        {
            website: "Project Page",
            url: "https://snap-research.github.io/HyperHuman/",
        },
        {
            website: "Code",
            url: "https://github.com/snap-research/HyperHuman",
        },
        {
            website: "Short video",
            url: "https://www.youtube.com/watch?v=eRPZW1pwxog",
        },
        {
            website: "Long video",
            url: "https://www.youtube.com/watch?v=CxGfbwZOcyU",
        },
    ],
    keys: [
        "2024",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Shape-Guided Diffusion with Inside-Outside Attention",
    authors: "Dong Huk Park*, Grace Luo*, Clayton Andrew Toste, Samaneh Azadi, Xihui Liu, Makrine Karalashvili, Anna Rohrbach, Trevor Darrell",
    proceedings: "WACV 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2212.00210",
        },
        {
            website: "Project Page",
            url: "https://shape-guided-diffusion.github.io/",
        },
        {
            website: "Code",
            url: "https://github.com/shape-guided-diffusion/shape-guided-diffusion",
        },
    ],
    keys: [
        "2024",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Hierarchical Diffusion Autoencoders and Disentangled Image Manipulation",
    authors: "Zeyu Lu, Chengyue Wu, Xinyuan Chen, Yaohui Wang, Yu Qiao, Xihui Liu",
    proceedings: "WACV 2024",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2304.11829",
        },
        {
            website: "Code",
            url: "https://github.com/whlzy/Hierarchical-Diffusion-Autoencoders",
        },
    ],
    keys: [
        "2024",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Drag-A-Video: Non-rigid Video Editing with Point-based Interaction",
    authors: "Yao Teng, Enze Xie, Yue Wu, Haoyu Han, Zhenguo Li, Xihui Liu",
    proceedings: "arXiv 2023",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2312.02936",
        },
        {
            website: "Project Page",
            url: "https://drag-a-video.github.io/",
        },
        {
            website: "Code",
            url: "https://github.com/tyshiwo1/drag-a-video",
        },
    ],
    keys: [
        "2023",
        "Other",
        "Generative",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "T2I-CompBench: A Comprehensive Benchmark for Open-world Compositional Text-to-image Generation",
    authors: "Kaiyi Huang, Kaiyue Sun, Enze Xie, Zhenguo Li, Xihui Liu",
    proceedings: "NeurIPS 2023",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2307.06350",
        },
        {
            website: "Project Page",
            url: "https://karine-h.github.io/T2I-CompBench/",
        },
        {
            website: "Code",
            url: "https://github.com/Karine-Huang/T2I-CompBench",
        },
        {
            website: "Data",
            url: "https://connecthkuhk-my.sharepoint.com/personal/huangky_connect_hku_hk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fhuangky%5Fconnect%5Fhku%5Fhk%2FDocuments%2FT2I%2DCompBench&ga=1",
        },
        {
            website: "T2I-CompBench++",
            url: "https://karine-h.github.io/T2I-CompBench-new/",
        },
    ],
    keys: [
        "2023",
        "Dataset/Benchmark",
        "Generative",
        "Multimodality",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "OV-PARTS: Towards Open-Vocabulary Part Segmentation",
    authors: "Meng Wei, Xiaoyu Yue, Wenwei Zhang, Shu Kong, Xihui Liu, Jiangmiao Pang",
    proceedings: "NeurIPS 2023",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/pdf/2310.05107",
        },
        {
            website: "Code",
            url: "https://github.com/OpenRobotLab/OV_PARTS",
        },
        {
            website: "Data",
            url: "https://github.com/OpenRobotLab/OV_PARTS",
        },
        {
            website: "Challenge",
            url: "https://ov-parts.github.io/",
        },
    ],
    keys: [
        "2023",
        "Segmentation",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Seeing is not always believing: A Quantitative Study on Human Perception of AI-Generated Images",
    authors: "Zeyu Lu*, Di Huang*, Lei Bai*, Jingjing Qu, Chengyue Wu, Xihui Liu, Wanli Ouyang",
    proceedings: "NeurIPS 2023",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2304.13023",
        },
        {
            website: "Project Page",
            url: "https://github.com/Inf-imagine/Sentry",
        },
        {
            website: "Data",
            url: "https://huggingface.co/datasets/InfImagine/FakeImageDataset",
        },
    ],
    keys: [
        "2023",
        "Other",
        "Generative",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "CorresNeRF: Image Correspondence Priors for Neural Radiance Fields",
    authors: "Yixing Lao, Xiaogang Xu, Zhipeng Cai, Xihui Liu, Hengshuang Zhao",
    proceedings: "NeurIPS 2023",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2312.06642",
        },
        {
            website: "Project Page",
            url: "https://yxlao.github.io/corres-nerf/",
        },
        {
            website: "Code",
            url: "https://github.com/yxlao/corres-nerf",
        },
    ],
    keys: [
        "2023",
        "3D Vision",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "SAM3D: Segment Anything in 3D Scenes",
    authors: "Yunhan Yang, Xiaoyang Wu, Tong He, Hengshuang Zhao, Xihui Liu",
    proceedings: "ICCV Workshop 2023",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2306.03908",
        },
        {
            website: "Code",
            url: "https://github.com/Pointcept/SegmentAnything3D",
        },
    ],
    keys: [
        "2023",
        "3D Vision",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Back to the Source: Diffusion-Driven Test-Time Adaptation",
    authors: "Jin Gao*, Jialing Zhang*, Xihui Liu, Trevor Darrell, Evan Shelhamer, Dequan Wang",
    proceedings: "CVPR 2023",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2207.03442",
        },
        {
            website: "Code",
            url: "https://github.com/shiyegao/DDA",
        },
    ],
    keys: [
        "2022",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Masked Scene Contrast: A Scalable Framework for Unsupervised 3D Representation Learning",
    authors: "Xiaoyang Wu, Xin Wen, Xihui Liu, Hengshuang Zhao",
    proceedings: "CVPR 2023",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2303.14191",
        },
        {
            website: "Code",
            url: "https://github.com/Pointcept/Pointcept?tab=readme-ov-file#masked-scene-contrast-msc",
        },
    ],
    keys: [
        "2022",
        "3D Vision",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "GLeaD: Improving GANs with A Generator-Leading Task",
    authors: "Qingyan Bai, Ceyuan Yang, Yinghao Xu, Xihui Liu, Yujiu Yang, Yujun Shen",
    proceedings: "CVPR 2023",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2212.03752",
        },
        {
            website: "Project Page",
            url: "https://ezioby.github.io/glead/",
        },
        {
            website: "Code",
            url: "https://github.com/EzioBy/glead/",
        },
    ],
    keys: [
        "2022",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "More Control for Free! Image Synthesis with Semantic Diffusion Guidance",
    authors: "Xihui Liu, Dong Huk Park, Samaneh Azadi, Gong Zhang, Arman Chopikyan, Yuxiao Hu, Humphrey Shi, Anna Rohrbach, Trevor Darrell",
    proceedings: "WACV 2023",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2112.05744",
        },
        {
            website: "Project Page",
            url: "https://xh-liu.github.io/sdg/",
        },
        {
            website: "Code",
            url: "https://github.com/xh-liu/SDG_code",
        },
    ],
    keys: [
        "2023",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "TVTSv2: Learning Out-of-the-box Spatiotemporal Visual Representations at Scale",
    authors: "Ziyun Zeng, Zhan Tong, Xihui Liu, Bin Chen, Shu-Tao Xia, Yixiao Ge",
    proceedings: "arXiv 2023",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2305.14173",
        },
        {
            website: "Code",
            url: "https://github.com/TencentARC/TVTS?tab=readme-ov-file",
        },
    ],
    keys: [
        "2023",
        "Other",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Point Transformer V2: Grouped Vector Attention and Partition-based Pooling",
    authors: "Xiaoyang Wu, Yixing Lao, Li Jiang, Xihui Liu, Hengshuang Zhao",
    proceedings: "NeurIPS 2022",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2210.05666",
        },
        {
            website: "Code",
            url: "https://github.com/Pointcept/PointTransformerV2",
        },
    ],
    keys: [
        "2022",
        "Other",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "The ArtBench Dataset: Benchmarking Generative Models with Artworks",
    authors: "Peiyuan Liao*, Xiuyu Li*, Xihui Liu, Kurt Keutzer",
    proceedings: "arXiv 2022",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2206.11404",
        },
        {
            website: "Project Page",
            url: "https://github.com/liaopeiyuan/artbench",
        },
        {
            website: "Data",
            url: "https://github.com/liaopeiyuan/artbench?tab=readme-ov-file#accessing-dataset",
        },
    ],
    keys: [
        "2022",
        "Dataset/Benchmark",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Benchmark for Compositional Text-to-Image Synthesis",
    authors: "Dong Huk Park, Samaneh Azadi, Xihui Liu, Trevor Darrell, Anna Rohrbach",
    proceedings: "NeurIPS Datasets and Benchmarks 2021",
    links: [
        {
            website: "Paper",
            url: "https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/file/0a09c8844ba8f0936c20bd791130d6b6-Paper-round1.pdf",
        },
        {
            website: "Code",
            url: "https://github.com/Seth-Park/comp-t2i-dataset",
        },
        {
            website: "Data",
            url: "https://github.com/Seth-Park/comp-t2i-dataset",
        },
    ],
    keys: [
        "2021",
        "Dataset/Benchmark",
        "Generative",
        "Multimodality",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Open-Edit: Open-Domain Image Manipulation with Open-Vocabulary Instructions",
    authors: "Xihui Liu, Zhe Lin, Jianming Zhang, Handong Zhao, Quan Tran, Xiaogang Wang, Hongsheng Li",
    proceedings: "ECCV 2020",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2008.01576",
        },
        {
            website: "Code",
            url: "https://github.com/xh-liu/Open-Edit",
        },
        {
            website: "Video",
            url: "https://www.youtube.com/watch?v=8E3bwvjCHYE",
        },
        {
            website: "Slides",
            url: "https://drive.google.com/file/d/1m3JKSUotm6sRImak_qjwBMtMtd037XeK/view",
        },
    ],
    keys: [
        "2020",
        "Other",
        "Generative",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Learning to Predict Layout-to-image Conditional Convolutions for Semantic Image Synthesis",
    authors: "Xihui Liu, Guojun Yin, Jing Shao, Xiaogang Wang, Hongsheng Li",
    proceedings: "NeurIPS 2019",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/1910.06809",
        },
        {
            website: "Code",
            url: "https://github.com/xh-liu/CC-FPSE",
        },
        {
            website: "Slides",
            url: "https://drive.google.com/file/d/1ocpgYFmRkG_myEMzWu7uFVx7_adJUD4r/view",
        },
    ],
    keys: [
        "2019",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "CAMP: Cross-Modal Adaptive Message Passing for Text-Image Retrieval",
    authors: "Zihao Wang, Xihui Liu, Hongsheng Li, Lu Sheng, Junjie Yan, Xiaogang Wang, Jing Shao",
    proceedings: "ICCV 2019",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/1909.05506",
        },
        {
            website: "Code",
            url: "https://github.com/ZihaoWang-CV/CAMP_iccv19",
        },
    ],
    keys: [
        "2019",
        "Other",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Improving Referring Expression Grounding with Cross-modal Attention-guided Erasing",
    authors: "Xihui Liu, Zihao Wang, Jing Shao, Xiaogang Wang, Hongsheng Li",
    proceedings: "CVPR 2019",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/1903.00839",
        },
        {
            website: "Code",
            url: "https://github.com/xh-liu/CM-Erase-REG",
        },
    ],
    keys: [
        "2019",
        "Other",
        "Vision",
        "Generative",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Show, Tell and Discriminate: Image Captioning by Self-retrieval with Partially Labeled Data",
    authors: "Xihui Liu, Hongsheng Li, Jing Shao, Dapeng Chen, Xiaogang Wang",
    proceedings: "ECCV 2018",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/1803.08314",
        },
    ],
    keys: [
        "2018",
        "Other",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Improving Deep Visual Representation for Person Re-identiﬁcation by Global and Local Image-language Association",
    authors: "Dapeng Chen, Hongsheng Li, Xihui Liu, Yantao Shen, Jing Shao, Zejian Yuan, Xiaogang Wang",
    proceedings: "ECCV 2018",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/1808.01571",
        },
    ],
    keys: [
        "2018",
        "Other",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Localization Guided Learning for Pedestrian Attribute Recognition",
    authors: "Pengze Liu, Xihui Liu, Junjie Yan, Jing Shao",
    proceedings: "BMVC 2018",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/1808.09102",
        },
        {
            website: "Code",
            url: "https://github.com/lpzjerry/Pedestrian-Attribute-LGNet",
        },
    ],
    keys: [
        "2018",
        "Other",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "HydraPlus-Net: Attentive Deep Features for Pedestrian Analysis",
    authors: "Xihui Liu*, Haiyu Zhao*, Maoqing Tian, Lu Sheng, Jing Shao, Shuai Yi, Junjie Yan, Xiaogang Wang",
    proceedings: "ICCV 2017",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/1709.09930",
        },
        {
            website: "Project Page",
            url: "https://xh-liu.github.io/HydraPlus-Net/",
        },
        {
            website: "Code",
            url: "https://github.com/xh-liu/HydraPlus-Net",
        },
        {
            website: "Data",
            url: "https://drive.google.com/drive/folders/0B5_Ra3JsEOyOUlhKM0VPZ1ZWR2M?resourcekey=0-CdctEkdX1j2GSMSWWfrPSQ&usp=sharing",
        },
    ],
    keys: [
        "2017",
        "Other",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Orientation Invariant Feature Embedding and Spatial Temporal Regularization for Vehicle Re-identification",
    authors: "Zhongdao Wang*, Luming Tang*, Xihui Liu, Zhuliang Yao, Shuai Yi, Jing Shao, Junjie Yan, Shengjin Wang, Hongsheng Li, Xiaogang Wang",
    proceedings: "ICCV 2017",
    links: [
        {
            website: "Paper",
            url: "https://openaccess.thecvf.com/content_ICCV_2017/papers/Wang_Orientation_Invariant_Feature_ICCV_2017_paper.pdf",
        },
        {
            website: "Data",
            url: "https://github.com/Zhongdao/VehicleReIDKeyPointData",
        },
    ],
    keys: [
        "2017",
        "Other",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
  {
    title: "Object Detection in Videos With Tubelet Proposal Networks",
    authors: "Kai Kang, Hongsheng Li, Tong Xiao, Wanli Ouyang, Junjie Yan, Xihui Liu, Xiaogang Wang",
    proceedings: "CVPR 2017",
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/1702.06355",
        },
        {
            website: "Code",
            url: "https://github.com/myfavouritekk/tpn",
        },
        {
            website: "Winner of ImageNet ILSVRC 2016 Task 3c: Object detection/tracking from video",
            url: "https://www.image-net.org/challenges/LSVRC/2016/results.php#:~:text=Task%203c%3A%20Object%20detection/tracking%20from%20video%20with%20provided%20training%20data",
        },
    ],
    keys: [
        "2017",
        "Detection",
        "Vision",
    ],
    pis: [
        "Xihui Liu",
    ],
  },
];
