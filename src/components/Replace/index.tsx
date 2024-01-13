'use client'
import React from 'react';

export function Replace() {

// https://www.modelscope.cn/inner/studio/gradio?backend_url=/api/v1/studio/damo/ReplaceAnything/gradio/&sdk_version=3.47.1
  return (
    <div style={{ width: '100%', height: '1300px', position: 'relative', zIndex: 1000 }}>
      <iframe id="modelscope" src="https://modelscope-replaceanything.hf.space/?__theme=light" height="1300px%" width="100%"></iframe>
    </div>
  );
}
