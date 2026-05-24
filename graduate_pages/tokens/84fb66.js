// ============================================================
// Graduation Letter Token Data
// File: tokens/674e5276979fcf76395d6fd805be4baa.js
// Access: https://YOUR_DOMAIN/?t=674e5276979fcf76395d6fd805be4baa
// ============================================================
// This file is loaded by index.html via sync XHR.
// Response 200 = token valid, eval sets window.__GRAD_DATA__.
// Response 404 = token invalid, user sees 404.html.
// ============================================================
//
// DATA SPEC:
//   recipient  : string   — 收件人姓名（信封显示 "XXX  敬启"）
//   photos     : array[3] — 宝丽来照片
//       .src    : string   — base64("data:image/jpeg;base64,...") 或 URL
//       .caption: string   — 照片下方手写备注
//       .ratio  : string   — 宽高比 "3/4" | "16/10" | "2/3"
//   greeting   : string   — 称呼（如 "Dear Class of 2026"）
//   body       : string[] — 信件正文段落数组（支持 Markdown 语法）
//   signoff    : string   — 落款
//   date       : string   — 日期显示
//   bgm        : string   — BGM 音频 URL（可选，留空则不显示播放按钮）
//
// ============================================================

window.__GRAD_DATA__ = {
  recipient: "王小明",

  photos: [
    {
      src: "",
      caption: "Summer 2023",
      ratio: "3/4"
    },
    {
      src: "",
      caption: "Graduation Day",
      ratio: "16/10"
    },
    {
      src: "",
      caption: "Goodbye",
      ratio: "2/3"
    }
  ],

  greeting: "Dear Class of 2026",

  body: [
    "那个迟到被抓的早晨、一起溜去小卖部的课间、考试前互相划重点的深夜——这些你以为早已忘记的瞬间，其实都悄悄藏在了记忆最柔软的地方。",
    "谢谢你们，让这段旅程如此闪亮。愿你们前程似锦，万事胜意。",
    "谢谢你们，让这段旅程如此闪亮。愿你们前程似锦，万事胜意。",
    "谢谢你们，让这段旅程如此闪亮。愿你们前程似锦，万事胜意。",
    "谢谢你们，让这段旅程如此闪亮。愿你们前程似锦，万事胜意。"
  ],

  signoff: "永远怀念的",
  date: "2026.06",

  bgm: ""
};
