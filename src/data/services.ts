// Serviços de engenharia (compilados do site anterior) — conteúdo por idioma.
// Renderizado por ServicosPage.astro.
export interface Service {
  icon: string;
  title: string;
  intro: string;
  points: string[];
  note: string;
}

export const services: Record<string, Service[]> = {
  pt: [
    {
      icon: '📡', title: 'Dispositivos IoT',
      intro: 'Hardware e firmware ponta a ponta para dispositivos conectados.',
      points: ['Wireless MCU — ESP32, ESP8266', 'Wi‑Fi 2.4/5 GHz', 'Ethernet', '4G LTE'],
      note: 'Projeto de hardware e firmware para soluções IoT completas.',
    },
    {
      icon: '☁️', title: 'Servidor IoT',
      intro: 'Backend em nuvem para os seus dispositivos.',
      points: ['Realtime Database', 'Autenticação de usuários', 'Cloud Functions (serverless)', 'Cloud Messaging (notificações)'],
      note: 'Sincronização em tempo real e processamento de dados dos dispositivos.',
    },
    {
      icon: '📱', title: 'Aplicativo IoT',
      intro: 'Apps móveis para controlar e monitorar seus produtos.',
      points: ['Android', 'iOS'],
      note: 'Controle remoto, monitoramento em tempo real e dashboards personalizados.',
    },
    {
      icon: '🧩', title: 'Projetos de PCB',
      intro: 'Desenvolvimento completo de placas — do esquemático aos Gerbers.',
      points: [
        'Diagrama esquemático — requisitos, seleção de componentes, simulações',
        'Layout da placa — multilayer, alta frequência, impedância controlada',
        'Gerbers industriais — padrão IPC‑2581',
        'Lista de materiais (BOM) — cotações e alternativas',
        'Documentação técnica — montagem e validação',
      ],
      note: 'Autodesk Eagle e KiCad · padrões IPC‑7351 e Class 3 para aplicações críticas.',
    },
    {
      icon: '💾', title: 'Firmware C/C++',
      intro: 'Firmware embarcado nas principais plataformas.',
      points: ['Microchip — PIC, AVR, dsPIC', 'STMicroelectronics — STM32, STM8', 'Espressif — ESP32, ESP8266', 'Holtek — HT66, HT32', 'NXP — ARM Cortex‑M'],
      note: 'Otimização para baixo consumo, RTOS e comunicação sem fio (Wi‑Fi/BLE).',
    },
    {
      icon: '🧪', title: 'Gigas de teste para produção',
      intro: 'Bancadas para validar seus produtos em escala.',
      points: [
        'Gabinete industrial personalizado',
        'Cama de pinos (bed‑of‑nails)',
        'Interface para programador standalone',
        'Circuito de teste automatizado — continuidade, tensões e função',
        'Display de resultados (LEDs/TFT)',
      ],
      note: 'Sistemas completos com relatório de teste automatizado (PDF/Excel).',
    },
  ],
  en: [
    {
      icon: '📡', title: 'IoT Devices',
      intro: 'End-to-end hardware and firmware for connected devices.',
      points: ['Wireless MCU — ESP32, ESP8266', 'Wi‑Fi 2.4/5 GHz', 'Ethernet', '4G LTE'],
      note: 'Hardware and firmware design for complete IoT solutions.',
    },
    {
      icon: '☁️', title: 'IoT Server',
      intro: 'Cloud backend for your devices.',
      points: ['Realtime Database', 'User authentication', 'Cloud Functions (serverless)', 'Cloud Messaging (push notifications)'],
      note: 'Real-time sync and data processing for connected devices.',
    },
    {
      icon: '📱', title: 'IoT App',
      intro: 'Mobile apps to control and monitor your products.',
      points: ['Android', 'iOS'],
      note: 'Remote control, real-time monitoring, and custom dashboards.',
    },
    {
      icon: '🧩', title: 'PCB Design',
      intro: 'Complete board development — from schematic to Gerbers.',
      points: [
        'Schematic — requirements, component selection, simulations',
        'Board layout — multilayer, high frequency, controlled impedance',
        'Industrial Gerbers — IPC‑2581 standard',
        'Bill of materials (BOM) — quotes and alternatives',
        'Technical documentation — assembly and validation',
      ],
      note: 'Autodesk Eagle and KiCad · IPC‑7351 and Class 3 standards for critical applications.',
    },
    {
      icon: '💾', title: 'C/C++ Firmware',
      intro: 'Embedded firmware on the major platforms.',
      points: ['Microchip — PIC, AVR, dsPIC', 'STMicroelectronics — STM32, STM8', 'Espressif — ESP32, ESP8266', 'Holtek — HT66, HT32', 'NXP — ARM Cortex‑M'],
      note: 'Low-power optimization, RTOS, and wireless (Wi‑Fi/BLE).',
    },
    {
      icon: '🧪', title: 'Production Test Jigs',
      intro: 'Test fixtures to validate your products at scale.',
      points: [
        'Custom industrial enclosure',
        'Bed-of-nails fixture',
        'Standalone programmer interface',
        'Automated test circuit — continuity, voltages, function',
        'Results display (LEDs/TFT)',
      ],
      note: 'Complete systems with automated test reports (PDF/Excel).',
    },
  ],
  es: [
    {
      icon: '📡', title: 'Dispositivos IoT',
      intro: 'Hardware y firmware de punta a punta para dispositivos conectados.',
      points: ['Wireless MCU — ESP32, ESP8266', 'Wi‑Fi 2.4/5 GHz', 'Ethernet', '4G LTE'],
      note: 'Diseño de hardware y firmware para soluciones IoT completas.',
    },
    {
      icon: '☁️', title: 'Servidor IoT',
      intro: 'Backend en la nube para sus dispositivos.',
      points: ['Realtime Database', 'Autenticación de usuarios', 'Cloud Functions (serverless)', 'Cloud Messaging (notificaciones)'],
      note: 'Sincronización en tiempo real y procesamiento de datos de los dispositivos.',
    },
    {
      icon: '📱', title: 'Aplicación IoT',
      intro: 'Apps móviles para controlar y monitorear sus productos.',
      points: ['Android', 'iOS'],
      note: 'Control remoto, monitoreo en tiempo real y dashboards personalizados.',
    },
    {
      icon: '🧩', title: 'Diseño de PCB',
      intro: 'Desarrollo completo de placas — del esquemático a los Gerbers.',
      points: [
        'Esquemático — requisitos, selección de componentes, simulaciones',
        'Layout de la placa — multicapa, alta frecuencia, impedancia controlada',
        'Gerbers industriales — estándar IPC‑2581',
        'Lista de materiales (BOM) — cotizaciones y alternativas',
        'Documentación técnica — montaje y validación',
      ],
      note: 'Autodesk Eagle y KiCad · estándares IPC‑7351 y Class 3 para aplicaciones críticas.',
    },
    {
      icon: '💾', title: 'Firmware C/C++',
      intro: 'Firmware embebido en las principales plataformas.',
      points: ['Microchip — PIC, AVR, dsPIC', 'STMicroelectronics — STM32, STM8', 'Espressif — ESP32, ESP8266', 'Holtek — HT66, HT32', 'NXP — ARM Cortex‑M'],
      note: 'Optimización de bajo consumo, RTOS y comunicación inalámbrica (Wi‑Fi/BLE).',
    },
    {
      icon: '🧪', title: 'Bancos de prueba para producción',
      intro: 'Bancos de prueba para validar sus productos a escala.',
      points: [
        'Gabinete industrial personalizado',
        'Cama de pines (bed‑of‑nails)',
        'Interfaz para programador standalone',
        'Circuito de prueba automatizado — continuidad, tensiones y función',
        'Display de resultados (LEDs/TFT)',
      ],
      note: 'Sistemas completos con informe de prueba automatizado (PDF/Excel).',
    },
  ],
  zh: [
    {
      icon: '📡', title: 'IoT 设备',
      intro: '面向联网设备的端到端硬件与固件。',
      points: ['无线 MCU — ESP32、ESP8266', 'Wi‑Fi 2.4/5 GHz', '以太网', '4G LTE'],
      note: '为完整的 IoT 方案设计硬件与固件。',
    },
    {
      icon: '☁️', title: 'IoT 服务器',
      intro: '为您的设备提供云端后台。',
      points: ['实时数据库', '用户认证', 'Cloud Functions（无服务器）', 'Cloud Messaging（推送通知）'],
      note: '联网设备的实时同步与数据处理。',
    },
    {
      icon: '📱', title: 'IoT 应用',
      intro: '用于控制和监控产品的移动应用。',
      points: ['Android', 'iOS'],
      note: '远程控制、实时监控和自定义仪表盘。',
    },
    {
      icon: '🧩', title: 'PCB 设计',
      intro: '完整的电路板开发 —— 从原理图到 Gerber。',
      points: [
        '原理图 —— 需求分析、元件选型、仿真',
        'PCB 布局 —— 多层、高频、阻抗控制',
        '工业级 Gerber —— IPC‑2581 标准',
        '物料清单（BOM）—— 报价与替代料',
        '技术文档 —— 组装与验证',
      ],
      note: 'Autodesk Eagle 与 KiCad · 符合 IPC‑7351 与 Class 3 关键应用标准。',
    },
    {
      icon: '💾', title: 'C/C++ 固件',
      intro: '主流平台的嵌入式固件开发。',
      points: ['Microchip — PIC、AVR、dsPIC', 'STMicroelectronics — STM32、STM8', 'Espressif — ESP32、ESP8266', 'Holtek — HT66、HT32', 'NXP — ARM Cortex‑M'],
      note: '低功耗优化、RTOS 及无线通信（Wi‑Fi/BLE）。',
    },
    {
      icon: '🧪', title: '生产测试治具',
      intro: '用于规模化验证产品的测试治具。',
      points: [
        '定制工业机箱',
        '针床（bed‑of‑nails）',
        '独立编程器接口',
        '自动测试电路 —— 通断、电压与功能',
        '结果显示（LED/TFT）',
      ],
      note: '完整系统，自动生成测试报告（PDF/Excel）。',
    },
  ],
};
