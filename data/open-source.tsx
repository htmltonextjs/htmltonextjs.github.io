export const open_source_categories: { category: string; years: string[] }[] = [
  {
    category: 'Highlight',
    years: ['Project', 'Dataset'],
  },
  {
    category: 'Project',
    years: ['2025', '2024', '2023', '2022', '2021', '2020'],
  },
  {
    category: 'Dataset',
    years: ['2024', '2023', '2022'],
  },
];

export const open_sources: {
  title: string;
  description: string;
  tags: string[];
  links: { website: string; url: string }[];
  keys: string[];
  pis: string[];
  githubstars: string;
  img: string;
  id: string;
}[] = [
  {
    title:
      'AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems',
    description:
      'AgiBot World Colosseo is a full-stack and open-source embodied intelligence ecosystem. Based on our hardware platform AgiBot G1, we construct AgiBot World—an open-source robot manipulation dataset collected by more than 100 homogeneous robots, providing high-quality data for challenging tasks spanning a wide spectrum of real-life scenarios.',
    tags: ['Manipulation'],
    links: [
      {
        website: 'Blog',
        url: 'https://opendrivelab.com/blog/agibot-world/',
      },
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/AgiBot-World',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2503.06669',
      },
      {
        website: 'Video',
        url: 'https://www.bilibili.com/video/BV1sNdGYWEBY',
      },
      {
        website: 'Challenge',
        url: 'https://opendrivelab.com/challenge2025/#agibot-world',
      },
    ],
    keys: ['Project', '2025', 'Highlight'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/AgiBot-World?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_agibot_world_colosseo.jpg',
    id: 'AgiBot-World-Colosseo',
  },
  {
    title: 'UniVLA: Learning to Act Anywhere with Task-centric Latent Actions',
    description:
      'UniVLA is a unified vision-language-action framework that enables policy learning across different environments. By deriving task-centric latent actions in an unsupervised manner, UniVLA can leverage data from arbitrary embodiments and perspectives without action labels. After large-scale pretraining from videos, UniVLA develops a cross-embodiment generalist policy that can be readily deployed across various robots by learning an action decoding with minimal cost.',
    tags: ['Cross-Embodiment'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/UniVLA',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2505.06111',
      },
    ],
    keys: ['Project', '2025', 'Highlight'],
    pis: ['Hongyang Li', 'Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/UniVLA?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_univla.jpg',
    id: 'UniVLA',
  },
  {
    title: 'Autoregressive Model Beats Diffusion: Llama for Scalable Image Generation',
    description:
      'Vanilla autoregressive models without inductive biases on visual signals can achieve state-of-the-art image generation performance if scaling properly.',
    tags: ['Autoregressive Model', 'Image Generation'],
    links: [
      {
        website: 'Page',
        url: 'https://peizesun.github.io/llamagen/',
      },
      {
        website: 'Github',
        url: 'https://github.com/FoundationVision/LlamaGen',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2406.06525',
      },
    ],
    keys: ['Project', '2024', 'Highlight'],
    pis: ['Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/FoundationVision/LlamaGen?style=social',
    img: 'https://mmlabassets.github.io/open-source/LlamaGen.jpg',
    id: 'LlamaGen',
  },
  {
    title: 'Janus: Decoupling Visual Encoding for Unified Multimodal Understanding and Generation',
    description:
      'Janus is a novel autoregressive framework that unifies multimodal understanding and generation.',
    tags: ['Autoregressive Model'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/deepseek-ai/Janus',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2410.13848',
      },
    ],
    keys: ['Project', '2024', 'Highlight'],
    pis: ['Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/deepseek-ai/Janus?style=social',
    img: 'https://mmlabassets.github.io/open-source/Janus.jpg',
    id: 'Janus',
  },
  {
    title:
      'AgiBot-World: The Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems',
    description:
      'Introducing AgiBot World, a large-scale platform comprising over 1 million trajectories across 217 tasks in five deployment scenarios. Accelerated by a standardized collection pipeline with human-in-the-loop verification, AgiBot World guarantees high-quality and diverse data distribution.',
    tags: ['Manipulation'],
    links: [
      {
        website: 'Blog',
        url: 'https://opendrivelab.com/blog/agibot-world/',
      },
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/AgiBot-World',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2503.06669',
      },
      {
        website: 'Challenge',
        url: 'https://opendrivelab.com/challenge2025/#agibot-world',
      },
    ],
    keys: ['Dataset', '2024', 'Highlight'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/AgiBot-World?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_agibotworld.jpg',
    id: 'AgiBot-World',
  },
  {
    title: 'DriveLM: Driving with Graph Visual Question Answering',
    description:
      'Facilitating the Perception, Prediction, Planning, Behavior, Motion tasks with human-written reasoning logic as a connection in between.',
    tags: ['Language', 'Planning'],
    links: [
      {
        website: 'Page',
        url: 'https://opendrivelab.com/DriveLM/',
      },
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/DriveLM',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2312.14150',
      },
      {
        website: 'Challenge',
        url: 'https://opendrivelab.com/challenge2024/#driving_with_language',
      },
    ],
    keys: ['Dataset', '2024', 'Highlight'],
    pis: ['Hongyang Li', 'Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/DriveLM?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_drivelm.jpg',
    id: 'DriveLM',
  },
  {
    title: 'OpenDV',
    description:
      'The largest driving video dataset to date, containing more than 1700 hours of real-world driving videos.',
    tags: ['Autonomous Driving', 'World Model'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/DriveAGI/tree/main/opendv',
      },
    ],
    keys: ['Dataset', '2024', 'Highlight'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/DriveAGI?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_opendv.jpg',
    id: 'OpenDV',
  },
  {
    title:
      'CLOVER: Closed-Loop Visuomotor Control with Generative Expectation for Robotic Manipulation',
    description:
      'CLOVER employs a text-conditioned video diffusion model for generating visual plans as reference inputs, then these sub-goals guide the feedback-driven policy to generate actions with an error measurement strategy.',
    tags: ['Manipulation', 'Visuomotor'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/CLOVER',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2409.09016',
      },
      {
        website: 'Video',
        url: 'https://www.bilibili.com/video/BV1rHqZYeECL/',
      },
    ],
    keys: ['Project', '2024'],
    pis: ['Hongyang Li', 'Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/CLOVER?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_clover.jpg',
    id: 'CLOVER',
  },
  {
    title: 'ELM: Embodied Understanding of Driving Scenarios',
    id: 'ELM',
    description: 'Revive driving scene understanding by delving into the embodiment philosophy.',
    tags: ['Scene Understanding'],
    links: [
      {
        website: 'Page',
        url: 'https://opendrivelab.github.io/elm.github.io/',
      },
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/ELM',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2403.04593',
      },
    ],
    keys: ['Project', '2024'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/ELM?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_elm.jpg',
  },
  {
    title: 'End-to-End Autonomous Driving: Challenges and Frontiers',
    description:
      'In this survey, we provide a comprehensive analysis of more than 270 papers on the motivation, roadmap, methodology, challenges, and future trends in end-to-end autonomous driving.',
    tags: ['End-to-End', 'Autonomous Driving'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/End-to-end-Autonomous-Driving',
      },
      {
        website: 'Paper',
        url: 'https://ieeexplore.ieee.org/abstract/document/10614862/',
      },
    ],
    keys: ['Project', '2024'],
    pis: ['Hongyang Li'],
    githubstars:
      'https://img.shields.io/github/stars/OpenDriveLab/End-to-end-Autonomous-Driving?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_e2esurvey.jpg',
    id: 'E2E-Survey',
  },
  {
    title: 'GenAD: Generalized Predictive Model for Autonomous Driving',
    id: 'GenAD',
    description:
      'We aim to establish a generalized video prediction paradigm for autonomous driving by presenting the largest multimodal driving video dataset to date, OpenDV-2K, and a generative model that predicts the future given past visual and textual input, GenAD.',
    tags: ['Autonomous Driving', 'World Model'],
    links: [
      {
        website: 'Blog',
        url: 'https://medium.com/@opendrivelab/towards-next-level-of-autonomous-driving-via-world-models-aff0eb7fee00',
      },
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/DriveAGI',
      },
      {
        website: 'Paper',
        url: 'https://openaccess.thecvf.com/content/CVPR2024/html/Yang_Generalized_Predictive_Model_for_Autonomous_Driving_CVPR_2024_paper.html',
      },
      {
        website: 'Video',
        url: 'https://www.youtube.com/watch?v=a4H6Jj-7IC0',
      },
      {
        website: 'Slides',
        url: 'https://opendrivelab.github.io/content/GenAD_slides_with_vista.pdf',
      },
    ],
    keys: ['Project', '2024'],
    pis: ['Hongyang Li', 'Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/DriveAGI?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_genad.jpg',
  },
  {
    title: 'MPI: Learning Manipulation by Predicting Interaction',
    id: 'MPI',
    description:
      'We propose a general pre-training pipeline that learns Manipulation by Predicting the Interaction (MPI).',
    tags: ['Manipulation'],
    links: [
      {
        website: 'Page',
        url: 'https://opendrivelab.com/MPI/',
      },
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/MPI',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2406.00439',
      },
    ],
    keys: ['Project', '2024'],
    pis: ['Hongyang Li', 'Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/MPI?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_mpi.jpg',
  },
  {
    title:
      'RobuDual: Towards Synergistic, Generalized, and Efficient Dual-System for Robotic Manipulation',
    description:
      'Our objective is to develop a synergistic dual-system framework which supplements the generalizability of large-scale pre-trained generalist with the efficient and task-specific adaptation of specialist.',
    tags: ['Manipulation', 'Dual-System'],
    links: [
      {
        website: 'Page',
        url: 'https://opendrivelab.com/RoboDual/',
      },
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/RoboDual',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2410.08001',
      },
    ],
    keys: ['Project', '2024'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/RoboDual?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_robodual.jpg',
    id: 'RoboDual',
  },
  {
    title: 'ViDAR: Visual Point Cloud Forecasting enables Scalable Autonomous Driving',
    id: 'ViDAR',
    description:
      'A new self-supervised pre-training task for end-to-end autonomous driving, predicting future point clouds from historical visual inputs, joint modeling the 3D geometry and temporal dynamics for simultaneous perception, prediction, and planning.',
    tags: ['Autonomous Driving', 'Point Cloud'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/ViDAR',
      },
      {
        website: 'Paper',
        url: 'https://openaccess.thecvf.com/content/CVPR2024/html/Yang_Visual_Point_Cloud_Forecasting_enables_Scalable_Autonomous_Driving_CVPR_2024_paper.html',
      },
      {
        website: 'Challenge',
        url: 'https://opendrivelab.com/challenge2024/#predictive_world_model',
      },
    ],
    keys: ['Project', '2024'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/ViDAR?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_vidar.jpg',
  },
  {
    title:
      'Vista: A Generalizable Driving World Model with High Fidelity and Versatile Controllability',
    id: 'Vista',
    description:
      'A generalizable driving world model with high-fidelity open-world prediction, continuous long-horizon rollout, and zero-shot action controllability.',
    tags: ['Autonomous Driving', 'World Model'],
    links: [
      {
        website: 'Page',
        url: 'https://opendrivelab.com/Vista/',
      },
      {
        website: 'Blog',
        url: 'https://medium.com/@opendrivelab/towards-next-level-of-autonomous-driving-via-world-models-aff0eb7fee00',
      },
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/Vista',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2405.17398',
      },
      {
        website: 'Hugging Face',
        url: 'https://huggingface.co/OpenDriveLab/Vista',
      },
      {
        website: 'Video',
        url: 'https://www.bilibili.com/video/BV1gXCGYMEYV/',
      },
      {
        website: 'Poster',
        url: 'https://opendrivelab.github.io/Vista/nips24_vista_poster.png',
      },
    ],
    keys: ['Project', '2024'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/Vista?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_vista.jpg',
  },
  {
    title:
      'PixArt-α: Fast Training of Diffusion Transformer for Photorealistic Text-to-Image Synthesis',
    description:
      'PixArt-α is a Transformer-based T2I diffusion model whose image generation quality is competitive with state-of-the-art image generators.',
    tags: ['Diffusion Transformer'],
    links: [
      {
        website: 'GitHub',
        url: 'https://github.com/PixArt-alpha/PixArt-alpha',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2310.00426',
      },
    ],
    keys: ['Project', '2023', 'Highlight'],
    pis: ['Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/PixArt-alpha/PixArt-alpha?style=social',
    img: 'https://mmlabassets.github.io/open-source/PixartAlpha.jpg',
    id: 'PixArt',
  },
  {
    title: 'UniAD: Planning-oriented Autonomous Driving',
    description:
      'UniAD is a Unified Autonomous Driving algorithm framework following a planning-oriented philosophy. Instead of standalone modular design and multi-task learning, we cast a series of tasks, including perception, prediction and planning tasks hierarchically.',
    tags: ['End-to-End', 'Autonomous Driving'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/UniAD',
      },
      {
        website: 'Paper',
        url: 'https://openaccess.thecvf.com/content/CVPR2023/html/Hu_Planning-Oriented_Autonomous_Driving_CVPR_2023_paper.html',
      },
      {
        website: 'Video',
        url: 'https://www.youtube.com/watch?v=cyrxJJ_nnaQ',
      },
      {
        website: 'Slides',
        url: 'https://opendrivelab.github.io/UniAD_plenary_talk_slides.pdf',
      },
    ],
    keys: ['Project', '2023', 'Highlight'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/UniAD?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_uniad.jpg',
    id: 'UniAD',
  },
  {
    title:
      'DriveAdapter: Breaking the Coupling Barrier of Perception and Planning in End-to-End Autonomous Driving',
    id: 'DriveAdapter',
    description: 'A new paradigm for end-to-end autonomous driving without causal confusion issue.',
    tags: ['End-to-End', 'Autonomous Driving'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/DriveAdapter',
      },
      {
        website: 'Paper',
        url: 'https://openaccess.thecvf.com/content/ICCV2023/html/Jia_DriveAdapter_Breaking_the_Coupling_Barrier_of_Perception_and_Planning_in_ICCV_2023_paper.html',
      },
    ],
    keys: ['Project', '2023'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/DriveAdapter?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_driveadapter.jpg',
  },
  {
    title: 'EmbodiedGPT: Vision-Language Pre-Training via Embodied Chain of Thought',
    description: 'A large-scale end-to-end multi-model foundation model for embodied AI.',
    tags: ['Embodied AI'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/EmbodiedGPT/EmbodiedGPT_Pytorch',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2305.15021',
      },
      {
        website: 'Dataset',
        url: 'https://github.com/EmbodiedGPT/EgoCOT_Dataset',
      },
    ],
    keys: ['Project', '2023'],
    pis: ['Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/EmbodiedGPT/EmbodiedGPT_Pytorch?style=social',
    img: 'https://mmlabassets.github.io/open-source/EmbodiedGPT.jpg',
    id: 'EmbodiedGPT',
  },
  {
    title:
      'HDGT: Heterogeneous Driving Graph Transformer for Multi-Agent Trajectory Prediction via Scene Encoding',
    id: 'HDGT',
    description:
      'HDGT formulates the driving scene as a heterogeneous graph with different types of nodes and edges.',
    tags: ['Autonomous Driving', 'Graph'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/HDGT',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2205.09753',
      },
    ],
    keys: ['Project', '2023'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/HDGT?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_hdgt.jpg',
  },
  {
    title: 'OccNet: Scene as Occupancy',
    id: 'OccNet',
    description:
      'Occupancy serves as a general representation of the scene and could facilitate perception and planning in the full-stack of autonomous driving.',
    tags: ['Occupancy'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/OccNet',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2306.02851',
      },
      {
        website: 'Challenge',
        url: 'https://opendrivelab.com/challenge2024/#occupancy_and_flow',
      },
    ],
    keys: ['Project', '2023'],
    pis: ['Hongyang Li', 'Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/OccNet?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_occnet.jpg',
  },
  {
    title: 'OmniQuant: Omnidirectionally Calibrated Quantization for Large Language Models',
    description: 'OmniQuant is a simple and powerful quantization technique for LLMs.',
    tags: ['LLM Quantization'],
    links: [
      {
        website: 'GitHub',
        url: 'https://github.com/OpenGVLab/OmniQuant',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2308.13137',
      },
    ],
    keys: ['Project', '2023'],
    pis: ['Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/OpenGVLab/OmniQuant?style=social',
    img: 'https://mmlabassets.github.io/open-source/OmniQuant.jpg',
    id: 'OmniQuant',
  },
  {
    title:
      'PPGeo: Policy Pre-Training for End-to-End Autonomous Driving via Self-Supervised Geometric Modeling',
    id: 'PPGeo',
    description:
      'An intuitive and straightforward fully self-supervised framework curated for the policy pre-training in visuomotor driving.',
    tags: ['End-to-End', 'Autonomous Driving'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/opendrivelab/ppgeo',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2301.01006',
      },
      {
        website: 'Slides',
        url: 'https://docs.google.com/presentation/d/1d0MGh3XCxuZujtYgZ0sr6xsAKZ4uS50p/edit?usp=sharing&ouid=118212253182146260973&rtpof=true&sd=true',
      },
    ],
    keys: ['Project', '2023'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/ppgeo?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_ppgeo.jpg',
  },
  {
    title:
      'Think Twice before Driving: Towards Scalable Decoders for End-to-End Autonomous Drivingg',
    id: 'ThinkTwice',
    description:
      'A scalable decoder paradigm that generates the future trajectory and action of the ego vehicle for end-to-end autonomous driving.',
    tags: ['End-to-End', 'Autonomous Driving'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/ThinkTwice',
      },
      {
        website: 'Paper',
        url: 'https://openaccess.thecvf.com/content/CVPR2023/html/Jia_Think_Twice_Before_Driving_Towards_Scalable_Decoders_for_End-to-End_Autonomous_CVPR_2023_paper.html',
      },
    ],
    keys: ['Project', '2023'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/ThinkTwice?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_thinktwice.jpg',
  },
  {
    title: "Delving into the Devils of Bird's-Eye-View Perception: A Review, Evaluation and Recipe",
    id: 'BEV-Survey',
    description:
      'We review the most recent work on BEV perception and provide analysis of different solutions.',
    tags: ["Bird's-Eye-View"],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/opendrivelab/bevperception-survey-recipe',
      },
      {
        website: 'Paper',
        url: 'https://ieeexplore.ieee.org/document/10321736',
      },
    ],
    keys: ['Project', '2023'],
    pis: ['Hongyang Li'],
    githubstars:
      'https://img.shields.io/github/stars/OpenDriveLab/bevperception-survey-recipe?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_bevsurvey.jpg',
  },
  {
    title: 'LVLM-eHub: A Comprehensive Evaluation Benchmark for Large Vision-Language Models',
    description:
      'LVLM-eHub is a comprehensive evaluation benchmark for publicly available large multimodal models (LVLM).',
    tags: ['Large Vision-Language Models', 'Benchmark'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/OpenGVLab/Multi-Modality-Arena',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2306.09265',
      },
    ],
    keys: ['Dataset', '2023'],
    pis: ['Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/OpenGVLab/Multi-Modality-Arena?style=social',
    img: 'https://mmlabassets.github.io/open-source/LVLM-eHub.jpg',
    id: 'LVLM',
  },
  {
    title: 'OpenLane-V2: The First Perception and Reasoning Benchmark for Road Driving',
    description:
      'The objective of the presented dataset is to advance research in understanding the structure of road scenes by examining the relationship between perceived entities, such as traffic elements and lanes. Leveraging existing datasets, OpenLane-V2 consists of 2,000 annotated road scenes that describe traffic elements and their correlation to the lanes.',
    tags: ['Topology Recognition', '3D Lane Detection', 'Traffic Element Recognition'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/OpenLane-V2',
      },
      {
        website: 'Paper',
        url: 'https://proceedings.neurips.cc/paper_files/paper/2023/hash/3c0a4c8c236144f1b99b7e1531debe9c-Abstract-Datasets_and_Benchmarks.html',
      },
      {
        website: 'Challenge',
        url: 'https://opendrivelab.com/challenge2024/#mapless_driving',
      },
    ],
    keys: ['Dataset', '2023'],
    pis: ['Hongyang Li', 'Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/OpenLane-V2?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_openlanev2.jpg',
    id: 'OpenLane-V2',
  },
  {
    title: 'OpenScene: 3D Occupancy Prediction Benchmark in Autonomous Driving',
    description:
      'OpenScene is a compact redistribution of the large-scale nuPlan dataset, retaining only relevant annotations and sensor data at 2Hz. This reduces the dataset size by a factor of >10. We cover a wide span of over 120 hours, and provide additional occupancy labels collected in various cities, from Boston, Pittsburgh, Las Vegas to Singapore.',
    tags: ['Occupancy'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/OpenScene',
      },
      {
        website: 'Challenge',
        url: 'https://opendrivelab.com/challenge2024/',
      },
    ],
    keys: ['Dataset', '2023'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/OpenScene?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_openscene.jpg',
    id: 'OpenScene',
  },
  {
    title:
      "BEVFormer: Learning Bird's-Eye-View Representation From LiDAR-Camera via Spatiotemporal Transformers",
    id: 'BEVFormer',
    description:
      'A paradigm for autonomous driving that applies both Transformer and Temporal structure to generate BEV features.',
    tags: ["Bird's-Eye-View"],
    links: [
      {
        website: 'Blog',
        url: 'https://zhuanlan.zhihu.com/p/564295059',
      },
      {
        website: 'Github',
        url: 'https://github.com/fundamentalvision/BEVFormer',
      },
      {
        website: 'Paper',
        url: 'https://www.computer.org/csdl/journal/tp/2025/03/10791908/22ABgP6PlUQ',
      },
    ],
    keys: ['Project', '2022', 'Highlight'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/fundamentalvision/BEVFormer?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_bevformer.jpg',
  },
  {
    title: 'AdaptFormer: Adapting Vision Transformers for Scalable Visual Recognition',
    description:
      'Adapt Vision Transformers to downstream tasks by fine-tuning less than 2% parameters.',
    tags: ['Vision Transformers'],
    links: [
      {
        website: 'Page',
        url: 'https://www.shoufachen.com/adaptformer-page/',
      },
      {
        website: 'GitHub',
        url: 'https://github.com/ShoufaChen/AdaptFormer',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2205.13535',
      },
    ],
    keys: ['Project', '2022'],
    pis: ['Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/ShoufaChen/AdaptFormer?style=social',
    img: 'https://mmlabassets.github.io/open-source/AdaptFormer.jpg',
    id: 'AdaptFormer',
  },
  {
    title: 'DiffusionDet: Diffusion Model for Object Detection',
    description: 'DiffusionDet is the first work of diffusion model for object detection.',
    tags: ['Object Detection', 'Diffusion Model'],
    links: [
      {
        website: 'GitHub',
        url: 'https://github.com/ShoufaChen/DiffusionDet',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2211.09788',
      },
    ],
    keys: ['Project', '2022'],
    pis: ['Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/ShoufaChen/DiffusionDet?style=social',
    img: 'https://mmlabassets.github.io/open-source/DiffusionDet.jpg',
    id: 'DiffusionDet',
  },
  {
    title: 'MotionCtrl: A Unified and Flexible Motion Controller for Video Generation',
    description:
      'MotionCtrl can Independently control complex camera motion and object motion of generated videos, with only a unified model.',
    tags: ['Video Generation'],
    links: [
      {
        website: 'Page',
        url: 'https://wzhouxiff.github.io/projects/MotionCtrl/',
      },
      {
        website: 'Github',
        url: 'https://github.com/TencentARC/MotionCtrl',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2312.03641',
      },
    ],
    keys: ['Project', '2022'],
    pis: ['Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/TencentARC/MotionCtrl?style=social',
    img: 'https://mmlabassets.github.io/open-source/MotionCtrl.jpg',
    id: 'MotionCtrl',
  },
  {
    title: 'PersFormer: 3D Lane Detection via Perspective Transformer and the OpenLane Benchmark',
    id: 'PersFormer',
    description:
      'PersFormer adopts a unified 2D/3D anchor design and an auxiliary task to detect 2D/3D lanes; we release one of the first large-scale real-world 3D lane datasets, OpenLane.',
    tags: ["Bird's-Eye-View"],
    links: [
      {
        website: 'Blog',
        url: 'https://patrick-llgc.github.io/Learning-Deep-Learning/paper_notes/persformer.html',
      },
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/PersFormer_3DLane',
      },
      {
        website: 'Paper',
        url: 'https://link.springer.com/chapter/10.1007/978-3-031-19839-7_32',
      },
    ],
    keys: ['Project', '2022'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/PersFormer_3DLane?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_persformer.jpg',
  },
  {
    title:
      'ST-P3: End-to-End Vision-Based Autonomous Driving via Spatial-Temporal Feature Learning',
    id: 'ST-P3',
    description:
      'A spatial-temporal feature learning scheme towards a set of more representative features for perception, prediction and planning tasks simultaneously.',
    tags: ['End-to-End', 'Autonomous Driving'],
    links: [
      {
        website: 'Blog',
        url: 'https://zhuanlan.zhihu.com/p/544387122',
      },
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/st-p3',
      },
      {
        website: 'Paper',
        url: 'https://link.springer.com/chapter/10.1007/978-3-031-19839-7_31',
      },
    ],
    keys: ['Project', '2022'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/st-p3?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_stp3.jpg',
  },
  {
    title:
      'TCP: Trajectory-guided Control Prediction for End-to-end Autonomous Driving: A Simple yet Strong Baseline',
    id: 'TCP',
    description:
      'Take the initiative to explore the combination of controller based on a planned trajectory and perform control prediction.',
    tags: ['End-to-End', 'Autonomous Driving'],
    links: [
      {
        website: 'Blog',
        url: 'https://zhuanlan.zhihu.com/p/532665469',
      },
      {
        website: 'Github',
        url: 'https://github.com/opendrivelab/TCP',
      },
      {
        website: 'Paper',
        url: 'https://proceedings.neurips.cc/paper_files/paper/2022/hash/286a371d8a0a559281f682f8fbf89834-Abstract-Conference.html',
      },
    ],
    keys: ['Project', '2022'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/TCP?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_tcp.jpg',
  },
  {
    title:
      'AMOS: A Large-Scale Abdominal Multi-Organ Benchmark for Versatile Medical Image Segmentation',
    description: 'AMOS is a large-scale abdominal segmentation, and captioning dataset.',
    tags: ['Medical Image Segmentation', 'Dataset'],
    links: [
      {
        website: 'Page',
        url: 'https://era-ai-biomed.github.io/amos/',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2206.08023',
      },
      {
        website: 'Challenge',
        url: 'https://amos22.grand-challenge.org/',
      },
    ],
    keys: ['Dataset', '2022'],
    pis: ['Ping Luo'],
    githubstars: '',
    img: 'https://mmlabassets.github.io/open-source/AMOS.jpg',
    id: 'AMOS',
  },
  {
    title: 'OpenLane: Large-scale Realistic 3D Lane Dataset',
    description:
      'OpenLane is the first real-world and the largest scaled 3D lane dataset to date. Our dataset collects valuable contents from public perception dataset, providing lane and closest-in-path object(CIPO) annotations for 1000 segments. In short, OpenLane owns 200K frames and over 880K carefully annotated lanes.',
    tags: ['3D Lane Detection'],
    links: [
      {
        website: 'Github',
        url: 'https://github.com/OpenDriveLab/OpenLane',
      },
    ],
    keys: ['Dataset', '2022'],
    pis: ['Hongyang Li'],
    githubstars: 'https://img.shields.io/github/stars/OpenDriveLab/OpenLane?style=social',
    img: 'https://mmlabassets.github.io/open-source/odl_openlane.jpg',
    id: 'OpenLane',
  },
  {
    title:
      'Pyramid Vision Transformer: A Versatile Backbone for Dense Prediction without Convolutions',
    description:
      'Pyramid Vision Transformer (PVT) is a pure Transformer backbone for dense prediction tasks, such as object detection and semantic segmentation.',
    tags: ['Vision Transformer'],
    links: [
      {
        website: 'GitHub',
        url: 'https://github.com/whai362/PVT',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2102.12122',
      },
    ],
    keys: ['Project', '2021'],
    pis: ['Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/whai362/PVT?style=social',
    img: 'https://mmlabassets.github.io/open-source/PVT.jpg',
    id: 'Pyramid',
  },
  {
    title: 'SegFormer: Simple and Efficient Design for Semantic Segmentation with Transformers',
    description: 'SegFormer is a simple, efficient and powerful semantic segmentation method.',
    tags: ['Semantic Segmentation'],
    links: [
      {
        website: 'GitHub',
        url: 'https://github.com/NVlabs/SegFormer',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2105.15203',
      },
      {
        website: 'Video',
        url: 'https://www.youtube.com/watch?v=J0MoRQzZe8U&ab_channel=ZhidingYu',
      },
    ],
    keys: ['Project', '2021'],
    pis: ['Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/NVlabs/SegFormer?style=social',
    img: 'https://mmlabassets.github.io/open-source/SegFormer.jpg',
    id: 'SegFormer',
  },
  {
    title: 'Sparse R-CNN: End-to-End Object Detection with Learnable Proposals',
    description:
      'Sparse R-CNN is a purely sparse method for object detection in images, which demonstrates its accuracy, run-time and training convergence performance on par with the wellestablished detector.',
    tags: ['Semantic Segmentation'],
    links: [
      {
        website: 'GitHub',
        url: 'https://github.com/PeizeSun/SparseR-CNN',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2011.12450',
      },
    ],
    keys: ['Project', '2020'],
    pis: ['Ping Luo'],
    githubstars: 'https://img.shields.io/github/stars/PeizeSun/SparseR-CNN?style=social',
    img: 'https://mmlabassets.github.io/open-source/SparseRCNN.jpg',
    id: 'Sparse',
  },
  {
    title: "HoloPart: Generative 3D Part Amodal Segmentation",
    description: "HoloPart is a novel diffusion-based model that completes partial 3D part segments into full, semantically meaningful parts, even when occluded. It combines local attention for fine-grained geometry and global context attention for shape consistency.",
    tags: [
      "Generative Model",
      "3D Vision"
    ],
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
          website: "Github",
          url: "https://github.com/VAST-AI-Research/HoloPart",
      },
    ],
    keys: [
      "Project", "2025", "Highlight"
    ],
    pis: ["Xihui Liu"],
    githubstars: "https://img.shields.io/github/stars/VAST-AI-Research/HoloPart?style=social",
    img: "https://mmlabassets.github.io/open-source/holopart.mp4",
    id: 'HoloPart',
  },
  {
    title: "LLaVA-3D: A Simple yet Effective Pathway to Empowering LMMs with 3D Capabilities",
    description: "LLaVA-3D is a unified framework that efficiently adapts LLaVA for 3D scene understanding while maintaining 2D capabilities. It enhances 2D CLIP patches with 3D spatial context through position embeddings, enabling direct 3D spatial perception without external segmentors. The model achieves 3.5x faster convergence and state-of-the-art performance across 3D tasks while preserving 2D understanding capabilities.",
    tags: [
        "3D Vision"
    ],
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
            website: "Github",
            url: "https://github.com/ZCMax/LLaVA-3D",
        },
    ],
    keys :[
        "Project", "2024"
    ],
    pis: ["Xihui Liu"],
    githubstars: "https://img.shields.io/github/stars/ZCMax/LLaVA-3D?style=social",
    img: "https://mmlabassets.github.io/open-source/llava-3D.png",  
    id: 'LLaVA-3D',
  },
  {
    title: "SAMPart3D: Segment Any Part in 3D Objects",
    description: "A scalable zero-shot 3D part segmentation framework that segments 3D objects into semantic parts at multiple granularities without requiring text prompts, enabling applications in robotics, 3D generation, and editing.",
    tags: [
        "3D Vision"
    ],
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
            website: "Github",
            url: "https://github.com/Pointcept/SAMPart3D",
        },
    ],
    keys :[
        "Project", "2024", "Highlight"
    ],
    pis: ["Xihui Liu"],
    githubstars: "https://img.shields.io/github/stars/Pointcept/SAMPart3D?style=social",
    img: "https://mmlabassets.github.io/open-source/SAMPart3D.png",  
    id: 'SAMPart3D',
  },
  {
    title: "SAM3D: Segment Anything in 3D Scenes",
    description: "SAM3D is a zero-shot framework that leverages SAM to segment 3D point clouds by projecting and merging 2D masks from posed RGB images, achieving fine-grained 3D segmentation without training.",
    tags: [
        "3D Vision"
    ],
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2306.03908",
        },
        {
            website: "Project Page",
            url: "https://yhyang-myron.github.io/SAM3D-website/",
        },
        {
            website: "Github",
            url: "https://github.com/Pointcept/SAM3D",
        },
    ],
    keys :[
        "Project", "2023", "Highlight"
    ],
    pis: ["Xihui Liu"],
    githubstars: "https://img.shields.io/github/stars/Pointcept/SAM3D?style=social",
    img: "https://mmlabassets.github.io/open-source/SAM3D.png",  
    id: 'SAM3D',
  },
  {
    title: "DreamComposer: Controllable 3D Object Generation via Multi-View Conditions",
    description: "DreamComposer is a flexible framework that enhances view-aware diffusion models by injecting multi-view conditions, enabling high-fidelity novel view synthesis and controllable 3D object reconstruction.",
    tags: [
        "Generative Model",
        "3D Vision"
    ],
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2312.03611",
        },
        {
            website: "Project Page",
            url: "https://yhyang-myron.github.io/DreamComposer/",
        },
        {
            website: "Github",
            url: "https://github.com/yhyang-myron/DreamComposer",
        },
    ],
    keys :[
        "Project", "2023"
    ],
    pis: ["Xihui Liu"],
    githubstars: "https://img.shields.io/github/stars/yhyang-myron/DreamComposer?style=social",
    img: "https://mmlabassets.github.io/open-source/DreamComposer.mov",  
    id: 'DreamComposer',
  },
  {
    title: "T2I-CompBench: A Comprehensive Benchmark for Open-world Compositional Text-to-image Generation",
    description: "T2I-CompBench is a comprehensive benchmark with 6,000 compositional prompts across attribute binding, object relationships, and complex compositions. It includes novel evaluation metrics and GORS, a fine-tuning approach to enhance compositional generation capabilities.",
    tags: [
        "Generative Model",
        "Text-to-Image Generation"
    ],
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
            website: "Github",
            url: "https://github.com/Karine-Huang/T2I-CompBench",
        },
    ],
    keys :[
        "Project", "2023", "Highlight"
    ],
    pis: ["Xihui Liu"],
    githubstars: "https://img.shields.io/github/stars/Karine-Huang/T2I-CompBench?style=social",
    img: "https://mmlabassets.github.io/open-source/T2I-CompBench.png",  
    id: 'T2I-CompBench',
  },
  {
    title: "T2V-CompBench: A Comprehensive Benchmark for Compositional Text-to-video Generation",
    description: "T2V-CompBench is the first benchmark for evaluating compositional text-to-video generation, covering 7 categories with 1400 prompts across attribute binding, spatial relationships, motion binding, and more. It provides MLLM-based, detection-based, and tracking-based metrics validated by human evaluation.",
    tags: [
        "Generative Model",
        "Text-to-Video Generation"
    ],
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
            website: "Github",
            url: "https://github.com/KaiyueSun98/T2V-CompBench",
        },
    ],
    keys :[
        "Dataset", "2025"
    ],
    pis: ["Xihui Liu"],
    githubstars: "https://img.shields.io/github/stars/Karine-Huang/T2I-CompBench?style=social",
    img: "https://mmlabassets.github.io/open-source/T2I-CompBench.png",  
    id: 'T2V-CompBench',
  },
  {
    title: "DiM: Diffusion Mamba for Efficient High-Resolution Image Synthesis",
    description: "Diffusion Mamba (DiM) leverages State Space Models (SSM) to create an efficient diffusion model for high-resolution image synthesis, overcoming Transformer limitations through novel 2D adaptations and training strategies.",
    tags: [
        "Generative Model",
        "Image Generation"
    ],
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2405.14224",
        },
        {
            website: "Project Page",
            url: "https://tyshiwo1.github.io/DiM/",
        },
        {
            website: "Github",
            url: "https://github.com/tyshiwo1/DiM-DiffusionMamba",
        },
    ],
    keys :[
        "Project", "2024"
    ],
    pis: ["Xihui Liu"],
    githubstars: "https://img.shields.io/github/stars/tyshiwo1/DiM-DiffusionMamba?style=social",
    img: "https://mmlabassets.github.io/open-source/DiM.png",
    id: 'DiM',
  },
  {
    title: "GameFactory: Creating New Games with Generative Interactive Videos",
    description: "GameFactory is a framework for creating action-controlled, scene-generalizable game videos. It introduces the GF-Minecraft dataset for action controllability, supports autoregressive generation for unlimited-length videos, and leverages pre-trained video diffusion models for scene generalization. A multi-phase training strategy with a domain adapter decouples game style from action control, enabling open-domain, action-controllable game video generation.",
    tags: [
        "Generative Model",
        "Video Generation"
    ],
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
            website: "Github",
            url: "https://github.com/KwaiVGI/GameFactory",
        },
    ],
    keys :[
        "Project", "2024"
    ],
    pis: ["Xihui Liu"],
    githubstars: "https://img.shields.io/github/stars/KwaiVGI/GameFactory?style=social",
    img: "https://mmlabassets.github.io/open-source/gamefactory.mov",
    id: 'GameFactory',
  },
  {
    title: "Parallelized Autoregressive Visual Generation",
    description: "This paper proposes a simple yet effective approach for parallelized autoregressive visual generation that improves generation efficiency while preserving the advantages of autoregressive modeling. By generating distant tokens with weak dependencies in parallel and maintaining sequential generation for strongly dependent local tokens, the method achieves significant speedups (3.6x with comparable quality, up to 9.5x with minimal quality degradation) across image and video generation tasks without modifying the model architecture or tokenizer.",
    tags: [
        "Generative Model",
        "Image Generation"
    ],
    links: [
        {
            website: "Paper",
            url: "https://arxiv.org/abs/2412.15119",
        },
        {
            website: "Project Page",
            url: "https://yuqingwang1029.github.io/PAR-project/",
        },
        {
            website: "Github",
            url: "https://github.com/Epiphqny/PAR",
        },
    ],
    keys :[
        "Project", "2024"
    ],
    pis: ["Xihui Liu"],
    githubstars: "https://img.shields.io/github/stars/Epiphqny/PAR?style=social",
    img: "https://mmlabassets.github.io/open-source/PAR.png",
    id: 'PAR',
  },
  {
    title: "GigaTok: Scaling Visual Tokenizers to 3 Billion Parameters for Autoregressive Image Generation",
    description: "GigaTok addresses the challenge in autoregressive image generation where scaling visual tokenizers improves image reconstruction but degrades generation quality. It proposes semantic regularization to align tokenizer features with a pre-trained visual encoder, managing latent space complexity. Combined with practices like using 1D tokenizers, prioritizing decoder scaling, and employing entropy loss, GigaTok, scaled to 3 billion parameters, achieves state-of-the-art performance in image reconstruction, generation, and representation learning.",
    tags: [
        "Generative Model",
        "Image Generation"
    ],
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
            website: "Github",
            url: "https://github.com/SilentView/GigaTok",
        },
    ],
    keys :[
        "Project", "2025"
    ],
    pis: ["Xihui Liu"],
    githubstars: "https://img.shields.io/github/stars/SilentView/GigaTok?style=social",
    img: "https://mmlabassets.github.io/open-source/GigaTok.png",
    id: "GigaTok",
  },
  {
    title: "TokenBridge: Bridging Continuous and Discrete Tokens for Autoregressive Visual Generation",
    description: "TokenBridge is a novel framework for autoregressive visual generation that aims to combine the benefits of both discrete and continuous token representations. It addresses the dilemma where discrete tokens are easy to model but lose information, while continuous tokens preserve details but complicate modeling. TokenBridge achieves this by decoupling discretization from tokenizer training. It uses a post-training, dimension-wise quantization strategy to obtain discrete tokens from continuous representations and employs a lightweight autoregressive mechanism to predict them. Experiments show TokenBridge achieves comparable reconstruction and generation quality to continuous methods while using simpler categorical prediction, suggesting a promising direction for high-quality visual generation.",
    tags: [
        "Generative Model",
        "Image Generation"
    ],
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
            website: "Github",
            url: "https://github.com/yuqingwang1029/TokenBridge",
        },
    ],
    keys :[
        "Project", "2025"
    ],
    pis: ["Xihui Liu"],
    githubstars: "https://img.shields.io/github/stars/yuqingwang1029/TokenBridge?style=social",
    img: "https://mmlabassets.github.io/open-source/TokenBridge.png",
    id: "TokenBridge",
  },
  {
    title: "PUMA: Empowering Unified MLLM with Multi-granular Visual Generation",
    description: "PUMA is a framework that empowers Unified Multimodal Large Language Models (MLLMs) with multi-granular visual generation. It unifies these visual features as both inputs and outputs, enabling a single MLLM to adeptly handle a variety of image generation tasks with differing granularity requirements.",
    tags: [
        "Generative Model",
        "Image Generation"
    ],
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
            website: "Github",
            url: "https://github.com/rongyaofang/PUMA",
        },
    ],
    keys :[
        "Project", "2025"
    ],
    pis: ["Xihui Liu"],
    githubstars: "https://img.shields.io/github/stars/rongyaofang/PUMA?style=social",
    img: "https://mmlabassets.github.io/open-source/PUMA.jpg",
    id: "PUMA",
  },
];
